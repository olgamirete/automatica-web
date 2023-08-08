import { SceneProps, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { AxesHelper, GridHelper, Vector3 } from "three";

export interface CustomSceneProps extends SceneProps {
  moveCamTo: Vector3;
  grid?: boolean;
  axes?: boolean;
}

const CustomScene: React.FC<CustomSceneProps> = ({
  moveCamTo,
  grid,
  axes,
  children,
}) => {
  const sceneRef = useRef<THREE.Scene>(null);
  const { camera } = useThree();
  const [cameraPos, setCameraPos] = useState({ x: 10.0, y: 2.0, z: 1.0 });

  useEffect(() => {
    camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
  }, [camera.position, cameraPos]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (scene) {
      if (grid) {
        const size = 100;
        const divisions = 100;
        const gridHelper = new GridHelper(size, divisions);
        scene.add(gridHelper);
      }
      if (axes) {
        const axesHelper = new AxesHelper(10);
        scene.add(axesHelper);
      }
    }
  }, [sceneRef, grid, axes, camera]);

  useFrame(() => {
    setCameraPos((oldPos) => {
      return {
        x: oldPos.x + (moveCamTo.x - oldPos.x) / 30,
        y: oldPos.y + (moveCamTo.y - oldPos.y) / 30,
        z: oldPos.z + (moveCamTo.z - oldPos.z) / 30,
      };
    });
  });

  return <scene ref={sceneRef}>{children}</scene>;
};

export default CustomScene;
