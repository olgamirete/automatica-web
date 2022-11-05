import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Points } from "@react-three/drei";
import usePointerCoords from "hooks/usePointerCoords";
import { Vector3 } from "three";

// With help from: https://codesandbox.io/s/eager-noyce-6rvwr?from-embed=&file=/src/index.js:753-776

var getHeight = function (x: number, y: number, t: number): number {
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
  // const fa = r < 50 ? Math.sin(r*(Math.PI/2)/50) : 1;
  const fa = 1;
  // return Math.sin((r+t)/(10*Math.PI))*5000*(1/r);
  // return (Math.sin((r+t)/(5*2*Math.PI))+0)*50*(1/r);
  return (
    fa *
    (Math.sin((angle + t / 12) * 5 + (r * 2 * Math.PI) / 100) *
      2 *
      Math.sin((r * 2 * Math.PI) / 100 + t / 2))
  );
  // return Math.sin((r+t)/(5*2*Math.PI))*500*Math.sqrt(1/(r+1));
  // return Math.sin((x+t)/(5*2*Math.PI))*50 + Math.sin((y-t)/(5*2*Math.PI))*50;

  // return Math.sin((r+t)/(5*2*Math.PI))*50*Math.sin(angle*5+(t+r/1.5)/100); //Fav

  // return fa * ( Math.sin((r + t) / (5 * 2 * Math.PI)) * 50 * Math.sin(angle * 5 + (t + r / 1.5) / 100) / scale); //Fav
};

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
    let x = Math.cos(i * stepAngle * ((2 * Math.PI) / 180)) * j * stepRadius;
    let z = Math.sin(i * stepAngle * ((2 * Math.PI) / 180)) * j * stepRadius;
    let y = getHeight(x, z, 0);

    // var newColor = new THREE.Color(0x00b8ff);
    const newColor = new THREE.Color(0xaaaaaa);
    // const newColor = new THREE.Color(0xff0000);

    if (Math.random() * 150 > j * stepRadius || j * stepRadius < 20) {
      auxPositionsArr.push(x, y, z);
      colorsArr.push(newColor.r, newColor.g, newColor.b);
      sizesArr.push(Math.random() * 5);
    }
  }
}

let auxPositions = new Float32Array(auxPositionsArr);
let colors = new Float32Array(colorsArr);
let sizes = new Float32Array(sizesArr);

const DotField: React.FC = () => {
  const pointsRef = useRef(null); //<ThreeElements.points>

  const pointerCoords = usePointerCoords();

  const startTime = useMemo(() => new Date().getTime() * 0.001, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const currentTime = new Date().getTime() * 0.001;
      const elapsedTime = currentTime - startTime;

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

      let points = pointsRef.current as ThreeElements["points"];

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
      positions={auxPositions}
      colors={colors}
      sizes={sizes}
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
