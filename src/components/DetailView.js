import React from 'react';
import PropTypes from 'prop-types';

import ReactStars from 'react-stars'
import styles from '../../dist/styles.css'
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const DetailView = ({ selectedDoctor, updateSpecialty }) => {

  let categories = [];
  if (selectedDoctor.categories) {
    categories = selectedDoctor.categories.map((category) => (
      <Chip key={category.alias} label={category.title} onClick={updateSpecialty} variant="outlined" />
    ))
  }

  let address = "";
  if (selectedDoctor.location.display_address) {
    address = selectedDoctor.location.display_address.map((line) => (<p key={line}>{line}</p>));
  }

  return (
    <div className="detail">
      <div className="detail-body">
        <Card className="detail-card">
          <div className="detail-card-image">
            <CardMedia
              component="img"
              alt=""
              height="300"
              image={selectedDoctor.image_url}
            />
          </div>
            <CardContent className="detail-card-content">
            <div className="detail-header">
              <div className="detail-title">
                <h2>{selectedDoctor.name}</h2>
              </div>
              <div className="detail-rating">
                <ReactStars
                  count={5}
                  value={selectedDoctor.rating}
                  edit={false} />
                <span>{selectedDoctor.review_count} reviews</span>
              </div>
              <div className="detail-categories">
                {categories}
              </div>
            </div>
              <div className="detail-address">
                <span className="detail-label">Address: </span>
                {address}
              </div>
              <div className="detail-phone">
                <span className="detail-label">Phone: </span>{selectedDoctor.display_phone}
              </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

DetailView.propTypes = {
  selectedDoctor: PropTypes.object,
  updateSpecialty: PropTypes.func
}

export default DetailView