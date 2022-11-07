import React from 'react'
import { Link } from 'react-router-dom'
import './Interest.css'
import Navbar from './Navbar'

export default function Interest() {
  return (
    <>
      <Navbar/>
      <div className="scrollmenu">
                <div class="sect"><Link to="/business">
                    Business
                </Link>
                </div>
                <div class="sect"><Link to="/sports">
                    Sports
                </Link>
                </div>
                <div class="sect"><Link to="/news">
                    News
                </Link>
                </div>
                <div class="sect"><Link to="/crypto">
                    CryptoCurrency
                </Link>
                </div>
                <div class="sect"><Link to="/music">
                    Music
                </Link>
                </div>
              
            </div>
    </>
  )
}
