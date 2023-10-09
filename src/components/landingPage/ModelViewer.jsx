import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 40, position = [0, -300, 0]}) => {
  const cameraRef = React.useRef();
  return (
    <div style={{ width: "1080px", height: "500px", display: 'flex', justifyContent:'center', alignItems:'center'}}>
      <Canvas>
        <PerspectiveCamera makeDefault
        //  fov={75}     // Field of view (in degrees)
        //  near={0.1}   // Near clipping plane
        //  far={1000}   // Far clipping plane
         position={[-1400, 100,70]} // Initial camera posit
        />
        <ambientLight intensity={.7} />
        {/* <pointLight position={[0, 0, 5]} intensity={10}/> */}
        <Suspense fallback={null}>
          <GltfModel modelPath={modelPath} scale={scale} position={position} />
          <OrbitControls 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}


export default ModelViewer;
