import React, { useEffect, useState } from 'react';
import './App.css';
import Filters from './Filters';
import Accommodation from './Accommodation';
import accommodations from './accommodation.json';
import accommodationsAvailability from './accommodation_availability.json';

function App() {

  const [accommodationType, setAccommodationType] = useState('Apartment');
  
  useEffect(() => {
    console.log(accommodationType)
  })

  return (
    <div className="page-container">
      <Filters setAccom={setAccommodationType} />
      <div className="accom-container">
        <Accommodation 
        data1={accommodations.accommodations} 
        data2={accommodationsAvailability.rooms} 
        accom={accommodationType} />
      </div>
    </div>
  );
}

export default App;
