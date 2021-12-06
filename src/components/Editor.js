import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser";

const Editor = (props) => {

    const [content ,setContent] = useState('');

    return(
        <>
            <CKEditor
                editor={ ClassicEditor }
                data=""
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setContent(data)
                } }
                // onReady={ editor => {
                //     // You can store the "editor" and use when it is needed.
                //     console.log( 'Editor is ready to use!', editor );
                // } }
                // onBlur={ ( event, editor ) => {
                //     console.log( 'Blur.', editor );
                // } }
                // onFocus={ ( event, editor ) => {
                //     console.log( 'Focus.', editor );
                // } }
            />
            <h1>Preview</h1>
            {parse(content)}
        </>
)};

export default Editor;