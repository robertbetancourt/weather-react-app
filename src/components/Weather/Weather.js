import React from 'react';
import './Weather.css';
import Others from '../Others';
// icon
import sun from "../../assets/sun.png";
import clouds from "../../assets/clouds.png";
import sunCloud from "../../assets/sunCloud.png";
import rain from "../../assets/rain.png";
import snowflake from "../../assets/snowflake.png";
import storm from "../../assets/storm.png";
import rainSun from "../../assets/rainSun.png";


const Weather = (props) => {
    const { country, city, tempMax, tempMin, temp, description, weatherId, windSpeed, humidity, pressure} = props.data
    const data = {windSpeed, humidity, pressure}
    return (
        <div className="container text-color"> 
            <div className="cards text-center pt-4">
                <h2>{city}, {country}</h2>
                <h5 className="py-4">
                    <img className="display-1" src={iconReturn(weatherId)} alt=""/>
                </h5>
                <h4 className="py-3">{upperFirst(description)}</h4>
                <h1 className="py-2">{temp}&deg;c</h1>
                {minmaxTemp(tempMin, tempMax)}
                <Others data= {data}/>
            </div>
        </div>
    )
};

function minmaxTemp(min, max) {
    return (
        <h3>
            <span className="px-4">{min}&deg;c</span>
            <span className="px-4">{max}&deg;c</span>
        </h3>
    );
};

function upperFirst(upper){
    return upper.charAt(0).toUpperCase() + upper.slice(1);
};

function iconReturn(id) {
    console.log('este', id);
    let result = undefined
    switch (true) {
        case id >= 200 && id <= 232:
            result = storm
            break;
        case id >= 300 && id <= 321:
            result = rain
            break;
        case id >= 500 && id <= 531:
            result = rainSun
            break;
        case id >= 600 && id <=622:
            result = snowflake
            break;
        case id >= 701 && id <= 781:
            result = sunCloud
            break;
        case id === 800:
            result = sun
            break;
        case id >= 801 && id <= 804:
            result = clouds
            break;
        default:
            result = sun
    }
    console.log('ends', id, result);
    
    return result
}

export default Weather;