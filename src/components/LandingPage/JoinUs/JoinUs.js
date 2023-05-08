import styles from "./JoinUs.module.css";
import JoinUsCat from "../../../assets/images/JoinUsCat.webp";
import JoinUsDogg from "../../../assets/images/JoinUsDogg.webp";
import JoinUsGrooming from "../../../assets/images/JoinUsGrooming.webp";
import JoinUsTraining from "../../../assets/images/JoinUsTraining.webp";
import JoinUsTwoDogs from "../../../assets/images/JoinUsTwoDogs.webp";
import JoinUsVet from "../../../assets/images/JoinUsVet.webp";
import { Link } from "react-router-dom";
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
                <Link
                    to="/joinus/register/petgroomer"
                    className={styles.remove}
                >
                    <div className={styles.imageContent}>
                        <div className={styles.Img}>
                            <img src={JoinUsGrooming} alt="JoinUsGrooming" />
                        </div>
                        <p>As a Friskee </p>
                        <p>Groomer</p>
                    </div>
                </Link>
                <Link
                    to="/joinus/register/petbreeder"
                    className={styles.remove}
                >
                    <div className={styles.imageContent}>
                        <div className={styles.Img}>
                            <img src={JoinUsCat} alt="joionUsCat" />
                        </div>
                        <p>As a Friskee</p>
                        <p>Breeder</p>
                    </div>
                </Link>
                <Link to="/joinus/register/daycarer" className={styles.remove}>
                    <div className={styles.imageContent}>
                        <div className={styles.Img}>
                            <img src={JoinUsDogg} alt="JoinUsDogg" />
                        </div>
                        <p>As a Friskee</p>
                        <p>Daycare</p>
                    </div>
                </Link>
                <Link to="/joinus/register/vet" className={styles.remove}>
                    <div className={styles.imageContent}>
                        <div className={styles.Img}>
                            <img src={JoinUsVet} alt="JoinUsVet" />
                        </div>
                        <p>As a Friskee </p>
                        <p>Vetenirary</p>
                    </div>
                </Link>
                <Link to="/joinus/register/petwalker" className={styles.remove}>
                    <div className={styles.imageContent}>
                        <div className={styles.Img}>
                            <img src={JoinUsTwoDogs} alt="JoinUsTwoDogs" />
                        </div>
                        <p>As a Friskee </p>
                        <p>Walker</p>
                    </div>
                </Link>
                <Link
                    to="/joinus/register/pettrainer"
                    className={styles.remove}
                >
                    <div className={styles.imageContent}>
                        <div className={styles.Img}>
                            <img src={JoinUsTraining} alt="JoinUsTraining" />
                        </div>
                        <p>As a Friskee </p>
                        <p>Trainer</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default JoinUs;
