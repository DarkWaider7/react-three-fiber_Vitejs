import React, { useRef } from "react";
import styled from "styled-components";
import { useLoader, useFrame } from "@react-three/fiber";
import { SphereGeometry } from "three";
import { TextureLoader } from "three";
import { selectGeomethry } from "./SelectGeomethry";

export const Element = ({
  position = [],
  activeGeometry,
  speedGeometry,
  boxGeometry,
  circleGeometry,
  cylinderGeometry,
  setSpeedGeometry,
}) => {
  const ref = useRef();
  const [crate] = useLoader(TextureLoader, ["014.jpeg"]);

  useFrame(() => {
    if (activeGeometry) {
      ref.current.rotation.x += 0.03;
    }
  }, [activeGeometry]);
  console.log(boxGeometry);
  return (
    <mesh position={position} ref={ref}>
      {boxGeometry ? <boxGeometry /> : null}
      {circleGeometry ? <circleGeometry /> : null}
      {cylinderGeometry ? <cylinderGeometry /> : null}
      <meshStandardMaterial map={crate} />
    </mesh>
  );
};
