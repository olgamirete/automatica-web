import * as THREE from 'three';
import { useRef, useMemo } from "react";
import { useFrame } from '@react-three/fiber';

// With help from: https://codesandbox.io/s/eager-noyce-6rvwr?from-embed=&file=/src/index.js:753-776

var getHeight = function (x, y, t) {
    // const offsetX = 2000;
    // const offsetY = -100;

    // x = x + 1.0*w;
    // y = y + 0.5*h;
    // x += offsetValue;
    // y += offsetValue;

    // x += Math.random()*100;
    // y += Math.random()*100;
    const scale = 10;
    x = x * scale;
    y = y * scale;

    const r = Math.sqrt(x * x + y * y) / 3;
    // const r = (x+y)/2;
    const angle = Math.atan2(y, x);
    t = t / 2
    // return Math.sin((r+t)/(10*Math.PI))*5000*(1/r);
    // return (Math.sin((r+t)/(5*2*Math.PI))+0)*5000*(1/r));
    // return Math.sin((r+t)/(5*2*Math.PI))*500*Math.sqrt(1/(r+1));
    // return Math.sin((x+t)/(5*2*Math.PI))*50 + Math.sin((y-t)/(5*2*Math.PI))*50;

    // return Math.sin((r+t)/(5*2*Math.PI))*50*Math.sin(angle*5+(t+r/1.5)/100); //Fav

    return Math.sin((r + t) / (5 * 2 * Math.PI)) * 50 * Math.sin(angle * 5 + (t + r / 1.5) / 100) / scale; //Fav
}

let auxPositions = [], colors = [];

const angDivisions = 359;
const maxRadius = 150;

for (let i = 0; i <= angDivisions; i++) {
    for (let j = 0; j <= maxRadius; j++) {
        // let x = i * step * (100+(Math.random()-.5)*2*1)/100;
        // let z = j * step * (100+(Math.random()-.5)*2*1)/100;
        let x = Math.cos(i*(2*Math.PI/180))*j;
        let z = Math.sin(i*(2*Math.PI/180))*j;
        let y = getHeight(x, z, 0);

        var newColor = new THREE.Color(0xd6b80e);
        newColor = new THREE.Color(0xaaaaaa);

        if(Math.random()*150 > j || j < 70){
            auxPositions.push(x, y, z);
            colors.push(newColor.r, newColor.g, newColor.b);
        }
    }
}

auxPositions = new Float32Array(auxPositions);
colors = new Float32Array(colors);

function DotField(props) {
    const pointsRef = useRef(null);

    // const step = 1.5;
    // const n = 250;
    // const [positions, setPositions] = useState(auxPositions);

    const startTime = useMemo(() => (new Date()).getTime() * .001, []);

    // useEffect(() => {
    //     if (pointsRef.current) {
    //         pointsRef.current.geometry.attributes.position.needsUpdate = true;
    //     }
    // }, []);

    // useFrame(() => {
    //     const currentTime = (new Date()).getTime() * .001;
    //     const elapsedTime = currentTime - startTime;
    //     // console.log(elapsedTime);
        
    //     const dotCount = positions.length / 3;

    //     setPositions((oldPos) => {
    //         let newPos = oldPos;
    //         for (let i = 0; i < dotCount; i++) {
    //             const x = oldPos[i * 3 + 0];
    //             const z = oldPos[i * 3 + 2];
                
    //             // And now we update the missing coordinate
    //             newPos[i * 3 + 1] = getHeight(x, z, -elapsedTime * 100);   
    //         }
    //         return newPos;
    //     });
    // });

    useFrame(() => {
        if (pointsRef.current) {
            
            const currentTime = (new Date()).getTime() * .001;
            const elapsedTime = currentTime - startTime;
            // console.log(elapsedTime);
            
            let points = pointsRef.current;
            points.geometry.attributes.position.needsUpdate = true;
            let dots = points.geometry.attributes.position.array;
            const dotCount = dots.length / 3;
            
            for (let i = 0; i < dotCount; i++) {

                const x = dots[i * 3 + 0];
                // y = dots[i*3+1];
                const z = dots[i * 3 + 2];

                // And now we update the missing coordinate
                dots[i * 3 + 1] = getHeight(x, z, -elapsedTime * 100);
                // dots[i * 3 + 1] = elapsedTime*100;
                
            }
        }
    });


    // const [positions, colors] = useMemo(() => {

    //     let positions = [], colors = [];

    //     for (let i = -n; i <= n; i++) {
    //         for (let j = -n; j <= n; j++) {
    //             let x = i * step;
    //             let z = j * step;
    //             let y = getHeight(x, z, 0);

    //             var newColor = new THREE.Color(0xd6b80e);
    //             newColor = new THREE.Color(0xaaaaaa);

    //             positions.push(x, y, z);
    //             colors.push(newColor.r, newColor.g, newColor.b);
    //         }
    //     }
        
    //     return [new Float32Array(positions), new Float32Array(colors)];

    // }, [step, n]);

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute attachObject={["attributes", "position"]}
                    count={colors.length / 3}
                    array={auxPositions} itemSize={3} />
                <bufferAttribute attachObject={["attributes", "color"]}
                    count={colors.length / 3}
                    array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial attach="material" vertexColors size={.2} sizeAttenuation={true} />
        </points>
    )
}

export default DotField;