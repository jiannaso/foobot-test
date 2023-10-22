import { React} from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "./components/Background";
import { OrbitControls, SoftShadows } from "@react-three/drei";
import { Cubes } from "./components/Cubes";
import { SocketManager, currentAtom, playersAtom, socket, cubesAtom, colorAtom } from "./components/SocketManager";
import { useAtom, atom } from "jotai";
import { useControls } from "leva";


// environment styling: https://codesandbox.io/s/dh2jc?file=/src/App.js:1464-1469
function App() {
  const prevColor = useAtom(colorAtom);
  console.log("check color atom in app:" + prevColor[0]);

  const { enabled, ...config } = useControls({
    enabled: true,
    color: { value: "pink" }
  })

  console.log(config);
  
  return (
    <>
    <SocketManager/>
    <Canvas shadows camera={{ position: [-5, 12, 13], fov: 50 }}>
      {enabled && <SoftShadows {...config} />}
      <fog attach="fog" args={["white", 0, 100]} />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[2.5, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
      <group position={[0, -3.5, 0]}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[4, 1, 1]} />
          <meshLambertMaterial />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2.15} />
      </group>
        <Cubes color={config.color} />
    </Canvas>
    </>
  );
}

export default App;
