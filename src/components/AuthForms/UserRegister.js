import styles from "./UserRegister.module.css";
import React from "react";
import { MuiTelInput } from "mui-tel-input";
import { Controller, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
const UserRegsiter = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [city, setCity] = React.useState("");
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const genderChangeHandler = (event) => {
        setGender(event.target.value);
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
        let phone = data.phone.replaceAll(/\s/g, "");
        console.log(phone);
        const Data = {
            name: name,
            email: email,
            gender: gender,
            password: password,
            mobileNum: phone,
            city: city.toLowerCase(),
        };
        fetch("https://friskei-backend.onrender.com/users/register", {
            method: "POST",
            body: JSON.stringify(Data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                navigate("/login");
            }
        });
    };

    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.registerCard}>
                    <h1>Register with us !</h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.userRegsiterForm}
                    >
                        <TextField
                            label="Full Name"
                            sx={{
                                "& label.Mui-focused": {
                                    color: "#035772",
                                },

                                "&.Mui-focused fieldset'": {
                                    borderColor: "#035772",
                                },
                            }}
                            onChange={nameChangeHandler}
                            value={name}
                        />
                        <Controller
                            control={control}
                            render={({ field, fieldState }) => (
                                <MuiTelInput
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
                        <TextField
                            label="Email Address"
                            sx={{
                                "& label.Mui-focused": {
                                    color: "#035772",
                                },

                                "&.Mui-focused fieldset'": {
                                    borderColor: "#035772",
                                },
                            }}
                            value={email}
                            onChange={emailChangeHandler}
                        />
                        <TextField
                            label="Create Password"
                            sx={{
                                "& label.Mui-focused": {
                                    color: "#035772",
                                },

                                "&.Mui-focused fieldset'": {
                                    borderColor: "#035772",
                                },
                            }}
                            onChange={passwordChangeHandler}
                            value={password}
                        />
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Gender
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={genderChangeHandler}
                                >
                                    <MenuItem value={"Male"}>Male</MenuItem>
                                    <MenuItem value={"Female"}>Female</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField
                            label="City"
                            sx={{
                                "& label.Mui-focused": {
                                    color: "#035772",
                                },

                                "&.Mui-focused fieldset'": {
                                    borderColor: "#035772",
                                },
                            }}
                            onChange={cityChangeHandler}
                            value={city}
                        />
                        <Box sx={{ textAlign: "center" }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 2 }}
                                className={styles.button}
                            >
                                Create an account
                            </Button>
                        </Box>
                    </form>
                </div>
            </div>
        </>
    );
};
export default UserRegsiter;
