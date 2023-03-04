import React, { useRef } from "react";
import { Dragon } from "./models/Dragon";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Scroll } from "@react-three/drei";
type Props = {};

function ThreeScenes({}: Props) {
  const group = useRef();

  //   useFrame(() => {
  //     console.log(group.current.position);
  //   });

  return (
    <Scroll>
      <group position={[0, -1.125, 0]}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
        <directionalLight
          position={[-1, -2, -5]}
          intensity={0.2}
          color="#0c8cbf"
        />
        <spotLight
          position={[5, 0, 5]}
          intensity={2.5}
          penumbra={1}
          angle={0.35}
          castShadow
          color="#0c8cbf"
        />

        {/* <OrbitControls /> */}
        <Dragon scale={1} position={[0, 0, 2.5]} />
      </group>
    </Scroll>
  );
}

export default ThreeScenes;
