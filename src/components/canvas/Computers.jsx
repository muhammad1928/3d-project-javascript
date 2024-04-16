import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

 {/* importing 3 models usage */}
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('../desktop_pc/scene.gltf');

  return (
    // when working with 3d models we will use mesh
    <mesh>
      {/* we are adding lights to be able to see the 3d model */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive  
        object={computer.scene} 
        // checking if it is a mobile or not and choosing scale 1 or 2
        scale={isMobile ? 0.6 : 0.75} 
        position={ isMobile ? [0, -1.9, -2.2] : [0, -2.25, -1.5]} 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  // creating a new use state field for mobiles
  const [isMobile, setIsMobile] = useState(false);

  // adding a variable isMobile to be able to detect if we are on a small device or big device
  useEffect(() => {
    // cheking the devise max width equal to 500 to check if we are on a mobile
    //add listener for changes to the sceen size
    const mediaQuery = window.matchMedia('(max-width: 639px');

    // if the width matches we set the media query to match
    // set the initial value of the isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // when the width changes we need to modify back
    // define a callback funtion to handel the changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // we have to add the event listener in react
    // add the callback function as a listerner for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // we have to remove the event listener in react
    // remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return (
    // we are adding frameloop on demand, shadows and a camera desiding where we are looking from
    //positon [x axes, y axes, z axes], fov(field of view) : 25 (how wide is the field = 25)

    <Canvas 
      frameloop="demand" 
      shadows 
      dpr={[1, 2]}
      camera={{ position : [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}>

      {/* having a Loader while model is loading */}
      <Suspense fallback={<CanvasLoader />}>

        {/* controls allowing us to move model, we dont want to zoom in and out, we dont want to move it on all axes but only right and left */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>

        {/* rendering computers component */}
        <Computers  isMobile={isMobile} />

      </Suspense>
      
      {/* adding preload */}
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas