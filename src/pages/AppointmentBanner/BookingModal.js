import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date, setTreatment }) => {
    const {_id, name, slots } = treatment;

    const handleBooking =(event)=>{
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=><option>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name' placeholder="Full name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit"  value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label for="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;