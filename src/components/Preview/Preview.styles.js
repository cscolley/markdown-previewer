import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  border: 4px solid var(--darkGrey);
  border-radius: 15px;
  padding: 10px;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--medGrey);
`;