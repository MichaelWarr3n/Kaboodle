import React from 'react';
import './Filters.css';

function Filters({ setAccom }) {

  const changeAccom = e => {
    setAccom(e.target.value);
  }


    return (
      <div className="filters-container">
        <form>
          <label for="accommodation-type">Choose accommodation type:</label>
          <select id="accommodation-type" name="accommodation-type" onChange={changeAccom}>
            <option value="Apartment">Apartment</option>
            <option value="Hotel">Hotel</option>
            <option value="Guest House">Guest house</option>
          </select>
        </form>
      </div>
    );
  }

  export default Filters;