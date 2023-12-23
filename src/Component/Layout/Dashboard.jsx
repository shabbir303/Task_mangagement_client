import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import './style.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div >
            <Sidebar aria-label="Sidebar with content   "  className="h-screen bg-cover bg-black bg-blend-overlay  bg-fixed">
                <Sidebar.Items className=''>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <NavLink to="create">
                            <Sidebar.Item href="#" icon={HiViewBoards}>
                                Create Task
                            </Sidebar.Item>
                        </NavLink>
                        <Sidebar.Item href="#" icon={HiInbox}>
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiTable}>
                            <NavLink>
                                Sign Up
                            </NavLink>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <NavLink to='/'>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Home
                            </Sidebar.Item>
                        </NavLink>
                        <Sidebar.Item href="#" icon={HiViewBoards}>
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={BiBuoy}>
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            
        </div>
    );
};

export default Dashboard;