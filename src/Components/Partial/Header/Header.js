import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faWind, faTint } from "@fortawesome/free-solid-svg-icons";
import dotenv from "dotenv";
import { useW } from "store";
import {
  Header,
  MainInfo,
  MainW,
  MainS,
  InfoMS,
  InfoTemp,
  SubInfo,
  InfoW,
  Wrap
} from "./Header.style";
dotenv.config();

export default () => {
  console.log("header");

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
