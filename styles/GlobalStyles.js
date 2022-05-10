import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;700&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  outline: none;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
}
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #025496 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #025496;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;
