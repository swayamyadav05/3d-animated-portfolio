import {
  Environment,
  Float,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";
import { type FC } from "react";

interface ModelItem {
  modelPath: string;
  scale?: number;
  rotation?: number[];
}

interface TechIconProps {
  model: ModelItem;
}

const TechIcon: FC<TechIconProps> = ({ model }) => {
  const scene = useGLTF(model.modelPath) as unknown as GLTF;

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={
            Array.isArray(model.rotation) &&
            model.rotation.length === 3
              ? (model.rotation as [number, number, number])
              : [0, 0, 0]
          }>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
