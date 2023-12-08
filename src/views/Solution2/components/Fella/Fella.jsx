import React, {useEffect, useState} from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
// import gsap from "gsap"

const Fella = () => {
    const img = useGLTF("./nerdfellawithanimations.glb")
    const { actions, mixer } = useAnimations(img.animations, img.scene);
    const scroll = useScroll();
    const [showRunning,setShowRunning] = useState(false)
    const [showWaving,setShowWaving] = useState(false)
    const [pos,setPOS] = useState([-.3,-1,3.5])
    // const tl = useRef();

    useFrame((state,delta)=>{
        mixer.update(delta)

        // console.log(scroll.offset)
        // if(scroll.offset < .3){
        //     setShowRunning(true)
        //     setShowWaving(false)
        // }
        // else{
        //     setShowRunning(false)
        //     setShowWaving(true)
        // }
    })

    useEffect(() => {
        // actions.forEach((action) => {
        //   action.play();
        // });
        // setActiveAction(actions);
        // setActiveMixer(mixer);
    
        img.animations.forEach((clip) => {
            console.log(clip)
            // if(clip.name == "Breathing"){
            // const action = mixer.clipAction(clip);
            // action.play();
            // }
            // if(showRunning){
            // if(clip.name == "Running"){
            //     const action = mixer.clipAction(clip);
            //     action.play();
            // }
        
        // if(showWaving){
            if(clip.name == "Waving"){
                const action = mixer.clipAction(clip);
                action.play();
            }
        // }
        })
    },[showRunning,showWaving]);




  return (
    <group scale={.1} rotation={[0,Math.PI * 1.05,0]} position={pos}>
        <primitive object={img.scene}/>
    </group>
  )
}

export default Fella