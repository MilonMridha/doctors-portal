import React from 'react';
import MainButton from '../../Shared/MainButton';
import appointment from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='py-10 rounded' >
            <div className='text-center mb-10 '>
                <h3 className='text-secondary'>Contact Us</h3>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
                <div className='items-center justify-center'>
                    <input type="text" placeholder="Email" name="email" className="input mt-5 mx-auto block input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Subject" name="subject" className="input mx-auto  input-bordered input-sm mt-5 w-full max-w-xs  block" />

                    <textarea type="text" placeholder="Your messages" name='message' className="input block mx-auto mb-5 input-bordered mt-5 input-lg w-full max-w-xs" />
                    <MainButton>Submit</MainButton>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;