import React from "react";
import styles from "./ProviderDashboard.module.css";
import Header from "../Header/Header";
import { Dropdown, InputGroup } from 'react-bootstrap';
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from 'country-state-city';
import { useContext } from "react";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import { userActions } from "../../features/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toast } from "react-toastify";
import parsePhoneNumber from "libphonenumber-js";
import ProfileImageUpdate from "./UpdateImage";
const ProviderDashboard = () => {
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({ label: user.country, value: '' });
    const [selectedState, setSelectedState] = useState({ label: user.state, value: '' });
    const [selectedCity, setSelectedCity] = useState({ label: user.city, value: '' });
    const [services, setServices] = useState([]);
    const dispatch = useAppDispatch();
    const currencyOptions = [
        "USD",
        "INR",
        "SEK",
        "EUR",
        "GBP",
        "JPY",
        "AUD",
        "CAD",
    ];
    const [formData, setFormData] = useState({
        serviceType: "PetGrooming",
        price: "",
        note: "",
        petType: "Cat",
        currency: "USD",
    });
    const [editProfileData, setEditProfileData] = useState({
        name: user.name,
        mobileNumber: user.mobileNumber,
        email: user.email,
        petParent: user.petParent,
        currentPassword: "",
        newPassword: "",
    });
    const getServices = () => {
        axiosInstance.get("/providers/serviceDashboard").then((response) => {
            setServices(response.data);
        })
        console.log(services);
    }
    const resetFormData = () => {
        setEditProfileData({
            name: user.name,
            mobileNumber: user.mobileNumber,
            email: user.email,
            petParent: user.petParent,
            currentPassword: "",
            confirmNewPassword: "",
        });
        setEditProfile(false);
    };
    const handleCountryChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
        setSelectedState('');
        const countryStates = State.getStatesOfCountry(selectedCountry.value).map(state => ({
            label: state.name,
            value: state.isoCode,
        }));

        setStates(countryStates);
        setCities([]);
    };
    const handleStateChange = (selectedState) => {
        setSelectedState(selectedState);
        const stateCities = City.getCitiesOfState(selectedCountry.value, selectedState.value).map(city => ({
            label: city.name,
            value: city.name,
        }));
        setCities(stateCities);
    };
    const handleCityChange = (selectedCity) => {
        setSelectedCity(selectedCity);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axiosInstance.post("/providers/details", formData).then((response) => {
            getServices();
            console.log(response.data);
        }).catch(err => {
            toast.error("Error!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            console.log(err);
        })
    };
    const EditPencil = (
        <svg
            viewBox="0 0 24 24"
            fill="#d1000a"
            width="24"
            height="24"
            className="sxbQRqA"
        >
            <path
                fill-rule="evenodd"
                d="M18.8525,7.543 L17.7515,8.644 L15.3565,6.248 L16.4575,5.147 C16.5555,5.05 16.6835,5.001 16.8105,5.001 C16.9385,5.001 17.0665,5.05 17.1645,5.147 L18.8525,6.835 C19.0475,7.03 19.0475,7.348 18.8525,7.543 L18.8525,7.543 Z M8.1895,18.206 C8.1185,18.276 8.0275,18.324 7.9295,18.344 L5.1275,18.873 L5.6575,16.07 C5.6755,15.972 5.7225,15.882 5.7945,15.811 L14.6495,6.955 L17.0445,9.351 L8.1895,18.206 Z M19.5595,6.128 L17.8715,4.44 C17.2865,3.856 16.3355,3.856 15.7505,4.44 L5.0875,15.103 C4.8735,15.317 4.7295,15.588 4.6745,15.886 L4.0085,19.407 C3.9775,19.569 4.0295,19.736 4.1465,19.854 C4.2415,19.948 4.3685,20 4.4995,20 C4.5305,20 4.5615,19.997 4.5925,19.991 L8.1165,19.326 C8.4145,19.269 8.6855,19.125 8.8965,18.912 L19.5595,8.25 C20.1445,7.665 20.1445,6.713 19.5595,6.128 L19.5595,6.128 Z"
            ></path>
        </svg>
    );
    const addCircularButton = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="4rem"
            viewBox="0 0 512 512"
        >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
        </svg>
    );
    const closeCircularCross = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 512 512"
            fill="white"
        >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
        </svg>
    );
    const [profileActive, setProfileActive] = useState(true);
    const [reviewActive, setReviewActive] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const profileClickHandler = () => {
        setProfileActive(true);
        setReviewActive(false);
    };
    const reviewClickHandler = () => {
        getServices();
        setProfileActive(false);
        setReviewActive(true);
    };
    const editClickHandler = () => {
        setEditProfile(true);
    };
    const showModalClickHandler = () => {
        setShowModal(true);
    };
    const navigate = useNavigate();
    const [settings, setSettings] = useState(false);
    const backChangeHandler = () => {
        setSettings(false);
    };
    const validatePhoneNumber = () => {
        try {
            const phoneNumberObj = parsePhoneNumber(
                editProfileData.mobileNumber
            );

            const isValid = phoneNumberObj.isValid();

            return isValid;
        } catch (error) {
            return false;
        }
    };
    const saveChangesHandler = () => {
        if (editProfileData.currentPassword.length === 0) {
            toast.warn("Current Password is mandatory !", {
                position: "top-right",
            });
            resetFormData();
            return;
        }
        if (!validatePhoneNumber()) {
            console.log("phoneNumber is invalid please try again !");
            toast.error("Please enter a valid phone number.", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            resetFormData();
            return;
        }
        const updatedData = {
            name: editProfileData.name,
            mobileNumber: editProfileData.mobileNumber,
            email: editProfileData.email,
            city: editProfileData.city,
            petParent: editProfileData.petParent,
            currentPassword: editProfileData.currentPassword,
            newPassword: editProfileData.newPassword,
        };
        setLoading(true);
        axiosInstance
            .post("/providers/updateInfo", updatedData)
            .then((response) => {
                console.log("Update Info Success:", response.data);
                dispatch(userActions.setState(response.data));
                setLoading(false);
                setEditProfile(false);
                toast.success("Profile Updated Successfully!", {
                    position: "top-right",
                });
                resetFormData();
            })
            .catch((err) => {
                resetFormData();
                setLoading(false);
                setEditProfile(false);
                toast.error(err.response.data.message, {
                    position: "top-right",
                });
            });
    };
    useEffect(() => {
        resetFormData();
        getServices();
    }, [user]);
    let activeProfileStyles = profileActive
        ? styles.activeButton
        : styles.button;
    let activeReviewStyles = reviewActive ? styles.activeButton : styles.button;
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.upper}>
                    <div className={styles.info}>
                        <div className={styles.symbol}>
                            <ProfileImageUpdate />
                        </div>
                        <h5>{user.name}</h5>
                    </div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.buttonsDiv}>
                        <button
                            className={activeProfileStyles}
                            onClick={profileClickHandler}
                        >
                            Profile
                        </button>
                        <button
                            className={activeReviewStyles}
                            onClick={reviewClickHandler}
                        >
                            Services
                        </button>
                    </div>
                </div>
                {profileActive && (
                    <div className={styles.profile}>
                        <div className={styles.upperHeading}>
                            <h1>Profile</h1>
                            {!editProfile && (
                                <button onClick={editClickHandler}>
                                    {EditPencil} Edit Profile
                                </button>
                            )}
                            {editProfile && (
                                <div className={styles.buttonsDiv}>
                                    <button onClick={resetFormData}>
                                        Discard
                                    </button>
                                    <button onClick={saveChangesHandler}>
                                        Update Info
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className={styles.profileManagement}>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>Name</label>
                                    <input
                                        value={editProfileData.name}
                                        onChange={(e) =>
                                            setEditProfileData({
                                                ...editProfileData,
                                                name: e.target.value,
                                            })
                                        }
                                        disabled={!editProfile}
                                    />
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={editProfileData.email}
                                        disabled={!editProfile}
                                        onChange={(e) =>
                                            setEditProfileData({
                                                ...editProfileData,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>MobileNumber</label>
                                    <input
                                        value={editProfileData.mobileNumber}
                                        disabled={!editProfile}
                                        onChange={(e) =>
                                            setEditProfileData({
                                                ...editProfileData,
                                                mobileNumber: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>Pet Parent</label>
                                    <select
                                        disabled={!editProfile}
                                        value={editProfileData.petParent}
                                        onChange={(e) =>
                                            setEditProfileData({
                                                ...editProfileData,
                                                petParent: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="Yes">YES</option>
                                        <option value="No">NO</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>Country</label>
                                    <Dropdown className={styles.dropDownDiv} >
                                        <Dropdown.Toggle variant="success" id="country-dropdown" className={styles.dropDown} disabled={!editProfile} >
                                            {selectedCountry.label || 'Select Country'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {countries.map(country => (
                                                <Dropdown.Item key={country.value} onClick={() => handleCountryChange(country)}>
                                                    {country.label}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>State</label>
                                    <Dropdown className={styles.dropDownDiv}>
                                        <Dropdown.Toggle variant="success" id="state-dropdown" className={styles.dropDown} disabled={!editProfile}>
                                            {selectedState.label || 'Select State'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {states.map(state => (
                                                <Dropdown.Item key={state.value} onClick={() => handleStateChange(state)}>
                                                    {state.label}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className={InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>City</label>
                                    <Dropdown className={styles.dropDownDiv}>
                                        <Dropdown.Toggle variant="success" id="city-dropdown" className={styles.dropDown} disabled={!editProfile}>
                                            {selectedCity.label || 'Select State'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {cities.map(city => (
                                                <Dropdown.Item key={city.value} onClick={() => { setSelectedCity(city) }}>
                                                    {city.label}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>Current Password</label>
                                    <input
                                        type="password"
                                        value={editProfileData.currentPassword}
                                        disabled={!editProfile}
                                        required
                                        onChange={(e) =>
                                            setEditProfileData({
                                                ...editProfileData,
                                                currentPassword: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>New Password</label>
                                    <input
                                        type="password"
                                        disabled={!editProfile}
                                        value={editProfileData.newPassword}
                                        onChange={(e) =>
                                            setEditProfileData({
                                                ...editProfileData,
                                                newPassword: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            {editProfile && (
                                <div className={styles.bottomButtonsDiv}>
                                    {editProfile && (
                                        <div className={styles.buttonsDiv}>
                                            <button onClick={resetFormData}>
                                                Discard
                                            </button>
                                            <button
                                                onClick={saveChangesHandler}
                                            >
                                                Update Info
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {reviewActive && (
                    <div className={styles.review}>
                        <div className={styles.heading}>
                            <h1>Services</h1>
                        </div>
                        {!showModal && (
                            <div className={styles.servicesListMain}>
                                {services.map((doc, index) => (
                                    <div className={styles.servicesList}>
                                        <div
                                            className={styles.serviceAddCard}
                                        >
                                            {doc.price}
                                            { }
                                        </div>
                                    </div>
                                ))}
                                <div className={styles.servicesList}>
                                    <div
                                        className={styles.serviceAddCard}
                                        onClick={showModalClickHandler}
                                    >
                                        {addCircularButton}
                                    </div>
                                </div>
                            </div>
                        )}
                        {showModal && (
                            <div className={styles.formModal}>
                                <button
                                    className={styles.closeModalButton}
                                    onClick={() => {
                                        setShowModal(false);
                                    }}
                                >
                                    {closeCircularCross}
                                </button>

                                <form
                                    className={styles.formDiv}
                                    onSubmit={handleFormSubmit}
                                >
                                    <h4>Add Service</h4>
                                    <div className={styles.inputGroup}>
                                        <label>Service Type</label>
                                        <select
                                            value={formData.serviceType}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    serviceType: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="PetGrooming">
                                                PetGrooming
                                            </option>
                                            <option value="PetWalking">
                                                PetWalking
                                            </option>
                                            <option value="PetTraining">
                                                PetTraining
                                            </option>
                                            <option value="VeterinaryCare">
                                                VeterinaryCare
                                            </option>
                                            <option value="Daycare">
                                                Daycare
                                            </option>
                                            <option value="PetBreeding">
                                                PetBreeding
                                            </option>
                                        </select>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Price</label>
                                        <div className={styles.select}>
                                            <select
                                                value={formData.currency}
                                                onChange={(e) => {
                                                    setFormData({
                                                        ...formData,
                                                        currency:
                                                            e.target.value,
                                                    });
                                                    console.log(e.target.value);
                                                }}
                                            >
                                                {currencyOptions.map(
                                                    (currency) => (
                                                        <option
                                                            key={currency}
                                                            value={currency}
                                                        >
                                                            {currency}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            <input
                                                value={formData.price}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        price: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Note</label>
                                        <input
                                            value={formData.note}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    note: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Pet Type</label>
                                        <select
                                            value={formData.petType}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    petType: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="Cat">Cat</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Both">Both</option>
                                        </select>
                                    </div>
                                    <div className={styles.submitButton}>
                                        <button type="submit">Save</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ProviderDashboard;
