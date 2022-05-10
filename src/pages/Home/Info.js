import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = ({img}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-2'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle='Opening Hours'  img={clock}></InfoCard>
            <InfoCard bgClass="bg-neutral" cardTitle='Visit Our Location' img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle='Contact us now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;