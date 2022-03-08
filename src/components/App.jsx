import React from "react";
import Home from "./pages/Home";
import ContactUs from "./pages/ContacUs";
import JoinUs from "./pages/JoinUs";
import Videos from "./pages/Videos";
import AboutUs from "./pages/AboutUs";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"

function App() {
    return (
        <>
            <Router>
                <Routes >
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/joinus" element={<JoinUs/>}/>
                    <Route path="/videos" element={<Videos/>}/>
                    <Route path="contactus" element={<ContactUs/>}/>
                    {/* <Navigate to="/" /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;