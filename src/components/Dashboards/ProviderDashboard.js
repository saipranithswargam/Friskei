import React from "react";
import styles from "./ProviderDashboard.module.css";
import Header from "../Header/Header";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
const ProviderDashboard = () => {
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
    const [priceTicker, setPriceTicker] = React.useState("");
    const [price, setPrice] = React.useState("");
    const profileClickHandler = () => {
        setProfileActive(true);
        setReviewActive(false);
    };
    const reviewClickHandler = () => {
        setProfileActive(false);
        setReviewActive(true);
    };
    const editClickHandler = () => {
        setEditProfile(true);
    };
    const showModalClickHandler = () => {
        setShowModal(true);
    };
    const handlerTickerChange = (event) => {
        setPriceTicker(event.target.value);
    };
    const handlerPriceChange = (event) => {
        setPrice(event.target.price);
    };
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [settings, setSettings] = useState(false);
    const backChangeHandler = () => {
        setSettings(false);
    };
    const saveChangesHandler = () => {
        console.log("here goes post request to backend");
    };
    console.log(authCtx.token);
    // useEffect(() => {
    //     fetch(`https://friskei-backend.onrender.com/users/profile`, {
    //         method: "get",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + authCtx.token,
    //         },
    //     }).then((response) => {
    //         if (response.ok) {
    //             response.json().then((data) => {
    //                 console.log(data);
    //             });
    //         } else {
    //             navigate("/login");
    //         }
    //     });
    // }, [authCtx.token, navigate]);

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
                        <div className={styles.symbol}>M</div>
                        <h5>Madhav Bhallamudi</h5>
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
                                    <button>Discard</button>
                                    <button>Update Info</button>
                                </div>
                            )}
                        </div>
                        <div className={styles.profileManagement}>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>Name</label>
                                    <input
                                        value="Madhav Bhallamudi"
                                        disabled={!editProfile}
                                    />
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>Email</label>
                                    <input
                                        value="Madhav@gmail.com"
                                        disabled={!editProfile}
                                    />
                                </div>
                            </div>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>MobileNumber</label>
                                    <input
                                        value="+918885816487"
                                        disabled={!editProfile}
                                    />
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>City</label>
                                    <input
                                        value="Hyderabad"
                                        disabled={!editProfile}
                                    />
                                </div>
                            </div>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>Gender</label>
                                    <input
                                        disabled={!editProfile}
                                        value="Male"
                                    />
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>Pet Parent</label>
                                    <select disabled={!editProfile}>
                                        <option value="Yes">YES</option>
                                        <option value="No">NO</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.currentPassword}>
                                <label>Current Password</label>
                                <input disabled={!editProfile} />
                            </div>
                            <div className={styles.InputGroup}>
                                <div className={styles.InputDiv}>
                                    <label>New password</label>
                                    <input disabled={!editProfile} />
                                </div>
                                <div className={styles.InputDiv}>
                                    <label>Confirm New Password</label>
                                    <input disabled={!editProfile} />
                                </div>
                            </div>
                            {editProfile && (
                                <div className={styles.bottomButtonsDiv}>
                                    {editProfile && (
                                        <div className={styles.buttonsDiv}>
                                            <button>Discard</button>
                                            <button>Update Info</button>
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
                            <div className={styles.servicesList}>
                                <div
                                    className={styles.serviceAddCard}
                                    onClick={showModalClickHandler}
                                >
                                    {addCircularButton}
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

                                <form className={styles.formDiv}>
                                    <h4>Add Service</h4>
                                    <div className={styles.inputGroup}>
                                        <label>Service Type</label>
                                        <select>
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
                                        <div
                                            className={styles.select}
                                            onChange={handlerTickerChange}
                                        >
                                            <select>
                                                <option>USD</option>
                                                <option>INR</option>
                                                <option>SEK</option>
                                            </select>
                                            <input
                                                onChange={handlerPriceChange}
                                                value={"5"}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Note</label>
                                        <input />
                                    </div>
                                    <div className={styles.submitButton}>
                                        <button>Save</button>
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
