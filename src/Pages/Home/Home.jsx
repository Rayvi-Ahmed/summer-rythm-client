import { Helmet } from "react-helmet-async";
import Features from "../Features/Features";
import Carusel from "./Carusel/Carusel";


const Home = () => {
    return (
        <div>
            < Helmet >
                <title>Summer Rythm | Home</title>
            </Helmet >
            <Carusel></Carusel>
            <Features></Features>
        </div>
    );
};

export default Home;