import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data: services, isLoading } = useQuery('services', () => fetch('https://ancient-chamber-96068.herokuapp.com/service').then(res => res.json()))

    const imageStorageKey = 'e3b83dae9221eba5195d8e1e3b37b0c8';

    const onSubmit = async data => {
       
        const image = data.photo[0];
       
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(result => {
            console.log('imagebb', result)
            if(result.success === true){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }
                // send to database url--------->
                fetch('https://ancient-chamber-96068.herokuapp.com/doctor',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization:  `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                }).then(res => res.json())
                .then(inserted => {
                    console.log('doctor', inserted)
                    if(inserted.insertedId){
                        toast.success('Doctor added successfully');
                        reset()
                    }
                    else{
                        toast.error('Failed added doctor')
                    }
                })
                
            }
            
        })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-2xl'>Add a doctor</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },

                        })}
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'error message'
                            }
                        })}
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} className="select input-bordered w-full max-w-xs">
                        {
                            services?.map(service=> <option
                            key={service._id}
                            value={service?.name}
                            >{service?.name}</option>)
                        }
                        
                    </select>
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register("photo", {
                            required: {
                                value: true,
                                message: 'Photo is required'
                            },

                        })}
                        type="file"
                        placeholder="Your photo"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.photo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photo.message}</span>}

                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;