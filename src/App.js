import Editor from "./components/Editor";
import {useState} from "react";

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
    return (
        <div className="App">
            <Editor images={images} setImages={setImages}/>
        </div>
    );
}

export default App;
