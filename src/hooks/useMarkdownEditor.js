import { useState } from 'react';
import {Remarkable} from 'remarkable'

function useMarkdownEditor() {
    const md = new Remarkable();
    const [rawText, setRawText] = useState()
    function handleChangeRawInputedText(event){
        setRawText(event.target.value)
    };
    function getMarkDownAsHTMLOutput(){
        return md.render(rawText)
    };

    return { rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput };
}

export default useMarkdownEditor