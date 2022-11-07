import React from 'react'
import Chat from './Chat'
import './Homepage.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Homepage() {
  return (
    <>
        <Navbar/>
        <div className="app">
            <Sidebar/>
            <Chat/>
        </div>
    </>
  )
}
