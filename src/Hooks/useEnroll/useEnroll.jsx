import { useQuery } from '@tanstack/react-query'
import useSecuireAxios from '../SecuireAxios/useSecuireAxios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';


const useEnroll = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useSecuireAxios();
    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)

            return res.data;
        },
    })

    return [payments, refetch]

}
export default useEnroll;