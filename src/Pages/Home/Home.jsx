import { Helmet } from "react-helmet-async";
import Features from "../Features/Features";
import Carusel from "./Carusel/Carusel";
import TopInstructor from "../TopInstructor/TopInstructor";
import TopClasses from "../TopClasses/TopClasses";


const Home = () => {
    return (
        <div>
            < Helmet >
                <title>Summer Rythm | Home</title>
            </Helmet >
            <Carusel></Carusel>
            <TopInstructor></TopInstructor>
            <Features></Features>
            <TopClasses></TopClasses>
        </div>
    );
};

export default Home;