import { useEffect, useState } from 'react';

const useAllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://y-alpha-two.vercel.app/student/instructor')
            .then(res => res.json())
            .then(data => {
                const allInstructors = data.filter(instructor => instructor.role === 'instructor')
                setAllInstructors(allInstructors)
                setLoading(false)
            })
    }, [])

    return [allInstructors, loading]
};
export default useAllInstructors;