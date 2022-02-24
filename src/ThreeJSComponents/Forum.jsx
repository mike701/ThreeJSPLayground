import React from 'react'
import { Mesh, Vector3,TextureLoader, PlaneBufferGeometry  } from 'three'
// import * as THREE from 'three'
import { Physics } from '@react-three/cannon';
import {OrbitControls, PerspectiveCamera, Sky} from "@react-three/drei";
import { Suspense} from 'react'
import { Canvas} from '@react-three/fiber'
import {usePlane} from "@react-three/cannon";

export default function Forum() {

  function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: props.rotation, position: props.position}));
    return (
      <mesh ref={ref} position={props.position} rotation={props.rotation}>
        <planeBufferGeometry args={props.args} attach='geometry' />
        <meshStandardMaterial attach='material' color="bisque" />
      </mesh>)
  }

  function Scene() {
    return (
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-40, 20, 10], near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.7} />
        <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        <Sky scale={1000} sunPosition={[2, 0.4, 19]} />
        <Suspense fallback={null}>
        <PerspectiveCamera
          aspect={window.innerHeight / window.innerWidth}
          radius={(window.innerHeight + window.innerWidth) / 4}
          fov={70}
          position={[5, -5, -40]}
          onUpdate={self => self.updateProjectionMatrix()}>
            <OrbitControls></OrbitControls>
            <Physics>
              <Plane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} args={[2000, 300, 1000]}/>
            </Physics>
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
    )
  }
  return (
    <>
      <Scene />
    </>
  );
}
