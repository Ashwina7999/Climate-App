import React from 'react'
import '../AirPollution/AirPollution.css';
import Rows from '../Rows';

function AirPollution({ weather, icons, airQuality, closeAirPollutionBox }) {
    let addDetails = {
        0: {
            id: 'container', class: '', content: {
                0: {
                    id: '', class: 'column-4', content: {
                        0: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['preci.png']}> <b>AQI</b></p> <p style='margin-top: -5px'>${airQuality.list[0].main.aqi}</p>` },
                                1: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['dew.png']}> <b>CO</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.co} </p>` }
                            }
                        },
                        1: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['moldLevel.png']}> <b>Mold Level</b></p> <p style='margin-top: -5px'>null</p>` },
                                1: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['no2.png']}> <b>NO2</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.no2}</p>` }
                            }
                        }
                    }
                },
                2: {
                    id: '', class: 'column-4', content: {
                        0: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['o3.png']}> <b>O3</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.o3} </p>` },
                                1: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['so2.png']}> <b>SO2</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.so2} </p>` }
                            }
                        },
                        1: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['pm10.jpg']}> <b>Pm 10</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.pm10}</p>` },
                                1: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['pm25.png']}> <b>Pm 25</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.pm2_5}</p>` }
                            }
                        }
                    }
                },
            }
        },
        1: { id: '', class: '', content: `<br><br>` },
        2: {
            id: 'container', class: '', content: {
                0: {
                    id: '', class: 'column-4', content: {
                        0: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['grass.png']}> <b>Pollen Level Grass</b></p> <p style='margin-top: -5px'>null </p>` },
                                1: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['weed.png']}> <b>Pollen Level Weed</b></p> <p style='margin-top: -5px'>null </p>` }
                            }
                        },
                        1: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['stateCode.png']}> <b>State Code</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.nh3} </p>` },
                                1: { id: '', class: 'column-1', content: `` }
                            }
                        }
                    }
                },
                1: {
                    id: '', class: 'column-4', content: {
                        0: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['tree.png']}> <b>Pollen Level Tree</b></p> <p style='margin-top: -5px'>null </p>` },
                                1: { id: '', class: 'column-1', content: `<p class="air-details"> <img src=${icons['predom.png']}> <b>Predominant Pollen Type</b></p> <p style='margin-top: -5px'>${airQuality.list[0].components.no} </p>` }
                            }
                        },
                        1: {
                            id: 'container1', class: '', content: {
                                0: { id: '', class: 'column-1', content: `` },
                                1: { id: '', class: 'column-1', content: `` }
                            }
                        }
                    }
                },
            }
        }
    }

    return (
        <div>
            <div id="airbox" className="airbox">
                <p className='air-pollution-close' onClick={closeAirPollutionBox}>&times;</p>
                <div className="air_additional">
                    <h2 className='air-heading'>Air Pollution Data</h2>
                    <br></br><br></br>
                    <Rows api={addDetails} />
                </div>
            </div>
        </div>
    )
}

export default AirPollution
