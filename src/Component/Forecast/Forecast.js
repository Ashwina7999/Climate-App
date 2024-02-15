import React, { Component } from 'react';
import './Forecast.css';
import Additional from '../AdditionalDetails/Additional';
import ForecastBox from './ForecastBox';

class Forecast extends Component {

    constructor(props) {
        super(props)
        this.state = { boxData: null }
    }

    openForecastBox = (event) => {
        this.setState({ boxData: event })
    }

    closeForecastBox = () => {
        this.setState({ boxData: null })
    }

    foreBuilder = (d) => {
        let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
        let dates = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
            "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
            "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
        let day = days[d.getDay()];
        let date = dates[d.getDate()];
        return `${day} ${date}`;
    }

    render() {

        const { icons, weather, foreData } = this.props;

        return (
            <div>
                <div id='container' className='forecast-container'>
                    {foreData.daily.map((data, index) =>
                        (index > 0 && index < 7) ?
                            (<div id='' className='column-5' key={index}>
                                <div id='container1' className=''>
                                    <div id='' className='column-5'>
                                        <div id='' className='forecast-box'>
                                            <p className='' onClick={() => this.openForecastBox(data)}>
                                                {this.foreBuilder(new Date(data.dt * 1000))}
                                                <br></br>
                                                <img src={icons[data.weather[0].icon + '.png']} alt=''></img>
                                                <br></br>
                                                {Math.round(data.temp.max)}°c
                                                <br></br>
                                                {Math.round(data.temp.min)}°c
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>) : null
                    )
                    }
                </div>
                {(this.state.boxData !== null) && <ForecastBox icons={icons} boxData={this.state.boxData} closeForecastBox={this.closeForecastBox} />}
                <br></br><br></br>
                <Additional icons={icons} weather={weather} />
            </div>
        )
    }
}

export default Forecast
