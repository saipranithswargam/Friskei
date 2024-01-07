import React, { useState } from 'react';
import styles from "./ContactProvider.module.css";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import Header from '../../components/Header/Header';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import TextField from '@mui/material/TextField';
import 'react-date-range/dist/theme/default.css';
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../api/axiosInstance";

const ContactProvider = () => {
    const user = useAppSelector((state) => state.user);
    const location = useLocation();
    const data = location.state;

    const [formValues, setFormValues] = useState({
        serviceType: "PetGrooming",
        selectedDates: [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }
        ],
        petType: "Cat",
        petName: "",
        petWeight: "",
        petAgeYears: "",
        petAgeMonths: "",
        petSex: "Male",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues);
        const apiData = { ...formValues, email: data?.email };
        const response = await axiosInstance.post("/providers/contact", apiData);
        console.log(response)
    };
    return (
        <>
            <Header />
            <div className={styles.main}>
                <h1 className={styles.mainHeading}><span>Contact</span>{data?.name}</h1>
                <form className={styles.mailForm} onSubmit={handleFormSubmit}>
                    <label style={{ marginBottom: "0.5rem" }}>Service</label>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formValues.serviceType}
                            onChange={handleInputChange}
                            name='serviceType'
                            label="Type"
                            required
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
                    <div className={styles.datePicker}>
                        <label>Which Days?</label>
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setFormValues({ ...formValues, selectedDates: [item.selection] })}
                            moveRangeOnFirstSelection={false}
                            ranges={formValues.selectedDates}
                            required
                        />
                    </div>
                    {/* <div style={{ display: "flex", gap: "1rem" }}>
                        <TextField fullWidth id="outlined-basic" label="TimeStart" name='petName' variant="outlined" required type='Time' />
                        <TextField fullWidth id="outlined-basic" label="TimeEnd" name='petName' variant="outlined" required type='Time' />
                    </div> */}

                    <div className={styles.aboutPet}>
                        <label>About Pet</label>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Pet Type
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formValues.petType}
                                onChange={handleInputChange}
                                label="category"
                                name='petType'
                                required
                            >
                                <MenuItem value={"Cat"}>
                                    Cat
                                </MenuItem>
                                <MenuItem value={"Dog"}>
                                    Dog
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <TextField fullWidth id="outlined-basic" label="Name" name='petName' variant="outlined" onChange={handleInputChange} value={formValues.petName} required />
                            <TextField fullWidth id="outlined-basic" label="Weight(Kg)" variant="outlined" onChange={handleInputChange} value={formValues.petWeight} name='petWeight' required />
                        </div>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <TextField fullWidth id="outlined-basic" label="Age(Yr.)" variant="outlined" value={formValues.petAgeYears} onChange={handleInputChange} name='petAgeYears' required />
                            <TextField fullWidth id="outlined-basic" label="Age(Mo.)" variant="outlined" value={formValues.petAgeMonths} onChange={handleInputChange} name='petAgeMonths' required />
                        </div>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Sex
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formValues.petSex}
                                    label="sex"
                                    onChange={handleInputChange}
                                    name='petSex'
                                    required
                                >
                                    <MenuItem value={"Male"}>
                                        Male
                                    </MenuItem>
                                    <MenuItem value={"Female"}>
                                        Female
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea style={{ width: "100%", padding: "1rem", marginTop: "0.6rem" }} rows={4} placeholder='Share a little info about your pet' onChange={handleInputChange} value={formValues.message} name='message' />
                        </div>
                        <div className={styles.buttonDiv}>
                            <button>Send</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default ContactProvider