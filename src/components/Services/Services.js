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
    // {
    //     name: "Join as PetAdoption",
    //     src: Grooming,
    //     link: "/joinus/register/petadoption",
    // },
];
const JoinUsPage = () => {
    return (
        <>
            <div className={styles.upper}>
                <div>
                    <h1>Join Friskei Today </h1>
                </div>
                <img
                    alt="dog and cat"
                    src="https://static.wixstatic.com/media/84770f_cc7fbf222d044cf09028f921a0cfe36e~mv2.png/v1/fill/w_1163,h_699,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/shutterstock_184908566%20copy.png"
                ></img>
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
            <Footer />
        </>
    );
};

export default JoinUsPage;
