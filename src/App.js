import React from "react";
import Footer from "./components/Footer";

// Components
import Header from "./components/Header";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
