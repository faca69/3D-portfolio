import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function Fog({ color = "#ffffff", near = 1, far = 100 }) {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.Fog(color, near, far);

    return () => {
      scene.fog = null;
    };
  }, [scene, color, near, far]);

  return null;
}
