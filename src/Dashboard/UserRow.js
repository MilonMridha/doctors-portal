import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role, _id } = user;

    const makeAdmin = () =>{
        fetch(`https://ancient-chamber-96068.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization:  `Bearer ${localStorage.getItem('accessToken')}`
            }

        }).then(res => {
            if(res.status === 403){
                toast.error('Failed to make an admin')
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
           if(data.modifiedCount > 0){
            refetch();
            toast.success('Successfully made an admin')
           }
        })
    }
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Do you want to delete user')
        if(proceed){
            const url = `https://ancient-chamber-96068.herokuapp.com/user/${id}`;

            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
                if(data.acknowledged === true){
                    toast.error('User Deleted Successfully')
                }
            })
            
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !=='admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
            </td>
            <td><button onClick={()=>handleDeleteUser(_id)} className="btn btn-xs bg-red-500 text-white">Remove User</button>
</td>
        </tr>
    );
};

export default UserRow;