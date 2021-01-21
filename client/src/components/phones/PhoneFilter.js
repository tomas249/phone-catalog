import './PhoneFilter.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPhonesFilter } from '../../redux/actions/phoneActions';

function PhoneFilter({ setPhonesFilter, filteredValue }) {
  const [searchValue, setSearchValue] = useState(filteredValue);

  function handleChange(event) {
    const value = event.target.value;
    setSearchValue(value);
    setPhonesFilter(value);
  }

  return (
    <div className="filter-container">
      <input
        placeholder="Search phone"
        className="filter-inputField"
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
      <span className="filter-text-sep">or</span>
      <Link to="/phones/add">
        <button className="filter-add-btn">ADD</button>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filteredValue: state.phones.filteredValue,
  };
}

const mapDispatchToProps = { setPhonesFilter };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneFilter);
