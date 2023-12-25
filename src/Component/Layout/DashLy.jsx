
import { Outlet } from "react-router-dom";
import bg from "../../assets/bgNEw.jpg"
import Dashboard from "./Dashboard";
const DashLy = () => {
    return (
        <div  style={{ backgroundImage: `url(${bg})` }} className='flex bg-cover bg-fixed  gap-[200px] '>
            
            <Dashboard></Dashboard>
            <div className="  w-[100%] ">
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashLy;