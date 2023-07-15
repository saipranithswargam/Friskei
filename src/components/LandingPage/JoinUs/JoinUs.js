import styles from "./JoinUs.module.css";
import JoinUsCat from "../../../assets/images/JoinUsCat.webp";
import JoinUsDogg from "../../../assets/images/JoinUsDogg.webp";
import JoinUsGrooming from "../../../assets/images/JoinUsGrooming.webp";
import JoinUsTraining from "../../../assets/images/JoinUsTraining.webp";
import JoinUsTwoDogs from "../../../assets/images/JoinUsTwoDogs.webp";
import JoinUsVet from "../../../assets/images/JoinUsVet.webp";
import { Link, useNavigate } from "react-router-dom";
const JoinUs = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.main}>
            <div className={styles.mainLines}>
                <h1>Join the Petlevert Community:</h1>
                <h1>Where Pet Lovers Unite!</h1>
            </div>
            <div className={styles.description}>
                <p>
                    At PetLevert, we are committed to providing exceptional
                    services and
                </p>
                <p>
                    fostering a community of pet enthusiasts. Join us today and
                    let us be your
                </p>
                <p>go-to destination for all things pet-related.</p>
            </div>
            <div className={styles.buttonDiv}>
                <button
                    onClick={() => {
                        navigate("/joinus");
                    }}
                >
                    <div className={styles.insideButton}>
                        <span>JOIN US</span>
                        <svg
                            data-bbox="9 70.9 181 59"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 200"
                        >
                            <g>
                                <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                            </g>
                        </svg>
                    </div>
                </button>
            </div>
            {/* <div className={styles.imagesDiv}>
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
            </div> */}
        </div>
    );
};

export default JoinUs;
