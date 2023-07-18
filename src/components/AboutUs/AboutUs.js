import styles from "./AboutUs.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const AboutUs = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.bgImage}></div>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        <div className={styles.heading}>
                            <h1 style={{ textAlign: "center" }}>AboutUs</h1>
                            <h3 style={{ textAlign: "center" }}>
                                At Petlevert, Where Passion Meets Paws:
                                Unleashing Love and Care for Every Furry Friend!
                            </h3>
                            <div className={styles.leftblock}>
                                <p>
                                    <span>Our Story:- </span> 
                                    Founded by Madhav and Abdul - two passionate
                                    individuals dedicated to providing
                                    exceptional care for animals. Their journey
                                    began with their own furry friend, which
                                    ignited a deep understanding of the
                                    importance of quality pet care. Inspired by
                                    their own experiences, they set out to
                                    create a business that prioritizes the
                                    well-being and happiness of pets. ​ With
                                    their combined expertise and love for
                                    animals, Madhav and Abdul have curated a
                                    team of like-minded professionals who share
                                    the same commitment and values. Each team
                                    member is handpicked for their genuine love
                                    for animals and their unwavering dedication
                                    to providing personalized care.
                                </p>
                            </div>
                            <div className={styles.leftblock}>
                                <p>
                                    Beyond their professional responsibilities,
                                    Madhav and Abdul lead active lives with
                                    their own Pets. They enjoy exploring nature
                                    through hikes and discovering pet-friendly
                                    establishments. Their personal experiences
                                    and passion drive them to constantly improve
                                    and deliver the best care for your furry
                                    family members. ​ At our pet care services,
                                    we understand that pets are cherished family
                                    members, and we strive to create a nurturing
                                    and enriching environment for them. With
                                    Madhav, Abdul, and their team by your side,
                                    you can trust that your pets will receive
                                    the highest quality care, tailored to their
                                    individual needs.
                                </p>
                            </div>
                            <div className={styles.leftblock}>
                                <p>
                                    Join us in providing exceptional care and
                                    creating a joyful experience for your
                                    beloved pets. We look forward to welcoming
                                    you to our pet care family.
                                </p>
                            </div>
                            <div className={styles.endingLine}>
                                <h3>
                                    Welcome to our world. Welcome to the sizzle
                                    of a lifetime!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <Footer />
        </>
    );
};

export default AboutUs;
