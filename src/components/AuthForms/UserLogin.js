import { useState } from "react";
import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const submitHandler = async (event) => {
        event.preventDefault();
        const Data = {
            mobileNum: email,
            password: password,
        };
        console.log(Data);
        const response = await fetch(
            "https://friskei-backend.onrender.com/users/login",
            {
                method: "POST",
                body: JSON.stringify(Data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response);
    };
    return (
        <>
            <div className={styles.main}>
                <div className={styles.loginCard}>
                    <h1>Login to Continue</h1>
                    <form className={styles.loginForm}>
                        <input
                            type="text"
                            placeholder="Mobile No. /Email Id"
                            value={email}
                            onChange={emailChangeHandler}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                        <button type="submit" onClick={submitHandler}>
                            Login
                        </button>
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
        </>
    );
};

export default UserLogin;
