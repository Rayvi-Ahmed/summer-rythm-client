import { Link, Outlet } from "react-router-dom";
import { FaUsers, FaRegAddressBook, FaHome, FaNewspaper, FaWallet, FaSchool, FaRegCalendarPlus, FaPlusCircle } from "react-icons/fa";
import useAdmin from "../../Hooks/UseAdminHooks/useAdmin";
import useInstructor from "../../Hooks/useInstrctor/useInstructor";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
        <div className="drawer lg:drawer-open">
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
                            <li><Link to={'/dashboard/addclass'}><FaPlusCircle></FaPlusCircle> Add classes</Link> </li>
                            <li><Link to={'/dashboard/myClass'}><FaRegAddressBook></FaRegAddressBook> Manage classes</Link> </li>

                            <div className="divider"></div>
                        </> :
                            <>
                                <li><Link to={'/dashboard/allStudent'}><FaUsers></FaUsers>Manage Users</Link></li>
                                <li><Link to={'/dashboard/myClass'}><FaRegAddressBook></FaRegAddressBook> Manage  classes</Link> </li>

                            </> &&

                                isInstructor ? <>
                                <li><Link to={'/dashboard/allStudent'}><FaRegCalendarPlus></FaRegCalendarPlus> Add Class</Link></li>
                                <li><Link to={'/dashboard/myClass'}><FaRegAddressBook></FaRegAddressBook> My classes</Link> </li>

                                <div className="divider"></div>
                            </> :
                                <>
                                    {/* <li><Link to={'/dashboard/selectedClass'} ><FaSchool></FaSchool> My Selected class</Link></li>
                                    <li><Link to={'/dashboard/payment'}><FaWallet></FaWallet> Payment status</Link></li> */}
                                    <li><Link to={'/dashboard/allStudent'}><FaUsers></FaUsers>Manage Users</Link></li>
                                    <li><Link to={'/dashboard/myClass'}><FaRegAddressBook></FaRegAddressBook> Manager classes</Link> </li>
                                    <li><Link to={'/dashboard/addclass'}><FaPlusCircle></FaPlusCircle> Manager classes</Link> </li>


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