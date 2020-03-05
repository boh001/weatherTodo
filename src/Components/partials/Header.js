import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faWind, faTint } from "@fortawesome/free-solid-svg-icons";
import dotenv from "dotenv";
import { useW } from "store";

dotenv.config();

const Header = styled.div`
  width: 150px;
  height: 100px;
  color: white;
  position: fixed;
  font-size: 10px;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
`;
const MainInfo = styled.div`
  display: flex;
  height: 60%;
  border-bottom: 1px solid white;
`;
const MainW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 67%;
  height: 100%;
  font-size: 30px;
  font-weight: bold;
`;
const MainS = styled.div`
  display: grid;
  width: 33%;
  grid-template-columns: repeat(1, 3fr);
`;
const InfoMS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoTemp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;
const SubInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 40%;
`;
const InfoW = styled.div`
  margin-top: 5px;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default () => {
  // const [initWeather, setWeather] = useState("");
  // const [initCountry, setCountry] = useState("");
  // const [initCity, setCity] = useState("");
  // const [initWind, setWind] = useState("");
  // const [initCloud, setCloud] = useState("");
  // const [initTemp, setTemp] = useState("");
  // const [initHum, setHum] = useState("");
  // const success = async pos => {
  //   const {
  //     coords: { latitude, longitude }
  //   } = pos;
  //   const apiKey = "c11aac16b89eb6674bf9b243876f48f9";
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  //   const {
  //     data: {
  //       sys: { country },
  //       name,
  //       weather,
  //       main: { temp, humidity },
  //       wind: { speed },
  //       clouds: { all }
  //     }
  //   } = await axios.post(url);
  //   const icon = weather[0].main;

  //   setWeather(weather[0].description);
  //   setCountry(country);
  //   setCity(name);
  //   setWind(speed);
  //   setCloud(all);
  //   setHum(humidity);
  //   setTemp(((temp - 32) / 1800).toFixed(1));
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success);
  // });
  const { country, weather, city, wind, clouds, temp, humidity } = useW();
  return (
    <Header>
      <MainInfo>
        <MainW>{country}</MainW>
        <MainS>
          <InfoTemp>{((temp - 32) / 1800).toFixed(1)}℃</InfoTemp>
          <InfoMS>{weather}</InfoMS>
          <InfoMS>{city}</InfoMS>
        </MainS>
      </MainInfo>
      <SubInfo>
        <Wrap>
          <FontAwesomeIcon icon={faWind} size="lg" />
          <InfoW>{wind}m/s</InfoW>
        </Wrap>
        <Wrap>
          <FontAwesomeIcon icon={faTint} size="lg" />
          <InfoW>{humidity}%</InfoW>
        </Wrap>
        <Wrap>
          <FontAwesomeIcon icon={faCloud} size="lg" />
          <InfoW>{clouds}%</InfoW>
        </Wrap>
      </SubInfo>
    </Header>
  );
};
