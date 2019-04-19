import React from 'react';
import PropTypes from 'prop-types';

import ReactStars from 'react-stars'
import styles from '../../dist/styles.css'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

const ListItem = ({ info, updateSpecialty, setSelectedDoctor }) => {
  let categories = [];
  if (info.categories) {
    categories = info.categories.map((category) => (
    <Chip key={category.alias} label={category.title} onClick={updateSpecialty} variant="outlined" />
    ))
  }

  let address = "";
  if (info.location.display_address) {
    address = info.location.display_address.map((line) => (<p key={line}>{line}</p>));
  }

  return (
    <Card className="list-item">
      <div className="list-photo-box">
        <img className="list-avatar" alt={info.name} src={info.image_url} />
      </div>
      <div className="list-story">
        <div className="list-story-half">
          <h3 className="list-title" onClick={setSelectedDoctor}>{info.name}</h3>
          <div className="list-rating">
            <ReactStars count={5} value={info.rating} edit={false} />
            <span>{info.review_count} reviews</span>
          </div>
          <div className="list-category">{categories}</div>
        </div>
        <div className="list-story-half">
          <address className="list-address">
          <p className="address-header">Address:</p>
            {address}
          </address>
        </div>
      </div>
    </Card>
  )
}

ListItem.propTypes = {
  info: PropTypes.object,
  updateSpecialty: PropTypes.func,
  setSelectedDoctor: PropTypes.func
}

export default ListItem