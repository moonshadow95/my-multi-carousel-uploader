import React, {useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser";
import RmiUploader from "./RMIUploader";
import styled from "styled-components";

const Wrap = styled.div`
  width: 84%;
  margin: 100px auto;
  border: 1px solid #000;
  .uploader__toggle{
    position: absolute;
    top: 0;
    left: 0;
  }
  .ck-editor__main>div {
    min-height: 500px;
  }
`

const Editor = ({images,setImages}) => {
    const [content ,setContent] = useState('');

    return(
        <Wrap>
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
            <RmiUploader images={images} setImages={setImages}/>
        </Wrap>
)};

window.addEventListener('load', ()=>{
    const baseBtn = document.querySelector('.ck-toolbar__items>button:last-child');
    const toggleBtn = document.querySelector('.uploader__toggle')
    let x = window.pageXOffset + baseBtn.getBoundingClientRect().right;
    let y = window.pageYOffset + baseBtn.getBoundingClientRect().top;
    toggleBtn.style.top = y.toString()+'px'
    toggleBtn.style.left = x.toString()+'px'
})

export default Editor;