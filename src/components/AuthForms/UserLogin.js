import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
const UserLogin = () => {
    return (
        <div className={styles.main}>
            <div className={styles.loginCard}>
                <h1>Login to Continue</h1>
                <form className={styles.loginForm}>
                    <input type="text" placeholder="Mobile No. /Email Id" />
                    <input type="password" placeholder="password" />
                    <button type="submit">Login</button>
                </form>
                <p>
                    <Link to="/forgotPassword">Forgot Password</Link>
                </p>
                <p>Don't have an account with us ?</p>
                <div className={styles.registerDiv}>
                    <p>
                        <Link to="/register">Click here to Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
