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

  .previewOuterDiv {
    height: 100%;
    border-radius: 0 0 13px 13px;
    overflow: hidden;
    height: calc(100% - 60px);
    border: 1px solid var(--medGrey);

    #preview {
      resize: none;
      padding: 5px;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      overflow-wrap: break-word;

      blockquote {
        border-left: 3px solid #224b4b;
        color: #224b4b;
        padding-left: 5px;
        margin-left: 25px;
      }

      > p > code {
        padding: 3px;
      }

      code {
        background: var(--lightGrey);
        font-size: 0.95rem;
        font-weight: bold;
      }

      pre {
        display: block;
        overflow: auto;
        background: var(--lightGrey);
        padding: 5px;
        line-height: 1.2;
      }

      h1 {
        border-bottom: 2px solid var(--darkGrey);
      }

      h2 {
        border-bottom: 1px solid var(--darkGrey);
      }

      table {
        border-collapse: collapse;
      }

      td,
      th {
        border: 2px solid var(--darkGrey);
        padding-left: 5px;
        padding-right: 5px;
      }

      img {
        display: block;
        max-width: 90%;
        margin: 2rem auto;
      }

      @media screen and (max-width: 420px) {
        body {
          font-size: 0.875rem;
        }
      }
    }
  }
`;

