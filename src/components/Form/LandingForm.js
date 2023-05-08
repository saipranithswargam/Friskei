import * as React from "react";
import styles from "./LandingForm.module.css";
import Boarding from "../../assets/images/BoardingIcon.svg";
import HouseSitting from "../../assets/images/HouseSitting.svg";
import DropInVisits from "../../assets/images/DropInVisits.svg";
import DogDayCare from "../../assets/images/DogDaycare.svg";
import DogWalking from "../../assets/images/DogWalking.svg";
import Arrow from "../../assets/images/Arrow.svg";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const LandingForm = () => {
    const [selectedCat, setSelectedCat] = React.useState(false);
    const [selectedDog, setSelectedDog] = React.useState(true);
    const [chosenPara, setChosenPara] = React.useState("Boarding near");
    const [datePlaceholder, setDatePlaceholder] = React.useState({
        first: "Drop off",
        second: "Pick up",
    });
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
        setDatePlaceholder({ first: "Drop off", second: "Pick up" });
    };

    const houseSittingClickHandler = () => {
        setChosenPara("House Sitting near");
        setDatePlaceholder({ first: "Start date", second: "End date" });
    };

    const dropInVisitsClickHandler = () => {
        setChosenPara("Drop-In Visits near");
        setDatePlaceholder({ first: "Start date", second: "End date" });
    };

    const dogDayCareClickHandler = () => {
        setChosenPara("Doggy Day Care near");
        setDatePlaceholder({ first: "Start date", second: "End date" });
    };

    const dogWalkingClickHandler = () => {
        setChosenPara("Dog Walking near");
        setDatePlaceholder({ first: "Start date", second: "End date" });
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
                    {/* <div className={styles.outerSentance}>
                        <p>For When You're Away</p>
                        <p>For When You're At Work</p>
                    </div> */}
                    <div className={styles.options}>
                        <div
                            className={`${styles.Boarding} ${
                                setChosenPara === "Boarding near"
                                    ? styles.active
                                    : ""
                            } `}
                            onClick={boadingClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={Boarding} />
                            </div>
                            <p>Boarding</p>
                        </div>
                        <div
                            className={[
                                styles.HouseSitting,
                                setChosenPara === "House Sitting near"
                                    ? styles.active
                                    : "",
                            ].join(" ")}
                            onClick={houseSittingClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={HouseSitting} />
                            </div>
                            <p>HouseSitting</p>
                        </div>
                        <div
                            className={`${styles.DropInVisits} ${
                                setChosenPara === "Drop-In Visits near"
                                    ? styles.active
                                    : ""
                            } `}
                            onClick={dropInVisitsClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={DropInVisits} />
                            </div>
                            <p>Drop-In Visits</p>
                        </div>
                        <div
                            className={`${styles.DogDayCare} ${
                                setChosenPara === "Doggy Day Care near"
                                    ? styles.active
                                    : ""
                            } `}
                            onClick={dogDayCareClickHandler}
                        >
                            <div className={styles.imageDiv}>
                                <img alt="" src={DogDayCare} />
                            </div>
                            <p>Doggo Day Care</p>
                        </div>
                        <div
                            className={`${styles.DogWalking} ${
                                setChosenPara === "Dog Walking near"
                                    ? styles.active
                                    : ""
                            }`}
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
                                <div className={styles.small}>
                                    <p>Small</p>
                                    <p>0 - 15 lbs</p>
                                </div>
                                <div className={styles.medium}>
                                    <p>Medium</p>
                                    <p>16 - 40 lbs</p>
                                </div>
                                <div className={styles.large}>
                                    <p>Large</p>
                                    <p>41 - 100 lbs</p>
                                </div>
                                <div className={styles.Giant}>
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
                            />
                        </div>
                        <div className={styles.button}>
                            <button>Search</button>
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
