import styled from "styled-components";

export const TodoList = styled.div.attrs({
  id: "sideBar"
})`
  position: fixed;
  height: 100%;
  left: 0;
  height: calc(100% - 35px);
  width: 350px;
  bottom: 35px;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all ease 0.2s;
  color: white;

  @media screen and (max-width: 1100px) {
    height: 30%;
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
  display: grid;
  height: 100%;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
  overflow-x: hidden;
`;

export const ListInput = styled.input.attrs({
  type: "text",
  placeholder: "Write your Todo list..."
})`
  flex: none;
  bottom: 0;
  height: 30px;

  padding-left: 10px;
  border: none;
  transition: all ease 0.5s;
  border-radius: 1px;
  &:focus {
    outline: none;
  }
`;
