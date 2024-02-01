import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Cilinder() {
    const cylinderRef = useRef();

    useFrame((state, delta) => {
        cylinderRef.current.rotation.z += delta;
    });

    return (
        <>
            <OrbitControls />
            <ambientLight />
            <mesh ref={cylinderRef} position={[0, 0, -10]}>
                <cylinderGeometry args={[5, 5, 20, 32]} /> 
                <meshStandardMaterial color='yellow' />
            </mesh>
        </>
    );
}

export default Cilinder;
