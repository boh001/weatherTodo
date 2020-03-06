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
`;
export const MainInfo = styled.div`
  display: flex;
  height: 60%;
  border-bottom: 1px solid white;
`;
export const MainW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  font-size: 40px;
  font-weight: bold;
`;
export const MainS = styled.div`
  display: grid;
  width: 40%;
  grid-template-columns: repeat(1, 3fr);
`;
export const InfoMS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;
export const InfoTemp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
export const SubInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 40%;
`;
export const InfoW = styled.div`
  margin-top: 5px;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
`;
