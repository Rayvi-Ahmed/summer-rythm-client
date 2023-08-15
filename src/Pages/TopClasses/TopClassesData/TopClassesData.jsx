import React from 'react';
import { Link } from 'react-router-dom';


const TopClassesData = ({ top }) => {
    const { Imge, price, seat, courseName } = top

    return (

        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 transform hover:scale-105 duration-500">
                <img src={Imge} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{courseName}</h2>
                        <p className="text-gray-800">Course Fee : $ {price}</p>
                        <p className="text-gray-800">Available Seat : {seat}</p>
                    </div>
                    <Link to={'/classes'}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-700 text-gray-50">Enroll Now</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default TopClassesData;