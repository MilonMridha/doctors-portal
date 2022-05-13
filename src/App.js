
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/AppointmentBanner/Appointment';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Navbar from './Shared/Navbar/Navbar';


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
