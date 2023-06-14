
import useInstructorClass from "../../../../Hooks/useInstructorClass/useInstructorClass";

const InstructorClasses = () => {
    const [addClass] = useInstructorClass()
    console.log(addClass)

    return (
        <div>
            <h1>{addClass.length}</h1>
        </div>
    );
};

export default InstructorClasses;