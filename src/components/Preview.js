import React from 'react';
import styled from 'styled-components';
import SimpleSlider from "./SimpleSlider";
import Section from "./Section";

const PreviewContainer = styled.div`
    border-left: 1px solid #000;
    .slick-slider{
        margin-bottom: 76px;
    }
  @media (max-width:1450px){
    border-left: none;
    border-top: 1px solid #000;
  }
`

const Preview = ({contentArray, imageArray}) => {
    console.log('imageArray', imageArray)
    console.log('contentArray', contentArray)
    return (
        <PreviewContainer>
            <h2>미리보기</h2>
            { contentArray.length > 0 && contentArray.map((content, index) =>
                imageArray.map((images,index)=>
                    <Section content={content} key={index} images={images} />
                )
            )}
        </PreviewContainer>
)};

export default Preview;