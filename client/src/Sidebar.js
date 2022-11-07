import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@mui/material';
import { useStateValue } from './StateProvider';

export default function Sidebar() {

  const [{user}] = useStateValue();
  // const username = user?.email
  console.log(user)
  return (
    <div className="sidebar">
        <div className="sidebar__top">
        <h3>VIT Discord</h3>
        <ExpandMoreIcon/>
        </div>

        <div className="siderbar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                </div>
                <AddIcon fontSize='large' className='sidebar__addChannel'/>
            </div>

            <div className="sidebar__channelsList">
              <SidebarChannel/>
              <SidebarChannel/>
              <SidebarChannel/>
              <SidebarChannel/>
            </div>
        </div> 

        <div className="sidebar__voice">
          <SignalCellularAltIcon
          className='sidebar__voiceIcon'
          fontSize='large'
          />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>

          <div className="sidebar__voiceIcons">
            <InfoIcon/>
            <CallIcon/>
          </div>
        </div>

        <div className="sidebar__profile">
          <Avatar />
          <div className="sidebar__profileInfo">
            {/* <h3>{username.slice(0, username.indexOf("@"))}</h3> */}
            {/* <h3>hardcoded</h3> */}
            <h3>{user? user?.email.substring(0, user?.email.indexOf("@")): <p>Guest</p> }</h3>
            {/* <h3>Prakhar</h3> */}
            <p>#{user? user?.uid.substring(0,7): <p>GuestUser</p>}</p>
            {/* <p>#Pricks114</p> */}
          </div>

          <div className="sidebar__profileIcons">
            <MicIcon />
            <HeadsetIcon />
            <SettingsIcon />
          </div>
        </div>
    </div>
  )
}
