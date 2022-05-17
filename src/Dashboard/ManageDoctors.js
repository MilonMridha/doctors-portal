import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteDoctorModal from './DeleteDoctorModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th>Sl</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              doctors.map((doctor, index) => <DoctorRow
                key={doctor._id}
                index={index}
                refetch={refetch}
                doctor={doctor}
                setDeletingDoctor={setDeletingDoctor}
              ></DoctorRow>)
            }

          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <DeleteDoctorModal
        deletingDoctor={deletingDoctor}
        refetch={refetch}
        setDeletingDoctor={setDeletingDoctor}
        ></DeleteDoctorModal>
      }
    </div>
  );
};

export default ManageDoctors;