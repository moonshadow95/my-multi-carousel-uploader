import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import RmiUploader from "./RMIUploader";
import styled from "styled-components";
import Preview from "./Preview";
import {Button} from "@mui/material";


const Wrap = styled.div`
  width: 50%;
  .ck-editor__main>div {
    min-height: 400px;
  }
  
  @media (max-width:1450px){
    width: 100%;
  }
`

const Editor = ({images,setImages, content, setContent, selected, setSelected,setContentArray, setImageArray, imageArray}) => {

    const onSaveClick=()=>{
        setContentArray(prev => [...prev, {content}])
        setContent("")
        setImageArray([])
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
                imageArray={imageArray} setImageArray={setImageArray}
            />
        </Wrap>
)};
export default Editor;