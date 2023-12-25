import { Card, Dropdown } from 'flowbite-react';
import p1 from "../../../assets/t1.jpg";
import p2 from "../../../assets/software.jpg"
import p3 from "../../../assets/Corporate-Apparel3.jpg"
import p4 from "../../../assets/banker.jpg"

const Targeted = () => {
    return (
        <div className="max-w-7xl">
            <h1 className="text-center text-[30px] mb-[40px] text-white font-semibold font-serif">Targeted Audience</h1>
            <div className='grid grid-cols-4 gap-4'>
            <Card className="max-w-sm bg-cyan-950">
                <div className="flex justify-end px-4 pt-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    
                    <img 
                        height="96"
                        src={p1}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add friend
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-teal-950 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Message
                        </a>
                    </div>
                </div>
            </Card>
                {/*  */}
            <Card className="max-w-sm bg-cyan-950">
                <div className="flex justify-end px-4 pt-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    
                    <img 
                        height="96"
                        src={p2}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Alexander</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add friend
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-teal-950 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Message
                        </a>
                    </div>
                </div>
            </Card>
        {/*  */}
            <Card className="max-w-sm bg-cyan-950">
                <div className="flex justify-end px-4 pt-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    
                    <img 
                        height="96"
                        src={p3}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mason Donlad</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Corporate Professional</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add friend
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-teal-950 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Message
                        </a>
                    </div>
                </div>
            </Card>

            <Card className="max-w-sm bg-cyan-950">
                <div className="flex justify-end px-4 pt-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    
                    <img 
                        height="96"
                        src={p4}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nolan Taylor</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Manager, Bank of London</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add friend
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-teal-950 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Message
                        </a>
                    </div>
                </div>
            </Card>
            </div>
        </div>
    );
};

export default Targeted;