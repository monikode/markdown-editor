import MarkdownContext from "../context/MarkdownContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import Dribbble from "../assets/dribbble.svg";
import Github from "../assets/github.svg";
import Tutorial from "../assets/tutorial.svg";
import Export from "../assets/export.svg";

function Credits() {
  const [open, setOpen] = useState(false);
  return (
    <MarkdownContext.Consumer>
      {(value) => {
        function download() {
          var text = value.rawText;

          var link = document.getElementById("export");
          var blob = new Blob([text], { type: "text/plain" });
          link.href = window.URL.createObjectURL(blob);
          link.click();
        }
        function copied() {
          value.handleOpen(1);
        }
        return (
          <>
            <div className="infos">
              <ul>
                <li>
                  <img src={Dribbble} alt="Dribbble" />

                  <a href="https://dribbble.com/monnifs">Dribble</a>
                </li>
                <li>
                  <img src={Github} alt="Dribbble" />

                  <a href="https://github.com/monikode/markdown-editor">
                    Github
                  </a>
                </li>
                <li>
                  <img src={Tutorial} alt="Tutorial" />
                  <a href="#" onClick={() => value.handleOpen(0)}>
                    Tutorial
                  </a>
                </li>
                <li>
                  <img src={Export} alt="Export" />
                  <a
                    href="#"
                    download="README.md"
                    id="export"
                    onClick={() => download()}
                  >
                    Export
                  </a>
                </li>
                <li>
                  <CopyToClipboard
                    text={value.rawText}
                    id="copy"
                    onCopy={() => copied()}
                  >
                    <button>Copy</button>
                  </CopyToClipboard>
                </li>
              </ul>
            </div>
          </>
        );
      }}
    </MarkdownContext.Consumer>
  );
}

export default Credits;
