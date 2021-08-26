import MarkdownContext from "../context/MarkdownContext";

function Dialog() {
    const texts = ['#  Heading 1 \n ## Heading 2 \nHeading 3', 'Text copied to clipboard!'];

  return (
    <MarkdownContext.Consumer>
      {(value) => {
        console.log(value.open);
        return (
          <>
            {value.open>=0&& (
              <div>
                <div id="dialog" className="window">
                  {texts[value.open]}
                  <button onClick={() => value.handleOpen(-1)}>Close</button>
                </div>
                <div id="backdrop"></div>
              </div>
            )}
          </>
        );
      }}
    </MarkdownContext.Consumer>
  );
}

export default Dialog;
