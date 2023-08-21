import { useRef, useState, useContext } from "react";
import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import AuthContext from "../../store/auth-context";
import Loading from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
const UserLogin = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        const Data = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        };
        console.log(Data);
        try {
            const response = await axiosInstance.post("/users/login", {
                email: Data.email,
                password: Data.password,
            });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
        // fetch("https://friskei-backend.onrender.com/users/login", {
        //     method: "POST",
        //     body: JSON.stringify(Data),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // }).then((response) => {
        //     setIsLoading(false);
        //     if (response.ok) {
        //         response.json().then((result) => {
        //             const expirationTime = new Date(
        //                 new Date().getTime() + 1.8e7
        //             );
        //             authCtx.login(result.token, expirationTime.toISOString());
        //             navigate("/");
        //         });
        //         console.log("logged in sucessfully");
        //     }
        // });
    };
    return (
        <>
            <Header />
            {isLoading && <Loading />}
            {!isLoading && (
                <div className={styles.main}>
                    <div className={styles.loginCard}>
                        <h1>Login to Continue</h1>
                        <form
                            className={styles.loginForm}
                            onSubmit={submitHandler}
                        >
                            <input
                                type="text"
                                placeholder="Email Id"
                                ref={emailInputRef}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                ref={passwordInputRef}
                            />
                            <button type="submit">Login</button>
                        </form>
                        <p>
                            <Link to="/forgotPassword">Forgot Password</Link>
                        </p>
                        <p>Don't have an account with us ?</p>
                        <div className={styles.registerDiv}>
                            <p>
                                <Link to="/register">
                                    Click here to Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserLogin;
