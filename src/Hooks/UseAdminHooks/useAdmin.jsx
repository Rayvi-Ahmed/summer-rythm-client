import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useSecuireAxios from "../SecuireAxios/useSecuireAxios";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useSecuireAxios()
    const { data: isAdmin, loading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/admin/${user?.email}`)
            return res.data.admin

        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;