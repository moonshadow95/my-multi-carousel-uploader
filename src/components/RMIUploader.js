import React, {useEffect, useState} from 'react';
import {RMIUploader} from 'react-multiple-image-uploader';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import SimpleSlider from "./SimpleSlider";
import styled from 'styled-components'
import {CKEditor} from './Editor'

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding:0 0 150px 0px;
    width: 100%;
    z-index: 1;
    background: rgba(230, 230, 230, 0.8);
    .ant-card{
      border: none;
      margin-top: 40px;
    }
    .ant-card-body>div{
      max-width: 80%;
      margin: auto;
    }
    .modal__close{
      display:block;
      margin: 20px 20px 20px auto;
      padding: 10px;
      background-color: #000;
      svg {
        margin-bottom: -6px;
      }
    }
`
// import Axios from 'axios';

// const URL = 'http://localhost:8080/api/uploads'
// const headers = {
//     // "Content-Type":"multipart/form-data"
// }
// const handlingDataForm = async dataURI => {
//     const byteString = atob(dataURI.split(',')[1]);
//
//     const ab = new ArrayBuffer(byteString.length)
//     const ia = new Uint8Array(ab)
//     for (let i = 0; i<byteString.length; i++){
//         ia[i] = byteString.charCodeAt(i);
//     }
//     const blob = new Blob([ia],{type:"image/*"})
//     const file = new File([blob], "image.*")
//
//     const formData = new FormData();
//     formData.append("image", file)
// }

const RmiUploader = ({images, setImages, setSelected, setImageArray, selected, imageArray,  editorData, setEditorData, setContent }) => {
    const [visible, setVisible] = useState(false);
    const hideModal = () => {
        setVisible(false);
    };
    const onUpload = async (data) => {
        if(images.length > 0){
            data.map((item, index)=>item["id"]=images[images.length-1].id + index -1)
        }else{
            // 빈 배열일 경우 id는 1부터 시작
            data.map((item, index)=>item["id"]=index -1)
        }
        setImages(Array.from(new Set([...images,...data])))
    }
    const onSelect = (data) => {
        setImageArray(prev => [...prev, data])
        setVisible(prev => !prev)
    };
    const onRemove = (id) => {
        setImages(images.filter((item) => item.id!==id))
};

function RMIUToggle () {
    setVisible(prev => !prev)
}


    return (
        <div>
            <Button
                variant="contained"
                onClick={RMIUToggle}
            >
                이미지 슬라이드 추가
            </Button>
            {visible &&
            <Modal>
                <Button
                    variant="contained"
                    className='modal__close'
                    onClick={RMIUToggle}
                >
                    {visible ?
                        <CloseIcon sx={{color:"white"}}/>:
                        '이미지 슬라이드 추가'
                    }
                </Button>
                <RMIUploader
                    isOpen={visible}
                    hideModal={hideModal}
                    onSelect={onSelect}
                    onUpload={onUpload}
                    onRemove={onRemove}
                    dataSources={images}
                />
            </Modal>
            }
        </div>
    );
}
export default RmiUploader;