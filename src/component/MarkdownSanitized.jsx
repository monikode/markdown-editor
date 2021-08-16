import MarkdownContext from "../context/MarkdownContext";
import ReactHtmlParser from 'react-html-parser';
function MarkdownSanitized () {
    return (
        <MarkdownContext.Consumer>
            {value=> {
                return (
                    <div>
                        Output: <br></br>
                        {ReactHtmlParser(value.getMarkDownAsHTMLOutput())}
                    </div>
                )
            }}
        </MarkdownContext.Consumer>
    )
}

export default MarkdownSanitized