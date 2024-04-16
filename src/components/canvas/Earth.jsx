// creating rotating Earth
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  // importing our 3d model which is earth
  const earth = useGLTF('../planet/scene.gltf')

  return (
    // returning a primitive
    <primitive
      object={earth.scene} // primitive has the object
      scale={2.5} // changing the size of our model
      position-y={0} // postition the obect on y axes
      rotation-y={0}  // rotate the object of the y axes
    />
  )
}

// creating a new earth canvas model
const EarthCanvas = () => {
  return(
    <Canvas
      shadows 
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov:45, // making our object much larger
        near:0.1, //
        far: 200, //
        position: [-4,3,6] //
      }}

    >

      {/* this is gonna show while our model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* if the model is loading it is gonna render orbit controls */}
        <OrbitControls 
          autoRotate // setting outorotate to true
          enableZoom={false} // disabling zoom
          maxPolarAngle={Math.PI / 2} // setting angles to rotation
          minPolarAngle={Math.PI / 2} // setting angles to rotation
        />  
        <Earth /> {/* Calling our eath object */}
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas