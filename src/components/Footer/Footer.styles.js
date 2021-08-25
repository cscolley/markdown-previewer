import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  gap: 3rem;
  height: 100%;

  a {
    font-size: var(--fontMed);
    text-decoration: none;
    color: var(--white);

    &:hover {
      color: green;
      transition: 200ms ease-in;
    }

    i {
      font-size: var(--fontSuperBig);
      color: var(--white);
    }
  }
`;
