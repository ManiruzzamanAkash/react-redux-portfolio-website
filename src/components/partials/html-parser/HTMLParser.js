import React from "react";
import ReactHtmlParser from "react-html-parser";

const HTMLParser = props => {
  return ReactHtmlParser(props.data);
};

export default HTMLParser;
