import React from "react";
import styles from "./ContactUs.module.css";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Footer from "../Footer/Footer";
const ContactUs = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.upperDiv}>
                    <p>Get in touch</p>
                    <div className={styles.mainLine}>
                        <h1>
                            Call us, contact our team via the form below, or
                            book your pet's appointment directly on the website.
                        </h1>
                    </div>
                </div>
                <div className={styles.form}>
                    <form>
                        <div className={styles.name}>
                            <div className={styles.namePart}>
                                <label>FirstName*</label>
                                <input size="60" />
                            </div>
                            <div className={styles.namePart}>
                                <label>LastName*</label>
                                <input size="60" />
                            </div>
                        </div>
                        <div className={styles.email}>
                            <div className={styles.namePart}>
                                <label>Email*</label>
                                <input size="60" />
                            </div>
                        </div>
                        <div className={styles.message}>
                            <div className={styles.namePart}>
                                <label>Message</label>
                                <textarea size="50" />
                            </div>
                        </div>
                        <div className={styles.buttonDiv}>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.mapouter}>
                <div className={styles.gmap_canvas}>
                    <iframe
                        title="map"
                        className={styles.gmap_iframe}
                        width="100%"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=1280&amp;height=652&amp;hl=en&amp;q=Vancouver, British Columbia, Canada&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
