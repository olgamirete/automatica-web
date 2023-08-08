import "./index.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DotField from "./DotField";
import { CameraParams } from "@/hooks/useCameraParams";
import CustomScene from "./CustomScene";

export interface BackgroundJSProps {
  cameraParams: CameraParams;
}

const BackgroundJS: React.FC<BackgroundJSProps> = ({ cameraParams }) => {
  return (
    <div id="background-js" className="">
      <Canvas>
        <CustomScene moveCamTo={cameraParams.pos}>
          <DotField />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            enableDamping={true}
            target={[0, 0, 0]}
          />
        </CustomScene>
      </Canvas>
    </div>
  );
};

export default BackgroundJS;
