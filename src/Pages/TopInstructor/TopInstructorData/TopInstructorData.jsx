import React from 'react';
import { Link } from 'react-router-dom';

const TopInstructorData = ({ instructor }) => {
    const { name, image, email, role } = instructor
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 transform hover:scale-105 duration-500">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="text-gray-800">Contact : {email}</p>
                    <p className="text-gray-800">Position : {role}</p>
                </div>
                <Link to={'/classes'}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-cyan-600 text-gray-50">Read more</button>
                </Link>
            </div>
        </div>
    );
};

export default TopInstructorData;