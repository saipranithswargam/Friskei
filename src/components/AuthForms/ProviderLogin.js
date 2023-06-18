import { useState } from "react";
import styles from "./Provider.module.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
const ProviderLogin = () => {
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
        fetch("https://friskei-backend.onrender.com/users/login", {
            method: "POST",
            body: JSON.stringify(Data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                response.json().then((result) => {
                    localStorage.setItem(
                        "freskei",
                        JSON.stringify({
                            login: true,
                            token: result.token,
                        })
                    );
                });
            }
        });
    };
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.loginCard}>
                    <h1>Login to Continue</h1>
                    <form className={styles.loginForm}>
                        <input
                            type="text"
                            placeholder="Email Id"
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
                            <Link to="/joinus">Click here to JoinUs</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProviderLogin;
