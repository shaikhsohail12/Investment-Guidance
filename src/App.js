// import logo from './logo.svg';
import './App.css';
import Hpage from './Hpage';
import React, {useEffect} from 'react';
// import SignIn from './SignIn';
// import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Login from './Login';
import SignIn from './SignIn';
import { BrowserRouter as Router,Switch, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import Nav from './Nav';
import Dashboard from './Dashboard';

function App() {
  // const [{}, dispatch] = useStateValue();


  // useEffect(() => {
  //   auth.onAuthStateChanged(
  //    authUser => {
  //     console.log('THE USER IS :', authUser);
     
  //    if(authUser){
  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser
  //       })
  //    } 
  //    else{
  //        dispatch(
  //          {
  //            type: 'SET_USER',
  //            user: null
  //          }
  //        )
  //    }
  //   })
  // }, [])


  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' element={<HomePage/>}>
      {/* <Route path='/contact' element={<HomePage/>}></Route> */}
      </Route>
      {/* <Route element={<HomePage />}>
      </Route> */}
      <Route path='/SignIn' element={<Login/>}>
      </Route>
      <Route path='/SignUp' element={<SignIn/>}>
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
