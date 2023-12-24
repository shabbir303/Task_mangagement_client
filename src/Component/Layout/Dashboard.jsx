import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import './style.css';
import { NavLink } from 'react-router-dom';
import Profile from '../Dashboard/Profile';

const Dashboard = () => {
    return (
        <div >
            <Sidebar aria-label="Sidebar with content   " className="h-screen bg-cover bg-black bg-blend-overlay  bg-fixed">
                <Profile></Profile>
                <Sidebar.Items className='mt-4'>
                    <Sidebar.ItemGroup>

                        <NavLink to="create"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "blue" : "white",
                                    // textDecoration: isActive ? "uppercase" : '',
                                    fontFamily: isActive ? 'serif' : '',
                                    fontSize: isActive ? "25px" : '',
                                    backgroundColor: isActive ? "blue" : "",
                                    fontStyle: isActive ? 'italic' : ''
                                };
                            }}
                        >
                            <Sidebar.Item icon={HiViewBoards}>
                                Create Task
                            </Sidebar.Item>
                        </NavLink>

                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Manage Task
                        </Sidebar.Item>
                        <NavLink to="manageTask"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "blue" : "white",
                                    // textDecoration: isActive ? "uppercase" : '',
                                    fontFamily: isActive ? 'serif' : '',
                                    fontSize: isActive ? "25px" : '',
                                    backgroundColor: isActive ? "blue" : "",
                                    fontStyle: isActive ? 'italic' : ''
                                };
                            }}
                        >
                            <Sidebar.Item icon={HiInbox}>
                                Drag Tasks
                            </Sidebar.Item>
                        </NavLink>


                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <NavLink to='/'>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Home
                            </Sidebar.Item>
                        </NavLink>
                        <NavLink to='/login'>
                            <Sidebar.Item href="#" icon={HiViewBoards}>
                                Login
                            </Sidebar.Item>
                        </NavLink>
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