
import ReactiveButton from "reactive-button";
import Slider from "./Slider";
import { Helmet } from "react-helmet";
import Opinion from "./Opinion";
import { Link } from "react-router-dom";
import Targeted from "./Targeted";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Home = () => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <div className="max-w-7xl mx-auto my-10" >
            <Helmet >
                <title className="text-teal-500">Task | Home</title>
            </Helmet>
            <div className="flex justify-between items-center"data-aos="fade-right lg-h-screen">
                <div className="w-[300px]">
                    <h1 className="text-3xl font-serif text-white">Manage work <br></br>
                        <span className="text-amber-500">Efficiently.</span></h1>
                    <p className="mt-3 text-white font-serif text-2xl">Plan, Track and Organise your work.</p>
                    <p className="mt-3 text-teal-400 font-serif">An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
                    <Link to='/dashboard'>
                        <ReactiveButton className="mt-3 font-serif" color="teal" rounded shadow size="large" idleText="Let’s Explore "></ReactiveButton>
                    </Link>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <Slider></Slider>
                </div>
            </div>
            <div className="my-[100px]"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <Targeted></Targeted>
            </div>
            <div className="my-[100px]"data-aos="fade-up"
     data-aos-anchor-placement="top-right">
                <Opinion></Opinion>
            </div>
        </div>
    );
};

export default Home;