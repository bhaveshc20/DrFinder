import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const Dropdown = ({ options, defaultOption, filter, action }) => {
  let slectionOptions = options.map((option) => (<MenuItem key={option.id}
    id={options.id}
    value={option.name}>{option.name}</MenuItem>));

  return (
    <div className="dropdown">
      <span>I'm looking for</span>
      <FormControl variant="outlined" className="dropdown-filter">
        <InputLabel htmlFor={filter}>{filter}</InputLabel>
        <Select className="filter-item" onChange={action} input={
          <OutlinedInput
            name={filter}
            id={filter}
          />
        }
        >
          <MenuItem id={defaultOption.id} value={defaultOption.value}>{defaultOption.name}</MenuItem>
          <MenuItem disabled>--</MenuItem>
          {slectionOptions}
        </Select>
      </FormControl>
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  filter: PropTypes.string,
  action: PropTypes.func
}

export default Dropdown