

import mainbg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';





const AppointmentBanner = ({date, setDate}) => {
 
    

    return (
        <div>
            <div className='' style={{ background: `url(${mainbg})` }} >
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="sm:w-96 rounded-lg shadow-2xl" />
                        <div>
                        <DayPicker 
                        required
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        />
                            
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default AppointmentBanner;