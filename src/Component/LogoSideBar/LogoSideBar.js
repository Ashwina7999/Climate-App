import React, { Component } from 'react';
import '../LogoSideBar/LogoSideBar.css';
import SearchBox from '../SearchBox/SearchBox';

class LogoSideBar extends Component {

  constructor(props) {
    super(props)
    this.state = { Airbox: false, MapBox: false, Profile: false, Alert: false, ForecastSearch: false, Historical: false }
  }

  openAirPollutionBox = () => {
    this.setState({ Airbox: true })
  }

  closeAirPollutionBox = () => {
    this.setState({ Airbox: false })
  }

  openMapBox = () => {
    this.setState({ MapBox: true })
  }

  closeMapBox = () => {
    this.setState({ MapBox: false })
  }

  openProfile = () => {
    this.setState({ Profile: true })
  }

  closeProfile = () => {
    this.setState({ Profile: false })
  }

  openAlert = () => {
    this.setState({ Alert: true })
  }

  closeAlert = () => {
    this.setState({ Alert: false })
  }

  openForecastSearch = () => {
    this.setState({ ForecastSearch: true })
  }

  closeForecastSearch = () => {
    this.setState({ ForecastSearch: false })
  }

  openHistorical = () => {
    this.setState({ Historical: true })
  }

  closeHistorical = () => {
    this.setState({ Historical: false })
  }

  Side = () => {
    return (
      <div id="sidebar" className={"sidebar"}>
        <p className={"closeSliderBox"} onClick={this.closeSideBar}>&times;</p>
        <br></br><br></br>
        <p onClick={this.openAirPollutionBox}>Air Pollution</p>
        <p onClick={this.openForecastSearch}>Forecast</p>
        <p onClick={this.openMapBox}>Maps</p>
        <p onClick={this.openAlert}>City Alerts</p>
        <p onClick={this.openHistorical}>Historical Data</p>
        <p onClick={this.openProfile}>Profile</p>
        <p onClick={() => this.props.loginCheck('Logout')}>Logout</p>
      </div>
    )
  }

  OpenSideBar = () => {
    document.getElementById("sidebar").style.width = "240px";
  }

  closeSideBar = () => {
    document.getElementById("sidebar").style.width = "0px";
  }

  render() {
    return (
      <div>
        {this.Side()}
        <div className={"logos"}>
          <h1>Climate</h1>
          <i className={"fa"} onClick={this.OpenSideBar}>&#xf0c9;</i>
          <hr className={"hr-marker"}></hr>
        </div>
        <br></br>
        <SearchBox
          Airbox={this.state.Airbox}
          closeAirPollutionBox={this.closeAirPollutionBox}

          ForecastSearch={this.state.ForecastSearch}
          closeForecastSearch={this.closeForecastSearch}

          MapBox={this.state.MapBox}
          closeMapBox={this.closeMapBox}

          Alert={this.state.Alert}
          closeAlert={this.closeAlert}

          Historical={this.state.Historical}
          closeHistorical={this.closeHistorical}

          Profile={this.state.Profile}
          closeProfile={this.closeProfile} />
      </div>
    )
  }
}

export default LogoSideBar
