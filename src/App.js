import Header from "./components/Header/Header";
import Hero from "./components/LandingPage/Hero/Hero";
import { Fragment } from "react";
import Fab from "@mui/material/Fab";
import "./App.js";
import Services from "./components/LandingPage/Services/Services";
function App() {
    const style = {
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
        padding:"1rem 2rem",
        backgroundColor:"#035772",
        color:"#FFF"
    };
    return (
        <Fragment>
            <Header />
            <Hero />
            <Fab variant="extended" style={style} onClick={()=>{console.log("testing")}}> 
                Let's Chat
            </Fab>
            <Services />
        </Fragment>
    );
}

export default App;
