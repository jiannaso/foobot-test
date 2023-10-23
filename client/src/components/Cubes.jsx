import * as THREE from "three"
import { useRef, useCallback, useState, useEffect } from "react"
import { Edges, Text } from "@react-three/drei"
import { SocketManager, currentAtom, playersAtom, socket, cubesAtom, colorAtom } from "./SocketManager";
import { useAtom, atom } from "jotai";

// Sides of Cube
const faceDirection = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
]


export const Cubes = ({color, ...props}) => {
    const userColor = color;
    // console.log(userColor);
    const [updatedCubes] = useAtom(cubesAtom);
    const [player] = useAtom(playersAtom);
    const curr = useAtom(currentAtom);
    const prevColor = useAtom(colorAtom);
    console.log("check color atom:" + prevColor[0]);

    const [hover, setHover] = useState(null)
    const [cubes, setCubes] = useState([]);
    const [isShiftPressed, setIsShiftPressed] = useState(false);

    const [currentPlayer, setCurrentPlayer] = useState(curr[0]);
    const [playerBlockCount, setPlayerBlockCount] = useState(1);
    const [playerNames] = useState(['player 1', 'player 2']);

    const playerTurnText = `${playerNames[currentPlayer - 1]}`;

    const [bricks, setBricks] = useState([]);

    // event listeners
    const handleKeyDown = (e) => {
        if (e.key === 'Shift') {
            setIsShiftPressed(true);
        }
    };
    const handleKeyUp = (e) => {
        if (e.key === 'Shift') {
            setIsShiftPressed(false);
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // Cleanup 
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);


    // When pointer moves
    const onMove = useCallback((e, index) => {
        e.stopPropagation()

        if (isShiftPressed) return;

        let faceIndex = Math.floor(e.faceIndex / 2);

        if (faceIndex > 0.5) {
            //add block onto exisitng block
            const offset = faceDirection[faceIndex]
            let pos = cubes[index].mesh.position.clone().add(new THREE.Vector3(...offset))
            pos = pos.floor().addScalar(0.5)
            setHover(pos)
        } else {
            //add block to floor
            let pos = e.point.clone().add(new THREE.Vector3(0, 0.5, 0));
            pos = pos.floor().addScalar(0.5);
            setHover(pos);
        }
    }, [hover, cubes, isShiftPressed])


    // remove cube on click
    const removeCube = useCallback((e, index) => {

        if (currentAtom == 2 && playersAtom == currentAtom) {
            console.log("Player 2 cannot remove blocks")
            return;
        }

        if (isShiftPressed) {

            if (playerBlockCount <= 9) {
                setCubes((prevCubes) => {
                    const updatedCubes = [...prevCubes];

                    updatedCubes.splice(index, 1);
                    return updatedCubes;
                });

                setPlayerBlockCount((prevCount) => prevCount + 1);
            } else {
                togglePlayer();
            }
        }
    }, [cubes, isShiftPressed, playerBlockCount, currentPlayer])


    // When pointer is out of screen
    const onOut = useCallback(() => setHover(null), [])


    // Add cube on click
    const addCube = useCallback((e) => {
        e.stopPropagation()

        if (!hover || isShiftPressed || e.delta > 10) return;

        if (playerBlockCount <= 9) {
            const voxel = new THREE.Mesh(new THREE.BoxGeometry, new THREE.MeshStandardMaterial({ color: 'white' }));
            voxel.position.copy(hover)

            //Add to array
            setCubes((prevCubes) => [...prevCubes, { mesh: voxel }]);
            setPlayerBlockCount((prevCount) => prevCount + 1);
            // console.log("check updated cubes");
            // console.log(cubes);
            // console.log(updatedCubes);
            socket.emit("cubes", hover);
            createMesh(updatedCubes);
            console.log("block count: " + playerBlockCount);
        } else {
            togglePlayer();
        }
    }, [hover, cubes, isShiftPressed, playerBlockCount])

    function createMesh(positions) {
        positions.forEach((position, index) => {
            // console.log("positions" + index);
            const voxel = new THREE.Mesh(new THREE.BoxGeometry, new THREE.MeshStandardMaterial({ color: 'white' }));
            voxel.position.copy(position)
            // bricks.push({mesh: voxel});
            setBricks((prevBricks) => [...prevBricks, { mesh: voxel }]);
        });

        // console.log("new mesh");
        // console.log(bricks);
        setCubes(bricks);
    };

    //player control
    const togglePlayer = () => {
        socket.emit("current", (curr[0] === 1 ? 2 : 1));
        if(player == 1) {
            console.log("emitted");
            socket.emit("color", userColor);
        }
        console.log("OG player:" + currentPlayer);
        setCurrentPlayer(player);
        setPlayerBlockCount(0);
        console.log("changed to player:" + currentPlayer);
        
    };

    return (
        <>
        <SocketManager/>
            {/* UI */}
            <Text position={[0, 7, 0]} fontSize={.4} color={'gray'}>
                silent game bot
            </Text>
            <Text position={[0, 6, 0]} fontSize={1} color={'black'}>
                {curr[0] == player ? "your turn" : "their turn"}
            </Text>
            <Text position={[0, 5, 0]} fontSize={.4} color={'gray'}>
                {/* moves left: {((9-playerBlockCount) + playerBlockCount%3)/3} */}
                hi player {player}{player == 1 ? ". set the tone." : ". match their vision."}
            </Text>
            
            

            {/* cubes */}
            {bricks.map((brick, index) => (
                <mesh
                    receiveShadow
                    castShadow
                    key={index}
                    position={brick.mesh.position}
                    onPointerMove={(e) => onMove(e, index)}
                    onPointerOut={onOut}
                    onPointerDown={(e) => removeCube(e, index)}
                >
                    {[...Array(6)].map((_, index) => (
                        <meshStandardMaterial
                            key={index}
                            attach={`material-${index}`}
                            // color={brick.faceIndex === index ? "#1069C4" : "#b1dce3"}
                            color={ player == 1 ? userColor : prevColor[0]}

                        />
                    ))}
                    <boxGeometry />
                    <Edges visible={true} scale={1} threshold={15} renderOrder={1000}>
                        <meshBasicMaterial transparent color="gray" side={THREE.DoubleSide} />
                    </Edges>
                </mesh>
            ))}


            {/* hover indicator */}
            {hover && (
                //box
                <mesh position={hover} onClick={addCube}>
                    <meshBasicMaterial color={player == 1 ? userColor : prevColor[0]} opacity={.4} transparent={true} />
                    <boxGeometry />
                    <Edges color={player == 1 ? userColor : prevColor[0]}/>
                </mesh>
            )}


            {/* ground */}
            <gridHelper />
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow onPointerMove={onMove} onPointerOut={onOut} >
                <planeGeometry args={[1000, 1000]} />
                <meshStandardMaterial color="white" />
            </mesh>

        </>
    )
}