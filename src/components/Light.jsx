import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Light() {
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper);
  return (
    <>
      <directionalLight
        ref={directionalLight}
        castShadow
        intensity={3}
        position={[0, 6, 0]}
      />
      ;
    </>
  );
}
