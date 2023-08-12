import { Fragment } from "react";
import styles from "./Services.module.css";
import Dog from "../../../assets/images/Dog.svg";
import Grooming from "../../../assets/images/Grooming.svg";
import Heart from "../../../assets/images/Heart.svg";
import Training from "../../../assets/images/Training.svg";
import Vet from "../../../assets/images/Vet.svg";
import Walking from "../../../assets/images/Walking.svg";
import Grooming2 from "./catGroom.jpg";
import Training2 from "./Training.jpg";
import Walking2 from "../../../assets/images/Walking.webp";
import Vet2 from "../../../assets/images/Vet.webp";
import DayCare from "../../../assets/images/DayCare.webp";
import Breeding from "../../../assets/images/Breeding.webp";
import CatsInBasket from "./Cats-in-a-basket_edited.jpg"
const Services = () => {
    return (
        <Fragment>
            <div className={styles.mainDiv}>
                <div className={styles.mainLine}>
                    <h1>
                        Your one-stop destination <br /> for your pet !!!
                    </h1>
                </div>
                <div className={styles.serviceIcons}>
                    <div className={styles.pair}>
                        <img
                            src={Grooming}
                            alt="Grooming"
                            className={styles.icons}
                            style={{ width: "30px" }}
                        />
                        <p>Grooming</p>
                    </div>
                    <div className={styles.pair}>
                        <img
                            src={Walking}
                            alt="Walking"
                            className={styles.icons}
                            style={{ width: "37px" }}
                        />
                        <p>Walking</p>
                    </div>
                    <div className={styles.pair}>
                        <img
                            src={Training}
                            alt="Training"
                            className={styles.icons}
                            style={{ width: "18px" }}
                        />
                        <p>Training</p>
                    </div>
                    <div className={styles.pair}>
                        <img
                            src={Vet}
                            alt="Vet"
                            className={styles.icons}
                            style={{ width: "28px" }}
                        />
                        <p>Vet</p>
                    </div>
                    <div className={styles.pair}>
                        <img
                            src={Dog}
                            alt="Dog"
                            className={styles.icons}
                            style={{ width: "28px" }}
                        />
                        <p>Daycare</p>
                    </div>
                    <div className={styles.pair}>
                        <img
                            src={Heart}
                            alt="Heart"
                            className={styles.icons}
                            style={{ width: "35px" }}
                        />
                        <p>Breeding</p>
                    </div>
                </div>
                <div className={styles.imagesGrid}>
                    <div className={styles.imgContainer}>
                        <img
                            src={Grooming2}
                            alt="training2"
                        />
                        <div className={styles.imgContent}>
                            <h3>Grooming</h3>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img
                            src={CatsInBasket}
                            alt="cats in basket"
                        />
                        <div className={styles.imgContent}>
                            <h3>Training</h3>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={Walking2} alt="training2" />
                        <div className={styles.imgContent}>
                            <h3>Walking</h3>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={Vet2} alt="training2" />
                        <div className={styles.imgContent}>
                            <h3>consult your vet</h3>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={DayCare} alt="training2" />
                        <div className={styles.imgContent}>
                            <h3>DayCare</h3>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={Breeding} alt="training2" />
                        <div className={styles.imgContent}>
                            <h3>Breeding</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Services;
