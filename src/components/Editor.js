import React, {useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from "html-react-parser";
import RmiUploader from "./RMIUploader";
import styled from "styled-components";
import Preview from "./Preview";


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
    const [selected, setSelected] = useState([])

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
            <Preview content={content}
                     selected={selected} setSelected={setSelected}
            />
            <RmiUploader
                images={images} setImages={setImages}
                selected={selected} setSelected={setSelected}
            />
        </Wrap>
)};

window.addEventListener('load', ()=>{
    const baseBtn = document.querySelector('.ck-toolbar__items>button:last-child');
    console.log(baseBtn)
    const toggleBtn = document.querySelector('.uploader__toggle')
    let x = window.pageXOffset + baseBtn.getBoundingClientRect().right;
    console.log(baseBtn.getBoundingClientRect())
    let y = window.pageYOffset + baseBtn.getBoundingClientRect().top;
    console.log(y)
    toggleBtn.style.top = y.toString()+'px'
    toggleBtn.style.left = x.toString()+'px'
})

export default Editor;