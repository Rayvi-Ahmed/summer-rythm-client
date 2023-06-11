import ApproveCladdCard from "./ApproveCladdCard/ApproveCladdCard";
import Swal from "sweetalert2";
import useClass from "../../Hooks/useClass/useClass";

const Classes = () => {
    const [approveClasses] = useClass()

    return (
        <div>
            <div className="my-5 ">  <h1 className="font bold text-3xl"> <span className="text-green-500 font bold text-3xl">Approved</span> classes</h1></div>
            <div className="container mx-auto grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-3">
                {
                    approveClasses.map(clss => <ApproveCladdCard
                        key={clss._id}
                        course={course}
                    >

                    </ApproveCladdCard>)
                }

            </div>


        </div>
    );
};

export default Classes;