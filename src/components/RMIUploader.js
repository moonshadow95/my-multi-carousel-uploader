import React, {useEffect, useState} from 'react';
import {RMIUploader} from 'react-multiple-image-uploader';
import Button from '@mui/material/Button';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CloseIcon from '@mui/icons-material/Close';
import SimpleSlider from "./Carousel";
import styled from 'styled-components'

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding:150px 0;
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
    .uploader__close {
      position: absolute;
      top: 40px;
      right: 40px;
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

const RmiUploader = ({images, setImages}) => {
    const [visible, setVisible] = useState(true);
    const hideModal = () => {
        setVisible(false);
    };
    const onUpload = async (data) => {
        data.map((item, index)=>item["id"]=images[images.length-1].id + index -1)
        setImages(Array.from(new Set([...images,...data])))
        console.log(images)
    }
    const onSelect = (data) => {
        console.log("Select files", data);
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
                className="uploader__toggle"
                sx={{minWidth:29.89, padding: 0,height:29.89}}
                onClick={RMIUToggle}
            >
                {visible ?
                    <CloseIcon sx={{color:"black"}}/>:
                    <ViewCarouselIcon sx={{color:"black"}}/>
                }
            </Button>
            {visible &&
            <Modal>
                <Button
                    className="uploader__close"
                    sx={{minWidth:29.89, padding: 0,height:29.89}}
                    onClick={RMIUToggle}
                >
                    {visible ?
                        <CloseIcon sx={{color:"black"}}/>:
                        <ViewCarouselIcon sx={{color:"black"}}/>
                    }
                </Button>
                <SimpleSlider images={images} setImages={setImages}/>
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