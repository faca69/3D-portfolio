import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Snowfall() {
  const particlesRef = useRef();

  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] -= 0.05; // Move downward
      if (positions[i] < 0) positions[i] = 10; // Reset position
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={
            new Float32Array([
              ...Array(1000)
                .fill()
                .flatMap(() => [
                  Math.random() * 10 - 5, // x
                  Math.random() * 10, // y
                  Math.random() * 10 - 5, // z
                ]),
            ])
          }
          count={1000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#fffff2" />
    </points>
  );
}
