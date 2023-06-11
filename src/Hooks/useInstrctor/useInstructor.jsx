import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useSecuireAxios from "../SecuireAxios/useSecuireAxios";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useSecuireAxios()
    const { data: isInstructor, loading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/instructor/${user?.email}`)
            console.log(res)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;