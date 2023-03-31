import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Element } from "./Element";

const StyledApp = styled.div`
  height: 100vh;
  background-color: #242424;

  .controll {
    display: flex;
    flex-direction: column;

    .position {
      display: flex;
      flex-direction: column;

      input {
        width: 150px;
      }
    }

    .light {
      display: flex;
      flex-direction: column;
      input {
        width: 150px;
      }
    }
  }
`;

function App() {
  const [valueFirst, setValueFirst] = useState("");
  const [valueSecond, setValueSecond] = useState("");
  const [valueThird, setValueThird] = useState("");

  ////------
  const [activeGeometry, setActiveGeometry] = useState(false);
  const [speedGeometry, setSpeedGeometry] = useState("0");

  ///--------
  const [boxGeometry, setBoxGeometry] = useState(false);
  const [circleGeometry, setCircleGeometry] = useState(false);
  const [cylinderGeometry, setCylindeGeometry] = useState(false);

  ///--------
  const [pointLightFirst, setPointLightFirst] = useState("");
  const [pointLightSecond, setPointLightSecond] = useState("");
  const [pointLightThird, setPointLightThird] = useState("");

  const positionGeometry = {
    first: valueFirst,
    second: valueSecond,
    third: valueThird,
  };

  const pointLightValue = {
    first: pointLightFirst,
    second: pointLightSecond,
    third: pointLightThird,
  };
  console.log(boxGeometry);
  return (
    <StyledApp className="anim">
      <div className="btns">
        <button onClick={() => setActiveGeometry(!activeGeometry)}>
          Click
        </button>

        <button onClick={() => setBoxGeometry(!boxGeometry)}>
          boxGeometry
        </button>
        <button onClick={() => setCircleGeometry(!circleGeometry)}>
          circleGeometry
        </button>
        <button onClick={() => setCylindeGeometry(!cylinderGeometry)}>
          cylinderGeometry
        </button>
      </div>
      <Suspense fallback={null}>
        <div className="controll">
          <div className="position">
            <input
              type="number"
              value={valueFirst}
              onChange={(e) => setValueFirst(e.target.value)}
            />
            <input
              type="number"
              value={valueSecond}
              onChange={(e) => setValueSecond(e.target.value)}
            />
            <input
              type="number"
              value={valueThird}
              onChange={(e) => setValueThird(e.target.value)}
            />
          </div>
          <div className="light">
            <input
              type="number"
              value={pointLightFirst}
              onChange={(e) => setPointLightFirst(e.target.value)}
            />
            <input
              type="number"
              value={pointLightSecond}
              onChange={(e) => setPointLightSecond(e.target.value)}
            />
            <input
              type="number"
              value={pointLightThird}
              onChange={(e) => setPointLightThird(e.target.value)}
            />
          </div>
        </div>

        <Canvas>
          <ambientLight intensity={50.3} />
          <pointLight
            position={[
              pointLightFirst.first,
              pointLightFirst.second,
              pointLightFirst.third,
            ]}
          />
          <Element
            position={[
              positionGeometry.first,
              positionGeometry.second,
              positionGeometry.third,
            ]}
            activeGeometry={activeGeometry}
            speedGeometry={speedGeometry}
            setSpeedGeometry={setSpeedGeometry}
            boxGeometry={boxGeometry}
            circleGeometry={circleGeometry}
            cylinderGeometry={cylinderGeometry}
          />
        </Canvas>
      </Suspense>
    </StyledApp>
  );
}

export default App;
