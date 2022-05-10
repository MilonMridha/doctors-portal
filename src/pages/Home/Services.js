import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const  services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, aliquid nihil facilis ipsa, quam ratione rem delectus incidunt autem inventore voluptas laboriosam error molestiae optio illum dolore. Dolor, voluptate?",
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, aliquid nihil facilis ipsa, quam ratione rem delectus incidunt autem inventore voluptas laboriosam error molestiae optio illum dolore. Dolor, voluptate?",
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit, aliquid nihil facilis ipsa, quam ratione rem delectus incidunt autem inventore voluptas laboriosam error molestiae optio illum dolore. Dolor, voluptate?",
            img: whitening
        }

    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;