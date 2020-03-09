import styled from "styled-components";
export const ChatFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const SPAN = styled.span`
  margin: 0px 5px 0px 5px;
  opacity: 0;
  right: -50px;
  transition: all ease 1s;
`;
export const Chat = styled.div`
  cursor: pointer;
  &:hover ${SPAN} {
    font-size: 20px;
    opacity: 1;
    width: 100%;
  }
`;
