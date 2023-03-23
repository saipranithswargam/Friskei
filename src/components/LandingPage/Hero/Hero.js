import styles from "./Hero.module.css";
import { Fragment } from "react";

const Hero = () => {
    return (
        <Fragment>
            <div className={styles.mainDiv}>
                <div className={styles.colouredDiv}>
                    <div className={styles.contentDiv}>
                        <h1>The Quality Care </h1>
                        <h1>Your Pet Deserves</h1>
                        <p>For a pawfect look and feel</p>
                    </div>
                </div>
                <img
                    className={styles.dogImage}
                    src="https://static.wixstatic.com/media/84770f_cc7fbf222d044cf09028f921a0cfe36e~mv2.png/v1/fill/w_1163,h_699,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/shutterstock_184908566%20copy.png"
                    alt="dogImage"
                />
            </div>
        </Fragment>
    );
};

export default Hero;
