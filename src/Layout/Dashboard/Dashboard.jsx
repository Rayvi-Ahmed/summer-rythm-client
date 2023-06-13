import { Link, Outlet } from "react-router-dom";
import { FaUsers, FaRegAddressBook, FaHome, FaNewspaper, FaWallet, FaSchool, FaRegCalendarPlus, FaPlusCircle } from "react-icons/fa";
import useAdmin from "../../Hooks/UseAdminHooks/useAdmin";
import useInstructor from "../../Hooks/useInstrctor/useInstructor";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
        <div className="drawer lg:drawer-open">
            < Helmet >
                <title>Summer Rythm | Dashboard</title>
            </Helmet >

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-blue-600 text-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-lg">
                    {
                        isAdmin ? <>
                            <li><Link to={'/dashboard/allStudent'}><FaUsers></FaUsers>Manage Users</Link></li>
                            {/* <li><Link to={'/dashboard/AddClass'}><FaPlusCircle></FaPlusCircle> Add Class</Link></li> */}
                            <li><Link to={'/dashboard/manageClass'}><FaRegAddressBook></FaRegAddressBook> Manage classes</Link> </li>

                            <div className="divider"></div>
                        </>
                            :
                            <>

                                <li><Link to={'/dashboard/myclass'}><FaUsers></FaUsers>My Selected Classes</Link></li>
                                <li><Link to={'/dashboard/enrollClass'}><FaWallet></FaWallet>My Enroll Classes</Link> </li>


                            </> &&

                                isInstructor ? <>
                                <li><Link to={'/dashboard/AddClass'}><FaPlusCircle></FaPlusCircle> Add Class</Link></li>
                                <li><Link to={'/dashboard/instructorClass'}><FaRegAddressBook></FaRegAddressBook> My classes</Link> </li>

                                <div className="divider"></div>
                            </> :
                                <>

                                    <li><Link to={'/dashboard/myclass'}><FaUsers></FaUsers>My Selected Classes</Link></li>
                                    <li><Link to={'/dashboard/enrollClass'}><FaWallet></FaWallet>My Enroll Classes</Link> </li>


                                </>
                    }
                    <li><Link to={'/'} ><FaHome></FaHome>Home</Link></li>
                    <li><Link><FaNewspaper></FaNewspaper>Blogs</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;