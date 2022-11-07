import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './Firebase'
import Navbar from './Navbar'
import './Profile.css'
import { useStateValue } from './StateProvider'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Profile() {

  const [{user}] = useStateValue();
  const logoutAction = ()=>{
      auth.signOut();
      console.log(auth);
  }
  return (
    <>
      <Navbar/>
      <h4>Hello, {user? user?.email : <p>Guest</p>} </h4>
      <h4>Your UniCord Username is '{user? user?.uid.substring(0,7) : <p>Guest</p>}' </h4>
      <div className="profile__dp">
        <Avatar className='dp' />
        <Link to='/'>
          
          <button onClick={logoutAction} className='logout__button'>Logout</button>
        </Link>

        <Link to='/notification'>
          <NotificationsActiveIcon fontSize='large' />
        </Link>
      </div>
    </>
  )
}
