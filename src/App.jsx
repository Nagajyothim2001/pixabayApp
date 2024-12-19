import React from "react";
import Navbar from "./Components/Navbar";
import "./Style.css";
import { Footer } from "./Components/Footer";
let App = () => {
    return (
    <React.StrictMode>
        <Navbar/>
        <Footer/>
    </React.StrictMode>
    )
}
export default App;