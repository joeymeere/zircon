import React, { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";

const AnimateFrame = (props: any) => {
    useFrame(({ clock }) => {
        props.meshRef.current.rotation.x += Math.PI / 180;
        props.meshRef.current.rotation.y += Math.PI / 180;
        props.meshRef.current.rotation.z += Math.PI / 180;
    });

    return null;
};

const Object = () => {
    const myMesh = useRef(null);

    return (
        <Canvas
            camera={{ fov: 50, near: 0.1, far: 500, position: [0, 0, 5] }}
        >
            <mesh ref={myMesh}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <sphereGeometry />
                <meshStandardMaterial wireframe color={"#E40DB5"} />
            </mesh>
            <AnimateFrame meshRef={myMesh} />
        </Canvas>
    );
};

export default Object;