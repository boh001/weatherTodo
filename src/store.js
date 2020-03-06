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
  children,
  time,
  greet
}) => {
  return (
    <WContext.Provider
      value={{
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
      }}
    >
      {children}
    </WContext.Provider>
  );
};
export const useW = () => useContext(WContext);
