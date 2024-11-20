import { useGLTF } from "@react-three/drei";

export default function Planet() {
  const planet = useGLTF("/planet.glb");

  return (
    <primitive
      object={planet.scene}
      color={"red"}
      position={[0, 0, 0]}
      scale={0.1}
    />
  );
}
