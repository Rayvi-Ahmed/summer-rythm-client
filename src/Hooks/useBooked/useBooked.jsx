import { useQuery } from '@tanstack/react-query'
import useSecuireAxios from '../SecuireAxios/useSecuireAxios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
const useBooked = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useSecuireAxios();
    const { refetch, data: booked = [] } = useQuery({
        queryKey: ['booked', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/booked?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [booked, refetch]

}
export default useBooked;
