import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FutureCard from "../FutureCard/FutureCard";
import './Historical.css';

function Historical({ closeHistorical, icons, foreData }) {
  const [startDate, setStartDate] = useState(new Date());
  const [match, setMatch] = useState(false);

  const iterateDate = () => {
    setMatch('')
  }
  return (
    <div>
      <div id="ForecastSearchBox" className="ForecastSearchBox">
        <p className='ForecastSearch-close' onClick={closeHistorical} >&times;</p>
        <center>
          <h2 className="historical-heading ">Historical</h2>
          <p className="historical-pragraph">Note: The Historical is available only for past 5 days from the current date</p>

          <DatePicker selected={startDate} maxDate={new Date()} onChange={(date) => setStartDate(date)} />

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

export default Historical
