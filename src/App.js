import Editor from "./components/Editor";
import React, {useState} from "react";
import Preview from "./components/Preview";
import styled from 'styled-components'

const Main = styled.div`
  display:flex;
  height: 100vh;
  >div {
    flex: 1;
    padding: 2em 3em;
    overflow-y: scroll;
  }
  @media (max-width:1450px){
    flex-direction: column;
  }
`

function App() {
    const [images, setImages] = useState([
        {
            id: 1,
            dataURL: "https://picsum.photos/seed/1/600",
        },
        {
            id: 2,
            dataURL: "https://picsum.photos/seed/2/600",
        },
        {
            id: 3,
            dataURL: "https://picsum.photos/seed/3/600",
        },
        {
            id: 4,
            dataURL: "https://picsum.photos/seed/4/600",
        },
        {
            id: 5,
            dataURL: "https://picsum.photos/seed/5/600",
        },
        {
            id: 6,
            dataURL: "https://picsum.photos/seed/6/600",
        },
        {
            id: 7,
            dataURL: "https://picsum.photos/seed/7/600",
        },
        {
            id: 8,
            dataURL: "https://picsum.photos/seed/8/600",
        },
        {
            id: 9,
            dataURL: "https://picsum.photos/seed/9/600",
        },
        {
            id: 10,
            dataURL: "https://picsum.photos/seed/10/600",
        },])
    const [content ,setContent] = useState('');
    const [contentArray, setContentArray] = useState([])
    const [imageArray, setImageArray] = useState([]);
    const [selected, setSelected] = useState([])
    return (
        <Main className="App">
            <Editor images={images}
                    setImages={setImages}
                    content={content}
                    setContent={setContent}
                    selected={selected}
                    setSelected={setSelected}
                    setContentArray={setContentArray}
                    setImageArray={setImageArray}
                    imageArray={imageArray}
            />
            <Preview contentArray={contentArray}
                     selected={selected}
                     setSelected={setSelected}
                     imageArray={imageArray}
                     setImageArray={setImageArray}
            />
        </Main>
    );
}

export default App;
