import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('Review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className='container mx-auto my-8 bg-gray-200 p-5 rounded-md'>
            <div className='text-2xl lg:text-3xl text-cyan-500 font-semibold text-center'>
                <h1>Our Student Review</h1>
            </div>

            <Swiper
                navigation={true}
                modules={[Navigation]}
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >



                        <div className='my-7 p-8 flex flex-col gap-2'>
                            <Rating
                                className='containter mx-auto'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly />
                            <p className='p-5'>{review.review}</p>
                            <h1 className='font-bold text-2xl'>{review.studentName}</h1>

                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;