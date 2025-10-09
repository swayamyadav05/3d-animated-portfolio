import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Computer } from "./Models/Computer-optimized";

// const ComputerModel = () => {
//   const { scene } = useGLTF("/models/computer-optimized.glb");

//   return (
//     <primitive
//       object={scene}
//       scale={1}
//       position={[0, 0, 0]}
//       rotation={[0.1, 0, 0]}
//     />
//   );
// };

const ContactExperience: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 3, 7], fov: 45 }}
      shadows
      style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.5} color="#fff4e6" />
        <directionalLight
          position={[5, 5, 3]}
          intensity={2.5}
          color={"#ffd9b3"}
        />
        <directionalLight
          position={[5, 9, 1]}
          castShadow
          intensity={2.5}
          color="#ffd9b3"
        />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <group scale={0.03} position={[0, -1.5, -2]} castShadow>
          <Computer />
        </group>

        <group>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>
      </Suspense>
    </Canvas>
  );
};

// Preload the model
useGLTF.preload("/models/computer-optimized.glb");

export default ContactExperience;
