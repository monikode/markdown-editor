import MarkdownContext from "../context/MarkdownContext";
import { CopyToClipboard } from 'react-copy-to-clipboard'
function Credits() {
    return (
        <MarkdownContext.Consumer>
            {value => {
                function download() {
                    var text = value.rawText

                    var link = document.getElementById("export");
                    var blob = new Blob([text], { type: "text/plain" });
                    link.href = window.URL.createObjectURL(blob);
                    link.click();
                }
                function copied() {
                    alert('Copied to clipboard!')
                }
                return (
                    <div className="infos">
                        <ul>
                            <li><a href="https://dribbble.com/monnifs">Dribble</a></li>
                            <li><a href="https://github.com/monikode/markdown-editor">Github</a></li>
                            <li><a href="#">Tutorial</a></li>
                            <li><a href="#" download="README.md" id="export" onClick={()=>download()}>Export</a></li>
                            <li><CopyToClipboard text={value.rawText} id="copy" onCopy={()=>copied()}><button>Copy</button></CopyToClipboard></li>
                        </ul>
                    </div>
                )
            }}
        </MarkdownContext.Consumer>
    )
}

export default Credits