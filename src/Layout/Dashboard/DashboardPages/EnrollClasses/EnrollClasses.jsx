import React from 'react';
import useEnroll from '../../../../Hooks/useEnroll/useEnroll';
import { Helmet } from 'react-helmet-async';

const EnrollClasses = () => {
    const [enrolled] = useEnroll()
    console.log(enrolled)
    return (
        <div className="w-full ml-5">
            <div>

                < Helmet >
                    <title>Summer Rythm | Enroll Classes</title>
                </Helmet >
                <h1 className="text-center text-4xl text-bold">My enrolled Classes: {enrolled.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Course Name</th>
                            <th>Available Seat</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.courseName}</td>
                                <td>{user.seat}</td>
                                <td>{user.name}</td>
                                <td>${user.price}</td>
                                <td>Paid</td>

                                {/* <Link to={`/dashboard/payment/${user._id}`} state={{ state: user }}>
                                    <td><button className="btn btn-sm bg-purple-500 text-xl text-white font-semibold"><FaDollarSign></FaDollarSign></button></td>


                                </Link> */}
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default EnrollClasses;
