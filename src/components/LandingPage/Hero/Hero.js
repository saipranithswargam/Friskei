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
                        <p>
                            Nurturing your Pet's Health, Happiness, and
                            Well-Being with Petlevert
                        </p>
                    </div>
                </div>
                <img
                    className={styles.dogImage}
                    src="https://static.wixstatic.com/media/0c7a60_f8d4f5562fba4f7b9eeb81a302a8600d~mv2.png/v1/fill/w_694,h_759,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/141-1410341_pets-png-transparent-background-dog-reindeer-costume%20(1)_edited.png"
                    alt="dogImage"
                />
            </div>
        </Fragment>
    );
};

export default Hero;
