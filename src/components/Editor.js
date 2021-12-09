import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import RmiUploader from "./RMIUploader";
import styled from "styled-components";
import Preview from "./Preview";
import {Button} from "@mui/material";


const Wrap = styled.div`
  width: 50%;
  .uploader__toggle{
    position: absolute;
    top: 0;
    left: 0;
  }
  .ck-editor__main>div {
    min-height: 400px;
  }
  @media (max-width:1450px){
    width: 100%;
  }
`

const Editor = ({images,setImages, content, setContent, selected, setSelected,setContentArray}) => {

    const onSaveClick=()=>{
        setContentArray(prev => [...prev, {content}])
        setContent("")
    }
    return(
        <Wrap>
            <CKEditor
                editor={ ClassicEditor }
                data={content}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setContent(data)
                } }
            />
            <Button variant="contained" onClick={onSaveClick}>문단 저장</Button>
            <RmiUploader
                images={images} setImages={setImages}
                selected={selected} setSelected={setSelected}
                setContent={setContent}
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