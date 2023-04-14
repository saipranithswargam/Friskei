import * as React from "react";
import { Box, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./PetWalker.module.css";
import MultipleSelectCheckmarks from "./MultiselectDropdown";
const variants = [
    {
        id: 3,
        name: "1-5kg",
    },
    {
        id: 1,
        name: "5-10kg",
    },
    {
        id: 2,
        name: "10-20kg",
    },
    {
        id: 12,
        name: "20-40kg",
    },
    {
        id: 11,
        name: "40+kg",
    },
];
const PetWalker = () => {
    const [variantName, setVariantName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        console.log(value);

        let duplicateRemoved = [];

        value.forEach((item) => {
            if (duplicateRemoved.findIndex((o) => o.id === item.id) >= 0) {
                duplicateRemoved = duplicateRemoved.filter(
                    (x) => x.id === item.id
                );
            } else {
                duplicateRemoved.push(item);
            }
        });

        setVariantName(duplicateRemoved);
    };
    const [type, setType] = React.useState("Cat");
    const [breed, setBreed] = React.useState("");
    const handlePetChange = (event) => {
        setType(event.target.value);
    };
    const handleBreedChange = (event) => {
        setBreed(event.target.value);
    };
    return (
        <>
            <div className={styles.main}>
                <div className={styles.formDiv}>
                    <h1>Service Details</h1>
                    <form className={styles.form}>
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
                                        <MenuItem value={"Cat"}>Cat</MenuItem>
                                        <MenuItem value={"Dog"}>Dog</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles.input}>
                            <label>
                                {`How many ${type} do you need walked ?`}
                            </label>
                            <input
                                type="number"
                                defaultValue={1}
                                min={1}
                                max={8}
                            />
                        </div>
                        <div className={styles.input}>
                            <label>{`Breed of the ${type} ?`}</label>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Breed
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={breed}
                                        label="Breed"
                                        onChange={handleBreedChange}
                                    >
                                        <MenuItem value={"Cat"}>
                                            List of dog breeds
                                        </MenuItem>
                                        <MenuItem value={"Dog"}>
                                            List of cat breeds
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className={styles.input}>
                            <label>Size of the Dog ?</label>
                            <MultipleSelectCheckmarks
                                variantName={variantName}
                                handleChange={handleChange}
                                variants={variants}
                            />
                        </div>
                        <div className={styles.input}>
                            <label>Price Per Hour ?</label>
                            <div className={styles.select}>
                                <select>
                                    <option>USD</option>
                                    <option>INR</option>
                                    <option>SEK</option>
                                </select>
                                <input></input>
                            </div>
                        </div>

                        <Box sx={{ textAlign: "center" }}>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                className={styles.button}
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

export default PetWalker;
