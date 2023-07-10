import React, { useState } from "react";
import data from './data.js';
import Tours from "./components/tours";
const App = () => {
  const [tour,setTour] = useState(data);
  console.log(tour);
  function removeTour(id){
    const newTour = tour.filter(t => t.id !== id)
    setTour(newTour);
  }
  function refreshHandler(){
    setTour(data);
  }
  if(tour.length === 0)
  {
    return(
      <div className="refresh">
        <h2 className="refresh-title">No more tours left!</h2>
        <button onClick={refreshHandler} className="refresh-button">
          Refresh
        </button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tour} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
