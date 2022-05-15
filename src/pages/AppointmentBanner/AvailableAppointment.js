import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query'

import Service from './Service';
import Loading from '../../Shared/Loading';

const AvailableAppointment = ({date}) => {

    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, refetch } = useQuery(['available', formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()) )

if(isLoading){
    return <Loading></Loading>
}
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>Available Appointments on {format(date,'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            
                {
                    treatment && <BookingModal
                    date={date}
                    refetch={refetch}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    ></BookingModal>
                }
            
        </div>
    );
};

export default AvailableAppointment;
