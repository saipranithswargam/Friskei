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
                            <div className={styles.leftblock}>
                                <p>
                                    At Freskei, we believe that pets are cherished
                                    members of our families, our loyal
                                    companions, and the bringers of endless joy.
                                    We are a passionate team of pet enthusiasts
                                    dedicated to providing top-notch pet
                                    services that will make your fur babies wag
                                    their tails with excitement. With a sprinkle
                                    of spice and a dash of crispiness, we've
                                    created a pet haven like no other. Imagine a
                                    blend of the finest pet care services,
                                    served with an extra pinch of love and a
                                    dollop of creativity. That's what you'll
                                    find at XXX - a paradise for both pets and
                                    pet parents alike.
                                </p>
                            </div>
                            <div className={styles.leftblock}>
                                <p>
                                    At our core, we are the ultimate pet
                                    mediator, bringing together pet service
                                    providers, pet owners, and adorable critters
                                    in a sizzling blend of love and care.
                                    Whether you're searching for a trustworthy
                                    pet sitter, a skilled dog trainer, a
                                    pampering pet spa, or even the perfect match
                                    for adoption, we've got you covered with a
                                    delectable menu of options. But what makes
                                    us truly spicy, crispy, and oh-so-catchy?
                                    It's our commitment to excellence and the
                                    unbeatable passion that drives our team. We
                                    handpick every service provider on our
                                    platform, ensuring they meet our stringent
                                    criteria for expertise, compassion, and love
                                    for all things furry. No mediocre pet care
                                    here—only the juiciest, most dedicated
                                    professionals who will go the extra mile to
                                    shower your pets with love and attention.
                                </p>
                            </div>
                            <div className={styles.leftblock}>
                                <p>
                                    Feast your eyes on our dazzling array of
                                    services! From playful pet daycare to
                                    luxurious feline retreats, from nail trims
                                    that will make your pet strut with pride to
                                    energetic walks that will have them wagging
                                    their tails with delight, we have something
                                    to satisfy every pet's appetite for
                                    happiness. And for those seeking the
                                    ultimate commitment, we offer a streamlined
                                    adoption process, connecting you with pets
                                    looking for their forever homes, ensuring
                                    tails wag and purrs abound. But our platform
                                    is not just about connecting pets with
                                    services—it's a vibrant community that
                                    celebrates the incredible bond between
                                    humans and animals. Join our forums, share
                                    your pet stories, and connect with fellow
                                    pet enthusiasts who understand the
                                    irresistible charm of wet noses and playful
                                    paws.
                                </p>
                            </div>
                            <div className={styles.leftblock}>
                                <p>
                                    So, come on in and let the heat of our pet
                                    paradise warm your heart and ignite your
                                    passion for all things furry. We are your
                                    one-stop destination for all your pet needs,
                                    where spice and crispiness combine to create
                                    unforgettable experiences for both pets and
                                    their adoring humans.
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
