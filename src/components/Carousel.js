import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import React, { Component } from "react";
import Slider from "react-slick";

const Wrap = styled.div`
  width: 84%;
  color: #FFF;
  margin: auto;
    .slick-slide>div>div>img {
      margin: auto;
    }
    .slick-prev:before {
      color: black;
      left: 0;
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

        return (
            <Wrap>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {
                        images.map((content, index)=>
                            <div key={index}>
                                <img src={content.dataURL} alt=""/>
                            </div>
                        )
                    }
                </Slider>
            </Wrap>
        );
    }
}