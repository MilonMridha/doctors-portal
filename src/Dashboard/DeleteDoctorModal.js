import React from 'react';
import { toast } from 'react-toastify';

const DeleteDoctorModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;

    const handleDelete = () => {
        const url = `https://ancient-chamber-96068.herokuapp.com/doctor/${email}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success(`Doctor: ${name} is deleted`);
                    setDeletingDoctor(null);
                    refetch();
                    
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure want to delete {name} ?</h3>
                    <p class="py-4">You Don't have find {name}</p>
                    <div class="modal-action">
                        
                        <button onClick={handleDelete} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DeleteDoctorModal;