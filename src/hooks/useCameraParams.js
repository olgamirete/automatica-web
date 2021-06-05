import { useState, useEffect } from 'react';
import useHelpers from './useHelpers';

function useCameraParams(location) {

    const helpers = useHelpers();

    const getSectionKeyFromPath = helpers.functions.getSectionKeyFromPath;
    const sectionOnPageLoad = getSectionKeyFromPath(location.pathname);
    const navLinks = helpers.constants.navLinks;
    const indexOnPageLoad = navLinks.findIndex((x) => {
        return x.eventKey === sectionOnPageLoad;
    });
    const camPosOnPageLoad = {
        x: navLinks[indexOnPageLoad].moveCamTo[0],
        y: navLinks[indexOnPageLoad].moveCamTo[1],
        z: navLinks[indexOnPageLoad].moveCamTo[2]
    }

    const [cameraPos, setCameraPos] = useState(camPosOnPageLoad);
    // const [cameraPos, setCameraPos] = useState({x: 90.0, y: 15.0, z: -5.0});

    useEffect(() => {

        const activeKey = getSectionKeyFromPath(location.pathname);
        const idx = navLinks.findIndex(x => x.eventKey === activeKey);
        const moveTo = navLinks[idx].moveCamTo;

        setCameraPos({
            x: moveTo[0],
            y: moveTo[1],
            z: moveTo[2]
        });

        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        // const elem = document.getElementById(helpers.constants.mainAppId);
        // elem.scrollTop = 0;

        // helpers.functions.scrollToTop();

        // alert("Holis");

    }, [navLinks, getSectionKeyFromPath, location.pathname, helpers.constants.mainAppId]); //

    const cameraParams = {
        pos: cameraPos
    }

    const cameraFunctions = {
        setPos: setCameraPos
    }

    return [cameraParams, cameraFunctions];
}

export default useCameraParams;