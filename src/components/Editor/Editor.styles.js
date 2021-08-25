import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;

  .title {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--darkGrey);
    border-radius: 13px 13px 0 0;

    h1 {
      color: var(--white);
      margin: 0;
    }
  }

  .editorDiv {
    height: 100%;
    border-radius: 0 0 13px 13px;
    overflow: hidden;
    height: calc(100% - 60px);
    border: 1px solid var(--medGrey);

    #editor {
      resize: none;
      padding: 5px;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      overflow-wrap: break-word;
      font-size: 16px;
      border: none;
    }
  }
`;
