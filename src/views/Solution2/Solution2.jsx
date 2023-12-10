import React, { Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import {Experience,Overlays} from "./components"
import {ScrollControls,useProgress} from "@react-three/drei"
import "./Solution2.css"


const LoadingMsg = ()=>{


  return(
    <Text color="red">Loading Assets</Text>
  )
}


const Solution2 = ({setSolution}) => {
  const progress = useProgress();


  return  (
    <div className="canvas-container">
      <div className="dev-info-modal">
        <div className="dev-info-content">
      <button className="solution-btn"  onClick={()=>setSolution((solution)=>solution = !solution)}>Solution 1</button>
      <h2 style={{color:"white",marginTop:'1.25rem'}}>(SCROLL To animate Cube)</h2>
        </div>
      </div>
      <Canvas style={{height:'100vh'}}  shadows>
        {/* <Suspense fallback={()=><h1>Loading</h1>}> */}
        <color attach="background" args={["black"]}/>
          <ambientLight/>
          <directionalLight position={[-.75,1,0]} castShadow={true}/>
          <directionalLight position={[0,0,2]}/>
          <ScrollControls pages={5}>
            <Suspense fallback={LoadingMsg}>
                <Experience/>
            </Suspense>
    <Overlays/>
    </ScrollControls>
    {/* <Floor/> */}
    {/* </Suspense> */}
      </Canvas>
    </div>
  ) 
}

export default Solution2