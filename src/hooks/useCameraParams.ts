import { useState, useEffect } from "react";
import { Location } from "react-router-dom";
import { Vector3 } from "three";
import useHelpers from "./useHelpers";

export interface CameraParams {
  pos: Vector3;
}
export type CameraFunctions = {
  setPos: React.Dispatch<React.SetStateAction<Vector3>>;
};

export type UseCameraParamsReturn = [CameraParams, CameraFunctions];

function useCameraParams(location: Location): UseCameraParamsReturn {
  const helpers = useHelpers();

  const getSectionKeyFromPath = helpers.functions.getSectionKeyFromPath;
  const sectionOnPageLoad = getSectionKeyFromPath(location.pathname);
  const navLinks = helpers.constants.navLinks;
  const indexOnPageLoad = navLinks.findIndex((x) => {
    return x.eventKey === sectionOnPageLoad;
  });
  const camPosOnPageLoad = navLinks[indexOnPageLoad].moveCamTo;

  const [cameraPos, setCameraPos] = useState<Vector3>(camPosOnPageLoad);

  useEffect(() => {
    const activeKey = getSectionKeyFromPath(location.pathname);
    const idx = navLinks.findIndex((x) => x.eventKey === activeKey);
    const moveTo = navLinks[idx].moveCamTo;

    setCameraPos(moveTo);
  }, [navLinks, getSectionKeyFromPath, location.pathname]);

  const cameraParams = {
    pos: cameraPos,
  };

  const cameraFunctions: CameraFunctions = {
    setPos: setCameraPos,
  };

  return [cameraParams, cameraFunctions];
}

export default useCameraParams;
