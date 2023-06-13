import { FaDollarSign, FaTrash } from "react-icons/fa";
import useBooked from "../../../../Hooks/useBooked/useBooked";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
    const [booked] = useBooked()

    return (
        <div className="w-full ml-5">
            <div>

                < Helmet >
                    <title>Summer Rythm | My Class</title>
                </Helmet >
                <h1 className="text-center text-4xl text-bold">My selected Classes: {booked.length}</h1>
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
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booked.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.courseName}</td>
                                <td>{user.seat}</td>
                                <td>{user.name}</td>
                                <td>${user.price}</td>

                                <Link to={`/dashboard/payment/${user._id}`} state={{ state: user }}>
                                    <td><button className="btn btn-sm bg-purple-500 text-xl text-white font-semibold"><FaDollarSign></FaDollarSign></button></td>


                                </Link>

                                <td>
                                    <button className="btn btn-sm bg-red-500 text-white text-xl "><FaTrash></FaTrash></button>
                                </td>


                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyClass;