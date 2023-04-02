import styles from "./JoinUs.module.css";
import JoinUsCat from "../../../assets/images/JoinUsCat.webp";
import JoinUsDogg from "../../../assets/images/JoinUsDogg.webp";
import JoinUsGrooming from "../../../assets/images/JoinUsGrooming.webp";
import JoinUsTraining from "../../../assets/images/JoinUsTraining.webp";
import JoinUsTwoDogs from "../../../assets/images/JoinUsTwoDogs.webp";
import JoinUsVet from "../../../assets/images/JoinUsVet.webp";
const JoinUs = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainLines}>
                <h1>Join Us.... Become a Friskee</h1>
            </div>
            <div className={styles.description}>
                <p>
                    Provide a general description of the items below and
                    introduce the
                </p>
                <p>
                    services you offer. Click on the text box to edit the
                    content.
                </p>
            </div>
            <div className={styles.imagesDiv}>
                <div className={styles.imageContent}>
                    <img src={JoinUsGrooming} alt="JoinUsGrooming" />
                    <p>As a Friskee </p>
                    <p>Groomer</p>
                </div>
                <div className={styles.imageContent}>
                    <img src={JoinUsCat} alt="joionUsCat" />
                    <p>As a Friskee</p>
                    <p>Breeder</p>
                </div>
                <div className={styles.imageContent}>
                    <img src={JoinUsDogg} alt="JoinUsDogg" />
                    <p>As a Friskee</p>
                    <p>Daycare</p>
                </div>
                <div className={styles.imageContent}>
                    <img src={JoinUsVet} alt="JoinUsVet" />
                    <p>As a Friskee </p>
                    <p>Vetenirary</p>
                </div>
                <div className={styles.imageContent}>
                    <img src={JoinUsTwoDogs} alt="JoinUsTwoDogs" />
                    <p>As a Friskee </p>
                    <p>Walker</p>
                </div>
                <div className={styles.imageContent}>
                    <img src={JoinUsTraining} alt="JoinUsTraining" />
                    <p>As a Friskee </p>
                    <p>Trainer</p>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
