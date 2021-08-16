import './App.css';
import MarkdownContext from './context/MarkdownContext';
import useMarkdownEditor from './hooks/useMarkdownEditor';
import RawInputArea from './component/RawInputArea';
import MarkdownSanitized from './component/MarkdownSanitized';

function App() {
  return (
    <MarkdownContext.Provider value={useMarkdownEditor()}>

    <div className="App">
      <header className="App-header">
        <RawInputArea/>
        <MarkdownSanitized/>
      </header>
    </div>
    </MarkdownContext.Provider>

  );
}

export default App;
