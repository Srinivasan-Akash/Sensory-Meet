const { Server } = require("socket.io")

const io = new Server(8000, {
    cors: true
})

const emailToSocketIdMap = new Map()
const mapToSocketIdMap = new Map()

io.on("connection", socket => {
    console.log("Socket Connected:- " + socket.id)
    socket.on("room:join", data => {
        const { name } = data
        emailToSocketIdMap.set(name, socket.id)
        mapToSocketIdMap.set(socket.id, name)
        io.to(socket.id).emit("room:join", data)
    })
})