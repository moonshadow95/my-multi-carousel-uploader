import React, {useEffect, useState} from 'react';
import parse from "html-react-parser";
import SimpleSlider from "./SimpleSlider";

const Section = ({content, imageArray}) => {
    const [paragraph, setParagraph]=useState(content);
    return (
        <div>
            {parse(paragraph.content)}
        </div>
    );
}

export default Section;