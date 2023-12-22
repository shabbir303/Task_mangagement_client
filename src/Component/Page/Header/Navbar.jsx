import title from "../../../assets/T-removebg-preview.png"
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
const Header = () => {
    return (
        <div>
            <Navbar fluid rounded className='bg-inherit max-w-7xl mx-auto'>
                <Navbar.Brand >
                    <img src={title} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl uppercase font-semibold text-white">Task Management</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        className="bg-opacity-50 "
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link  active>
                        Home
                    </Navbar.Link>
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