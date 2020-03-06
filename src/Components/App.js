import React from "react";
import { GlobalStyles } from "./Global/GlobalStyle";
import Router from "./Router";
import { Weather } from "store";
import axios from "axios";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main: "clear",
      country: "",
      city: "",
      weather: "",
      wind: "",
      clouds: "",
      temp: "",
      humidity: ""
    };
  }
  componentDidMount() {
    const success = async pos => {
      const {
        coords: { latitude, longitude }
      } = pos;
      const apiKey = "c11aac16b89eb6674bf9b243876f48f9";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      const {
        data: {
          sys: { country },
          name,
          weather,
          main: { temp, humidity },
          wind: { speed },
          clouds: { all }
        }
      } = await axios.post(url);
      this.setState({
        main: weather[0].main,
        country,
        city: name,
        weather: weather[0].description,
        wind: speed,
        clouds: all,
        temp,
        humidity
      });
    };
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(success);
    }, 5000);
  }
  render() {
    const {
      main,
      country,
      weather,
      city,
      wind,
      clouds,
      temp,
      humidity
    } = this.state;
    return (
      <>
        <GlobalStyles />
        <Weather
          main={main}
          country={country}
          city={city}
          wind={wind}
          clouds={clouds}
          weather={weather}
          temp={temp}
          humidity={humidity}
        >
          <Router />
        </Weather>
      </>
    );
  }
}
