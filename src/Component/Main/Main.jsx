import { Outlet } from "react-router-dom";
// import Navbar from "../Page/Header/Navbar";
import bg from "../../assets/bg.jpg"
import Header from "../Page/Header/Navbar";

const Main = () => {
    return (
        <>
         <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover w-full h-screen bg-fixed">
         <Header></Header>
          <Outlet></Outlet>
         </div>
        </>
    );
};

export default Main;