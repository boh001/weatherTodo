import styled from "styled-components";

export const TodoList = styled.div.attrs({
  id: "sideBar"
})`
  position: fixed;
  height: 100%;
  left: 0;
  height: calc(100% - 35px);
  width: 300px;
  bottom: 35px;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all ease 0.1s;
  color: white;
  overflow-wrap: break-word;
  @media screen and (max-width: 1024px) {
    height: calc(100% - 500px);
    width: 100%;
  }
`;
export const TodoTheme = styled.div`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid;
  font-size: 30px;
  font-weight: bold;
`;
export const ToDos = styled.div.attrs({
  id: "toDos"
})`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  padding-left: 5px;
  font-size: 20px;
  overflow-x: hidden;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const InputLabel = styled.label`
  padding: 10px;
  bottom: 5px;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  font-size: 20px;
  opacity: 0;
`;

export const ListInput = styled.input.attrs({
  type: "text",
  placeholder: "Write your to-do's "
})`
  position: relative;
  font-size: 20px;
  flex: none;
  bottom: 0;
  height: 30px;
  padding-left: 10px;
  border: none;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid;
  transition: all ease 0.5s;
  border-radius: 1px;
  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
  &:focus ~ label {
    font-size: 20px;
    bottom: 30px;
    color: #2ed573;
    opacity: 1;
  }
  &::placeholder {
    color: white;
  }
`;
