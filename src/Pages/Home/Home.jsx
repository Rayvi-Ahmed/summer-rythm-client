import { Helmet } from "react-helmet-async";
import Features from "../Features/Features";
import Carusel from "./Carusel/Carusel";
import TopInstructor from "../TopInstructor/TopInstructor";
import TopClasses from "../TopClasses/TopClasses";
import Testimonial from "./Testimonial/Testimonial";
import { Parallax } from "swiper/modules";
import HighClass from "./HighClass/HighClass";


const Home = () => {
    const defaultDark = window.matchMedia(('prefers-color')).matches
    return (
        <div >
            < Helmet >
                <title>Summer Rythm | Home</title>
            </Helmet >
            <Carusel></Carusel>
            <TopInstructor></TopInstructor>
            <Features></Features>
            <TopClasses></TopClasses>
            <HighClass></HighClass>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;