import React, { useEffect, useState } from 'react';

const useClass = () => {
    const [approveClasss, setApproveClass] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://y-alpha-two.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const approveClasses = data.filter(cls => cls.status === 'approve')
                setApproveClass(approveClasses)
                setLoading(false)
            })
    }, [])

    return [approveClasss, loading]
};

export default useClass;