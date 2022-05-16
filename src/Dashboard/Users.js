import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('users', ()=> fetch('https://ancient-chamber-96068.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization:  `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl'> Total User:  {users?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>User/type</th>
        <th>Remove user</th>
      </tr>
    </thead>
    <tbody>
     
     {
         users?.map((user, index)=> <UserRow
         user={user}
         index={index}
         key={user._id}
         refetch={refetch}
         ></UserRow>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;