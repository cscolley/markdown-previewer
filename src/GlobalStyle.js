import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1480px;
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
  }

  .App {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    padding-bottom: 80px; /* height of your footer */

    @media screen and (min-width: 900px) {
      height: 100vh;
    }
  }
`;
