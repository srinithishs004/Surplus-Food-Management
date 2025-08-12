// src/App.js
import React from 'react';
import MyNavbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodList from './FoodList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './login';
import Register from './Register'
import DonorDashboard from './donordashboard';
import FoodDonationForm from './FoodDonationForm';
import Home from './home';
import Thankyou from './Thankyou';
import Sidebar from './sidebar';
import VolunteerLandingPage from './VolunteerLandingPage';
import TaskfromBeneficiary from './Taskfrombeneficiary';
import RequestSuccess from './RequestSuccess';
import OrderStatus from './OrderStatus';
import FoodProcess1 from './FoodProcess1';
import BeneficiaryLanding from './BeneficiaryLandingPage';
import VolunteerTask1 from './VolunteerTask1';
import GoogleMaps from './GoogleMaps';
import Next from './NextToTakeFood';
import ThankyouVolunteer from './ThankyouVolunteer';

function App() {
  return (
    <div>
      <MyNavbar />
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/foodlist' element={<FoodList/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/donor' element={<DonorDashboard/>}/>
          <Route path='/donorform' element={<FoodDonationForm/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/thankyou' element={<Thankyou/>}/>
          <Route path='/thankyouvolunteer' element={<ThankyouVolunteer/>}/>
          <Route path='/volunteer' element={<VolunteerLandingPage/>}/>
          <Route path='/task2' element={<TaskfromBeneficiary/>}/>
          <Route path='/success' element={<RequestSuccess/>}/>
          <Route path='/status' element={<OrderStatus/>}/>
          <Route path='/process1' element={<FoodProcess1/>}/>
          <Route path='/beneficiary' element={<BeneficiaryLanding/>}/>
          <Route path='/task1' element={<VolunteerTask1/>}/>
          <Route path='/maps' element={<GoogleMaps/>}/>
          <Route path='/next' element={<Next/>}/>
        </Routes>
      </BrowserRouter>
      {/* <FoodList/> */}
      <div className="container">
        {/* Other components or content */}
      </div>
    </div>
  );
}

export default App;
