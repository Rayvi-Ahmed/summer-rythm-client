import React, { useContext } from 'react';
import useSecuireAxios from '../SecuireAxios/useSecuireAxios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const useStudent = () => {
    const [axiosSecure] = useSecuireAxios()
    const { data: students = [], refetch } = useQuery({

        queryKey: ['student'],
        queryFn: async () => {
            const res = await axiosSecure.get('/student')
            return res.data
        }
    })

    return [students, refetch]
};

export default useStudent;