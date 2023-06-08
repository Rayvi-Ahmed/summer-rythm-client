import { Link, Outlet } from "react-router-dom";
import { FaUsers, FaRegAddressBook, FaHome, FaNewspaper, } from "react-icons/fa";


const Dashboard = () => {
    const isAdmin = true

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
                            <li><Link to={'/dashboard/myClass'}><FaRegAddressBook></FaRegAddressBook> My classes</Link> </li>

                            <div className="divider"></div>
                        </> :
                            <>
                                <li><Link to={'/'} ><FaHome></FaHome>My Home</Link></li>
                                <li><Link><FaNewspaper></FaNewspaper>Blogs</Link></li>

                            </>

                    }
                    <li><Link to={'/'} ><FaHome></FaHome>My Home</Link></li>
                    <li><Link><FaNewspaper></FaNewspaper>Blogs</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;