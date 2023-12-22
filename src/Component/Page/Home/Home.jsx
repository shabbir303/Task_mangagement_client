import Slider from "./Slider";
// import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import AwesomeButtonProgress from 'react-awesome-button/src/components/AwesomeButtonProgress';
// import AwesomeButtonSocial from 'react-awesome-button/src/components/AwesomeButtonSocial';
// import Header from "../Header/Navbar";
const Home = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10" >
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-serif text-white">Manage work <br></br>
                        <span className="text-amber-500">Efficiently.</span></h1>
                    <p className="mt-3 text-white font-serif text-2xl">Plan, Track and Organise your work.</p>
                    <p className="mt-3 text-teal-400 font-serif">An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                    <AwesomeButtonProgress
                        type="secondary"
                        size="medium"
                        // action={(element, next)}
                    >
                        Explore More
                    </AwesomeButtonProgress>
                </div>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;