import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './ExpandableDateRangePicker.css';
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";


export const ExpandableDateRangePicker = () => {
  const [expanded, setExpanded] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const minDate = moment().subtract(100, "d");
  const maxDate = moment();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className={`expandable-picker ${expanded ? 'expanded' : ''}`}>
      <div className="header" onClick={toggleExpanded}>
        <div className="date-range">
          {startDate && endDate ? (
            <span>
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </span>
          ) : (
            <span>Any date</span>
          )}
        </div>
        <div className="icon">{expanded ? '▲' : '▼'}</div>
      </div>
      {expanded && (
        <div className="picker-container">
          <div className="picker">
            <label>Start Date:</label>
            <DatePicker
              onChange={handleStartDateChange}
              dateFormat="yyyy-MM-dd"
              defaultDate={new Date()}
              minDate={minDate}
              maxDate={maxDate}
              mode="date"
            />         
          </div>
          <div className="picker">
            <label>End Date:</label>
            <DatePicker
              onChange={handleEndDateChange}
              dateFormat="yyyy-MM-dd"
              defaultDate={new Date()}
              minDate={minDate}
              maxDate={maxDate}
              mode="date"
            />          
          </div>
        </div>
      )}
    </div>
  );
};

