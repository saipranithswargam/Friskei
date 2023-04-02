import React, { useRef } from "react";
import Slider from "react-slick";
import classes from "./SliderComp.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
const SliderComp = (props) => {
    const arrowRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1070,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    const goBack = () => {
        arrowRef.current.slickPrev();
    };
    const goNext = () => {
        arrowRef.current.slickNext();
    };
    return (
        <div className={classes.sliderContainer}>
            <button className={classes.backArrow} onClick={goBack}>
                <MdArrowBackIos />
            </button>
            <button className={classes.nextArrow} onClick={goNext}>
                <MdArrowForwardIos />
            </button>
            <Slider ref={arrowRef} {...settings} className={classes.slider}>
                {props.children}
            </Slider>
        </div>
    );
};

export default SliderComp;
