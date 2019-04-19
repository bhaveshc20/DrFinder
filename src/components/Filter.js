import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

import ReactStars from 'react-stars';

import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const Filter = (props) => {
  const { classes } = props;

  const specialtyDefaultOption = {
    id: 0,
    value: "doctor",
    name: "All doctors"
  }

  const ratingDefaultOption = {
    id: 0,
    value: "",
    name: "All ratings"
  }

  return (
    <div>
      <form className="filter-form" onSubmit={props.getDoctorsByArea}>
        <div>
          <Dropdown
            options={props.specialtyList}
            defaultOption={specialtyDefaultOption}
            filter="Specialty or Doctor"
            action={props.getDoctorsBySpecialty} />
        </div>
        <div className="form-input">
          <span>near</span>
          <InputBase className="form-label" placeholder="Address, city, state" variant="outlined" onChange={props.updateArea} />
        </div>
        <div >
          <label className="form-label">By Rating</label>
          <ReactStars
            count={5}
            size={18}
            value={props.rating}
            half={false}
            onChange={props.getDoctorsByRating} />
        </div>
      </form>
    </div>
  )
}

Filter.propTypes = {
  specialtyList: PropTypes.array,
  getDoctorsBySpecialty: PropTypes.func,
  updateArea: PropTypes.func,
  getDoctorsByArea: PropTypes.func,
  rating: PropTypes.number,
  getDoctorsByRating: PropTypes.func,
}

export default Filter

