import React from "react";
import LoaderGif from "./Loader2.gif";
import styles from "./InitialLoader.module.css";
const InitialLoader = () => {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <img src={LoaderGif} alt="loader" />
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default InitialLoader;
