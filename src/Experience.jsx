import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Floor from "./components/Floor";
import Car from "./components/Car";
import Light from "./components/Light";
import Fog from "./components/Fog";

export default function Experience() {
  return (
    <>
      <color args={["#e77d11"]} attach="background" />
      <OrbitControls makeDefault />
      <Physics debug>
        <Fog color="#e77d11" far={200} near={10} />
        <Light />
        <Car />
        <Floor />
      </Physics>
    </>
  );
}
