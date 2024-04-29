import React from "react";
import './app.scss';
import Footer from "./Component/Footer/Footer";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import FAQPage from "./Pages/FAQPage";
import AboutPage  from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import TeamPage from "./Pages/TeamPage";
import FixedIcon from "./Component/Fixedicon/FixedIcon";
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';



// import src from './brand-logo.png'


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
    <Router>

     <Navbar/>
     <FixedIcon/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/FAQPage" element={<FAQPage/>}/>
      <Route path="/ContactPage" element={<ContactPage/>}/>
      <Route path="/AboutPage" element={<AboutPage/>}/>
      <Route path="/TeamPage" element={<TeamPage/>}/>
      <Route path="/*" element={<HomePage/>}/>


      
    </Routes>
    
 

    <Footer/>
    </Router>
    
  
    </>
  );
}

export default App;
