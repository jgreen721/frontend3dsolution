import React, {useRef,useEffect, useState,Suspense} from 'react'
import MainCube from '../MainCube/MainCube'
import Fella from '../Fella/Fella'
import { useFrame } from '@react-three/fiber';
import gsap from "gsap"
import {  useScroll, Text, useProgress } from '@react-three/drei';



const LoadingMsg = ()=>{
        const progress = useProgress();
  return(
    <>
    <Text fontSize={.3} color="pink">Loading Assets {progress.progress}%</Text>
    <Text position={[0,-1,0]} fontSize={.15}>(Please Be Patient! 🙂 )</Text>
    </>
  )
}

const Experience = () => {
    const cubeRef = useRef();
    const tl = gsap;
    const scroll = useScroll();
    const [loading,setLoading] = useState(true)
   


    useFrame((state,delta)=>{
        tl.current.seek(tl.current.duration() * scroll.offset)
        // console.log(tl.current.duration() * scroll.offset)
        if(cubeRef?.current && loading){
          // console.log('toggle Loading to false!')
          setLoading(false)
        }
    })


    useEffect(()=>{
      tl.current = gsap.timeline({duration:4})
     
if(!loading){
if(innerWidth > 750){
        tl.current.to(cubeRef.current.position,{x:2,z:1.5},.5)
        tl.current.to(cubeRef.current.rotation,{y:-1.5},.5)
        tl.current.to(cubeRef.current.position,{x:-1.75},1.5)
        tl.current.to(cubeRef.current.rotation,{y:1.75},1.5)
        tl.current.to(cubeRef.current.position,{x:1,z:2.75},2.5)
        tl.current.to(cubeRef.current.rotation,{y:2.75},2.5)
        tl.current.to(cubeRef.current.position,{x:-1,z:2,y:1},3.5)
        tl.current.to(cubeRef.current.rotation,{x:-1.75},3.5)
        tl.current.to(cubeRef.current.rotation,{y:-3.25},3.5)
        // tl.current.to(cubeRef.current.rotation,{y:0},3.5)
        // tl.current.to(cubeRef.current.rotation,{x:1},4)
}
else{
  // console.log("no changes!!")
  tl.current.to(cubeRef.current.position,{x:1.9,z:1.65},.5)
  tl.current.to(cubeRef.current.rotation,{y:-1.25},.5)
   tl.current.to(cubeRef.current.position,{x:-2,z:2.7,y:-.5},1.5)
  tl.current.to(cubeRef.current.rotation,{y:1.8},1.5)
  tl.current.to(cubeRef.current.position,{x:-.45,z:4.15},2.5)
  tl.current.to(cubeRef.current.rotation,{y:2.9},2.5)
   tl.current.to(cubeRef.current.position,{x:-.45,y:1.7,z:3},3.5)
  tl.current.to(cubeRef.current.rotation,{x:-1.55},3.5)
  // tl.current.to(cubeRef.current.rotation,{y:-3.25},3.5)
}
}
      
    },[loading])



  return (
    <Suspense fallback={<LoadingMsg/>}>

    <>
    <group ref={cubeRef}>
    <MainCube/>
    </group>
    <group>
      <Fella/>
    </group>
    </>
    </Suspense>
  ) 
}

export default Experience