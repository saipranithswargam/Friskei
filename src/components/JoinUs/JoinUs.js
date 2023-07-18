import React from "react";
import styles from "./JoinUs.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InputLabel from "@mui/material/InputLabel";
import { Box, Button } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const JoinUs = () => {
    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [city, setCity] = React.useState("");
    const [petParent, setPetParent] = React.useState("");
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
    const onSubmit = (data) => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
        // const sucess = (pos) => {
        //     let phone = data.phone.replaceAll(/\s/g, "");
        //     console.log(phone);
        //     const Data = {
        //         name: name,
        //         email: email,
        //         gender: gender,
        //         password: password,
        //         mobileNum: phone,
        //         city: city.toLowerCase(),
        //         petParent: petParent,
        //         latitude: pos.coords.latitude,
        //         longitude: pos.coords.longitude,
        //     };
        //     setLoading(true);
        //     fetch("https://friskei-backend.onrender.com/providers/register", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(Data),
        //     }).then((response) => {
        //         if (response.ok) {
        //             response.json().then((data) => {
        //                 const expirationTime = new Date(
        //                     new Date().getTime() + +data.expiresIn * 1000
        //                 );
        //                 authCtx.login(data.token, expirationTime.toISOString());
        //             });
        //             setLoading(false);
        //             navigate(
        //                 `/joinus/register/${params.joinAs}/serviceDetails`
        //             );
        //         } else {
        //             setLoading(false);
        //         }
        //     });
        // };
        // const error = (err) => {
        //     alert("Cannot Register Without Location Access !");
        //     navigate("/joinus");
        //     console.log(err);
        // };
        // navigator.geolocation.getCurrentPosition(sucess, error, options);
    };
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
                            <Box
                                sx={{
                                    minWidth: "100%",
                                    textAlign: "center",
                                    marginTop: "2rem",
                                }}
                            >
                                <TextField
                                    sx={{ width: "80%" }}
                                    variant="standard"
                                    label="City"
                                    onChange={cityChangeHandler}
                                    value={city}
                                    required
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
                            <div className={styles.buttonDiv}>
                                <button>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JoinUs;
