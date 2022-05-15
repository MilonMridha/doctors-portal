import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyAppointment = () => {

    const [appointment, setAppointment] = useState([]);

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointment?.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;