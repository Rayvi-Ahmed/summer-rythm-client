import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer";


const Main = () => {
    const location = useLocation()

    const manageHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {manageHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {manageHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;