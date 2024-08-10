
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes ,Redirect } from 'react-router-dom';
// import Login from './Components/Login';
// import Navigation from './Components/Navigation';
// import Home  from './Components/Home';
// import Footer from './Components/Footer';
// import Categories from './Components/Categories';
// import City from './Components/City';
// import InfoSection from './Components/InfoSection';
// import About from './Components/About';
// import Register from './Components/Register';
// import Popular from './Components/Popular'
// import Payment from './Components/Payment';
// import City2 from './Components/City2';
// import City3 from './Components/City3';
// import City4 from './Components/City4';
// import City5 from './Components/City5';
// import City6 from './Components/City6';
// import Confirmation from './Components/Confirmation';
// import Membership from './Components/Membership';
// import Location from './Components/Location';
// import Facility from './Components/AdminFacility';
// import AdminDash from './Components/AdminDash';
// import OwnerDash from './Components/OwnerDash';
// const App = () => {
//   const isAdmin = () => localStorage.getItem('userRole') === 'admin';
// const isOwner = () => localStorage.getItem('userRole') === 'owner';
// // Protected route for Admin Dashboard
// const AdminRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAdmin() ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

// // Protected route for Owner Dashboard
// const OwnerRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isOwner() ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

//   return (
//     <div>
//       {/* <Login /> */}
//       <Navigation />
//       {/* <About /> */}
//       {/* <Home /> */}
//       {/* <Footer /> */}
//       {/* < Categories /> */}
//       {/* <Register /> */}
//       {/* <Popular /> */}
//       {/* <Payment/> */}
//       {/* <Confirmation /> */}
//       {/* <Membership /> */}
//       {/* <Location /> */}
//       {/* <Facility/> */}
//       {/* <AdminDash /> */}
//       {/* <OwnerDash /> */}
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path='/Home' element= {<Home/>}></Route>
//         <Route path='/Categories' element={<Categories/>}></Route>
//         <Route path='/About' element={<About />}></Route>
//         <Route path='City' element={<City/>}></Route>
//         <Route path='/Login' element={<Login/>}></Route>
//         <Route path='/Register' element={<Register/>}></Route>
//         <Route path='/Payment' element={<Payment />}></Route>
//         <Route path='/City2' element={<City2/>}></Route>
//         <Route path='/City3' element={<City3/>}></Route>
//         <Route path='/City4' element={<City4/>}></Route>
//         <Route path='/City5' element={<City5/>}></Route>
//         <Route path='/City6' element={<City6/>}></Route>
//         <Route path='/Confirmation' element={<Confirmation />}></Route>
//         <Route path='/Membership' element={<Membership/>}></Route>
//         <Route path='/Events' element={<Location/>}></Route>  
//         <Route path='/AdminDash' element={<AdminDash/>}></Route>  
//         <Route path='/OwnerDash' element={<OwnerDash/>}></Route>  
//         <Redirect from="/" to="/home" />
//       </Routes>
//       {/* <InfoSection /> */}
      

//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Components/Login';
// import Navigation from './Components/Navigation';
// import Home from './Components/Home';
// import Footer from './Components/Footer';
// import Categories from './Components/Categories';
// import City from './Components/City';
// import About from './Components/About';
// import Register from './Components/Register';
// import Payment from './Components/Payment';
// import City2 from './Components/City2';
// import City3 from './Components/City3';
// import City4 from './Components/City4';
// import City5 from './Components/City5';
// import City6 from './Components/City6';
// import Confirmation from './Components/Confirmation';
// import Membership from './Components/Membership';
// import Location from './Components/Location';
// import AdminDash from './Components/AdminDash';
// import OwnerDash from './Components/OwnerDash';

// const App = () => {
//   const isAdmin = () => localStorage.getItem('userRole') === 'admin';
//   const isOwner = () => localStorage.getItem('userRole') === 'owner';

//   // Protected route for Admin Dashboard
//   const AdminRoute = ({ element }) => (
//     isAdmin() ? element : <Navigate to="/login" />
//   );

//   // Protected route for Owner Dashboard
//   const OwnerRoute = ({ element }) => (
//     isOwner() ? element : <Navigate to="/login" />
//   );

//   return (
  
//       <div>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/city" element={<City />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/city2" element={<City2 />} />
//           <Route path="/city3" element={<City3 />} />
//           <Route path="/city4" element={<City4 />} />
//           <Route path="/city5" element={<City5 />} />
//           <Route path="/city6" element={<City6 />} />
//           <Route path="/confirmation" element={<Confirmation />} />
//           <Route path="/membership" element={<Membership />} />
//           <Route path="/events" element={<Location />} />
//           <Route path="/AdminDash" element={<AdminRoute element={<AdminDash />} />} /> 
//            <Route path="/OwnerDash" element={<OwnerRoute element={<OwnerDash />} />} />
//         </Routes>
//         {/* <Footer /> */}
//       </div>
   
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import City from './Components/City';
import About from './Components/About';
import Register from './Components/Register';
import Payment from './Components/Payment';
import City2 from './Components/City2';
import City3 from './Components/City3';
import City4 from './Components/City4';
import City5 from './Components/City5';
import City6 from './Components/City6';
import Confirmation from './Components/Confirmation';
import Membership from './Components/Membership';
import Location from './Components/Location';
import AdminDash from './Components/AdminDash';
import OwnerDash from './Components/OwnerDash';
import Players from './Components/Players';
import AdminDashboard from './Components/AdminDash';
import OwnerDashboard from './Components/OwnerDash';
import Badminton from './Components/Badmintion';
import Cricket from './Components/Cricket';
import Football from './Components/Football';
import Basketball from './Components/Basketball';
import Tennis from './Components/Tennis';
import Swimming from './Components/Swimming';
import Members from './Components/Members';


const App = () => {
  const isAdmin = () => localStorage.getItem('userRole') === 'admin';
  const isOwner = () => localStorage.getItem('userRole') === 'owner';

  return (
    
      <div>
        <Navigation />
        {/* <Players/> */}
        {/* <Badminton />
        <Cricket />
        <Football />
        <Basketball />
        <Tennis />
        <Swimming /> */}
        {/* <Members /> */}
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
           <Route path="/home" element={<Home />} />
           <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
           <Route path="/city" element={<City />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/payment" element={<Payment />} />
           <Route path="/city2" element={<City2 />} />
           <Route path="/city3" element={<City3 />} />
           <Route path="/city4" element={<City4 />} />
          <Route path="/city5" element={<City5 />} />
           <Route path="/city6" element={<City6 />} />
           <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/events" element={<Location />} />
          <Route path="/login" element={<Login />} />
          <Route path="/players/:Id" element={<Players/>}></Route> 
          <Route path="/payment/:Id" element={<Payment/>}></Route> 
            <Route path="/AdminDash" element={<AdminDashboard />}  /> 
            <Route path="/OwnerDash" element={<OwnerDashboard />}  /> 
            <Route path="/Badminton" element={<Badminton />}   />
            <Route path="/Cricket" element={<Cricket />}   />
            <Route path="/Football" element={<Football />}   />
            <Route path="/Basketball" element={<Basketball />}   />
            <Route path="/Tennis" element={<Tennis />}   />
            <Route path="/Swimming" element={<Swimming />}   />
            <Route path="/Members" element={<Members/>}></Route>
         </Routes>
        
      </div>
   
  );
};

export default App;
