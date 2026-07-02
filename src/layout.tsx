import { BrowserRouter, Route, Routes } from "react-router"
import HomeView from "./views/HomeView"
import { Navbar } from "./components/ui/Navbar"

const Layout = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <div style={{marginTop:"4rem", height:"100rem"}}>
        <Routes>
            <Route path="/" element={<HomeView/>}/>
        </Routes>
        </div>
        </BrowserRouter>
    )
}

export default Layout;