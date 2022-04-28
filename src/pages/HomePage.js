import React, {useState, useEffect} from 'react';
import Navbar from "../Components/HomeComponents/Sidebar";
import Sidebar from "../Components/HomeComponents/Navbar";
import HeroSection from "../Components/HomeComponents/HeroSection";
import HowWeWork from "../Components/HomeComponents/How-We-Work";
import OurStory from "../Components/HomeComponents/Our-Story";
import MeetTheFounders from "../Components/HomeComponents/Meet-The-Founders";
import Footer from '../Components/HomeComponents/Footer';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function handleWindowSizeChange() {
      if (window.innerWidth < 1280) {
          navigate("/error");
      }
    }

    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar isOpen={isOpen} toggle={toggle}/>
            <Sidebar toggle={toggle}/>
            <HeroSection />
            <OurStory/>
            <HowWeWork />
            <MeetTheFounders />
            <Footer />
         </>
    );
};

export default HomePage;