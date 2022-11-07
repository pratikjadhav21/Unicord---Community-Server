import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import Message from './Message';

export default function Chat() {
  return (
    <div className="chat">
      <ChatHeader/>

      <div className="chat__messages">
         <Message/> {/* Swaraj write your code in Message component */}
         <Message/>
         <Message/>
         <Message/>
         <Message/>
         <Message/>
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize='large'/>
        <form>
          <input placeholder='Message #TestChannel' />
          <button type='submit' className="chat__inputButton">
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <SendIcon fontSize='large'/>
          <CardGiftcardIcon fontSize='large'/>
          <GifIcon fontSize='large'/>
          <EmojiEmotionsIcon className='emoji' fontSize='large'/>
        </div>
      </div>
    </div>

  )
}
