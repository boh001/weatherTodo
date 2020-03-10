import styled from "styled-components";

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  word-wrap: break-word;
  position: relative;
  word-break: break-all;
  word-wrap: break-word;
`;
export const DIV = styled.div`
  display: flex;
  align-items: center;
  visibility: hidden;
`;
export const IconWrap = styled.div`
  font-size: 10px;
  margin-left: 10px;
`;
export const Frame = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  width: 280px;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover ${DIV} {
    visibility: visible;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 10px;
    width: 440px;
  }
`;

export const ReviseInput = styled.input.attrs({
  type: "text"
})`
  position: absolute;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  visibility: hidden;
  color: white;
  font-size: 20px;
  opacity: 0;
  z-index: 11;
`;
