import React from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "./components/Background";
import { OrbitControls } from "@react-three/drei";
import { Cubes } from "./components/Cubes";
import { SocketManager } from "./components/SocketManager";

function App() {
  return (
    <>
    <SocketManager/>
      <Canvas camera={{ fov: 48, position: [-5, 12, 13] }}>
        <color attach="background" args={["#white"]} />

        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2.15} />

        {/* <Background /> */}
        <Cubes />

      </Canvas>
    </>
  );
}

export default App;
