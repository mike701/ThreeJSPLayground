import React from 'react';
import * as THREE from 'three'
// import { Physics } from '@react-three/cannon';
import { Stars, PerspectiveCamera,useNormalTexture, OrbitControls, ScrollControls,useScroll,Sky, useGLTF, useAnimations, useFBX} from "@react-three/drei";
import { useFrame,useLoader } from "@react-three/fiber";
import { useRef,useState } from 'react';
import { Physics, useBox,usePlane  } from "@react-three/cannon";
import { Camera, TextureLoader } from 'three';
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Canvas} from '@react-three/fiber'


export default function Scrolling() {

  // function LoadMoudle() {
  //   const loader= 
  // }

  function CreateBoxes(props) {
    const { num, offsets } = props;

    let newer = []
    offsets.map((o) => { newer.push(o + 10) })

    let n = num;

    if (num == 1) {
      return Box(offsets)
    }
    
  
    return (<>
      <Box pos={newer}></Box>
      {CreateBoxes({ num: n - 1, offsets: newer })}
    </>)
  }

  function Box(props) {
    const meMap=useLoader(TextureLoader,'Me_graySuit.jpeg');
    const [api] = useBox(() => ({ mass: 1, position: props.pos}));
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    const mesh = useRef();
    const [normalMap] = useNormalTexture(
      0, // index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
      // second argument is texture attributes
      {
        offset: [0, 0],
        repeat: [1.5, 1.5],
        anisotropy: 8
      }
    )
    // useFrame((state, delta) => ((mesh.current.rotation.y += 0.01)))//&& (mesh.current.rotation.y += 0.01)&& (mesh.current.rotation.x+=0.01)))
    return (
      <mesh scale={clicked? 1:2} rotateY={clicked? 2:0} onClick={() => {
        click(!clicked); 
      }}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event)=>hover(false)}
      ref = { mesh} position = {props.pos} >
      <boxBufferGeometry attach='geometry' args={[9,9,9]}/>
      <meshStandardMaterial normalMap={normalMap} map={meMap} attach='material' color={hovered? "orange":"white"} />
    </mesh>)
  }
  
  
  function Sphere(props) {
    const [ref,api] = useBox(() => ({ mass: 1, position: [0, 100, 10] }));
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    const [normalMap,url] = useNormalTexture(
      2, // index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
      // second argument is texture attributes
      {
        offset: [0, 0],
        repeat: [1.5, 1.5],
        anisotropy: 8
      }
    )
    return (
      <mesh onClick={() => {
        api.velocity.set(0, 10, 0);
        click(!clicked);
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event)=>hover(false)}
      ref={ref} position={[0, 0, 30]}>
      <sphereBufferGeometry args={[20, 20, 20]} attach='geometry'/>
      <meshStandardMaterial normalMap={ normalMap} attach='material' color={hovered ? "yellow" : "orange"} />
        
    </mesh>)
  }
  
  function Plane() {
    const [ref]=usePlane(()=>({rotation:[-Math.PI/2,0,0]}));
    return (
      <mesh ref={ref} position={[0,0,0]} rotation={[0,-Math.PI/2,0]}>
        <planeBufferGeometry args={[2000,300,1000]} attach='geometry'  />
        <meshStandardMaterial attach='material' color="bisque"/>
    </mesh>)
  }


  function Scene() {
    return (
      <>
        <PerspectiveCamera
          aspect={window.innerHeight / window.innerWidth}
          radius={(window.innerHeight + window.innerWidth) / 4}
          fov={70}
          position={[5, -5, -40]}
          onUpdate={self => self.updateProjectionMatrix()}>
          <OrbitControls />
        <ambientLight
          intensity={0.5} />
        <spotLight
          position={[10,15,10]} angle={-10}
        />
      <Physics>
            <Sphere />
            <CreateBoxes num={3} offsets={[10,5,10]}></CreateBoxes>
            <Plane/>
          </Physics>
          </PerspectiveCamera>
        </>
    )
  }
  return (
    <>
      <Scene />
    </>
  );
}
