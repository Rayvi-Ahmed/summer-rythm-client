import { useQuery } from '@tanstack/react-query'
import useSecuireAxios from '../SecuireAxios/useSecuireAxios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
const useInstructorClass = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useSecuireAxios();
    const { refetch, data: addClass = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("user-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/classes?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [addClass, refetch]

}
export default useInstructorClass;
