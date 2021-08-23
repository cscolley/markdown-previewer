import React from "react";

// Styles
import { Wrapper, Content } from "./Footer.styles";

const Footer = () => (
  <Wrapper>
    <Content>
      <a href="https://www.chriscolley.com.au">chriscolley.com.au</a>
      <a href="https://github.com/cscolley">
        <i className="fab fa-github"></i>
      </a>
    </Content>
  </Wrapper>
);

export default Footer;