import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 3rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: "Abel", sans-serif;
    color: var(--darkGrey);
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .App {
    min-height: 100vh; /* will cover the 100% of viewport */
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    padding-bottom: 100px; /* height of your footer */
  }
`;
