import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyAppointment = () => {

    const [appointment, setAppointment] = useState([]);

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://ancient-chamber-96068.herokuapp.com/booking?patient=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res)
                if (res.status === 401 || res.status === 403) {
                    navigate('/');
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                }
                return res.json()
            })

            .then(data => {

                setAppointment(data)
            })
    }, [user]);
    return (
        <div>
            <h2>My Appointment: {appointment.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointment?.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                    <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn-xs btn-success'>pay</button></Link>}</td>
                                    <td>{(a.price && a.paid) && 
                                    <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction Id: <br /><span className='text-success'> {a.transactionId}</span></p>
                                    </div>
                                    }</td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;