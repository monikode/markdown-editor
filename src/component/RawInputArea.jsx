import markdownContext from "../context/MarkdownContext";
import TreeDots from "./TreeDots";

function RawInputArea() {
  return (
    <markdownContext.Consumer>
      {(value) => {
        return (
          <div className="input window">
            <div className="header"><TreeDots/></div>

            <textarea
              value={value.rawText}
              onChange={value.handleChangeRawInputedText}
            ></textarea>
          </div>
        );
      }}
    </markdownContext.Consumer>
  );
}

export default RawInputArea;
