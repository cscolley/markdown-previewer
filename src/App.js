import React from "react";
import Footer from "./components/Footer";

// Components
import Header from "./components/Header";
import MainContent from "./components/MainContent";

// Styles
import { GlobalStyle } from "./GlobalStyle";
import './prism.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
