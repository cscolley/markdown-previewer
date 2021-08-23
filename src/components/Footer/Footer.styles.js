import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  gap: 3rem;

  a {
    color: var(--white);
    font-size: var(--fontMed);
    text-decoration: none;

    &:hover {
      color: green;
      transition: 200ms ease-in;
    }

    i {
      font-size: var(--fontSuperBig);
    }
  }
`;
