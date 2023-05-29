import styles from "./ForgotPassword.module.css";
import Header from "../Header/Header";
const ForgotPassword = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.forgotPasswordCard}>
                    <h1>Forgot Password</h1>
                    <form className={styles.forgotPasswordForm}>
                        <input type="text" placeholder="Email Id" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
