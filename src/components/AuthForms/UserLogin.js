import { useRef, useState, useContext } from "react";
import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Loading from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { useAppDispatch } from "../../app/hooks";
import { userActions } from "../../features/userSlice";
import { toast } from "react-toastify";
const UserLogin = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
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
            setIsLoading(false);
            dispatch(userActions.setState({ ...response.data }));
            navigate("/", { replace: true });
            toast.success("Logged in successfully!", {
                position: "top-right",
            });
        } catch (err) {
            setIsLoading(false);
            console.log(err);
            toast.error(err.response.data.message, {
                position: "top-right",
            });
        }
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
                                <Link to="/joinus">Click here to Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserLogin;
