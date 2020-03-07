import styled from "styled-components";

export const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  border: 1px solid;
  width: 20px;
  height: 20px;
  background-color: none;
  color: green;
`;
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
`;
export const IconWrap = styled.div`
  visibility: hidden;
  font-size: 10px;
  margin-left: 10px;
`;
export const Frame = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover ${IconWrap} {
    visibility: visible;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 10px;
    width: 48%;
  }
`;
