import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClass = () => {
    const { data: classes = [], refetch } = useQuery({

        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json()
        }
    })
    const handleupdateApproved = id => {
        fetch(`http://localhost:5000/classes/approve/${id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleupdateDeny = id => {
        fetch(`http://localhost:5000/classes/deny/${id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'class denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div className="w-full ml-5">
            <div>
                <h1 className="text-center text-4xl text-bold">Total Classes: {classes.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>avilable Seat</th>
                            <th>Class Price</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>Deny</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>{cls.name}</td>
                                <td>{cls.email}</td>
                                <td>{cls.seat}</td>
                                <td>${cls.price}</td>

                                <td>{cls.status === 'approve' ? <span className="text-green-500 font-bold">Aprroved</span> : cls.status && cls.status === 'denied' ? <span className="text-red-500 font-bold">Denied</span> : cls.status}</td>

                                <td >{cls.status === 'approve' || cls.status === 'denied' ?
                                    <button disabled="disabled" className="btn btn-sm ">Approved</button>
                                    :
                                    <button onClick={() => handleupdateApproved(cls._id)} className="btn btn-sm btn-warning">Approve</button>
                                }</td>

                                <td >{cls.status === 'approve' || cls.status === 'denied' ?
                                    <button disabled="disabled" className="btn btn-sm ">Denied</button>
                                    :
                                    <button onClick={() => handleupdateDeny(cls._id)} className="btn btn-sm btn-warning">Deny</button>
                                }</td>

                                {/* 
                                <td>{cls.status === 'denied' ? 
                                <Link></Link>
                                
                               }</td> */}



                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ManageClass;