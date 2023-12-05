import React from 'react'
import { Box } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'

const MainCube = () => {
    const img = useGLTF("./faqcube.glb");
  return (
    <group position={[0,-3.5,1]} rotation={[0,-Math.PI,0]}>
        <Float>
       <primitive object={img.scene}/>
       </Float>
    </group>
  )
}

export default MainCube