import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Chat = () => {
  const[currentMessage, setCurrentMessage] = useState("")
  const {roomId, socket, username} = useSelector(state => state.data)
  const sendMessage = async () => {
    if(currentMessage.trim() !== ""){
      const messageData = {
        room: roomId, 
        author: username, 
        message: currentMessage, 
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes().toFixed(2)
      }
      
      await socket.emit("send_message", messageData)
    }
  }

  useEffect(() => {
      socket.on("receive_message", data => {
        console.log(data);
      }) 
  }, [socket])
  return (
    <div>
      <h3>Room chat</h3>
     
      <div>
        <div>
          <input type="text" placeholder="type message" onChange={(e) => setCurrentMessage(e.currentTarget.value)}/>
          <button onClick={() => sendMessage()}>&#9658;</button>
        </div>
      </div>
    </div>
  )
}

export default Chat