import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card md:max-w-md  bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another day</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">
                    
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white">Book appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Service;