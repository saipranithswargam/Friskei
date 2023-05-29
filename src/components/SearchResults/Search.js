import styles from "./Search.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Search = () => {
    // const state = [{id:01,}]
    // const { state } = useLocation();

    function valuetext(value) {
        console.log(value);
    }
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.filter}>
                    <div className={styles.category}>
                        <h4>category</h4>
                        <div className={styles.buttonDiv}>
                            <button>Dog</button>
                        </div>
                        <div className={styles.buttonDiv}>
                            <button>Cat</button>
                        </div>
                        <div className={styles.buttonDiv}>
                            <button>Other</button>
                        </div>
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
