import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Interest from './Interest';
import Music from './Music';
import Homepage from './Homepage';
import Profile from './Profile';
import Login from './Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Dashboard from './Dashboard';
import NewsAPI from './NewsAPI';
import SportsAPI from './SportsAPI';
import BusinessAPI from './BusinessAPI';
import CryptoAPI from './CryptoAPI';

function App() {

  const [{user}] = useStateValue();
  const [, dispatch] = useStateValue();
  // const [{userNickName}] = useStateValue();

  useEffect(() => {
    // [] below means will only run once the app component loads 
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // The user just/was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
          // userNickName: userNickName
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
          // userNickName: "Guest"
        })
      }
    })
  }, [])


  return(
    <BrowserRouter>
  
      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route path='/' element={ <Dashboard/> } />
      </Routes>
      {user? 
        <>
        <Routes>
        <Route path='/' element={ <Dashboard/> } />
        <Route path='/home' element={ <Homepage/> } />
        <Route path='/interest' element={ <Interest/> } />
        <Route path='/music' element={ <Music/> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/news' element={ <NewsAPI/> } />
        <Route path='/sports' element={ <SportsAPI/> } />
        <Route path='/business' element={ <BusinessAPI/> } />
        <Route path='/crypto' element={ <CryptoAPI/> } />
        </Routes>
        </>
      : <Dashboard/>   }    


    </BrowserRouter>
    
  );
}

export default App;
