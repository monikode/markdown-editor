import "./App.css";
import MarkdownContext from "./context/MarkdownContext";
import useMarkdownEditor from "./hooks/useMarkdownEditor";
import RawInputArea from "./component/RawInputArea";
import MarkdownSanitized from "./component/MarkdownSanitized";
import Credits from "./component/Credits";
import Dialog from "./component/Dialog";

function App() {
  return (
    <MarkdownContext.Provider value={useMarkdownEditor()}>
      <div className="App">
        <Dialog/>
        <RawInputArea />
        <MarkdownSanitized />
        <Credits />
      </div>
    </MarkdownContext.Provider>
  );
}

export default App;
