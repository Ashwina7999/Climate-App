import React, { Component } from 'react';
import './SearchBox.css';
import View from '../MainView/View';
import AirPollution from '../AirPollution/AirPollution';
import MapBoxLarge from '../MapBox/MapBoxLarge';
import Profile from '../Profile/Profile';
import Alert from '../Alert/Alert';
import Historical from '../Historical/Historical';
import ForecastSearch from '../Forecast/ForecastSearch';

class SearchBox extends Component {

  constructor(props) {
    super(props)
    this.state = { city: 'Coimbatore', users: null, foreData: null, airQuality: null, errorMsg: 'Please Enter valid City Name' }
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=d83f650ab69024255a3ea1f819ddb171`)
      .then(response => {
        if (!response.ok) {
          alert(this.state.errorMsg)
          return null
        }
        return response.json();
      })
      .then(user => {
        user !== null && this.setState({ users: user })
        if (user !== null) {

          fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${user.coord.lat}&lon=${user.coord.lon}&appid=d83f650ab69024255a3ea1f819ddb171`)
            .then(response => response.json())
            .then(data => {
              this.setState({ airQuality: data })
            })
      
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${user.coord.lat}&lon=${user.coord.lon}&units=metric&exclude=current,hourly,minutely&appid=d83f650ab69024255a3ea1f819ddb171`)
            .then(response => response.json())
            .then(data => {
              this.setState({ foreData: data })
            })
        }
      })
  }

  assignSearch = async (event) => {
    if (event.charCode === 13) {
      this.setState({ city: event.target.value }, () => this.componentDidMount())
      event.preventDefault();
    }
  }

  importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item) });
    return images
  }

  render() {

    const { users, foreData, airQuality } = this.state
    const icons = this.importAll(require.context('/src/Assets/Icons', false, /\.(png|jpe?g|svg)$/))
    const background = this.importAll(require.context('/src/Assets/Background', false, /\.(png|jpe?g|svg)$/))

    return (
      <div>
        <form className={"search-form"}>
          <input type="text" placeholder="Search your City" name="search-field" onKeyPress={this.assignSearch}></input>
          <button onClick={this.assignSearch}><i className="fas fa-map-marker-alt"></i> </button>
        </form>
        <hr className={"hr-marker"}></hr>
        {(users !== null && foreData !== null && airQuality !== null) && <View weather={users} foreData={foreData} icons={icons} background={background} />}
        {this.props.Airbox && <AirPollution airQuality={airQuality} weather={users} icons={icons} closeAirPollutionBox={this.props.closeAirPollutionBox} />}
        {this.props.MapBox && <MapBoxLarge weather={users} closeMapBox={this.props.closeMapBox} />}
        {this.props.Profile && <Profile name='Profile Page' closeProfile={this.props.closeProfile} />}
        {this.props.Alert && <Alert closeAlert={this.props.closeAlert} />}
        {this.props.ForecastSearch && <ForecastSearch icons={icons} foreData={foreData} closeForecastSearch={this.props.closeForecastSearch} />}
        {this.props.Historical && <Historical icons={icons} closeHistorical={this.props.closeHistorical} />}
      </div>
    )
  }
}

export default SearchBox
