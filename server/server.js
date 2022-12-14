import express from 'express'
import http from "http"
import cors from "cors"
import { Server } from 'socket.io'
import { log } from 'console'
const app = express()
app.use(cors)
const port = 8080

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:3001"], 
        // methods: ["GET", "POST"]
    }
} )

io.on("connection", (socket) => {
    // log(socket.id);

    socket.on("join_room", (data) => {
            log(`user with id ${socket.id} and username ${data.username} joined room ${data.room}`)
    })
 
    socket.on("send_message", (incomingdata) => {
        log(incomingdata)
        log(`sending message to all in ${incomingdata.room} except ${socket.id}`)
        io.to(incomingdata.room).except(socket.id).emit("foo", "bar");
    })
    // socket.to(msg.room).emit("receive_message", msg)

    socket.on("disconnect", () => {
        console.log("user disconected", socket.id);
    })
})
server.listen(port, () => {
    console.log("server running on port " + port + "\n\n\n");
} )
