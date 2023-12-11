import React, {useEffect, useState} from 'react'
import { useGLTF, useAnimations, useScroll,useProgress,Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
// import gsap from "gsap"

const Fella = () => {
    const img = useGLTF("./nerdfellawithanimations.glb")
    const { actions, mixer } = useAnimations(img.animations, img.scene);
  
    const [pos,setPOS] = useState([-.3,-1,3.5])

    useFrame((state,delta)=>{
        mixer.update(delta)

    })

    useEffect(() => {
       
    
        img.animations.forEach((clip) => {
            if(clip.name == "Waving"){
                const action = mixer.clipAction(clip);
                action.play();
            }
        })
    },[]);




  return (
    <group scale={.1} rotation={[0,Math.PI * 1.05,0]} position={pos}>
        <primitive object={img.scene}/>
    </group>
  ) 
}

export default Fella