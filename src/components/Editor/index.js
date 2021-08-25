import React from "react";

import { Wrapper } from "./Editor.styles";

const Editor = ({ onChange, markdownValue }) => (
  <Wrapper>
    <div className="title">
      <h1>Markdown</h1>
    </div>
    <div className="editorDiv">
      <textarea id="editor" value={markdownValue} onChange={onChange} />
    </div>
  </Wrapper>
);

export default Editor;
