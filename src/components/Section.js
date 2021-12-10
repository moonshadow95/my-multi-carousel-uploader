import React, {useState} from 'react';
import parse from "html-react-parser";
import SimpleSlider from "./SimpleSlider";

const Section = ({content, images}) => {
    return (
        <div>
            {content && parse(content.content)}
            {images && <SimpleSlider images={images} />}
        </div>
    );
}

export default Section;