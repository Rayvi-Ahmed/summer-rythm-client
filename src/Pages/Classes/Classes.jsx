import { useEffect, useState } from "react";
import ApproveCladdCard from "./ApproveCladdCard/ApproveCladdCard";

const Classes = () => {
    const [approveClasss, setApproveClass] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                const approveClasses = data.filter(cls => cls.status === 'approve')
                setApproveClass(approveClasses)
            })
    }, [])


    return (
        <div>
            <div className="my-5 ">  <h1 className="font bold text-3xl"> <span className="text-green-500 font bold text-3xl">Approved</span> classes</h1></div>
            <div className="container mx-auto grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-3">
                {
                    approveClasss.map(clss => <ApproveCladdCard
                        key={clss._id}
                        clss={clss}
                    >

                    </ApproveCladdCard>)
                }

            </div>


        </div>
    );
};

export default Classes;