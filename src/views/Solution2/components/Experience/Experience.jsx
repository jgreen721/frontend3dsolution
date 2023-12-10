import React, {useRef,useEffect, useLayoutEffect,Suspense} from 'react'
import MainCube from '../MainCube/MainCube'
import Fella from '../Fella/Fella'
import { useFrame } from '@react-three/fiber';
import gsap from "gsap"
import {  useScroll } from '@react-three/drei';

const Experience = () => {
    const cubeRef = useRef();
    const tl = gsap;
    const scroll = useScroll()
   


    useFrame((state,delta)=>{
        tl.current.seek(tl.current.duration() * scroll.offset)
        // console.log(tl.current.duration() * scroll.offset)
    })


    useLayoutEffect(()=>{
      tl.current = gsap.timeline({duration:4})
if(cubeRef.current){
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
      
    },[])



  return (
    <>

    <group ref={cubeRef}>
    <MainCube/>
    </group>
    <group>
      <Fella/>
    </group>
    </>
  ) 
}

export default Experience