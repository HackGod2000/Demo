import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import OrbitControls from "three-orbitcontrols";

//Controls teh camera view and orbitControls

extend({ OrbitControls });

function Controls() {
  const controlsRef = useRef();
  const { camera, gl, size } = useThree();
  console.log(size);

  useFrame(() => controlsRef.current && controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      //enableRotate
      //enablePan={false}
    />
  );
}

export default Controls;
