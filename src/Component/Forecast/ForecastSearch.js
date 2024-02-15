import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FutureCard from "../FutureCard/FutureCard";

function ForecastSearch({ closeForecastSearch, icons, foreData }) {

  const [startDate, setStartDate] = useState(new Date());
  const [match, setMatch] = useState(false);

  const iterateDate = () => {
    foreData.daily.map(checkDate => {

      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      let leftMatch = startDate.toLocaleTimeString('en-us', options).replace(/,/g, "").substring(0, 16);
      var rightMatch = new Date(checkDate.dt * 1000).toLocaleTimeString('en-us', options).replace(/,/g, "").substring(0, 16);

      if (leftMatch === rightMatch) {
        setMatch(checkDate)
      }
      return null
    })
  }

  return (
    <div>
      <div id="ForecastSearchBox" className="ForecastSearchBox">
        <p className='ForecastSearch-close' onClick={closeForecastSearch} >&times;</p>
        <center>
          <h2 className="forecast-heading">Forecasting</h2>
          <p className="forecast-paragraph">Note: The Forecating is available only for 8 days from the current date</p>
          <DatePicker selected={startDate} minDate={new Date()} onChange={(date) => setStartDate(date)} />
          <i className="fas fa-calendar"></i>
          <div id="submit" className="">
            <button className="forecase-search-btn danger" onClick={iterateDate}>Submit</button>
          </div>
          {match && <FutureCard icons={icons} boxData={match} />}
        </center>
      </div>
    </div>
  )
}

export default ForecastSearch
