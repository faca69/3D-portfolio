import { RigidBody } from "@react-three/rapier";

export default function Floor() {
  return (
    <>
      <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh receiveShadow>
          <boxGeometry args={[100, 0.2, 100]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
      </RigidBody>
    </>
  );
}

// import { useTexture } from "@react-three/drei";
// import { RigidBody } from "@react-three/rapier";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function Floor() {
//   const meshRef = useRef();
//   const [diffuseMap, displacementMap, normalMap, roughnessMap, aoMap] =
//     useTexture([
//       "/floor/diffuse.png",
//       "/floor/disp.png",
//       "/floor/normal.png",
//       "/floor/roughness.png",
//       "/floor/ao.png",
//     ]);

//   useEffect(() => {
//     [diffuseMap, displacementMap, normalMap, roughnessMap, aoMap].forEach(
//       (texture) => {
//         texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//         texture.repeat.set(2, 2); // Increase this value to repeat the texture more times
//         texture.needsUpdate = true;
//       }
//     );
//   }, [diffuseMap, displacementMap, normalMap, roughnessMap, aoMap]);

//   useEffect(() => {
//     if (meshRef.current) {
//       const geometry = meshRef.current.geometry;
//       geometry.setAttribute("uv2", geometry.attributes.uv);
//     }
//   }, []);

//   return (
//     <RigidBody type="fixed" restitution={0.2} friction={1}>
//       <mesh ref={meshRef} receiveShadow rotation-x={-Math.PI / 2}>
//         <planeGeometry args={[100, 100, 256, 256]} />
//         <meshStandardMaterial
//           map={diffuseMap}
//           displacementMap={displacementMap}
//           displacementScale={0.2}
//           normalMap={normalMap}
//           aoMap={aoMap}
//           roughnessMap={roughnessMap}
//         />
//       </mesh>
//     </RigidBody>
//   );
// }
