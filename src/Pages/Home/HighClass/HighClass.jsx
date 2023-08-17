import React from 'react';
import './HighClass.css';

const HighClass = () => {
    return (
        <div className='featured-image p-24 bg-fixed '>
            <div className='container mx-auto my-8'>
                <div className='flex justify-center items-center md:ml-10 text-white bg-slate-800 opacity-80 rounded-lg transform hover:scale-105 duration-500'>
                    <div>
                        <img src='https://img.freepik.com/free-photo/close-up-hand-writing-song_23-2148845408.jpg?w=900&t=st=1692247882~exp=1692248482~hmac=7922cfe0d9560d906b6ce7b8e9a4a906665bce70263f825dc54a32da3c285e00' alt="" />
                    </div>
                    <div className=''>
                        <h1 className='text-2xl lg:text-3xl md:text-3xl font-semibold'>Higher music Education forum </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum beatae odio facere. Iusto in sed enim similique minima culpa.</p>
                        <button className='btn btn-primary'>Go next</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HighClass;