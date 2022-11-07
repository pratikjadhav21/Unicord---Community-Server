import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import InterestsIcon from '@mui/icons-material/Interests';
import { Avatar} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <div className="navbar">
      
        <div className="navbar__logo" >
          UniCord
        </div>

        {/* <div className="logo">
          <img src="" alt="Loading..." />
        </div> */}
        <div className="nav__search">
          <input placeholder='Search Here' className="input__search" type="text" />
          <SearchIcon className='search__icon'/>
        </div>
        <div className="nav__features">
          <div className="nav__features__logo">
            <Link to='/home'>
              <HomeIcon className='home__icon' fontSize='large' style={{color: 'white'}}/>
            </Link>
            <Link to='/music'>
              <LibraryMusicIcon className='music__icon' fontSize='large' style={{color: 'white'}}/>
            </Link>
            <Link to='/interest'>
              <InterestsIcon className='interest__icon' fontSize='large' style={{color: 'white'}}/>
            </Link>
          </div>
          <div className="user__profile">
            <Link to='/profile'>
              <Avatar />
            </Link>
          </div>
        </div>
        
      </div>
  )
}
