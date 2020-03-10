import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing:border-box;
        
      };
    body{
       &:focus {
        outline: none;
      }
        
    }
      ::-webkit-scrollbar {
        
    width: 15px;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;

  }
  a {
    text-decoration:none;
    &:visited{
      color:inherit;
    }
  }
  input{
    font-family:inherit;
    border:none;
    border-bottom:1px solid;
    color:inherit;
    background-color:transparent;
    &:focus {
      outline: none;
    }
  }
    
`;
