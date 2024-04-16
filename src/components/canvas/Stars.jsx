import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


const Stars = (props) => {
  // initializing empty ref
  const ref = useRef();

  // defining the sphere with 5000 particals
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  // creating utility to move the stars
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    // we are creating a group with a lot of points. making the group to rotate instead of each stars

    <group rotation={[0, 0, Math.PI / 4]}>
      {/* creating the points, frumstumCulled makes sure that only the points that has been rendering is on camera... spreading all of the props afterwards*/}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent 
          color='#f272c8' 
          size={0.002} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
      
      {/* ss */}

    </group>
  );
};

const StarsCanvas = () =>{
  return(
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0,0,1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
      
    </div>
  );
};

export default StarsCanvas