import React from "react";
import classes from "./CustomerReviewCarousel.module.css";
import SliderComp from "./SliderComp";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Service__1 from "../../../assets/images/Services__1.jpg";
import Service__2 from "../../../assets/images/Services__2.jpg";
import Service__3 from "../../../assets/images/Services__3.jpg";
import Service__4 from "../../../assets/images/Services__4.jpg";
import Service__5 from "../../../assets/images/Services__5.jpg";
import Service__6 from "../../../assets/images/Services__6.jpg";
import Service__7 from "../../../assets/images/Services__7.jpg";
import Service__8 from "../../../assets/images/Services__8.jpg";
const CustomerReviewCarousel = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.content}>
                    <h1>See All Our Glamorous</h1>
                    <h1>Customers</h1>
                    <div className={classes.buttonDiv}>
                        <a href="https://www.instagram.com/">
                            <button>Follow Us</button>
                        </a>
                    </div>
                </div>
                <div className={classes.productGalleryContainer}>
                    <div className={classes.galleryContainer}>
                        <SliderComp>
                            <div className={classes.galleryImage}>
                                <img src={Service__1} alt="Service__1" />
                            </div>
                            <div className={classes.galleryImage}>
                                <img src={Service__2} alt="Service__2"></img>
                            </div>
                            <div className={classes.galleryImage}>
                                <img src={Service__3} alt="Service__3"></img>
                            </div>
                            <div className={classes.galleryImage}>
                                <img src={Service__4} alt="Service__4"></img>
                            </div>
                            <div className={classes.galleryImage}>
                                <img src={Service__5} alt="Service__5"></img>
                            </div>
                            <div className={classes.galleryImage}>
                                <img src={Service__6} alt="Service__6"></img>
                            </div>
                            <div className={classes.galleryImage}>
                                <img src={Service__7} alt="Service__7"></img>
                            </div>
                            <div className={classes.galleryImage}>
                                <img src={Service__8} alt="Service__8"></img>
                            </div>
                        </SliderComp>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerReviewCarousel;
