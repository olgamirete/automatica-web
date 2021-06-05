import './index.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DotField from './DotField';
import { useEffect, useRef, useState } from 'react';

function CustomScene(props) {
    const sceneRef = useRef(null);
    const { camera } = useThree();
    const [cameraPos, setCameraPos] = useState({x: 10.0, y: 2.0, z: 1.0});
    
    useEffect(() => {
        camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
    }, [camera.position, cameraPos]);

    useFrame(() => {
        setCameraPos((oldPos) => {
            return {
                x: oldPos.x+(props.moveCamTo.x-oldPos.x)/30,
                y: oldPos.y+(props.moveCamTo.y-oldPos.y)/30,
                z: oldPos.z+(props.moveCamTo.z-oldPos.z)/30
            }
        });
    });

    return <scene ref={sceneRef}>{props.children}</scene>
}

function BackgroundJS(props) {

    return (
        <div id="background-js" className="">
            <Canvas>
                <CustomScene moveCamTo={props.cameraParams.pos} >

                    {/* <ambientLight intensity={0.5} /> */}
                    {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
                    {/* <pointLight position={[-10, -10, -10]} /> */}
                    <DotField />
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={false}
                        enableDamping={true}
                        target={[0, 0, 0]} />
                </CustomScene>
            </Canvas>
        </div>
    );
}

export default BackgroundJS;