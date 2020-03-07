import styled from "styled-components";

export const Header = styled.div`
  width: 200px;
  height: 150px;
  color: white;
  position: fixed;
  font-size: 10px;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 75px;
  }
`;
export const MainInfo = styled.div`
  display: flex;
  height: 60%;
  border-bottom: 1px solid white;
  @media screen and (max-width: 1024px) {
    border: none;
  }
`;
export const MainW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 100%;
  font-size: 30px;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;
export const MainS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  flex-direction: column;
  padding: 5px 0px 5px 0px;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
export const InfoMS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  heigth: 100%;
  font-size: 15px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const InfoTemp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;
export const SubInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 40%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const InfoW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
`;
