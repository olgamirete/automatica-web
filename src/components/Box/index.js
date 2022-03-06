import { useRef } from "react";

function Box(props) {
  const meshRef = useRef();

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
}

export default Box;
