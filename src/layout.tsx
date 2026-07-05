import { BrowserRouter, Route, Routes } from "react-router"
import HomeView from "./views/HomeView"
import { Navbar } from "./components/ui/Navbar"
import WeatherView from "./views/WeatherView"
import { Footer } from "./components/ui/Footer"

const Layout = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <div>
        <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/weather/:city" element={<WeatherView/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default Layout;