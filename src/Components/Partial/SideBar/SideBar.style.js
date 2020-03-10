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
    justify-content: flex-start;
  }
`;
