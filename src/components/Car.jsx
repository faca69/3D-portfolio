import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useRef } from "react";

export default function Car() {
  const body = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();

  useFrame((state, delta) => {
    const { forward, backward, left, right } = getKeys();
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }
    if (right) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    if (left) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }
    body.current.applyImpulse(impulse);
    body.current.applyTorqueImpulse(torque);
  });

  return (
    <RigidBody
      ref={body}
      canSleep={false}
      colliders="ball"
      restitution={1}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      position={[0, 2, 0]}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.5, 1, 0]} />
        <meshStandardMaterial flatShading color={"pink"} />
      </mesh>
    </RigidBody>
  );
}
