import styles from "./Services.module.css";
import Grooming from "../../assets/images/PetGrooming.webp";
import Breeder from "../../assets/images/Breeder.webp";
import DayCarer from "../../assets/images/DayCarer.webp";
import DogWalker from "../../assets/images/DogWalker.webp";
import PetTrainer from "../../assets/images/PetTrainer.webp";
import Vet from "../../assets/images/VeternaryDoc.webp";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const cards = [
    {
        name: "Join as PetGroomer",
        src: Grooming,
        link: "/joinus/register/petgroomer",
        alt: "groomer",
        des: "Pamper your furry friend with our exclusive pet grooming services. We offer personalized care for a happy and healthy pet",
    },
    {
        name: "Join as PetWalker",
        src: DogWalker,
        link: "/joinus/register/petwalker",
        alt: "petwalker",
        des: "Looking for exclusive pet walking services? Our professional team offers customized, personalized walks to meet your furry friend's every need.",
    },
    {
        name: "Join as PetTrainer",
        src: PetTrainer,
        link: "/joinus/register/pettrainer",
        alt: "pettrainer",
        des: "Our exclusive pet training services offer personalized attention and proven methods to help your furry friend reach their full potential.",
    },
    {
        name: "Join as Vet",
        src: Vet,
        link: "/joinus/register/vet",
        alt: "vet",
        des: "Our exclusive vet care services offer personalized care, emergency services, and state-of-the-art equipment for your furry friend.",
    },
    {
        name: "Join as DayCarer",
        src: DayCarer,
        link: "/joinus/register/daycarer",
        alt: "daycare",
        des: "Our exclusive services provide top-quality, personalized care to your day care facility. Trust us to nurture your pet's development.",
    },
    {
        name: "Join as PetBreeder",
        src: Breeder,
        link: "/joinus/register/petbreeder",
        alt: "breeder",
        des: "Our exclusive pet breeding services offer personalized care and attention to ensure your pet's health and happiness.",
    },
];
const JoinUsPage = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.upper}>
                    <div className={styles.image}>
                        <img
                            src="https://static.wixstatic.com/media/0c7a60_874bde463b50435bb1a47bc8af9a3de1~mv2.jpg/v1/fill/w_674,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0c7a60_874bde463b50435bb1a47bc8af9a3de1~mv2.jpg"
                            alt="dogg"
                        />
                    </div>
                    <div className={styles.contentDiv}>
                        <div className={styles.content}>
                            <h1>What We Offer</h1>
                            <p>
                                Welcome to our exclusive pet care services! Our
                                services include personalized care plans
                                tailored to meet your pet's unique needs, from
                                daily walks to customized feeding schedules. We
                                also offer professional grooming services to
                                keep your pet looking and feeling their best.
                                Our team of experienced and certified pet care
                                professionals are passionate about animals and
                                dedicated to providing a safe and comfortable
                                environment for your pet. Contact us today to
                                learn more about our exclusive pet care services
                                and how we can help your pet live their happiest
                                and healthiest life.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.lower}>
                    {cards.map((doc) => (
                        <Link
                            to={doc.link}
                            className={styles.cardLink}
                            key={doc.alt}
                        >
                            <div className={styles.card}>
                                <h4>{doc.name}</h4>
                                <hr />
                                <div className={styles.imageDiv}>
                                    <img src={doc.src} alt={doc.alt} />
                                </div>
                                <div className={styles.desDiv}>
                                    <p>{doc.des}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JoinUsPage;
