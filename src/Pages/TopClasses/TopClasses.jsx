import React from 'react';
import useTopClasses from '../../Hooks/useTopClasses/useTopClasses';
import TopClassesData from './TopClassesData/TopClassesData';

const TopClasses = () => {
    const [popularClass] = useTopClasses()
    const topClasses = popularClass.slice(0, 6)


    return (
        <div>
            <div className="my-5 ">  <h1 className="font-bold text-3xl"> <span className="text-blue-700 font-semibold text-4xl">Our Top Classes</span></h1></div>
            <div className="container mx-auto grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-3">

                {
                    topClasses.map(top => <TopClassesData
                        key={top._id}
                        top={top}
                    >
                    </TopClassesData>)
                }

            </div>

        </div>
    );
};

export default TopClasses;