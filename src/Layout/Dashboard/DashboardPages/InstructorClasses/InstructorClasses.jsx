import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useInstructorClass from "../../../../Hooks/useInstructorClass/useInstructorClass";

const InstructorClasses = () => {
    const [addClass] = useInstructorClass()


    return (
        <div>
            <h1>{addClass.length}</h1>
        </div>
    );
};

export default InstructorClasses;