import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../dist/styles.css'
import Filter from './Filter';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const Header = ({ 
  specialtyList,
  getDoctorsBySpecialty,
  updateArea,
  getDoctorsByArea,
  rating,
  getDoctorsByRating
}) => (
  <div className="header">
        <AppBar className="filter-form" position="static">
          <Toolbar>
          <Filter
            specialtyList={specialtyList}
            getDoctorsBySpecialty={getDoctorsBySpecialty}
            updateArea={updateArea}
            getDoctorsByArea={getDoctorsByArea}
            rating={rating}
            getDoctorsByRating={getDoctorsByRating} />
          </Toolbar>
        </AppBar>
  </div>
)
            
Header.propTypes = {
  specialtyList: PropTypes.array,
  getDoctorsBySpecialty: PropTypes.func,
  updateArea: PropTypes.func,
  getDoctorsByArea: PropTypes.func,
  rating: PropTypes.number,
  getDoctorsByRating: PropTypes.func,
}

export default Header