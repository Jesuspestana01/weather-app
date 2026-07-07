import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import WeatherView from "./views/WeatherView";
import { Navbar } from "./components/ui/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/ui/Footer";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/weather/:city" element={<WeatherView />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default Layout;
