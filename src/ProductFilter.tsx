import React, { useState } from 'react';
import { ExpandableDateRangePicker } from './ExpandableDateRangePicker/ExpandableDateRangePicker';
import './ProductFilter.css';


export const ProductFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    testDate: '',
    PN: '',
    testType: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleFilterClick = () => {
    onFilter(filters);
  };

  return (
    <div className="product-filter">
      <input
        type="text"
        name="testDate"
        placeholder="Filter by Test Date"
        value={filters.testDate}
        onChange={handleInputChange}
      />
        <ExpandableDateRangePicker/>
      <input
        type="text"
        name="testType"
        placeholder="Filter by Test Type"
        value={filters.testType}
        onChange={handleInputChange}
      />
      <button onClick={handleFilterClick} className="filter-button">Apply Filters</button>
    </div>
  );
};

