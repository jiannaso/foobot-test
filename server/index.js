import {Server} from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:5173/",
        // origin: true,
        methods: ["GET", "POST"],
        credentials: true,
    },
    allowEIO3: true,
});

io.listen(3001);

const players = [];
const cubes = [];
var current = 1;
var color = null;
io.on('connection', (socket) => {
    console.log("user connected");

    socket.emit("current", current);
    socket.emit("hello");
    players.push({
        id: socket.id
    });
    socket.emit("players", players.length);
    io.emit("color", "pink");

    socket.on("current", (value) => {
        console.log("new player" + value);
        current = value;
        io.emit("current", current);
    });

    socket.on("cubes", (value) => {
        console.log("emitting");
        console.log(value);
        cubes.push(value);
        io.emit("cubes", cubes);
    });

    socket.on("color", (value) => {
        console.log("new color" + value);
        color = value;
        io.emit("color", color);
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");

        players.splice(
            players.findIndex((player) => player.id === socket.id),
            1
        );

    })  
})
