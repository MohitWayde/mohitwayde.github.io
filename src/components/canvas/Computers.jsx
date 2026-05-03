import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computers = useGLTF("./desktop_pc/scene.gltf");
  return (
    <group>
      <hemisphereLight intensity={isMobile ? 0.08 : 0.15} groundColor="black" />
      <pointLight intensity={isMobile ? 0.8 : 1.75} />
      {!isMobile && (
        <spotLight 
          position={[-20, 0, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadowMapSize={1024}
        />
      )}
      <primitive 
        object={computers.scene} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMeadiQueryChange = (event)=>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMeadiQueryChange);
  
    return () => {
      mediaQuery.removeEventListener('change', handleMeadiQueryChange);
    }
  }, []);
  
  return (
    <Canvas
      frameloop={isMobile ? "adaptive" : "demand"}
      shadows={!isMobile}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isMobile
      }}
      dpr={isMobile ? 1 : 2}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;


// ChatGPT
