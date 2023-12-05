import React, {useRef, useEffect} from 'react'
import {Canvas} from "@react-three/fiber"
import {Box} from "@react-three/drei"
import {Experience,Overlays} from "./components"
import {ScrollControls} from "@react-three/drei"
import "./Solution2.css"

const Solution2 = ({setSolution}) => {
  const dLight = useRef()

  useEffect(()=>{
  console.log(dLight.current)
 
  },[dLight.current])
  return (
    <div className="canvas-container">
      <div className="dev-info-modal">
        <div className="dev-info-content">
      <button  onClick={()=>setSolution((solution)=>solution = !solution)}>Solution 1</button>
        </div>
      </div>
      <Canvas style={{height:'100vh'}}  shadows>
        <color attach="background" args={["black"]}/>
          <ambientLight/>
          <directionalLight ref={dLight} position={[-.75,1,0]} castShadow={true}/>
          <directionalLight position={[0,0,2]}/>
          <ScrollControls pages={5}>
    <Experience/>
    <Overlays/>
    </ScrollControls>
    {/* <Floor/> */}
      </Canvas>
    </div>
  )
}

export default Solution2