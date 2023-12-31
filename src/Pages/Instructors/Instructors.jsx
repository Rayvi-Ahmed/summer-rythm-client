import { Helmet } from "react-helmet-async";
import useAllInstructors from "../../Hooks/useAllInstructors/useAllInstructors";
import AllInstructosData from "../AllInstructosData/AllInstructosData";

const Instructors = () => {
    const [allInstructors] = useAllInstructors()
    console.log(allInstructors)
    return (
        <div>
            < Helmet >
                <title>Summer Rythm | Instructors</title>
            </Helmet >
            <div className="my-5 ">  <h1 className="font bold text-3xl"> <span className="text-green-500 font bold text-3xl">Our Instructors</span>  | Summer Rythm</h1></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3">

                {
                    allInstructors.map(instructors => <AllInstructosData
                        key={instructors._id}
                        instructors={instructors}

                    >
                    </AllInstructosData>)
                }

            </div>


        </div>
    );
};

export default Instructors;