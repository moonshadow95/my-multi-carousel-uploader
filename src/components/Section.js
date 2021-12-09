import React, {useEffect, useState} from 'react';
import parse from "html-react-parser";

const Section = ({content}) => {
    const [paragraph, setParagraph]=useState(content);
    return (
        <div>
            {parse(paragraph.content)}
        </div>
    );
}

export default Section;