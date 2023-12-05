import React from 'react'
import { Box } from '@react-three/drei'

const Floor = () => {
  return (
    <group>
    <Box receiveShadow={true} args={[10,.5,.5]} position={[0,-5,0]}>
      <meshLambertMaterial color="brown"/>
    </Box>
  </group>
  )
}

export default Floor