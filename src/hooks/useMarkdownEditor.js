import { useState } from 'react';
import {Remarkable} from 'remarkable'

function useMarkdownEditor() {
    const md = new Remarkable();
    const [rawText, setRawText] = useState()
    const [open, setOpen] = useState(-1)
    function handleChangeRawInputedText(event){
        setRawText(event.target.value)
    };
    function handleOpen(value){
        setOpen(value)
    };
    function getMarkDownAsHTMLOutput(){
        return md.render(rawText)
    };

    return { rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput, open, handleOpen};
}

export default useMarkdownEditor