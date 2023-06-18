import styles from "./Search.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Header from "../Header/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Search = () => {
    const [category, setCategory] = useState("PetGroomer");
    const [petType, setPetType] = useState("Cat");
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handlePetChange = (event) => {
        setPetType(event.target.value);
    };
    function valuetext(value) {
        console.log(value);
    }
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.filter}>
                    <div className={styles.category}>
                        <h4>Category</h4>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    category
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    label="category"
                                    onChange={handleCategoryChange}
                                >
                                    <MenuItem value={"petGroomer"}>
                                        Pet Groomer
                                    </MenuItem>
                                    <MenuItem value={"petWalker"}>
                                        Pet Walker
                                    </MenuItem>
                                    <MenuItem value={"petTrainer"}>
                                        Pet Trainer
                                    </MenuItem>
                                    <MenuItem value={"petVet"}>
                                        Pet Vet
                                    </MenuItem>
                                    <MenuItem value={"PetCarer"}>
                                        Pet Carer
                                    </MenuItem>
                                    <MenuItem value={"petBreeder"}>
                                        Pet Breeder
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className={styles.category}>
                        <h4>Pet Type</h4>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Pet
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="category"
                                    value={petType}
                                    onChange={handlePetChange}
                                >
                                    <MenuItem value={"Cat"}>Cat</MenuItem>
                                    <MenuItem value={"Dog"}>Dog</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className={styles.location}>
                        <h4>Location</h4>
                        <input placeholder="search city" />
                        <Box sx={{ width: "90%", margin: "0 auto" }}>
                            <Slider
                                size="small"
                                aria-label="Temperature"
                                defaultValue={10}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={30}
                            />
                        </Box>
                    </div>
                    <div className={styles.price}>
                        <h4>Price</h4>
                        <Box width={"90%"} sx={{ margin: "0 auto" }}>
                            <Slider
                                className={styles.slider}
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                onChange={(event) => {
                                    console.log(event.target.value);
                                }}
                                max={1000}
                                marks={[
                                    { value: 0, label: "min" },
                                    { value: 1000, label: "max" },
                                ]}
                            />
                        </Box>
                    </div>
                    <div className={styles.submitDiv}>
                        <button>Filter</button>
                    </div>
                </div>
                <div className={styles.results}>
                    {/* {state.map((doc) => ( */}
                    <div className={styles.resultCard} key={1}>
                        <div className={styles.imageDiv}>
                            <img
                                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg"
                                alt="dog"
                            />
                            <h5>{3000}</h5>
                            <h5>
                                <LocationOnIcon /> {"Hyderabad"}
                            </h5>
                        </div>
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </>
    );
};

export default Search;
