"use client";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
import useHelpers from "./useHelpers";
import useNavLinks from "./useNavLinks";
import { defaultLocale } from "@/i18n/config";
import { usePathname } from "next/navigation";

export interface CameraParams {
    pos: Vector3;
}
export type CameraFunctions = {
    setPos: React.Dispatch<React.SetStateAction<Vector3>>;
};

export type UseCameraParamsReturn = [CameraParams, CameraFunctions];

function useCameraParams(): UseCameraParamsReturn {
    const helpers = useHelpers();
    const pathname = usePathname();

    const getSectionKeyFromPath = helpers.functions.getSectionKeyFromPath;
    const sectionOnPageLoad = getSectionKeyFromPath(pathname);
    // It's ok to use defaultLocale here because we don't use any translations.
    const navLinks = useNavLinks(defaultLocale);
    const indexOnPageLoad = navLinks.findIndex((x) => {
        return x.eventKey === sectionOnPageLoad;
    });
    const camPosOnPageLoad = navLinks[indexOnPageLoad].moveCamTo;

    const [cameraPos, setCameraPos] = useState<Vector3>(camPosOnPageLoad);

    useEffect(() => {
        const activeKey = getSectionKeyFromPath(pathname);
        const idx = navLinks.findIndex((x) => x.eventKey === activeKey);
        const moveTo = navLinks[idx].moveCamTo;

        setCameraPos(moveTo);
    }, [navLinks, getSectionKeyFromPath, pathname]);

    const cameraParams = {
        pos: cameraPos,
    };

    const cameraFunctions: CameraFunctions = {
        setPos: setCameraPos,
    };

    return [cameraParams, cameraFunctions];
}

export default useCameraParams;
