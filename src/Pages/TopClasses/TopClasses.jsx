import React from 'react';
import useTopClasses from '../../Hooks/useTopClasses/useTopClasses';
import TopClassesData from './TopClassesData/TopClassesData';
import { motion } from 'framer-motion';

const TopClasses = () => {
    const [popularClass] = useTopClasses()
    const topClasses = popularClass.slice(0, 6)

    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 50,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };



    return (
        <div>
            <div className="my-5 ">  <h1 className="font-bold text-3xl"> <span className="text-blue-700 font-semibold text-4xl">Our Top Classes</span></h1></div>
            <motion.div variants={cardVariants} initial="hidden" animate="visible" className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">

                {
                    topClasses.map(top => <TopClassesData
                        key={top._id}
                        top={top}
                    >
                    </TopClassesData>)
                }

            </motion.div>

        </div>
    );
};

export default TopClasses;