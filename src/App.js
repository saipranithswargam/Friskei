import React, { useState }  from "react";
import { useEffect } from "react";
import Navigation from "./components/Navigation";


function App() {
    const [screenLoading, setScreenLoading] = useState(true);
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

    useEffect(() => {

        setScreenLoading(false);
    }, []);

    return (
        screenLoading
        ?
        <h1>loading</h1>
        :
        <Navigation />
    );
}

export default App;
