import React from 'react';
import Weather from './components/Weather/Weather';
import Form from './components/Form/Form';
const api_Key = '0566716499bcaf0db7dc2121d6ca8812';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      weatherId: '',
      country: '',
      description: '',
      windSpeed: '',
      tempMax: '',
      tempMin: '',
      pressure: '',
      humidity: '',
      temp: '',
      icon: '',
      error: false
    }
    this.getWeather();
  }

  convertCelsius(temp){
    let celsius = Math.floor(temp - 273.15)
    return celsius;
  };

  convertWind(speed) {
    let kmHours = Math.floor( speed * 1.609)
    return kmHours;
  };

  getWeather = async(city = 'Verona', country = 'it') => {

      if (city && country) {
        const api_Call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_Key}`);
        this.setState({
          error: false
        })
        
        const res = await api_Call.json();
        console.log(res, 'respuesta');

      if (res.cod === "404") {
        return alert('Invalid City or Country')
      }
      
      this.setState({
        city: res.name,
        country: res.sys.country,
        weatherId: res.weather[0].id,
        description: res.weather[0].description,
        windSpeed: this.convertWind(res.wind.speed),
        tempMax: this.convertCelsius(res.main.temp_max),
        tempMin: this.convertCelsius(res.main.temp_min),
        pressure: res.main.pressure,
        humidity: res.main.humidity,
        temp: this.convertCelsius(res.main.temp)
      })
    } else {
      this.setState({
        error: true
      })
    }
}

  render() {
    return (
      <div className="container">
        <Form getWeather={this.getWeather} error={this.state.error}/>
        <Weather data = {this.state}/>
      </div>
    )
  }
}

export default App;
