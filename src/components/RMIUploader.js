import React, {useState} from 'react';
import {RMIUploader} from 'react-multiple-image-uploader';
import Button from '@mui/material/Button';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CloseIcon from '@mui/icons-material/Close';
import Axios from 'axios';

// Fake DB

const RmiUploader = ({images, setImages}) => {
    const [visible, setVisible] = useState(false);
    const hideModal = () => {
        setVisible(false);
    };
    const onUpload = (data) => {
        console.log("Upload files", data);
        let formData = new FormData();

        formData.append("file", data[0])

        Axios.post('http://localhost:8080/api/images/upload_files', formData, {headers:{'Content-Type': 'multipart/form-data'}})
            .then(response => {
                if(response.data.success){
                    console.log(response.data)
                }else{
                    alert('업로드에 실패했습니다.')
                }
            })
    }
    const onSelect = (data) => {
        console.log("Select files", data);
    };
    const onRemove = (id) => {
        console.log("Remove image id", id);
        images.filter((item) => item.id!==id)
        console.log(images.filter((item) => item.id!==id))
};

function RMIUToggle () {
    setVisible(prev => !prev)
}

    return (
        <div>
            <Button
                sx={{minWidth:29.89, padding: 0,height:29.89}}
                onClick={RMIUToggle}
            >
                {visible ?
                    <CloseIcon sx={{color:"black"}}/>:
                    <ViewCarouselIcon sx={{color:"black"}}/>
                }
            </Button>
            {visible &&
            <RMIUploader
                isOpen={visible}
                hideModal={hideModal}
                onSelect={onSelect}
                onUpload={onUpload}
                onRemove={onRemove}
                dataSources={images}
            />}
        </div>
    );
}

export default RmiUploader;