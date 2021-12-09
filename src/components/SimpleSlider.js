import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import React, { Component } from "react";
import Slider from "react-slick";

const Wrap = styled.div`
  width: 40%;
  max-width: 800px;
  color: #FFF;
  margin: auto;

    .slick-slide>div>div>img {
      width: 100%;
      max-width:50vw;
      margin: auto;
    }
    .slick-prev:before {
      color: black;
    }
    .slick-next:before {
      opacity: 1;
      color: black;
`

export default class SimpleSlider extends Component {

    render() {
        const {images} = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        console.log(`images`, images)
        return (
            <Wrap>
                <Slider {...settings}>
                    {
                        images.map((content, index)=>
                            <div key={index}>
                                <img src={content.dataURL} alt={`${index+1}번 이미지`}/>
                            </div>
                        )
                    }
                </Slider>
            </Wrap>
        );
    }
}