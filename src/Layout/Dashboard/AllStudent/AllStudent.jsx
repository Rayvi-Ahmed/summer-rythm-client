import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useSecuireAxios from "../../../Hooks/SecuireAxios/useSecuireAxios";

const AllStudent = () => {
    const [axiosSecure] = useSecuireAxios()
    const { data: students = [], refetch } = useQuery({

        queryKey: ['student'],
        queryFn: async () => {
            const res = await axiosSecure.get('/student')
            return res.data
        }
    })

    const handleupdateAdmin = id => {
        fetch(`http://localhost:5000/student/admin/${id}`, {
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
                        title: 'Admin created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleupdateInstructor = id => {
        fetch(`http://localhost:5000/student/instructor/${id}`, {
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
                        title: 'Instructor created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full ml-5">
            <div>
                <h1 className="text-center text-4xl text-bold">Total Students: {students.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : 'student' && user.role === 'instructor' ? 'instructor' : 'student'}</td>

                                <td >{user.role === 'admin' ? <button disabled="disabled" className="btn btn-sm ">Admin</button> :
                                    <button onClick={() => handleupdateAdmin(user._id)} className="btn btn-sm btn-warning">Make admin</button>
                                }</td>

                                <td >{user.role === 'instructor' ? <button disabled="disabled" className="btn btn-sm btn-primary">Instructor</button> :
                                    <button onClick={() => handleupdateInstructor(user._id,)} className="btn btn-sm btn-primary">Make Instructor</button>
                                }</td>

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllStudent;