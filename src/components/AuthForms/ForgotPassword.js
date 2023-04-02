import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
    return (
        <div className={styles.main}>
            <div className={styles.forgotPasswordCard}>
                <h1>Forgot Password</h1>
                <form className={styles.forgotPasswordForm}>
                    <input type="text" placeholder="Mobile No. /Email Id" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
