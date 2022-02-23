import React,{useLayoutEffect,useEffect} from 'react'
import { Mesh, Vector3,TextureLoader  } from 'three'
import * as THREE from 'three'
import {OrbitControls, Sky, useAnimations, useGLTF,useFBX,useNormalTexture} from "@react-three/drei";
import { useFrame,useLoader } from "@react-three/fiber";
import { useRef,useState } from 'react';
import { Suspense} from 'react'
import { Canvas} from '@react-three/fiber'
import { SkinnedMesh } from 'three';
import { MeshStandardMaterial } from 'three';


export default function AnimationPractice() {


  function FirstAnimation({ ...props }) {
    const group =useRef()
    // const {nodes,materials,animations}=useGLTF('/mremireh_o_desbiens(1).gltf')
    const { nodes, materials, animations, scene } = useGLTF('/mremireh_o_desbiens(2).glb')
    console.log(scene, materials, animations)
    const zombieMap = useLoader(TextureLoader, '/mremireh_o_desbiens(2)_img2.png');
    const [normalMap] = useNormalTexture('/mremireh_o_desbiens(2)_img1.png')
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    let dancing= useFBX("/Silly Dancing.fbx")
    let anim = useAnimations(dancing.animations)
    console.log(dancing, anim)
    // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])

    return <group ref={group} {...props} dispose={null}>
      
      <group rotation={[0, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={scene} {...props}/>
        <mesh material={nodes.mremireh_body.materials} geometry={nodes.mremireh_body.geometry} map={zombieMap} normalMap={normalMap}/>
      </group>
        {/* <mesh>
      <group rotation={[0, 0, 0]} scale={[1, 1, 1]}>
          <primitive object={scene} attach='geometry' dispose={null} />
        <meshStandardMaterial material={nodes.mremireh_body.materials}  map={materials[""].map} attach='material'></meshStandardMaterial>
      </group>
        </mesh> */}
      <group rotation={[0, 0, 0]} scale={[1, 1, 1]}>
        {/* <primitive object={nodes.mremireh_shoe} material={nodes.mremireh_shoe.materials} geometry={nodes.mremireh_shoe.geometry}> */}
        <meshStandardMaterial material={nodes.mremireh_shoe.materials} geometry={nodes.mremireh_shoe.geometry} map={zombieMap} normalMap={normalMap}>
          </meshStandardMaterial>
          {/* </primitive> */}
      </group>
        {/* <skinnedMesh material={nodes.mremireh_body.materials} geometry={nodes.mremireh_body.geometry} /> */}
      {/* <mesh material={materials} geometry={nodes.mremireh_body.geometry} /> */}
      </group>
  }
  function AnotherPractice({...props}) {
    const group = useRef()
    let fbx = useFBX('/mremireh_o_desbiens(1).fbx')
    fbx.traverse(c => {
      c.castShadow=true
    })

    const { ref, mixer, names, actions, clips } = useAnimations(fbx.animations)

    // const action = anim.clips[0]
    
    return <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={[1, 1, 1]}>
        <primitive object={fbx} dispose={null} >
        {/* <skinnedMesh material={fbx.children[0].material} geometry={fbx.children[0].geometry} skeleton={fbx.children[0].skeleton}/>  */}
        <skinnedMesh material={fbx.children[1].material} geometry={fbx.children[1].geometry} skeleton={fbx.children[1].skeleton}/> 
        <skinnedMesh material={fbx.children[2].material} geometry={fbx.children[2].geometry} skeleton={fbx.children[2].skeleton}/>
          </primitive>
    </group>
    </group>
  }
  return (
    <>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-40, 20, 10], near: 0.1, far: 1000 }}>
      <ambientLight intensity={0.03} />
        <fog attach="fog" args={['#ff5020', 5, 18]} />
        <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
        <Sky scale={1000} sunPosition={[2, 0.4, 19]} />
        <Suspense fallback={null}>
          <OrbitControls></OrbitControls>
          <FirstAnimation scale={[1,1,1]} position={[0,0,0]}></FirstAnimation>
          {/* <AnotherPractice></AnotherPractice> */}
        </Suspense>
        </Canvas>
    </>

  )
}


useGLTF.preload('/mremireh_o_desbiens(1).gltf')
useFBX.preload('/mremireh_o_desbiens(1).fbx')