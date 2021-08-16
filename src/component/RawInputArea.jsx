import markdownContext from "../context/MarkdownContext";

function RawInputArea () {
    return (
        <markdownContext.Consumer>
            {value=> {
                return (
                    <div className="input">
                        <textarea value={value.rawText} onChange={value.handleChangeRawInputedText}></textarea>
                    </div>
                )
            }}
        </markdownContext.Consumer>
    )
}

export default RawInputArea