import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const Header = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
`;
const MainInfo = styled.div`
  display: flex;
  height: 60%;
  background-color: blue;
`;
const MainW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  background-color: green;
`;
const MainS = styled.div`
  display: grid;
  width: 30%;
  grid-template-columns: repeat(1, 3fr);
`;
const InfoMS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 40%;
`;
const InfoW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default () => {
  const [initWeather, setWeather] = useState("");
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
        main: { temp },
        wind: { speed },
        clouds: { all }
      }
    } = await axios.post(url);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });
  return (
    <Header>
      <MainInfo>
        <MainW>W</MainW>
        <MainS>
          <InfoMS>MS</InfoMS>
          <InfoMS>MS</InfoMS>
          <InfoMS>MS</InfoMS>
        </MainS>
      </MainInfo>
      <SubInfo>
        <InfoW>hi</InfoW>
        <InfoW>hi</InfoW>
        <InfoW>hi</InfoW>
      </SubInfo>
    </Header>
  );
};
