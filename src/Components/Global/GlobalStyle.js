import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing:border-box;
        font-family: sans-serif;
        
      };
  
      ::-webkit-scrollbar {
        
    width: 15px;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background: white;

  }
    
`;
