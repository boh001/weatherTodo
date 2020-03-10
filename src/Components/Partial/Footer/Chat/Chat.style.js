import styled from "styled-components";
import { Link } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";
export const SPAN = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  opacity: 0;
  transition: all ease 1s;
`;
export const Chat = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  transition: all ease 1s;
`;
export const ChatFrame = styled.div`
  position: absolute;
  right: -115px;
  transition: all ease 1s;
  &:hover {
    right: 10px;
  }
  &:hover ${SPAN} {
    opacity: 1;
  }
`;
export const Option = styled(Link)`
  margin-right: 5px;
  &:hover {
    color: #2ed573;
  }
  &:after {
    content: " /";
    color: white;
  }
`;
export const ChangeUrl = styled.div`
  &:hover {
    color: #2ed573;
  }
`;
