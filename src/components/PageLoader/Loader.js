import React from "react";
import styles from "./Loader.module.css";
const PageLoader = () => {
    return (
        <div className={styles["loader-container"]}>
            <div className={styles["loader"]}></div>
        </div>
    );
};

export default PageLoader;
