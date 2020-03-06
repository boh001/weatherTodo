import styled from "styled-components";
export const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 70px;
  font-weight: bold;
  background-image: url(${props => `images/${props.src}.jpg`});
  /* background-image: url(${props => `images/thunderstorm.jpg`}); */
  background-size: cover;
  color: white;
  @media screen and (max-width: 1100px) {
    font-size: 40px;
  }
`;
export const Clock = styled.div``;
export const Greet = styled.div`
  margin-top: 15px;
  font-size: 40px;
  font-weight: bold;
  @media screen and (max-width: 1100px) {
    font-size: 30px;
  }
`;
