import { Outlet } from "react-router-dom";
// import Navbar from "../Page/Header/Navbar";
import bg from "../../assets/bg.jpg"
import Header from "../Page/Header/Navbar";
import Foter from "../Page/Footer/Footer";

const Main = () => {
    return (
        <>
         <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover w-full  bg-fixed">
         <Header></Header>
          <Outlet></Outlet>
          <Foter></Foter>
         </div>
        </>
    );
};

export default Main;