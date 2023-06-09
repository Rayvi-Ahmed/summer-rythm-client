import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useSecuireAxios from "../SecuireAxios/useSecuireAxios";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useSecuireAxios()
    const { data: isInstructor, loading: isInstructorLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/instructor/${user.email}`)
            return res.data.admin
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;