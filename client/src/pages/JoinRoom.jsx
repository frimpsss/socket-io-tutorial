import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { setData } from "../store/dataslice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const socket = io.connect("http://localhost:8080");

const JoinRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username.trim() !== "" && room.trim() != "") {
      socket.emit("join_room", {
        username,
        room,
      });
      dispatch(
        setData({
          roomId: room,
          username: username,
          socket: socket,
        })
      );
        navigate('/chat')
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="w-full h-[100vh] grid place-items-center">
      <div className="min-w-[90%] grid md:min-w-[70%] lg:min-w-[500px] gap-[1.5rem]">
        <h3 className="text-[3rem]">RoomChat</h3>
        <span>
          <p>username</p>
          <input
            type="text"
            placeholder="john..."
            onChange={(e) => setUsername(e.target.value)}
            className={`outline-none p-2 bg-slate-100 rounded-md w-full`}
          />
        </span>
        <span>
          <p>room id</p>
          <input
            type="text"
            placeholder="Room id..."
            onChange={(e) => setRoom(e.target.value)}
            className={`outline-none p-2 bg-slate-100 rounded-md w-full`}
          />
        </span>
        <button
          onClick={joinRoom}
          className={"bg-black text-white p-3 rounded-lg"}
        >
          Join room
        </button>
      </div>
    </div>
  );
};

export default JoinRoom;
