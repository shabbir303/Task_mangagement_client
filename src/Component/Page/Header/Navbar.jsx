import { Link, NavLink, useNavigate } from "react-router-dom";
import title from "../../../assets/T-removebg-preview.png"
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
const Header = () => {
    // const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res.user);
            })
    }
    return (
        <div>
            <Navbar fluid rounded className='bg-inherit max-w-7xl mx-auto'>
                <Navbar.Brand >
                    <img src={title} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl uppercase font-semibold text-white">Task Management</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {user ? <Dropdown
                        className="bg-cyan-900 "
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user.photoURL} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm text-teal-400">{user.displayName} </span>
                            <span className="block truncate text-sm font-medium text-teal-400">{user.email} </span>
                        </Dropdown.Header>
                        <Link to='/dashboard'>
                            <Dropdown.Item className="text-teal-400">Dashboard</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogOut} className="text-red-500 font-bold text-[16px]">Sign out</Dropdown.Item>
                    </Dropdown> : <Link to="/register">
                        <Button>
                            <HiOutlineArrowRight className="h-6 w-6" />Want to Access Your Dashboard
                        </Button>
                    </Link>}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink to='/'>
                        <Navbar.Link active>
                            Home
                        </Navbar.Link>
                    </NavLink>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;