import * as React from "react";
import styles from "./LandingForm.module.css";
import Boarding from "../../assets/images/BoardingIcon.svg";
import HouseSitting from "../../assets/images/HouseSitting.svg";
import DropInVisits from "../../assets/images/DropInVisits.svg";
import DogDayCare from "../../assets/images/DogDaycare.svg";
import DogWalking from "../../assets/images/DogWalking.svg";
// import Arrow from "../../assets/images/Arrow.svg";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const LandingForm = () => {
    const [selectedCat, setSelectedCat] = React.useState(false);
    const [selectedDog, setSelectedDog] = React.useState(true);
    const [chosenPara, setChosenPara] = React.useState("Boarding near");
    const [activeBoarding, setActiveBoarding] = React.useState(true);
    const [activeHouseSitting, setActiveHouseSitting] = React.useState(false);
    const [activeDropIn, setActiveDropIn] = React.useState(false);
    const [activeDayCare, setActiveDayCare] = React.useState(false);
    const [activeWalking, setActiveWalking] = React.useState(false);
    const [small, setSmall] = React.useState(true);
    const [medium, setMedium] = React.useState(false);
    const [large, setLarge] = React.useState(false);
    const [giant, setGiant] = React.useState(false);
    const [serviceType, setServiceType] = React.useState("boarding");
    const [size, setSize] = React.useState("small");
    const [location, setLocation] = React.useState("");

    const locationHandler = (event) => {
        setLocation(event.target.value);
    };

    const dogClickHandler = () => {
        setSelectedDog((prevValue) => {
            return !prevValue;
        });
    };
    const catClickHandler = () => {
        setSelectedCat((prevValue) => {
            return !prevValue;
        });
    };

    const boadingClickHandler = (event) => {
        setChosenPara("Boarding near");
        setActiveBoarding(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveWalking(false);
        setServiceType("boarding");
    };

    const houseSittingClickHandler = () => {
        setChosenPara("House Sitting near");
        setActiveHouseSitting(true);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveWalking(false);
        setServiceType("houseSitting");
    };

    const dropInVisitsClickHandler = () => {
        setChosenPara("Drop-In Visits near");
        setActiveDropIn(true);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveWalking(false);
        setServiceType("dropIn");
    };

    const dogDayCareClickHandler = () => {
        setChosenPara("Doggy Day Care near");
        setActiveDayCare(true);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveWalking(false);
        setServiceType("dogDaycare");
    };

    const dogWalkingClickHandler = () => {
        setChosenPara("Dog Walking near");
        setActiveWalking(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setServiceType("dogWalking");
    };
    const smallSizeHandler = () => {
        setSmall(true);
        setMedium(false);
        setLarge(false);
        setGiant(false);
        setSize("small");
    };
    const mediumSizeHandler = () => {
        setSmall(false);
        setMedium(true);
        setLarge(false);
        setGiant(false);
        setSize("medium");
    };
    const largeSizeHandler = () => {
        setSmall(false);
        setMedium(false);
        setLarge(true);
        setGiant(false);
        setSize("large");
    };
    const giantSizeHandler = () => {
        setSmall(false);
        setMedium(false);
        setLarge(false);
        setGiant(true);
        setSize("giant");
    };

    let activeBoardingStyles = activeBoarding ? styles.active : styles.Boarding;
    let activeHouseSittingStyles = activeHouseSitting
        ? styles.active
        : styles.HouseSitting;
    let activeDayCareStyles = activeDayCare ? styles.active : styles.DogDayCare;
    let activeWalkingStyles = activeWalking ? styles.active : styles.DogWalking;
    let activeDropInStyles = activeDropIn ? styles.active : styles.DropInVisits;

    let activeSmallStyles = small ? styles.activeSize : styles.small;
    let activeMediumStyles = medium ? styles.activeSize : styles.medium;
    let activeLargeStyles = large ? styles.activeSize : styles.large;
    let activeGiantStyles = giant ? styles.activeSize : styles.Giant;

    const submitHandler = () => {
        console.log(size, serviceType, location);
    };
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                <span className={styles.option}>
                    I'm looking for service for my:
                </span>
                <input
                    type="checkbox"
                    onClick={dogClickHandler}
                    defaultChecked={selectedDog}
                />
                <span className={styles.dog}>Dog</span>
                <input
                    type="checkbox"
                    onClick={catClickHandler}
                    defaultChecked={selectedCat}
                />
                <span className={styles.cat}>Cat</span>
            </div>
            {(!selectedCat || selectedDog) && (
                <div className={styles.lower}>
                    <div className={styles.options}>
                        <div
                            className={activeBoardingStyles}
                            onClick={boadingClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={Boarding} />
                            </div>
                            <p>Boarding</p>
                        </div>
                        <div
                            className={activeHouseSittingStyles}
                            onClick={houseSittingClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={HouseSitting} />
                            </div>
                            <p>HouseSitting</p>
                        </div>
                        <div
                            className={activeDropInStyles}
                            onClick={dropInVisitsClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={DropInVisits} />
                            </div>
                            <p>Drop-In Visits</p>
                        </div>
                        <div
                            className={activeDayCareStyles}
                            onClick={dogDayCareClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={DogDayCare} />
                            </div>
                            <p>Doggo Day Care</p>
                        </div>
                        <div
                            className={activeWalkingStyles}
                            onClick={dogWalkingClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={DogWalking} />
                            </div>
                            <p>Dog Walking</p>
                        </div>
                    </div>
                    <div className={styles.InputDatePicker}>
                        <div className={styles.sizeOuter}>
                            <p>My Dog Size</p>
                            <div className={styles.size}>
                                <div
                                    className={activeSmallStyles}
                                    onClick={smallSizeHandler}
                                >
                                    <p>Small</p>
                                    <p>0 - 15 lbs</p>
                                </div>
                                <div
                                    className={activeMediumStyles}
                                    onClick={mediumSizeHandler}
                                >
                                    <p>Medium</p>
                                    <p>16 - 40 lbs</p>
                                </div>
                                <div
                                    className={activeLargeStyles}
                                    onClick={largeSizeHandler}
                                >
                                    <p>Large</p>
                                    <p>41 - 100 lbs</p>
                                </div>
                                <div
                                    className={activeGiantStyles}
                                    onClick={giantSizeHandler}
                                >
                                    <p>Giant</p>
                                    <p>101+ lbs</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.DatePicker}>
                            <p>For these days</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label={datePlaceholder.first} />
                            </LocalizationProvider>
                            <img
                                alt="arrow"
                                src={Arrow}
                                className={styles.arrow}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label={datePlaceholder.second} />
                            </LocalizationProvider>
                        </div> */}
                    </div>
                    <div className={styles.sizeSearch}>
                        <div className={styles.zipPicker}>
                            <p>{chosenPara}</p>
                            <input
                                type="text"
                                placeholder="Zip code"
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
            )}
            {selectedCat && !selectedDog && (
                <div className={styles.lower}>
                    {/* <div className={styles.outerSentance}>
                        <p>For When You're Away</p>
                    </div> */}
                    <div className={styles.options2}>
                        <div className={styles.Boarding2}>
                            <div className={styles.imageDiv}>
                                <img alt="" src={Boarding} />
                            </div>
                            <p>Boarding</p>
                        </div>
                        <div className={styles.HouseSitting2}>
                            <div className={styles.imageDiv}>
                                <img alt="" src={HouseSitting} />
                            </div>
                            <p>HouseSitting</p>
                        </div>
                        <div className={styles.DropInVisits2}>
                            <div className={styles.imageDiv}>
                                <img alt="" src={DropInVisits} />
                            </div>
                            <p>Drop-In Visits</p>
                        </div>
                    </div>
                    <div className={styles.sizeSearch}>
                        <div className={styles.zipPicker}>
                            <p>{chosenPara}</p>
                            <input
                                type="text"
                                placeholder="Zip code"
                                style={{
                                    padding: "16.5px 0 16.5px 18px",
                                    width: "100%",
                                }}
                            />
                        </div>
                        <div className={styles.button}>
                            <button>Search</button>
                        </div>
                        {/* <div className={styles.DatePicker}>
                            <p>For these days</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Drop off" />
                            </LocalizationProvider>
                            <img
                                alt="arrow"
                                src={Arrow}
                                className={styles.arrow}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Pick up" />
                            </LocalizationProvider>
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingForm;
