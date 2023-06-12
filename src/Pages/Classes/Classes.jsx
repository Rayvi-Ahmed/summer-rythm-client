import ApproveCladdCard from "./ApproveCladdCard/ApproveCladdCard";
import Swal from "sweetalert2";
import useClass from "../../Hooks/useClass/useClass";
import useStudent from "../../Hooks/useStudent/useStudent";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [approveClasses] = useClass()
    const [students] = useStudent()
    console.log(students)


    return (
        <div>
            <div className="my-5 ">  <h1 className="font bold text-3xl"> <span className="text-green-500 font bold text-3xl">Available Classes</span>  | Summer Rythm</h1></div>
            < Helmet >
                <title>Summer Rythm | Classes</title>
            </Helmet >

            <div className="container mx-auto grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-3">

                {
                    approveClasses.map(course => <ApproveCladdCard
                        key={course._id}
                        course={course}

                    >
                    </ApproveCladdCard>)
                }

            </div>


        </div>
    );
};

export default Classes;