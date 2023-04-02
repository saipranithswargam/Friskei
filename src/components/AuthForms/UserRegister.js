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
const UserRegsiter = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            phone: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    const [Gender, setGender] = React.useState("");

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    return (
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
                    />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Gender
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Gender}
                                label="Gender"
                                onChange={handleChange}
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
                    />
                    <Box sx={{textAlign:"center"}} >
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2}}
                            className={styles.button}
                        >
                            Create an account
                        </Button>
                    </Box>
                </form>
            </div>
        </div>
    );
};
export default UserRegsiter;
