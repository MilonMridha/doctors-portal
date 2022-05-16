
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/AppointmentBanner/Appointment';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Navbar from './Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import MyAppointment from './Dashboard/MyAppointment';
import MyReview from './Dashboard/MyReview';
import MyHistory from './Dashboard/MyHistory';
import Users from './Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';
import ResetPassword from './pages/Login/ResetPassword';


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='user' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
         
        </Route>


        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
