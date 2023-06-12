import { useContext, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useStudent from "../../../Hooks/useStudent/useStudent";

const ApproveCladdCard = ({ course }) => {
    // const [students] = useStudent()
    // const isAdmin = students.map(student => student.role === 'admin')
    // const isInstructor = students.map(student => student.role === 'instructor')
    // console.log(isAdmin, isInstructor)
    // const isButtonDisabled = isAdmin || isInstructor;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const { _id, courseName, name, Imge, seat, price } = course


    const handleClassBook = course => {
        if (user && user.email) {
            const addCouese = { courseId: _id, name, courseName, Image: Imge, seat, price, email: user.email }

            fetch('http://localhost:5000/booked', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(addCouese)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Classs successfully Booked',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first to cart class?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

    return (
        seat.length < 0 ? <div className="card w-full h-100 bg-red-400 text-gray-500 shadow-xl">
            <figure><img src={Imge} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseName}</h2>
                <p>Instructor name:{name}</p>
                <p>Available Seat:{seat}</p>
                <p>Price:${price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-disabled">Select Class</button>


                </div>
            </div>
        </div > :

            <div className="card w-full h-100 bg-base-100 shadow-md rounded-none">
                <figure><img src={Imge} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="text-start">
                        <h2 className="card-title">{courseName}</h2>
                        <p>Instructor name:{name}</p>
                        <p>Available Seat:{seat}</p>
                        <p>Price:${price}</p>
                    </div>
                    <div className="card-actions justify-center">

                        <button className="btn btn-primary" onClick={() => handleClassBook(course)}>select</button>

                    </div>
                </div >

            </div>);
};

export default ApproveCladdCard;