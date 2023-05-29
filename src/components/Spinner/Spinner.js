import styles from "./Loading.module.css";
const Loading = (props) => {
    return (
        <div className={styles.spinner}>
            <div class={styles["lds-roller"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>{props.statement}</div>
        </div>
    );
};

export default Loading;
