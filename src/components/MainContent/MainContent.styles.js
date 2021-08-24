import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  margin: 10px auto;
  padding: 0 10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  flex: 1 1 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`;

export const Panel = styled.div`
  width: 45%;
  border: 4px solid var(--darkGrey);
  border-radius: 15px;
  padding: 10px;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  textarea, div {
    resize: none;
    width: 100%;
    height: 100vh;
    padding: 5px;
    border: 1px solid var(--medGrey);
    overflow-x: hidden;
    overflow-y: auto;
    overflow-wrap: break-word;
  }
`;
