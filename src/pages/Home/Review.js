import React from 'react';

const Review = ({ review }) => {
    const { name, description, img, location } = review;
    return (
        <div>
            <div className="card md:max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div className='flex items-center mt-10'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={img} alt=""/>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;