import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
    const [editorData, setEditorData] = useState(content)

    return(
        <Wrap>
            <CKEditor
                editor={ ClassicEditor }
                data={editorData}
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
                setContent={setContent}
                editorData={editorData} setEditorData={setEditorData}
            />
        </Wrap>
)};

// 슬라이드 추가 버튼 위치조정 (반응형)
window.addEventListener('load', ()=>{
    const baseBtn = document.querySelector('.ck-editor__top');
    const toggleBtn = document.querySelector('.uploader__toggle')
    let x1 = baseBtn.getBoundingClientRect().right;
    let y1 = baseBtn.getBoundingClientRect().top;
    let x2 = toggleBtn.getBoundingClientRect().width;
    let y2 = toggleBtn.getBoundingClientRect().height;

    function positioning (x1,x2,y1,y2){
        toggleBtn.style.left = (x1-x2).toString()+'px'
        toggleBtn.style.top = (y1+y2).toString()+'px'
    }
    positioning(x1,x2,y1,y2)
    window.addEventListener('resize', ()=>{
        x1 = baseBtn.getBoundingClientRect().right;
        y1 = baseBtn.getBoundingClientRect().top;
        x2 = toggleBtn.getBoundingClientRect().width;
        y2 = toggleBtn.getBoundingClientRect().height;
        positioning(x1,x2,y1,y2)
    })
})

export default Editor;