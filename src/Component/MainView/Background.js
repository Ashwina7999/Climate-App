import React from "react";

const Background = ({ iconcode, description, background }) => {

    let bgImg = '';

    if (iconcode === "01d" || iconcode === "01n") {
        bgImg = "clearSky"
    }
    else if (iconcode === "02d" || iconcode === "02n") {
        bgImg = "fewClouds"
    }
    else if (iconcode === "03d" || iconcode === "03n") {
        bgImg = "scatteredClouds"
    }
    else if (iconcode === "04d" || iconcode === "04n") {
        if (description.includes("broken")) {
            bgImg = "brokenClouds"
        }
        else if (description.includes("overcast")) {
            bgImg = "overcastClouds"
        }
    }
    else if (iconcode === "09d" || iconcode === "09n" || iconcode === "10d" || iconcode === "10n") {
        if (description.includes("heavy") || description.includes("extreme")) {
            bgImg = "rain1"
        }
        else {
            bgImg = "rain2"
        }
    }
    else if (iconcode === "11d" || iconcode === "11n") {
        bgImg = "thunderstorm"
    }
    else if (iconcode === "13d" || iconcode === "13n") {
        bgImg = "snow"
    }
    else if (iconcode === "50d" || iconcode === "50n") {
        if (description.includes("mist")) {
            bgImg = "mist"
        }
        else if (description.includes("haze")) {
            bgImg = "haze"
        }
        else {
            bgImg = "mistHaze"
        }
    }
    document.body.style.backgroundImage = `url(${background[bgImg + '.jpg']})`
    return <></>
}

export default Background