import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const noHeader = location.pathname.includes('signup' && 'profile')
    return (
        <div className="font-sakib ">
            {noHeader || <Header></Header>}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;