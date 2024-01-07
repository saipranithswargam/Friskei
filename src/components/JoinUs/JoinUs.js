import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';
import styles from "./JoinUs.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Button } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import InputLabel from "@mui/material/InputLabel";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LocationSelector = ({ handleCountryChange, handleStateChange, handleCityChange, cities, selectedCountry, selectedState, selectedCity }) => {
    const dropdownStyle = {
        width: "100%",
        backgroundColor: "#d1000a",
        padding: '0.6rem',
        outline: 'none',
        border: 'none',
    };

    const scrollableDropdownStyle = {
        maxHeight: '40vh',
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

const JoinUs = () => {
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [selectedState, setSelectedState] = useState({});
    const [selectedCity, setSelectedCity] = useState({});
    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [city, setCity] = React.useState("");
    const [petParent, setPetParent] = React.useState("");
    const [userSignUp, setUserSignUp] = React.useState(true);
    const [providerSignUp, setProviderSignUp] = React.useState(false);
    const navigate = useNavigate();

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
    const typeChangeHandler = (event) => {
        setType(event.target.value);
    };
    const petParentChangeHandler = (event) => {
        setPetParent(event.target.value);
    };
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    };
    const { control, handleSubmit } = useForm({
        defaultValues: {
            phone: "",
        },
    });
    const onSubmit = async (data) => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        console.log(selectedCity, selectedCountry, selectedState);
        const sucess = async (pos) => {
            let phone = data.phone.replaceAll(/\s/g, "");
            const Data = {
                name: name,
                email: email,
                password: password,
                mobileNum: phone,
                city: selectedCity.label,
                country: selectedCountry.name,
                state: selectedState.name,
                petParent: petParent,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,

            };
            if (userSignUp) {
                try {
                    const response = await axiosInstance.post(
                        "/users/register",
                        Data
                    );
                    if (response.status===200) {
                        navigate("/auth/userlogin");
                    }
                } catch (err) {
                    toast.error(err.response.data.message);
                    console.log(err);
                }
            }
            if (providerSignUp) {
                try {
                    const response = await axiosInstance.post(
                        "/providers/register",
                        Data
                    );
                    console.log(response.data);
                    navigate("/auth/providerlogin");
                } catch (err) {
                    toast.error(err.response.data.message);
                    console.log(err);
                }
            }
        };
        const error = (err) => {
            alert(
                "Location access is mandatory for better service.Please provide location Access"
            );
            navigate("/joinus");
            console.log(err);
        };
        navigator.geolocation.getCurrentPosition(sucess, error, options);
    };

    let userSignUpStyles = userSignUp ? styles.activeSignUp : styles.Button;
    let providerSignUpStyles = providerSignUp
        ? styles.activeSignUp
        : styles.Button;

    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.left}>
                    <h1>
                        Welcome to Petlevert - Come Join Our Pet Care Family
                    </h1>
                    <div className={styles.leftParas}>
                        <p>
                            1.Take Control of Your Schedule: Enjoy the Benefits
                            of Flexible Pet Care Timing
                        </p>
                        <p>2.Join Petlevert: Set Your Own Pet Care Rates</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.image}>
                        <img
                            src="https://static.wixstatic.com/media/11062b_da0286002081421784b2d7c615981db8~mv2.jpg/v1/crop/x_1153,y_0,w_2158,h_2976/fill/w_400,h_551,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Trimming%20the%20Fur.jpg"
                            alt="doggo"
                        />
                    </div>
                    <div className={styles.form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{ textAlign: "center" }}>
                                <p className={styles.formHeading}>
                                    Let's Get Started
                                </p>
                            </Box>
                            <Box className={styles.buttonsGroup}>
                                <button
                                    className={userSignUpStyles}
                                    onClick={() => {
                                        setUserSignUp(true);
                                        setProviderSignUp(false);
                                    }}
                                >
                                    User
                                </button>
                                <button
                                    className={providerSignUpStyles}
                                    onClick={() => {
                                        setProviderSignUp(true);
                                        setUserSignUp(false);
                                    }}
                                >
                                    Provider
                                </button>
                            </Box>
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                }}
                            >
                                <FormControl
                                    variant="standard"
                                    sx={{
                                        width: "80%",
                                        margin: "0 auto",
                                    }}
                                >
                                    <InputLabel id="demo-simple-select-standard-label">
                                        Type*
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={type}
                                        onChange={typeChangeHandler}
                                        label="Type"
                                        required={true}
                                        sx={{ textAlign: "left" }}
                                    >
                                        <MenuItem value={"Individual"}>
                                            Individual
                                        </MenuItem>
                                        <MenuItem value={"Company"}>
                                            Company
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                    marginTop: "2rem",
                                }}
                            >
                                <TextField
                                    sx={{ width: "80%" }}
                                    label="Name"
                                    value={name}
                                    onChange={nameChangeHandler}
                                    required={true}
                                    variant="standard"
                                />
                            </Box>
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                    marginTop: "2rem",
                                }}
                            >
                                <TextField
                                    sx={{ width: "80%" }}
                                    label="Email"
                                    value={email}
                                    onChange={emailChangeHandler}
                                    required={true}
                                    variant="standard"
                                />
                            </Box>
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                    marginTop: "2rem",
                                }}
                            >
                                <TextField
                                    sx={{ width: "80%" }}
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={passwordChangeHandler}
                                    required={true}
                                    variant="standard"
                                />
                            </Box>
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                    marginTop: "2rem",
                                }}
                            >
                                <InputLabel
                                    sx={{
                                        textAlign: "left",
                                        width: "80%",
                                        margin: "0 auto",
                                    }}
                                ></InputLabel>
                                <Controller
                                    control={control}
                                    rules={{ validate: matchIsValidTel }}
                                    render={({ field, fieldState }) => (
                                        <MuiTelInput
                                            variant="standard"
                                            sx={{
                                                width: "80%",
                                            }}
                                            {...field}
                                            defaultCountry="IN"
                                            helperText={
                                                fieldState.invalid
                                                    ? "Tel is invalid"
                                                    : ""
                                            }
                                            error={fieldState.invalid}
                                        />
                                    )}
                                    name="phone"
                                />
                            </Box>
                            <Box sx={{
                                minWidth: "100%",
                                textAlign: "center",
                                marginTop: "2rem",
                                display: "flex",
                                flexDirection: "column",
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
                            </Box>
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                    marginTop: "2rem",
                                }}
                            >
                                <FormControl
                                    variant="standard"
                                    sx={{
                                        width: "80%",
                                        margin: "0 auto",
                                    }}
                                >
                                    <InputLabel id="demo-simple-select-standard-label">
                                        PetParent
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={petParent}
                                        onChange={petParentChangeHandler}
                                        label="Type"
                                        required={true}
                                        sx={{
                                            textAlign: "left",
                                        }}
                                    >
                                        <MenuItem value={"Yes"}>Yes</MenuItem>
                                        <MenuItem value={"No"}>No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                    marginTop: "3rem",
                                }}
                            >
                                <FormGroup
                                    variant="standard"
                                    sx={{
                                        width: "80%",
                                        margin: "0 auto",
                                    }}
                                >
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="I agree to the terms &amp; conditions"
                                        className={styles.checkPara}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="I want to subscribe to the newsletter."
                                        className={styles.checkPara}
                                    />
                                </FormGroup>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, backgroundColor: "#d1000a" }}
                                    className={styles.button}
                                >
                                    Create an account
                                </Button>
                            </Box>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JoinUs;
