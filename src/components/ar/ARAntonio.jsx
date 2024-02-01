import React, { useRef } from 'react';
import { useLoader, Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ARButton, XR } from "@react-three/xr";
import { DirectionalLight } from 'three';
import Dashboard from '../Dashboard';

function ARAntonio() {
return (
    <>
    <Dashboard />
    <ARButton />
    <Canvas>
        <XR>
        <Scene />
        </XR>
    </Canvas>
    </>
);
}

function Scene() {
const gltf = useLoader(GLTFLoader, '/model.gltf');
const druida = useRef();

useFrame((state, delta) => {
    druida.current.rotation.y += delta;
});

return (
    <>
    <directionalLight intensity={0.7} position={[0, -5, 10]} />
      {/* Asignamos el atributo ref al objeto del modelo */}
    <primitive object={gltf.scene} ref={druida} position={[0, 0, 2]} />
    </>
);
}

export default ARAntonio;
