import styles from "./UserDashboard.module.css";
import Header from "../Header/Header";
import Avatar from "../../assets/images/Avatar.png";
import { useState } from "react";
const UserDashboard = () => {
    const [settings, setSettings] = useState(false);
    const changeUiHandler = () => {
        setSettings(true);
    };
    const backChangeHandler = () => {
        setSettings(false);
    };
    const saveChangesHandler = () => {
        console.log("here goes post request to backend");
    };
    return (
        <>
            <Header />

            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.image}>
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <div className={styles.name}>
                        <h1>Swargam Saipranith</h1>
                    </div>
                    <div className={styles.member}>
                        <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 1024 1024"
                            data-aut-id="members"
                            fillRule="evenodd"
                        >
                            <path d="M341.579 85.3359V127.981H683.211V85.3359H768.619V127.981H895.963L938.667 170.669V895.981L895.963 938.669H128.038L85.3335 895.981V170.669L128.038 127.981H256.15V85.3359H341.579ZM853.259 426.648H170.742V853.315H853.259V426.648ZM320.221 511.988C355.601 511.988 384.277 540.66 384.277 575.988C384.277 611.337 355.601 639.988 320.221 639.988C284.84 639.988 256.165 611.337 256.165 575.988C256.165 540.66 284.84 511.988 320.221 511.988ZM256.15 213.315H170.742V341.336H853.259V213.315H768.619V255.981L725.915 298.648L683.211 255.981V213.315H341.579V255.981L298.875 298.648L256.15 255.981V213.315Z"></path>
                        </svg>
                        <p>Member since May 2023</p>
                    </div>
                    <div className={styles.pet}>
                        <svg
                            fill="#002F34"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                        </svg>
                        <p>Pet Parent : No</p>
                    </div>
                    {!settings && (
                        <div className={styles.button} key={"changeUI"}>
                            <button onClick={changeUiHandler}>
                                <div className={styles.inButton}>
                                    <svg
                                        width="22px"
                                        height="22px"
                                        viewBox="0 0 1024 1024"
                                        data-aut-id="icon"
                                        fillRule="evenodd"
                                    >
                                        <path d="M822.312 85.333L745.474 162.667L861.792 279.743L938.667 202.409V168.573L855.913 85.333H822.312ZM193.912 178.053L85.334 287.327V829.393L193.912 938.666H732.562L841.14 829.393V554.805L794.107 518.636L747.111 554.805V790.124L693.529 844.05H232.908L179.326 790.124V326.595L232.908 272.67H463.2L493.786 230.083L463.2 178.053H193.912ZM309.3 601.657V718.697H425.618L826.554 315.183L710.199 198.143L309.3 601.657Z"></path>
                                    </svg>
                                    <span>Edit Profile</span>
                                </div>
                            </button>
                        </div>
                    )}
                    {settings && (
                        <div className={styles.button} key={"backToProfile"}>
                            <button onClick={backChangeHandler}>
                                <div className={styles.inButton}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        viewBox="0 0 24 24"
                                        id="home"
                                        style={{ marginBottom: "4px" }}
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                        <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path>
                                    </svg>
                                    <span>Back</span>
                                </div>
                            </button>
                        </div>
                    )}
                </div>
                {!settings && (
                    <div className={styles.right} key={"backProfile"}></div>
                )}
                {settings && (
                    <div className={styles.settingsPanel} key={"EditProfile"}>
                        <div className={styles.innerPanel}>
                            <div className={styles.heading}>
                                <h1>Edit Profile</h1>
                            </div>
                            <div className={styles.outerDiv}>
                                <div className={styles.sectionHeading}>
                                    Basic Information
                                </div>
                                <div className={styles.info}>
                                    <input
                                        value="Sai Pranith"
                                        placeholder="Name"
                                    />
                                    <input value="Male" placeholder="Gender" />
                                    <input
                                        value="Hyderabad"
                                        placeholder="City"
                                    />
                                </div>
                                <div className={styles.sectionHeading}>
                                    Account Information
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.infoDiv}>
                                        <label>Gmail</label>
                                        <input value="saipranithswargam@gmail.com" />
                                    </div>
                                    <div className={styles.infoDiv}>
                                        <label>Account Type</label>
                                        <input
                                            value="User"
                                            placeholder="account-type"
                                            readOnly
                                        />
                                    </div>
                                    <div className={styles.infoDiv}>
                                        <label>Contact Number</label>
                                        <input
                                            value="8885816487"
                                            placeholder="Contact Number"
                                        />
                                    </div>
                                    <div className={styles.infoDiv}>
                                        <label>Change Password</label>
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                        />
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                        />
                                    </div>
                                </div>
                                <div className={styles.changesSave}>
                                    <button onClick={backChangeHandler}>
                                        Discard
                                    </button>
                                    <button onClick={saveChangesHandler}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserDashboard;
