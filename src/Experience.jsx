import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Floor from "./components/Floor";
import Car from "./components/Car";
import Light from "./components/Light";
import Fog from "./components/Fog";
import Snowfall from "./components/Snowfall";
import { Mountain } from "./components/Mountain";
import { Mountain2 } from "./components/Mountain2";

export default function Experience() {
  return (
    <>
      <color args={["white"]} attach="background" />
      <OrbitControls makeDefault />
      <Physics debug>
        <Fog color="white" far={110} />
        <Light />
        <Snowfall />
        <Car />
        <Floor />
        <Mountain />
        <Mountain2 />
      </Physics>
    </>
  );
}
