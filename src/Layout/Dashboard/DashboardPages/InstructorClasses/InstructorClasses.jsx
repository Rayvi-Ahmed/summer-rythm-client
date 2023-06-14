import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useInstructorClass from "../../../../Hooks/useInstructorClass/useInstructorClass";

const InstructorClasses = () => {
    const [addClass] = useInstructorClass()
    console.log(addClass)


    return (
        <div>

        </div>
    );
};

export default InstructorClasses;