import React from "react";
import Header from "./Header/Header";
import Hero from "./LandingPage/Hero/Hero";
import { Fragment } from "react";
import Services from "./LandingPage/Services/Services";
import JoinUs from "./LandingPage/JoinUs/JoinUs";
import { ToastContainer } from "react-toastify";
import CustomerReview from "./LandingPage/CustomerReview/CustomerReview";
import CustomerReviewCarousel from "./LandingPage/Slider/CustomerReviewCarousel";
import Footer from "./Footer/Footer";
import LandingForm from "./Form/LandingForm";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./AuthForms/UserLogin";
import UserRegsiter from "./AuthForms/UserRegister";
import ForgotPassword from "./AuthForms/ForgotPassword";
import ServicesMain from "./Services/Services";
import JoinUsRegsiterForm from "./AuthForms/JoinUsRegisterForm";
import JoinUsServiceDetails from "./AuthForms/JoinUsServiceDetails";
import Search from "./SearchResults/Search";
import UserDashboard from "./Dashboards/UserDashboard";
import ProviderLogin from "./AuthForms/ProviderLogin";
import ProviderDashboard from "./Dashboards/ProviderDashboard";
import EditService from "./Dashboards/EditService";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import JoinUsMain from "./JoinUs/JoinUs";
import ChatWidget from "./ChatWidget/ChatWidget";
import ProviderProfile from "../pages/ProviderProfile/ProviderProfile";
import { useAppSelector } from "../app/hooks";
import PageLoader from "./PageLoader/Loader";
import Protected from "./Protected/Protected";
import InitialLoader from "./PageLoader/InitialLoader";
import AuthProtected from "./AuthProtected/AuthProtected";
function Navigation() {
    const user = useAppSelector((state) => state.user);
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
        <>
            <ToastContainer style={{ fontSize: "20px" }} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <React.Fragment>
                            <Header />
                            <Hero />
                            <LandingForm />
                            <Services />
                            <JoinUs />
                            <CustomerReview />
                            <CustomerReviewCarousel />
                            <ChatWidget />
                            <Footer />
                        </React.Fragment>
                    }
                />
                <Route path="/auth" element={<AuthProtected />}>
                    <Route
                        path="login"
                        element={
                            <React.Suspense fallback={<InitialLoader />}>
                                <UserLogin />
                            </React.Suspense>
                        }
                    />
                </Route>
                <Route element={<UserRegsiter />} path="/register" />
                <Route element={<AboutUs />} path="/aboutus" />
                <Route element={<ContactUs />} path="/contact" />
                <Route element={<Search />} path="/search" />
                <Route
                    element={
                        <>
                            <Header />
                            <ServicesMain />
                        </>
                    }
                    path="/services"
                />
                <Route
                    element={
                        <>
                            <JoinUsMain />
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
                <Route
                    element={<ProviderProfile />}
                    path="/search/provider/:id"
                />
                <Route path="/" element={<Protected />}>
                    {user.type === "user" && (
                        <Route path="user/dashboard">
                            <Route
                                path=""
                                element={
                                    <React.Suspense fallback={<PageLoader />}>
                                        <UserDashboard />
                                    </React.Suspense>
                                }
                            />
                        </Route>
                    )}
                    {user.type === "provider" && (
                        <Route path="provider/dashboard">
                            <Route
                                path=""
                                element={
                                    <React.Suspense fallback={<PageLoader />}>
                                        <ProviderDashboard />
                                    </React.Suspense>
                                }
                            />
                        </Route>
                    )}
                </Route>
                <Route element={<ProviderLogin />} path="/providerlogin" />
                <Route element={<EditService />} path="/editservice/:id" />
            </Routes>
        </>
    );
}

export default Navigation;
