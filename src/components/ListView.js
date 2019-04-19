import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const ListView = ({ list, updateSpecialty, setSelectedDoctor }) => {

  let items = list.map(item => (<ListItem
    key={item.id}
    info={item}
    updateSpecialty={updateSpecialty}
    setSelectedDoctor={setSelectedDoctor} />));

  return (
    <div className="list">
      {items}
    </div>
  )
}

ListView.propTypes = {
  list: PropTypes.array,
  setSelectedDoctor: PropTypes.func,
  updateSpecialty: PropTypes.func
}

export default ListView