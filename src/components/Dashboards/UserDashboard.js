import styles from "./UserDashboard.module.css";
import Header from "../Header/Header";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
const UserDashboard = () => {
    const EditPencil = (
        <svg
            viewBox="0 0 24 24"
            fill="#d1000a"
            width="24"
            height="24"
            class="sxbQRqA"
        >
            <path
                fill-rule="evenodd"
                d="M18.8525,7.543 L17.7515,8.644 L15.3565,6.248 L16.4575,5.147 C16.5555,5.05 16.6835,5.001 16.8105,5.001 C16.9385,5.001 17.0665,5.05 17.1645,5.147 L18.8525,6.835 C19.0475,7.03 19.0475,7.348 18.8525,7.543 L18.8525,7.543 Z M8.1895,18.206 C8.1185,18.276 8.0275,18.324 7.9295,18.344 L5.1275,18.873 L5.6575,16.07 C5.6755,15.972 5.7225,15.882 5.7945,15.811 L14.6495,6.955 L17.0445,9.351 L8.1895,18.206 Z M19.5595,6.128 L17.8715,4.44 C17.2865,3.856 16.3355,3.856 15.7505,4.44 L5.0875,15.103 C4.8735,15.317 4.7295,15.588 4.6745,15.886 L4.0085,19.407 C3.9775,19.569 4.0295,19.736 4.1465,19.854 C4.2415,19.948 4.3685,20 4.4995,20 C4.5305,20 4.5615,19.997 4.5925,19.991 L8.1165,19.326 C8.4145,19.269 8.6855,19.125 8.8965,18.912 L19.5595,8.25 C20.1445,7.665 20.1445,6.713 19.5595,6.128 L19.5595,6.128 Z"
            ></path>
        </svg>
    );
    const [profileActive, setProfileActive] = useState(true);
    const [reviewActive, setReviewActive] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
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
                        <p></p>
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
                            Review
                        </button>
                    </div>
                </div>
                {profileActive && (
                    <div className={styles.profile}>
                        <div className={styles.upperHeading}>
                            <h1>Profile</h1>
                            <button>{EditPencil} Edit Profile</button>
                        </div>
                    </div>
                )}
                {reviewActive && <div className={styles.review}></div>}
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default UserDashboard;
