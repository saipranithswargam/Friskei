import { useState } from "react";
import styles from "./Provider.module.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useAppDispatch } from "../../app/hooks";
import { userActions } from "../../features/userSlice";
const ProviderLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const submitHandler = async (event) => {
        event.preventDefault();
        const Data = {
            email: email,
            password: password,
        };
        try {
            const response = await axiosInstance.post("/providers/login", {
                email: Data.email,
                password: Data.password,
            });
            console.log(response.data);
            dispatch(userActions.setState({ ...response.data }));
            navigate("/", { replace: true });
        } catch (err) {
            console.log(err);
        }
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
