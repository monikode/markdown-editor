import MarkdownContext from "../context/MarkdownContext";
import TreeDots from "./TreeDots";
import ReactHtmlParser from "react-html-parser";
function MarkdownSanitized() {
  return (
    <MarkdownContext.Consumer>
      {(value) => {
        return (
          <div className="output window">
            <div className="header">
              <TreeDots />
              <div className="search"></div>
            </div>
            <div className="box">
              {ReactHtmlParser(value.getMarkDownAsHTMLOutput())}
            </div>
          </div>
        );
      }}
    </MarkdownContext.Consumer>
  );
}

export default MarkdownSanitized;
