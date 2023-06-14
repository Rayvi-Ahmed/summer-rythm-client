import React, { useEffect, useState } from 'react';

const useTopClasses = () => {
    const [popularClass, setPopularClass] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://y-alpha-two.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                const popularClass = data.filter(cls => cls.category === 'popular')
                setPopularClass(popularClass)
                setLoading(false)
            })
    }, [])
    return [popularClass, loading]
};

export default useTopClasses;