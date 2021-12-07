import React from 'react';
import parse from "html-react-parser";
import styled from 'styled-components';
import SimpleSlider from "./Carousel";

const PreviewContainer = styled.div`
    margin: 1.5em;
    .slick-slider{
        margin-bottom: 76px;
    }
`

const Preview = ({content, selected, setSelected}) => {
    return (
        <PreviewContainer>
            <h2>미리보기</h2>
            <div>
                {parse(content)}
                <SimpleSlider images={selected} setImages={setSelected}/>
            </div>
        </PreviewContainer>
)};

export default Preview;