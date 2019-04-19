import React from 'react';
import PropTypes from 'prop-types';

import ListView from './ListView';
import DetailView from './DetailView'
import styles from '../../dist/styles.css'
import Divider from '@material-ui/core/Divider';

const Main = ({ doctorList, 
              selectedDoctor, 
              setSelectedDoctor, 
              updateSpecialty 
            }) => {
    if (!selectedDoctor) {
      return (
        <div className="main">
          <ListView 
            list={doctorList} 
            setSelectedDoctor={setSelectedDoctor}
            updateSpecialty={updateSpecialty} />
        </div>
      )
    } 
    return (
      <div className="main">
        <DetailView 
          selectedDoctor={selectedDoctor} 
          updateSpecialty={updateSpecialty} />
        <Divider />
        <div className="main-devider">
          <h1>Similar doctors </h1>
        </div>
        <ListView 
          list={doctorList} 
          setSelectedDoctor={setSelectedDoctor}
          updateSpecialty={updateSpecialty} />
      </div>
    )
}
  
Main.propTypes = {
  doctorList: PropTypes.array, 
  selectedDoctor: PropTypes.object, 
  setSelectedDoctor: PropTypes.func, 
  updateSpecialty: PropTypes.func
}

export default Main

          
          