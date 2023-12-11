import React, {useEffect, useState} from 'react'
import { Box } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'

const MainCube = () => {
    const img = useGLTF("./faqcube3.glb");
    const [scale,setScale] = useState(1)
    const [pos,setPos] = useState([0,-3.5,1])

    useEffect(()=>{
      console.log(window)
      setScales();

    },[])

    const setScales = ()=>{
      if(window.innerWidth < 760){
        setScale((scale)=>scale = .65);
        setPos(pos=>pos = [0,-2,2])
        console.log('change scale')
      }
    }

    onresize= ()=>{
      setScales()
    }
  return (
    <group position={pos} rotation={[0,-Math.PI,0]}>
        <Float>
       <primitive scale={scale} object={img.scene}/>
       </Float>
    </group>
  ) 
}

export default MainCube