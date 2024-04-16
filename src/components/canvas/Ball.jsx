import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

// this ball is accepting some props
const Ball = (props) => {
  // getting the ball texture
  const [decal] = useTexture([props.imgUrl]);


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* making us see the objects */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* creating a ecisehydron figures */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/> {/* creating 3d vibes and shadows on icosahedrons */}
        {/* dding decals on the shapes */}
        <Decal
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]} // mirroring them horizontally
          flatShading
          map={decal}/>
      </mesh>
      

    </Float>
  )
}

// creating canvas
const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
      frameloop="demand"  
      gl={{ preserveDrawingBuffer: true }}>

      {/* having a Loader while model is loading */}
      <Suspense fallback={<CanvasLoader />}>

        {/* controls allowing us to move model, we dont want to zoom in and out, we dont want to move it on all axes but only right and left */}
        <OrbitControls 
          enableZoom={false}
          // autoRotate // setting outorotate to true
        />

        {/* rendering computers component */}
        <Ball imgUrl={icon}/>

      </Suspense>
      
      {/* adding preload */}
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas