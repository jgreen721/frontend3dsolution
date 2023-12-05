import React, {useRef, useLayoutEffect} from 'react'
import MainCube from '../MainCube/MainCube'
import { useFrame } from '@react-three/fiber';
import gsap from "gsap"
import { useScroll } from '@react-three/drei';

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

        tl.current.to(cubeRef.current.position,{x:2},.5)
        tl.current.to(cubeRef.current.rotation,{y:-1.5},.5)
        tl.current.to(cubeRef.current.position,{x:-2},1.5)
        tl.current.to(cubeRef.current.rotation,{y:1.5},1.5)
        tl.current.to(cubeRef.current.position,{x:2},2.5)
        tl.current.to(cubeRef.current.rotation,{y:2.5},2.5)
        tl.current.to(cubeRef.current.position,{x:-2},3.5)
        tl.current.to(cubeRef.current.rotation,{x:-1.75},3.5)
        tl.current.to(cubeRef.current.rotation,{y:-3.25},3.5)
        // tl.current.to(cubeRef.current.rotation,{y:0},3.5)
        // tl.current.to(cubeRef.current.rotation,{x:1},4)
    })
  return (
    <>
    <group ref={cubeRef}>
    <MainCube/>
    </group>
    </>
  )
}

export default Experience