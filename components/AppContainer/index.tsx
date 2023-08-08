"use client";
import { ReactNode } from "react";
import BackgroundJS from "../BackgroundJS";
import NavBarAutomatica from "../ui/NavBarAutomatica";
import useCameraParams from "@/hooks/useCameraParams";
import FCi18n from "@/i18n/types/FCi18n";

const AppContainer: FCi18n<{ children: ReactNode }> = ({ lang, children }) => {
    const [cameraParams, cameraFunctions] = useCameraParams();
    return (
        <div className="vh-100 overflow-auto">
            <BackgroundJS cameraParams={cameraParams} />
            <NavBarAutomatica cameraFunctions={cameraFunctions} />
            {children}
        </div>
    );
};

export default AppContainer;
