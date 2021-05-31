import { useState } from 'react';

function useCameraParams() {

    const [cameraPos, setCameraPos] = useState({x: 30.0, y: 30.0, z: 15.0});

    const cameraParams = {
        pos: cameraPos
    }

    const cameraFunctions = {
        setPos: setCameraPos
    }

    return [cameraParams, cameraFunctions];
}

export default useCameraParams;