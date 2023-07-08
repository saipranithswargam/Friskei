import styles from "./PetBreeder.module.css";
import * as React from "react";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AuthContext from "../../../store/auth-context";
import { useContext } from "react";
const PetBreeder = () => {
    const authCtx = useContext(AuthContext);
    const [type, setType] = React.useState("Cat");
    const [note, setNote] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [priceTicker, setPriceTicker] = React.useState("USD");
    const handlePetChange = (event) => {
        setType(event.target.value);
    };
    const handlerTickerChange = (event) => {
        setPriceTicker(event.target.value);
    };
    const handlerPriceChange = (event) => {
        setPrice(event.target.value);
    };
    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("test");
        const data = {
            type: type,
            price: priceTicker + price,
            note: note,
            service: "petBreeding",
        };
        fetch("https://friskei-backend.onrender.com/providers/details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + authCtx.token,
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("account created sucessfully !");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div className={styles.main}>
                <div className={styles.formDiv}>
                    <h1>Service Details</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.input}>
                            <label>Type of Pet ?</label>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Pet
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="type"
                                        onChange={handlePetChange}
                                    >
                                        <MenuItem value={"cat"}>Cat</MenuItem>
                                        <MenuItem value={"dog"}>Dog</MenuItem>
                                        <MenuItem value={"other"}>
                                            Other
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles.input}>
                            <label>Price</label>
                            <div className={styles.select}>
                                <select
                                    onChange={handlerTickerChange}
                                    value={priceTicker}
                                >
                                    <option>USD</option>
                                    <option>INR</option>
                                    <option>SEK</option>
                                </select>
                                <input
                                    onChange={handlerPriceChange}
                                    value={price}
                                ></input>
                            </div>
                        </div>
                        <div className={styles.input}>
                            <label>Note</label>
                            <TextField
                                label="Pet Breed, Allergies"
                                sx={{
                                    "& label.Mui-focused": {
                                        color: "#035772",
                                    },

                                    "&.Mui-focused fieldset'": {
                                        borderColor: "#035772",
                                    },
                                }}
                                onChange={handleNoteChange}
                            />
                        </div>
                        <Box sx={{ textAlign: "center" }}>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                className={styles.button}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PetBreeder;
