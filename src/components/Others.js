import React from 'react'

import wind from "../assets/wind.png";
import water from "../assets/water.png";
import gauge from "../assets/gauge.png";

export default function Others(props) {
    const { windSpeed, humidity, pressure } = props.data
    return (
        <div className="others row">
            <div className="col-4">
                <h5 className="text-center">Wind</h5>
                <h6 className="text-center">
                    {windSpeed} km/h
                    <img src={wind} alt=""/>
                </h6>
            </div>
            <div className="col-4">
                <h5 className="text-center ">Humidity</h5>
                <h6 className="text-center">
                    {humidity}%
                    <img src={water} alt=""/>
                </h6>
            </div>
            <div className="col-4">
                <h5 className="text-center ">Pressure</h5>
                <h6 className="text-center">
                    {pressure} hPa
                    <img src={gauge} alt=""/>
                </h6>
            </div>
        </div>
    )
}
