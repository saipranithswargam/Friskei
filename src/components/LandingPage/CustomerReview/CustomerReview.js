import styles from "./CustomerReview.module.css";
import DogReview from "../../../assets/images/dogReview.webp";
import DogReview2 from "../../../assets/images/dogReview2.webp";
import DogReview3 from "../../../assets/images/dogReview3.webp";

const CustomerReview = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>What Our Happy</h1>
                <h1>Clients Say</h1>
            </div>
            <div className={styles.review}>
                <div className={styles.review1}>
                    <div className={styles.reviewCard}>
                        <div className={styles.Img} >
                            <img
                                alt="dog1"
                                src={DogReview}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <p>
                                “I'm a testimonial. Click to edit me and add
                                text that says something nice about you and your
                                services.”
                            </p>
                        </div>
                        <p>Dani, Pacific Heights</p>
                    </div>
                </div>
                <div className={styles.review2}>
                    <div className={styles.reviewCard2}>
                        <div className={styles.Img}>
                            <img
                                alt="dog2"
                                src={DogReview2}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <p>
                                “I'm a testimonial. Click to edit me and add
                                text that says something nice about you and your
                                services.”
                            </p>
                        </div>
                        <p>Dani, Pacific Heights</p>
                    </div>
                </div>
                <div className={styles.review3}>
                    <div className={styles.reviewCard3}>
                        <div className={styles.Img}>
                            <img
                                alt="dog3"
                                src={DogReview3}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <p>
                                “I'm a testimonial. Click to edit me and add
                                text that says something nice about you and your
                                services.”
                            </p>
                        </div>
                        <p>Dani, Pacific Heights</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
