import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {

const [city, setCity] = useState('');
const [country, setCountry] = useState('');

    function getWeatherData(e) {
        e.preventDefault()
        props.getWeather(city, country);
    }
    
    return (
        <div className="container">
            {props.error ? error(): null}
            <form onSubmit={getWeatherData}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off"
                        placeholder="Type a City"
                        onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Type a Country"
                        onChange={e => setCountry(e.target.value)}/>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button onClick={getWeatherData}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;

function error() {
    return (
      <div className="alert">
        <p>Please Enter a City and a Country</p>
        <p>Example: Verona, Ita</p>
      </div>
    )
  }