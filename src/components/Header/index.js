import React from "react";

import MarkedLogo from "../../images/markedjs-logo.svg";

import { Wrapper, Content, LogoContainer, MarkedLogoImg, Title } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoContainer>
        <MarkedLogoImg src={MarkedLogo} alt='marked-logo' />
      </LogoContainer>
      <Title>Markdown Previewer</Title>
    </Content>
  </Wrapper>
);

export default Header;
