import { useEffect } from "react";
import {io} from "socket.io-client";
import { useAtom, atom } from "jotai";
import * as THREE from "three"

export const socket = io("http://localhost:3001");

//like a global state
export const playersAtom = atom([0]);
export const cubesAtom = atom([]);
export const currentAtom = atom([]);
export const colorAtom = atom([]);

export const SocketManager = () => {
    const [_players, setPlayers] = useAtom(playersAtom);
    const [_cubes, setCubes] = useAtom(cubesAtom);
    const [_current, setCurrent] = useAtom(currentAtom);
    const [_color, setColor] = useAtom(colorAtom);


    useEffect (() => {
        function onConnect() {
            console.log("connected")
        }

        function onDisonnect() {
            console.log("disconnected")
        }

        function onHello() {
            console.log("hello");
        }

        function onPlayers(value) {
            setPlayers(value);
            console.log("player number", value);
        }

        function onColor(value) {
            setColor(value);
        }

        function onCubes(values) {
            // const local = [];

            // values.forEach((value) => {
            //     let loader = new THREE.ObjectLoader();
            //     let newMesh = loader.parse(value);
            //     console.log(newMesh);
            //     local.push(newMesh);

            // });

            // console.log(local);
            setCubes(values);
            // console.log(cubesAtom);
            console.log("socket manager received cubes");
        }

        function onCurrent(value) {
            setCurrent(value);
            console.log("current player:" + value);
        }

        //bind events to right function
        socket.on("connect", onConnect);
        socket.on("disconnect", onDisonnect);
        socket.on("hello", onHello);
        socket.on("players", onPlayers);
        socket.on("cubes", onCubes);
        socket.on("current", onCurrent);
        socket.on("color", onColor);


        //bind events
        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisonnect);
            socket.off("hello", onHello);
            socket.off("players", onPlayers);
            socket.off("cubes", onCubes);
            socket.off("current", onCurrent);
            socket.off("color", onColor);
        }
    }, []);
};