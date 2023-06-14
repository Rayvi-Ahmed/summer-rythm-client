import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/UseAdminHooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;