import * as React from "react";
import styles from "./LandingForm.module.css";
import { Dropdown } from 'react-bootstrap';
import { Box, Button } from "@mui/material";
import Boarding from "../../assets/images/BoardingIcon.svg";
import HouseSitting from "../../assets/images/HouseSitting.svg";
import DropInVisits from "../../assets/images/DropInVisits.svg";
import DogDayCare from "../../assets/images/DogDaycare.svg";
import DogWalking from "../../assets/images/DogWalking.svg";
import Heart from "../../assets/images/heart.png";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from 'country-state-city';
import Loading from "../Spinner/Spinner";
import { useContext } from "react";
import axiosInstance from "../../api/axiosInstance";
import { userActions } from "../../features/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
const LocationSelector = ({ handleCountryChange, handleStateChange, handleCityChange, cities, selectedCountry, selectedState, selectedCity }) => {
    const dropdownStyle = {
        width: "100%",
        backgroundColor: "white",
        padding: '0.6rem 3rem',
        color: "black",
        outline: '#d1000a',
        border: '2px solid #d1000a',
    };

    const scrollableDropdownStyle = {
        maxHeight: '40vh',
        padding: '0',
        overflowY: 'auto',
        backgroundColor: 'white'
    };

    return (
        <form className={styles.dropDownDiv}>
            <Dropdown>
                <Dropdown.Toggle style={dropdownStyle} id="country-dropdown">
                    {selectedCountry.name || 'Select Country'}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ ...dropdownStyle, ...scrollableDropdownStyle }}>
                    {Country.getAllCountries().map(country => (
                        <Dropdown.Item key={country.isoCode} onClick={() => handleCountryChange(country)}>
                            {country.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle style={dropdownStyle} id="state-dropdown">
                    {selectedState.name || 'Select State'}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ ...dropdownStyle, ...scrollableDropdownStyle }}>
                    {State.getStatesOfCountry(selectedCountry.isoCode).map(state => (
                        <Dropdown.Item key={state.isoCode} onClick={() => handleStateChange(state)}>
                            {state.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle style={dropdownStyle} id="city-dropdown">
                    {selectedCity.label || 'Select City'}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ ...dropdownStyle, ...scrollableDropdownStyle }}>
                    {cities.map(city => (
                        <Dropdown.Item key={city.value} onClick={() => handleCityChange(city)}>
                            {city.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </form>
    );
};
const LandingForm = () => {
    const [cities, setCities] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = React.useState({});
    const [selectedState, setSelectedState] = React.useState({});
    const [selectedCity, setSelectedCity] = React.useState({});
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
    const [serviceType, setServiceType] = React.useState("PetGrooming");
    const [location, setLocation] = React.useState("");
    const [cityName, setCityName] = React.useState("");
    const locationHandler = (event) => {
        setLocation(event.target.value);
    };
    const handleCountryChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
        setSelectedState({});
        setCities([]);
    };
    const handleStateChange = (selectedState) => {
        setSelectedState(selectedState);
        const stateCities = City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode).map(city => ({
            label: city.name,
            value: city.name,
        }));
        setCities(stateCities);
        console.log(cities);
    };
    const handleCityChange = (selectedCity) => {
        setSelectedCity(selectedCity);
    }
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
        setServiceType("PetAdoption");
    };

    const groomingClickHandler = (event) => {
        setActiveAdopt(false);
        setActiveBoarding(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("PetGrooming");
    };

    const trainingClickHandler = () => {
        setActiveAdopt(false);
        setActiveHouseSitting(true);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("PetTraining");
    };

    const walkingClickHandler = () => {
        setActiveAdopt(false);
        setActiveDropIn(true);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveDayCare(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("PetWalking");
    };

    const vetClickHandler = () => {
        setActiveAdopt(false);
        setActiveDayCare(true);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveWalking(false);
        setActiveBreeding(false);
        setServiceType("PetVeternary");
    };

    const daycareClickHandler = () => {
        setActiveAdopt(false);
        setActiveWalking(true);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveBreeding(false);
        setServiceType("PetCare");
    };

    const breedingClickHandler = () => {
        setActiveAdopt(false);
        setActiveWalking(false);
        setActiveDayCare(false);
        setActiveDropIn(false);
        setActiveHouseSitting(false);
        setActiveBoarding(false);
        setActiveBreeding(true);
        setServiceType("PetBreeding");
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
            navigate("/auth/userlogin");
            return;
        }
        let petType = "";
        if (selectedCat) {
            petType = "Cat";
        }
        if (selectedDog) {
            petType = "Dog";
        }

        console.log(serviceType, location, petType);
        setLoading(true);
        if (locType === "city") {
            console.log(cityName);
            axiosInstance
                .get(`/search/${serviceType}/${petType}/${selectedCountry.name}/${selectedState.name}/${selectedCity.label}/low`)
                .then((response) => {
                    console.log(response);
                    if (response.status !== 200) {
                        setLoading(false);
                    }
                    console.log(response.data)
                    const fullData = { data: response.data, serviceType: serviceType, petType: petType, locationType: 'city', country: selectedCountry.name, city: selectedCity.label, state: selectedState.name }
                    navigate("/search", {
                        state: fullData,
                    });
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
        if (locType === "geolocation") {
            axiosInstance
                .get(`/search/${serviceType}/${longitude}/${latitude}/${5}/${petType}/low`)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        const fullData = { data: response.data, serviceType: serviceType, petType: petType, locationType: 'geolocation', latitude: latitude, longitude: longitude }
                        navigate("/search", {
                            state: fullData,
                        });
                        setLoading(false);
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
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
                        </div>
                        {locType === "city" && (
                            <Box sx={{
                                minWidth: "100%",
                                textAlign: "center",
                                marginTop: "2rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center'

                            }}>
                                <LocationSelector
                                    handleCountryChange={handleCountryChange}
                                    handleStateChange={handleStateChange}
                                    handleCityChange={handleCityChange}
                                    cities={cities}
                                    selectedCountry={selectedCountry}
                                    selectedState={selectedState}
                                    selectedCity={selectedCity}
                                />
                                <div className={styles.button}>
                                    <button onClick={submitHandler}>
                                        Search
                                    </button>
                                </div>
                            </Box>
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
