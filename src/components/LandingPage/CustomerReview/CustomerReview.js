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
                        <div className={styles.Img}>
                            <img
                                alt="dog1"
                                src={DogReview}
                                className={styles.image}
                            />
                        </div>
                        <div>
                            <p>
                                “I cannot express how grateful I am for
                                Petlevert! They matched me with the perfect pet
                                sitter for my beloved cat, Whiskers. Lisa from
                                Toronto, the service provider they connected me
                                with, was exceptional. She took care of Whiskers
                                as if he were her own and provided daily updates
                                and photos. It gave me so much peace of mind
                                while I was away. Petlevert truly understands
                                the importance of quality pet care, and I highly
                                recommend their services.”
                            </p>
                        </div>
                        <p>Emily Thompson, Canada</p>
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
                                “I was in dire need of a reliable dog walker,
                                and Petlevert came to my rescue! They connected
                                me with Sara, a dog walker based in Oslo. She
                                has been absolutely fantastic with my energetic
                                Labrador, Max. Sara ensures Max gets his daily
                                exercise and keeps him entertained with fun
                                activities. Thanks to Petlevert, I found the
                                perfect match for Max's needs. I can't thank
                                them enough for their excellent service!”
                            </p>
                        </div>
                        <p>Olsen, Norway</p>
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
                                “Petlevert has been a game-changer for me and my
                                cat, Luna. I recently moved to Bergen and was
                                concerned about finding a trustworthy and caring
                                cat sitter. Thankfully, Petlevert connected me
                                with Sofia, a fantastic pet sitter. Sofia took
                                care of Luna during my business trips, and Luna
                                instantly adored her. The updates and photos I
                                received from Sofia gave me peace of mind
                                knowing that Luna was in loving hands. I highly
                                recommend Petlevert to all pet owners seeking
                                reliable and loving pet services”
                            </p>
                        </div>
                        <p>Anna Andersson, Norway</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
