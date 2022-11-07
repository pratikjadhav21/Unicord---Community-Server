import React from 'react'
import './Dashboard.css'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Link } from 'react-router-dom';
import Login from './Login';

export default function Dashboard() {
  return (
    <>
        <div className='dashboard'>
            <h3>DISCORD</h3>
            <SportsEsportsIcon fontSize='large' style={{marginLeft: '2px', color: 'white'}}/>
            <div className="signin__component">
            <Link to='/login'>
            <button className='login__button'>Sign IN</button>
            </Link>
            </div>
        </div>
    </>
  )
}
