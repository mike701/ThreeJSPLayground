import './App.css';
import { Canvas} from "@react-three/fiber"
import { Suspense } from 'react'
import Scrolling from './ThreeJSComponents/Scrolling';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Animation from './ThreeJSComponents/Animation';
import AnimationPractice from './ThreeJSComponents/Animation';
import Forum from './ThreeJSComponents/Forum';
function App() {
 
  return (<div style={{height:"100vh"}}>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<div style={{}}>
        <div style={{
          position: "absolute", width: "100vw", top: "8vh", height: "100vh",
          // backgroundImage: "url(pexels-space.jpeg)",
          overflowY: "scroll"
        }}>
          <Canvas style={{ position: "relative", top: "10vh", height: "100vh", width: "100vw", border: "solid 12px white", backgroundColor: "skyblue" }} >
            
            <Suspense fallback={<div>...Loading</div>}>
              <Scrolling style={{zIndex:"3"}}/>
        </Suspense>
            </Canvas>
          </div>
      </div>}></Route>
      <Route path="/animation" element={ 
        <AnimationPractice></AnimationPractice>
      } />
      <Route path="/forum" element={ 
        <Forum></Forum>
      }/>
    </Routes>
    </div>
  );
}

export default App;
