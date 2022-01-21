import './App.css';
import { Canvas,useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import { TorusKnot} from "@react-three/drei";
import { Physics,useBox,usePlane,  } from "@react-three/cannon";
import { useRef, useState } from 'react'
// import DatGui from 'react-dat-gui';
// import Three from './threedstuff'


// const gui=new DataTransfer.GUI();


function Box(props) {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const mesh = useRef();
  useFrame((state, delta) => ((mesh.current.rotation.x += 0.01)&& (mesh.current.rotation.y += 0.01)&& (mesh.current.rotation.x+=0.01)))
  return (
    <mesh onClick={() => {
      api.velocity.set(0, 2, 0);
      click(!clicked);
    }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event)=>hover(false)}
    ref = { mesh} position = { [0, 10, 0]} >
    <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color={hovered? "hotpink":"orange"} />
  </mesh>)
}


function Sphere(props) {
  const [ref,api] = useBox(() => ({ mass: 1, position: [0, 0, 0] }));
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  return (
    <mesh onClick={() => {
      api.velocity.set(-4, 2, -10);
      click(!clicked);

    }}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event)=>hover(false)}
    ref={ref} position={[20, 20, 10]}>
    <sphereBufferGeometry args={[0.7, 30, 30]} attach='geometry'/>
    <meshLambertMaterial attach='material' color={hovered ? "hotpink" : "orange"} />
      
  </mesh>)
}

function Plane() {
  const [ref]=usePlane(()=>({rotation:[-Math.PI/2,0,0]}));
  return (
    <mesh ref={ref} position={[0,0,0]} rotation={[-Math.PI/2,0,0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]}/>
      <meshLambertMaterial attach='material' color="lightblue"/>
  </mesh>)
}

function App() {
  // const [ref, camera] = useResource();
  return (
    <Canvas style={{ height: "100vh",backgroundColor:"black"}}>
      <PerspectiveCamera
        // ref={ref}
        aspect={window.innerHeight / window.innerWidth}
        radius={(window.innerHeight+ window.innerWidth) / 4}
        fov={180}
        position={[-5,-5, -10]}
        onUpdate={self => self.updateProjectionMatrix()}
      >
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10,15,10]} angle={1.0}
      />
      <Physics>
        <Box />
          <Sphere />
          <TorusKnot><meshBasicMaterial attach="material" color="hotpink" /></TorusKnot>
        <Plane />
      </Physics>

      </PerspectiveCamera>
      {/* <DatGui data={<spotLight/>}/> */}
   </Canvas>

  );
}

export default App;
