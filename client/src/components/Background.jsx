import React from "react";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

export const Background = () => {

  return (
    <>
      <Environment>
        <ambientLight intensity={0.5} />
        <pointLight castShadow intensity={1} position={[100, 100, 100]} />
      </Environment>
    </>
  );
};
