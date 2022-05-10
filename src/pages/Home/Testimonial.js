import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson herry',
            location: 'California',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magni.',
            img: people1

        },
        {
            _id: 2,
            name: 'Winson herry',
            location: 'California',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magni.',
            img: people2

        },
        {
            _id: 3,
            name: 'Winson herry',
            location: 'California',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, magni.',
            img: people3

        }
    ]
    return (
        <section className='my-28' >
            <div className=' flex justify-between items-center'>
                <div className=''>
                    <h4 className='text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'> What Our Patient Says</h2>
                </div>
                <div>
                    <img className='md:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;