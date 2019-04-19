const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const https = require('https');
const querystring = require('querystring');

const yelp = require('yelp-fusion');
const client = yelp.client('6MEtyKfrFNt008Lk_QPVvFWpM_iE7DBzJJypqbce7iOm7te8Y56zKYsMi32Ki2KqfPFSPLa_U9lT6NiSwNBmcHonCLw4TVb4JuU-UJgMWV1dnQtsxiMpc_HSqMi4XHYx');

const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist'));

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

let specialties = [];
(() => {
  const categories = require('./dist/categories.json');
  let count = 0;
  categories.forEach((category) => {
    if (category.parents && category.parents.indexOf("physicians") > -1) {
      specialties.push({ id: count++, name: category.title })
    }
  })
})();

// API Routes
app.get('/api/specialtyList', (req, res) => {
  res.json(specialties);
});

app.get('/api/findDoctors/:specialtyName/:area/:rating', (req, res) => {
  const searchRequest = {
    "term": req.params.specialtyName,
    "location": req.params.area
  };
  console.log(searchRequest);
  client.search(searchRequest).then(response => {
    const allDoctors = response.jsonBody.businesses.filter((doctor) => (doctor.rating >= req.params.rating));
    res.json(allDoctors);
  });
});

app.get('*', (req, res) => {
  console.log("404")
  res.status(404).send('Not Found');
});

app.listen(port);
console.log(`API running at localhost:${port}`);
