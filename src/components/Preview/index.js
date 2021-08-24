import React from "react";
import marked from "marked";
import Prism from 'prismjs';

const Preview = ({ markdownValue }) => {
  // ALLOWS LINE BREAKS WITH RETURN BUTTON
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });

  // INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdownValue, { renderer }),
      }}
    />
  );
};

export default Preview;
