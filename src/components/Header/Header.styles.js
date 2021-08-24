import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  gap: 1rem;
`;

export const LogoContainer = styled.div`
  background: var(--white);
  border-radius: 20px;
  width: 75px;
`;

export const MarkedLogoImg = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: var(--fontSuperBig);
  color: var(--white);
`;