import "./index.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { KeyboardControls } from "@react-three/drei";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "left", keys: ["ArrowLeft", "KeyA"] },
        { name: "right", keys: ["ArrowRight", "KeyD"] },
      ]}
    >
      <Canvas
        flat
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 3, 10],
        }}
      >
        <Experience />
      </Canvas>
    </KeyboardControls>
  </>
);
