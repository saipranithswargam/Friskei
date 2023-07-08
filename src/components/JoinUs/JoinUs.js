import styles from "./JoinUs.module.css";
import Grooming from "../../assets/images/PetGrooming.webp";
import Breeder from "../../assets/images/Breeder.webp";
import DayCarer from "../../assets/images/DayCarer.webp";
import DogWalker from "../../assets/images/DogWalker.webp";
import PetTrainer from "../../assets/images/PetTrainer.webp";
import Vet from "../../assets/images/VeternaryDoc.webp";
import { Link } from "react-router-dom";
const cards = [
    {
        name: "Join as PetGroomer",
        src: Grooming,
        link: "/joinus/register/petgroomer",
        alt: "groomer",
    },
    {
        name: "Join as PetWalker",
        src: DogWalker,
        link: "/joinus/register/petwalker",
        alt: "petwalker",
    },
    {
        name: "Join as PetTrainer",
        src: PetTrainer,
        link: "/joinus/register/pettrainer",
        alt: "pettrainer",
    },
    {
        name: "Join as Vet",
        src: Vet,
        link: "/joinus/register/vet",
        alt: "vet",
    },
    {
        name: "Join as DayCarer",
        src: DayCarer,
        link: "/joinus/register/daycarer",
        alt: "daycare",
    },
    {
        name: "Join as PetBreeder",
        src: Breeder,
        link: "/joinus/register/petbreeder",
        alt: "breeder",
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
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default JoinUsPage;
