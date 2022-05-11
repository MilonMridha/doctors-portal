import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../../Shared/MainButton';
const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})`, height: '360px' }}  className='flex justify-center items-center mt-20 rounded'>

            <div className='flex-1 hidden md:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 mt-20 p-10'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white mb-3'>Make an appointment Today</h2>
                <p className='text-white pr-5 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque nisi quo officia numquam magnam corporis ipsam nostrum recusandae modi quidem, ad iste nobis commodi nulla libero vero et. Voluptatum?</p>
                <MainButton>Get Started</MainButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;