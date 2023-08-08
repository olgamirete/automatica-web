import { useEffect, useState } from "react";

export interface PointerCoords {
  x: number;
  y: number;
}

const usePointerCoords = (): PointerCoords => {
  const [pointerCoords, setPointerCoords] = useState<PointerCoords>({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const updatePointerCoords = (e: PointerEvent): void => {
      setPointerCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", updatePointerCoords);
    return () => window.removeEventListener("pointermove", updatePointerCoords);
  }, []);

  return pointerCoords;
};

export default usePointerCoords;
