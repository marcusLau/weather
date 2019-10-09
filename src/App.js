import React, { Component } from 'react';
import Title from "./Title";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "6a00c8041c30c46a7d3f18e603579396";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      desc: undefined,
      err: undefined
    };

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=San Francisco,US&appid=6a00c8041c30c46a7d3f18e603579396")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            temp: result.main.temperature,
            city: result.main.name,
            country: result.sys.country,
            humidity: result.main.humidity,
            desc: result.weather[0].description,
            error: ""
          });
        },
        (error) => {
          this.setState({
            err: error
          });
        }
      )
  }

  // unable to set state, 'cannot read proprety setState of undefined
  getWeather = async (e) => { // can i do a function with async and a parameter e?

    e.preventDefault();

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const response = await api_call.json();

    console.log(response.name);

    this.setState({
      temp: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      desc: response.weather[0].description,
      error: ""
    });
  }

  render() {
    const { temp, city, country, humidity, desc, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    }

    return (
      <div>
        <Title />
        <Form loadWeather={this.getWeather} />
        <Weather
          temp={temp}
          city={city}
          country={country}
          humidity={humidity}
          desc={desc}
          error={error}
        />
      </div>
    )
  }
}


export default App;
