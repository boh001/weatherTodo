import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Me from "Routes/Me";
import Header from "./Partial/Header/Header";
import Footer from "./Partial/Footer/Footer";
import SideBar from "./Partial/SideBar/SideBar";
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
      humidity: "",
      time: "",
      greet: ""
    };
  }
  componentDidMount() {
    const success = async pos => {
      const {
        coords: { latitude, longitude }
      } = pos;
      const apiKey = process.env.REACT_APP_APIKEY;
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
      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      const time = `${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${
        s < 10 ? `0${s}` : s
      }`;
      const greet = `${
        h >= 21
          ? "Good night"
          : h >= 18
          ? "Good evening"
          : h >= 12
          ? "Good afternoon"
          : h >= 6
          ? "Good morning"
          : "Good night"
      }`;

      this.setState({
        main: weather[0].main,
        country,
        city: name,
        weather: weather[0].description,
        wind: speed,
        clouds: all,
        temp,
        humidity,
        time,
        greet
      });
    };
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(success);
    }, 1000);
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
      humidity,
      time,
      greet
    } = this.state;

    return (
      <Router>
        <>
          <Weather
            main={main}
            country={country}
            city={city}
            wind={wind}
            clouds={clouds}
            weather={weather}
            temp={temp}
            humidity={humidity}
            time={time}
            greet={greet}
          >
            <Header />
            <SideBar />
            <Switch>
              <Route
                path="https://frosty-hoover-eb47ac.netlify.com/"
                exact
                component={Home}
              />
              <Route
                path="https://frosty-hoover-eb47ac.netlify.com/me"
                exact
                component={Me}
              />
            </Switch>
          </Weather>
          <Footer />
        </>
      </Router>
    );
  }
}
