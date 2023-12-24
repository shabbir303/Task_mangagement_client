import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../Page/Header/Navbar";
import bg from "../../assets/bg.jpg"
import Header from "../Page/Header/Navbar";
import Foter from "../Page/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register');
    const bgClass = noHeaderFooter? "h-screen " :"";
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className={`bg-cover w-full  bg-fixed ${bgClass}`}>
                {noHeaderFooter || <Header></Header>}
                <Outlet></Outlet>
                {noHeaderFooter || <Foter></Foter>}
            </div>
        </>
    );
};

export default Main;