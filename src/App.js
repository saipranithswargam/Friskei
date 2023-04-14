import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/LandingPage/Hero/Hero";
import { Fragment } from "react";
import Fab from "@mui/material/Fab";
import Services from "./components/LandingPage/Services/Services";
import JoinUs from "./components/LandingPage/JoinUs/JoinUs";
import CustomerReview from "./components/LandingPage/CustomerReview/CustomerReview";
import CustomerReviewCarousel from "./components/LandingPage/Slider/CustomerReviewCarousel";
import Footer from "./components/Footer/Footer";
import LandingForm from "./components/Form/LandingForm";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./components/AuthForms/UserLogin";
import UserRegsiter from "./components/AuthForms/UserRegister";
import ForgotPassword from "./components/AuthForms/ForgotPassword";
import JoinUsPage from "./components/JoinUs/JoinUs";
import JoinUsRegsiterForm from "./components/AuthForms/JoinUsRegisterForm";
import JoinUsServiceDetails from "./components/AuthForms/JoinUsServiceDetails";
function App() {
    const style = {
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
        padding: "1rem 2rem",
        backgroundColor: "#035772",
        color: "#FFF",
    };
    return (
        <Fragment>
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Fragment>
                            <Header />
                            <Hero />
                            <Fab
                                variant="extended"
                                style={style}
                                onClick={() => {
                                    console.log("testing");
                                }}
                            >
                                Let's Chat
                            </Fab>
                            <LandingForm />
                            <Services />
                            <JoinUs />
                            <CustomerReview />
                            <CustomerReviewCarousel />
                            <Footer />
                        </React.Fragment>
                    }
                />
                <Route element={<UserLogin />} path="/login" />
                <Route element={<UserRegsiter />} path="/register" />
                <Route
                    element={
                        <>
                            <Header />
                            <JoinUsPage />
                        </>
                    }
                    path="/joinus"
                />
                <Route element={<ForgotPassword />} path="/forgotPassword" />
                <Route
                    element={<JoinUsRegsiterForm />}
                    path="/joinus/register/:joinAs"
                />
                <Route
                    element={<JoinUsServiceDetails />}
                    path="/joinus/register/:joinAs/serviceDetails"
                />
            </Routes>
        </Fragment>
    );
}

export default App;
