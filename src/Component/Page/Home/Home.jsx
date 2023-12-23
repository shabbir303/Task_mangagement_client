
import ReactiveButton from "reactive-button";
import Slider from "./Slider";
import { Helmet } from "react-helmet";
import Opinion from "./Opinion";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto my-10" >
            <Helmet >
                <title className="text-teal-500">Task | Home</title>
            </Helmet>
            <div className="flex justify-between items-center">
                <div className="w-[300px]">
                    <h1 className="text-3xl font-serif text-white">Manage work <br></br>
                        <span className="text-amber-500">Efficiently.</span></h1>
                    <p className="mt-3 text-white font-serif text-2xl">Plan, Track and Organise your work.</p>
                    <p className="mt-3 text-teal-400 font-serif">An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                    <Link to='/dashboard'>
                        <ReactiveButton className="mt-3 font-serif" color="teal" rounded shadow size="large" idleText="Let’s Explore "></ReactiveButton>
                    </Link>
                </div>
                <div>
                    <Slider></Slider>
                </div>
            </div>
            <div className="my-[100px]">
                <Opinion></Opinion>
            </div>
        </div>
    );
};

export default Home;