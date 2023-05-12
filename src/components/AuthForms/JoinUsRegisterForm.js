import styles from "./JoinUsRegisterForm.module.css";
import React from "react";
import { MuiTelInput } from "mui-tel-input";
import { Controller, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useParams, useNavigate } from "react-router-dom";
const JoinUsRegisterForm = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [city, setCity] = React.useState("");
    const [pincode, setPincode] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [petParent, setPetParent] = React.useState("");
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    };
    const pincodeChangeHandler = (event) => {
        setPincode(event.target.value);
    };
    const petParentChangeHandler = (event) => {
        setPetParent(event.target.value);
    };
    const { control, handleSubmit } = useForm({
        defaultValues: {
            phone: "",
        },
    });
    const genderChangeHandler = (event) => {
        setGender(event.target.value);
    };
    const onSubmit = (data) => {
        localStorage.setItem("loggedIn", true);
        const Data = {
            name: name,
            email: email,
            gender: gender,
            password: password,
            mobileNum: data.phone,
            city: city,
            petParent: petParent,
        };
        fetch("https://friskei-backend.onrender.com/providers/register", {
            method: "POST",
            body: JSON.stringify(Data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                navigate(`/joinus/register/${params.joinAs}/serviceDetails`);
                console.log(response.token);
            }
        });
    };
    return (
        <div className={styles.main}>
            <div className={styles.registerCard}>
                <h1>Join us !</h1>
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
                        value={name}
                        onChange={nameChangeHandler}
                        required
                    />
                    <Controller
                        control={control}
                        render={({ field, fieldState }) => (
                            <MuiTelInput
                                {...field}
                                defaultCountry="IN"
                                helperText={
                                    fieldState.invalid ? "Tel is invalid" : ""
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
                        onChange={emailChangeHandler}
                        value={email}
                        required
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
                        type={"password"}
                        onChange={passwordChangeHandler}
                        required
                    />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth required>
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
                        required
                    />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth required>
                            <InputLabel id="demo-simple-select-label">
                                Pet Parent
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={petParent}
                                label="Pet Parent"
                                onChange={petParentChangeHandler}
                            >
                                <MenuItem value={"Yes"}>Yes</MenuItem>
                                <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        label="Pincode"
                        sx={{
                            "& label.Mui-focused": {
                                color: "#035772",
                            },

                            "&.Mui-focused fieldset'": {
                                borderColor: "#035772",
                            },
                        }}
                        onChange={pincodeChangeHandler}
                        value={pincode}
                        required
                    />
                    <Box sx={{ textAlign: "center" }}>
                        <Button
                            variant="contained"
                            sx={{ mt: 2 }}
                            className={styles.button}
                            type="submit"
                        >
                            Register
                        </Button>
                    </Box>
                </form>
            </div>
        </div>
    );
};
export default JoinUsRegisterForm;
