import { BrowserRouter, Route, Routes } from "react-router"
import HomeView from "./views/HomeView"
import { Navbar } from "./components/ui/Navbar"
import WeatherView from "./views/WeatherView"

const Layout = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <div style={{marginTop:"4rem", height:"100rem"}}>
        <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/weather/:city" element={<WeatherView/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default Layout;