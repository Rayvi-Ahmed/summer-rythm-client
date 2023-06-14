import React from 'react';
import useStudent from '../../Hooks/useStudent/useStudent';
import TopInstructorData from './TopInstructorData/TopInstructorData';

const TopInstructor = () => {
    const [students] = useStudent()
    const topInstructor = students.filter(instructor => instructor.category === "best")
    const instructors = topInstructor.slice(0, 6)
    console.log(instructors, topInstructor)
    return (
        <div>
            <div className="my-5 ">  <h1 className="font-bold text-3xl"> <span className="text-cyan-500 font bold text-4xl">Popular Instructors</span></h1></div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">

                {
                    instructors.map(instructor => <TopInstructorData
                        key={instructor._id}
                        instructor={instructor}

                    >
                    </TopInstructorData>)
                }

            </div>

        </div>
    );
};

export default TopInstructor;