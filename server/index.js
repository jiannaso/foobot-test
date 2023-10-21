import {Server} from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:5173/"
    }
});

io.listen(3001);

const players = [];
const cubes = [];

io.on('connection', (socket) => {
    console.log("user connected");

    socket.emit("hello");
    players.push({
        id: socket.id
    });
    socket.emit("players", players.length);
    socket.on("current", (value) => {
        console.log("current player");
        console.log(value);
        socket.emit("current", value);
    });

    socket.on("cubes", (value) => {
        console.log("emitting");
        console.log(value);
        cubes.push(value);
        io.emit("cubes", cubes);
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");

        players.splice(
            players.findIndex((player) => player.id === socket.id),
            1
        );

    })  
})
