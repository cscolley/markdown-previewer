import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  height: calc(100vh - 260px);
  margin: 15px auto;
  padding: 0 15px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1.5rem;
  flex: 1 1 100%;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    width: 97%;
    height: 70vh;
  }
`;

export const Panel = styled.div`
  width: 45%;
  border: 3px solid var(--darkGrey);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  padding: 5px;
  flex: 1 1 auto;
  height: 100%;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 70vh;
  }
`;
