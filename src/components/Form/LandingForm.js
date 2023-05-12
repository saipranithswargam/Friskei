import * as React from "react";
import styles from "./LandingForm.module.css";
import Boarding from "../../assets/images/BoardingIcon.svg";
import HouseSitting from "../../assets/images/HouseSitting.svg";
import DropInVisits from "../../assets/images/DropInVisits.svg";
import DogDayCare from "../../assets/images/DogDaycare.svg";
import DogWalking from "../../assets/images/DogWalking.svg";
import Heart from "../../assets/images/heart.png";
// import Arrow from "../../assets/images/Arrow.svg";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const LandingForm = () => {
    const [selectedCat, setSelectedCat] = React.useState(false);
    const [selectedDog, setSelectedDog] = React.useState(true);
    const [selectOther, setSelectOther] = React.useState(false);
    // const [chosenPara, setChosenPara] = React.useState("Boarding near");
    const [activeBoarding, setActiveBoarding] = React.useState(true);
    const [activeHouseSitting, setActiveHouseSitting] = React.useState(false);
    const [activeDropIn, setActiveDropIn] = React.useState(false);
    const [activeDayCare, setActiveDayCare] = React.useState(false);
    const [activeWalking, setActiveWalking] = React.useState(false);
    const [activeBreeding, setActiveBreeding] = React.useState(false);
    // const [small, setSmall] = React.useState(true);
    // const [medium, setMedium] = React.useState(false);
    // const [large, setLarge] = React.useState(false);
    // const [giant, setGiant] = React.useState(false);
    // const [size, setSize] = React.useState("small");
    const [serviceType, setServiceType] = React.useState("boarding");
    const [location, setLocation] = React.useState("");

    const locationHandler = (event) => {
        setLocation(event.target.value);
    };

    const dogClickHandler = () => {
        setSelectedDog(true);
        setSelectOther(false);
        setSelectedCat(false);
    };
    const catClickHandler = () => {
        setSelectedCat(true);
        setSelectOther(false);
        setSelectedDog(false);
    };

    const groomingClickHandler = (event) => {
        setActiveBoarding(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("grroming");
    };

    const trainingClickHandler = () => {
        setActiveHouseSitting(true);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("training");
    };

    const walkingClickHandler = () => {
        setActiveDropIn(true);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("walking");
    };

    const vetClickHandler = () => {
        setActiveDayCare(true);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("vet");
    };

    const daycareClickHandler = () => {
        setActiveWalking(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveBreeding(false);
        setServiceType("daycare");
    };

    const breedingClickHandler = () => {
        setActiveWalking(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveBreeding(true);
        setServiceType("breeding");
    };

    const otherClickHandler = () => {
        setSelectOther(true);
        setSelectedDog(false);
        setSelectedCat(false);
    };
    // const smallSizeHandler = () => {
    //     setSmall(true);
    //     setMedium(false);
    //     setLarge(false);
    //     setGiant(false);
    //     setSize("small");
    // };
    // const mediumSizeHandler = () => {
    //     setSmall(false);
    //     setMedium(true);
    //     setLarge(false);
    //     setGiant(false);
    //     setSize("medium");
    // };
    // const largeSizeHandler = () => {
    //     setSmall(false);
    //     setMedium(false);
    //     setLarge(true);
    //     setGiant(false);
    //     setSize("large");
    // };
    // const giantSizeHandler = () => {
    //     setSmall(false);
    //     setMedium(false);
    //     setLarge(false);
    //     setGiant(true);
    //     setSize("giant");
    // };

    let activeGroomingStyles = activeBoarding ? styles.active : styles.Boarding;
    let activeTrainingStyles = activeHouseSitting
        ? styles.active
        : styles.HouseSitting;
    let activeVetStyles = activeDayCare ? styles.active : styles.DogDayCare;
    let activeDaycareStyles = activeWalking ? styles.active : styles.DogWalking;
    let activeWalkingStyles = activeDropIn ? styles.active : styles.DropInVisits;
    let activeBreedingStyles = activeBreeding ? styles.active : styles.breeding;
    // let activeSmallStyles = small ? styles.activeSize : styles.small;
    // let activeMediumStyles = medium ? styles.activeSize : styles.medium;
    // let activeLargeStyles = large ? styles.activeSize : styles.large;
    // let activeGiantStyles = giant ? styles.activeSize : styles.Giant;

    const submitHandler = () => {
        console.log(serviceType, location);
    };
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <span className={styles.option}>
                    I'm looking for service for my:
                </span>
                <input
                    type="checkbox"
                    onChange={dogClickHandler}
                    checked={selectedDog}
                />
                <span className={styles.dog}>Dog</span>
                <input
                    type="checkbox"
                    onChange={catClickHandler}
                    checked={selectedCat}
                />
                <span className={styles.cat}>Cat</span>
                <input
                    type="checkbox"
                    onChange={otherClickHandler}
                    checked={selectOther}
                />
                <span className={styles.cat}>Other</span>
            </div>
            <div className={styles.lower}>
                <div className={styles.options}>
                    <div
                        className={activeGroomingStyles}
                        onClick={groomingClickHandler}
                    >
                        <div className={styles.imageDiv}>
                            <img alt="" src={Boarding} />
                        </div>
                        <p>Grooming</p>
                    </div>
                    <div
                        className={activeTrainingStyles}
                        onClick={trainingClickHandler}
                    >
                        <div className={styles.imageDiv}>
                            <img alt="" src={HouseSitting} />
                        </div>
                        <p>Training</p>
                    </div>
                    <div
                        className={activeWalkingStyles}
                        onClick={walkingClickHandler}
                    >
                        <div className={styles.imageDiv}>
                            <img alt="" src={DropInVisits} />
                        </div>
                        <p>Walking</p>
                    </div>
                    <div
                        className={activeVetStyles}
                        onClick={vetClickHandler}
                    >
                        <div className={styles.imageDiv}>
                            <img alt="" src={DogDayCare} />
                        </div>
                        <p>Vet</p>
                    </div>
                    <div
                        className={activeDaycareStyles}
                        onClick={daycareClickHandler}
                    >
                        <div className={styles.imageDiv}>
                            <img alt="" src={DogWalking} />
                        </div>
                        <p>DayCare</p>
                    </div>
                    <div
                        className={activeBreedingStyles}
                        onClick={breedingClickHandler}
                    >
                        <div className={styles.imageDiv}>
                            <img alt="" src={Heart} />
                        </div>
                        <p>Breeding</p>
                    </div>
                </div>

                <div className={styles.sizeSearch}>
                    <div className={styles.zipPicker}>
                        <p>Service Location</p>
                        <input
                            type="text"
                            placeholder="City"
                            style={{
                                padding: "16.5px 0 16.5px 18px",
                                width: "100%",
                            }}
                            onChange={locationHandler}
                        />
                    </div>
                    <div className={styles.button}>
                        <button onClick={submitHandler}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingForm;
