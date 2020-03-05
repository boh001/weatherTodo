import React, { useContext } from "react";

const WContext = React.createContext();
export const Weather = ({
  main,
  country,
  weather,
  city,
  wind,
  clouds,
  temp,
  humidity,
  children
}) => {
  return (
    <WContext.Provider
      value={{ main, country, weather, city, wind, clouds, temp, humidity }}
    >
      {children}
    </WContext.Provider>
  );
};
export const useW = () => useContext(WContext);
