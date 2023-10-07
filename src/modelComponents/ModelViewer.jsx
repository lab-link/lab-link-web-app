import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GLTFModel";
const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <GltfModel modelPath={modelPath} scale={scale} position={position} />
        </Suspense>
        <OrbitControls />
      </Canvas>
  );
};

export default ModelViewer;
