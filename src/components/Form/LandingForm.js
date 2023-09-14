import * as React from "react";
import styles from "./LandingForm.module.css";
import Boarding from "../../assets/images/BoardingIcon.svg";
import HouseSitting from "../../assets/images/HouseSitting.svg";
import DropInVisits from "../../assets/images/DropInVisits.svg";
import DogDayCare from "../../assets/images/DogDaycare.svg";
import DogWalking from "../../assets/images/DogWalking.svg";
import Heart from "../../assets/images/heart.png";
import { useNavigate } from "react-router-dom";
import Loading from "../Spinner/Spinner";
import { useContext } from "react";
import axiosInstance from "../../api/axiosInstance";
import { userActions } from "../../features/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
const LandingForm = () => {
    const user = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const [selectedCat, setSelectedCat] = React.useState(false);
    const [selectedDog, setSelectedDog] = React.useState(true);
    const [selectOther, setSelectOther] = React.useState(false);
    const [locType, setLocType] = React.useState("city");
    const [loading, setLoading] = React.useState(false);
    const [latitude, setLatitude] = React.useState("");
    const [longitude, setLongitude] = React.useState("");
    const [activeBoarding, setActiveBoarding] = React.useState(true);
    const [activeHouseSitting, setActiveHouseSitting] = React.useState(false);
    const [activeDropIn, setActiveDropIn] = React.useState(false);
    const [activeDayCare, setActiveDayCare] = React.useState(false);
    const [activeWalking, setActiveWalking] = React.useState(false);
    const [activeBreeding, setActiveBreeding] = React.useState(false);
    const [activeAdopt, setActiveAdopt] = React.useState(false);
    const [serviceType, setServiceType] = React.useState("boarding");
    const [location, setLocation] = React.useState("");
    const [cityName, setCityName] = React.useState("");
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

    const adoptionClickHandler = (event) => {
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setActiveAdopt(true);
        setServiceType("petAdoption");
    };

    const groomingClickHandler = (event) => {
        setActiveAdopt(false);
        setActiveBoarding(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("petGrooming");
    };

    const trainingClickHandler = () => {
        setActiveAdopt(false);
        setActiveHouseSitting(true);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("petTraining");
    };

    const walkingClickHandler = () => {
        setActiveAdopt(false);
        setActiveDropIn(true);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("petWalking");
    };

    const vetClickHandler = () => {
        setActiveAdopt(false);
        setActiveDayCare(true);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("petVet");
    };

    const daycareClickHandler = () => {
        setActiveAdopt(false);
        setActiveWalking(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveBreeding(false);
        setServiceType("petCare");
    };

    const breedingClickHandler = () => {
        setActiveAdopt(false);
        setActiveWalking(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveBreeding(true);
        setServiceType("petBreeding");
    };

    const otherClickHandler = () => {
        setSelectOther(true);
        setSelectedDog(false);
        setSelectedCat(false);
    };

    const currLocClickHandler = () => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        const sucess = (pos) => {
            console.log(pos.coords.longitude);
            console.log(pos.coords.latitude);
            setLocType("geolocation");
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        };
        const error = (err) => {
            setLocType("city");
        };
        navigator.geolocation.getCurrentPosition(sucess, error, options);
    };
    const cityClickHandler = (event) => {
        setLocType("city");
        setCityName(event.target.value);
    };
    let activeGroomingStyles = activeBoarding ? styles.active : styles.Boarding;
    let activeTrainingStyles = activeHouseSitting
        ? styles.active
        : styles.HouseSitting;
    let activeVetStyles = activeDayCare ? styles.active : styles.DogDayCare;
    let activeDaycareStyles = activeWalking ? styles.active : styles.DogWalking;
    let activeWalkingStyles = activeDropIn
        ? styles.active
        : styles.DropInVisits;
    let activeBreedingStyles = activeBreeding ? styles.active : styles.breeding;

    const submitHandler = () => {
        if (!user.isLoggedIn) {
            navigate("/login");
        }
        let petType = "";
        if (selectedCat) {
            petType = "cat";
        }
        if (selectOther) {
            petType = "other";
        }
        if (selectedDog) {
            petType = "dog";
        }
        console.log(serviceType, location, petType);
        // let lowerLocation = location.toLowerCase();
        setLoading(true);
        if (locType === "city") {
            console.log(cityName);
            axiosInstance
                .get(`/search/city/${cityName}/${serviceType}`)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        if (locType === "geolocation") {
            axiosInstance
                .get(`/search/location/${serviceType}/${longitude}/${latitude}`)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        navigate("/search", { state: response.data });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <>
            {!loading && (
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
                        <span className={styles.dog}>Woofie (Dogs)</span>
                        <input
                            type="checkbox"
                            onChange={catClickHandler}
                            checked={selectedCat}
                        />
                        <span className={styles.cat}>Whiskers (Cats)</span>

                        <div style={{ marginRight: "auto" }}></div>
                        <span className={styles.option}>Search by :</span>
                        <span className={styles.dog}>Current Location</span>
                        <input
                            type="checkbox"
                            onChange={currLocClickHandler}
                            checked={locType === "geolocation"}
                        />
                        <span className={styles.cat}>City</span>
                        <input
                            type="checkbox"
                            onChange={cityClickHandler}
                            checked={locType === "city"}
                        />
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
                            {/* <div
                                className={activePetAdoptStyles}
                                onClick={adoptionClickHandler}
                            >
                                <div className={styles.imageDiv}>
                                    <img alt="" src={Adopt} />
                                </div>
                                <p>Pet Adoption</p>
                            </div> */}
                        </div>
                        {locType === "city" && (
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
                                    <button onClick={submitHandler}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        )}
                        {locType === "geolocation" && (
                            <div className={styles.sizeSearch}>
                                <div
                                    className={styles.button}
                                    style={{ margin: "0 auto" }}
                                >
                                    <button onClick={submitHandler}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {loading && <Loading />}
        </>
    );
};

export default LandingForm;
