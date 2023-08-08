import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Points } from "@react-three/drei";
import usePointerCoords from "@/hooks/usePointerCoords";
import { Vector3 } from "three";

// With help from: https://codesandbox.io/s/eager-noyce-6rvwr?from-embed=&file=/src/index.js:753-776
export interface DotFieldState {
  positions: Float32Array;
  colors: Float32Array;
  sizes: Float32Array;
}

const getHeight = (x: number, y: number, t: number): number => {
  // const offsetX = 2000;
  // const offsetY = -100;

  // x = x + 1.0*w;
  // y = y + 0.5*h;
  // x += offsetValue;
  // y += offsetValue;

  // x += Math.random()*100;
  // y += Math.random()*100;
  const scale = 10;
  x = x * scale;
  y = y * scale;

  let r = Math.sqrt(x * x + y * y) / 3;
  r = Math.pow(r, 0.92);
  // const r = (x+y)/2;
  const angle = Math.atan2(y, x);
  t = t / 30;

  // const fa = r < 50 ? 0 : 1;
  // const fa = 1;
  // return Math.exp(Math.sin(r/10+t/2)*3)/10;
  return (
    Math.sin((angle + t / 12) * 5 + (r * 2 * Math.PI) / 100) *
    2 *
    Math.sin((r * 2 * Math.PI) / 100 + t / 2)
  );
  // return Math.sin((r+t)/(5*2*Math.PI))*500*Math.sqrt(1/(r+1));
  // return Math.sin((x/2+t*5)/(5*2*Math.PI)) - Math.cos((y/2-t*5)/(5*2*Math.PI));

  // return Math.sin((r+t*4)/(5*2*Math.PI))*Math.sin(angle*5+(t*3+r/1.5)/100)*3; //Fav
};

const DotField: React.FC = () => {
  const pointsRef = useRef(null); //<ThreeElements.points>
  const startTime = useMemo(() => new Date().getTime() * 0.001, []);

  const dotFieldInitialState = useMemo<DotFieldState>(() => {
    let auxPositionsArr: number[] = [];
    let colorsArr: number[] = [];
    let sizesArr: number[] = [];

    const maxAngle = 359;
    const maxRadius = 150;
    const stepRadius = 2;
    const stepAngle = 1;

    for (let i = 0; i <= maxAngle / stepAngle; i++) {
      for (let j = 0; j <= maxRadius / stepRadius; j++) {
        // let x = i * stepAngle * (100+(Math.random()-.5)*2*1)/100;
        // let z = j * stepAngle * (100+(Math.random()-.5)*2*1)/100;
        let x = Math.cos(i * stepAngle * (Math.PI / 90)) * j * stepRadius;
        let z = Math.sin(i * stepAngle * (Math.PI / 90)) * j * stepRadius + x;
        let y = getHeight(x, z, 0);

        const newColor = new THREE.Color(0xaaaaaa);

        if (Math.random() * 150 > j * stepRadius || j * stepRadius < 20) {
          auxPositionsArr.push(x, y, z);
          colorsArr.push(newColor.r, newColor.g, newColor.b);
          sizesArr.push(Math.random() * 5);
        }
      }
    }

    return {
      positions: new Float32Array(auxPositionsArr),
      colors: new Float32Array(colorsArr),
      sizes: new Float32Array(sizesArr),
    };
  }, []);

  const pointerCoords = usePointerCoords();

  useFrame((state, delta) => {
    const currentTime = new Date().getTime() * 0.001;
    const elapsedTime = currentTime - startTime;

    if (pointsRef.current) {
      let points = pointsRef.current as ThreeElements["points"];

      // --------------
      const vec = new Vector3(
        (pointerCoords.x / window.innerWidth) * 2 - 1,
        -(pointerCoords.y / window.innerHeight) * 2 + 1,
        0.5
      )
        .unproject(state.camera)
        .sub(state.camera.position)
        .normalize();

      const distance = -state.camera.position.y / vec.y;

      const pointerPos = new Vector3()
        .copy(state.camera.position)
        .add(vec.multiplyScalar(distance));
      const pointerPos2D = new Vector3(pointerPos.x, 0, pointerPos.z);
      // --------------

      if (points.geometry) {
        points.geometry.attributes.position.needsUpdate = true;
        points.geometry.attributes.color.needsUpdate = true;
        let dots = points.geometry.attributes.position.array as number[];
        const dotCount = dots.length / 3;
        let colors = points.geometry.attributes.color.array as number[];

        for (let i = 0; i < dotCount; i++) {
          const x = dots[i * 3 + 0];
          //   y = dots[i*3+1];
          const z = dots[i * 3 + 2];

          // And now we update the missing coordinate
          const dotHeight = getHeight(x, z, -elapsedTime * 100);

          const dotPos2D = new Vector3(x, 0, z);

          const distanceToPointer = Math.abs(dotPos2D.distanceTo(pointerPos2D));

          // expects a value between 0 and 1 for each r, g and b variables.
          let r = 0.973 * Math.max(dotHeight / 2, 0.2);
          let g = 0.976 * Math.max(dotHeight / 2, 0.2);
          let b = 0.98 * Math.max(dotHeight / 2, 0.2);

          const heightMofifier = Math.exp(-distanceToPointer / 2) * 10;

          dots[i * 3 + 1] = dotHeight - heightMofifier; // The y coordinate.

          colors[i * 3 + 0] = r;
          colors[i * 3 + 1] = g;
          colors[i * 3 + 2] = b;
        }
      }
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={dotFieldInitialState.positions}
      colors={dotFieldInitialState.colors}
      sizes={dotFieldInitialState.sizes}
      matrixWorldAutoUpdate={true}
      getObjectsByProperty={undefined}
    >
      <pointsMaterial
        attach="material"
        vertexColors
        size={0.2}
        sizeAttenuation={true}
      />
    </Points>
  );
};

export default DotField;
