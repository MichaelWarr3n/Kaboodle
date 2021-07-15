import React from 'react';
import './Accommodation.css';


function Accommodation({ data1, data2, accom }) {

  let sortedData = [];

  const dataSort = () => {
    sortedData.push(data1.map(x => (
      accom === x.type.name &&
      <div className="accom-row" key={x.id}>
        <div className="accom-data">
          <h1>{x.name}</h1>
          <span dangerouslySetInnerHTML={{__html: x.description}}></span>
          <p>Accommodation Type: {x.type.name}</p>
          <h4>Facilities -</h4>
          <ul>
            {x.facilities.map(y => (
              <li>{y.label}</li>
            ))}
          </ul>
        </div>
          {data2.map(z => (
            x.rooms.map(room => (
              room.id === z.id &&
              <div className="room-data">
                <h4>Room Available:</h4>
                <p><span className="bold">Name:</span> {room.name}</p>
                <p><span className="bold">Type:</span> {room.type}</p>
                <p><span className="bold">Minimum Occupancy:</span> {room.min_occupancy}</p>
                <p><span className="bold">Maximum Occupancy:</span> {room.max_occupancy}</p>
                <p><span className="bold">Price:</span> {room.price.price}</p>
                <p><span className="bold">Available</span> - {z.available} / <span className="bold">Total</span> - {z.total}</p>
                <button>Book Now!</button>
              </div>
            ))
          ))}
      </div>
    )))

  };

  dataSort();  

  return sortedData;
}


export default Accommodation;