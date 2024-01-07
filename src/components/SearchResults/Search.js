import styles from "./Search.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Header from "../Header/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axiosInstance from "../../api/axiosInstance";
import ResultCard from "./ResultCard";
const Search = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [category, setCategory] = useState(location.state?.serviceType);
    const [petType, setPetType] = useState(location.state?.petType);
    const [radius, setRadius] = useState(5);
    const [sort, setSort] = useState('low');
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleSortChange = (event) => {
        setSort(event.target.value);
    }
    const handlePetChange = (event) => {
        setPetType(event.target.value);
    };
    const handleRadiusChange = (event) => {
        setRadius(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        if (location.state?.locationType === 'geolocation') {
            axiosInstance
                .get(`/search/${category}/${location.state?.longitude}/${location.state?.latitude}/${radius}/${location.state?.petType}/${sort}`)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        setResults(response.data);
                        setLoading(false);
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } if (location.state?.locationType === "city") {
            setLoading(true);
            axiosInstance
                .get(`/search/${category}/${petType}/${location.state?.country}/${location.state?.state}/${location.state?.city}/${sort}`)
                .then((response) => {
                    console.log(response);
                    if (response.status !== 200) {
                        setLoading(false);
                    }
                    setResults(response.data);
                    console.log(response.data)
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }

    }
    useEffect(() => {
        console.log(location.state?.data);
        setResults(location.state?.data);
        console.log(category, petType);
    }, [])
    return (
        <>
            <Header />
            <div className={styles.main}>
                <form className={styles.filter} onSubmit={handleFormSubmit}>
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
                                    <MenuItem value={"PetGrooming"}>
                                        Pet Groomer
                                    </MenuItem>
                                    <MenuItem value={"PetWalking"}>
                                        Pet Walker
                                    </MenuItem>
                                    <MenuItem value={"PetTraining"}>
                                        Pet Trainer
                                    </MenuItem>
                                    <MenuItem value={"PetVeternary"}>
                                        Pet Vet
                                    </MenuItem>
                                    <MenuItem value={"PetCare"}>
                                        Pet Carer
                                    </MenuItem>
                                    <MenuItem value={"PetBreeding"}>
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
                                    label="Pet"
                                    value={petType}
                                    onChange={handlePetChange}
                                >
                                    <MenuItem value={"Cat"}>Cat</MenuItem>
                                    <MenuItem value={"Dog"}>Dog</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    {location.state?.locationType === 'geolocation' && < div >
                        <h4 style={{ marginBottom: "1rem" }} >Distance from You</h4>
                        <TextField fullWidth id="outlined-basic" label="Radius(Km)" variant="outlined" onChange={handleRadiusChange} value={radius} required />
                    </div>}
                    <div className={styles.category}>
                        <h4>Sort By Price</h4>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Price
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="category"
                                    value={sort}
                                    onChange={handleSortChange}
                                >
                                    <MenuItem value={"low"}>Low to High</MenuItem>
                                    <MenuItem value={"high"}>High to Low</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className={styles.submitDiv}>
                        <button>Filter</button>
                    </div>
                </form >
                <div className={styles.results}>
                    {results?.map((result =>
                        <ResultCard key={result._id} name={result.name} country={result?.country} city={result?.city} state={result?.state} alsoOffers={result?.servicesList} price={result?.price} priceTicker={result?.priceTicker} currentService={category} providerId={result?.providersId} />))}
                </div>
            </div >
        </>
    );
};

export default Search;
