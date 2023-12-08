import React, {useState} from 'react'
import "./Overlays.css"
import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const OverlaySection = ({opacity,className,children})=>{


    return (
        <div style={{opacity:`${opacity}`}} className={`overlay-section ${className}`}>
            {children}
        </div>
    )
}

const Overlays = () => {
    const [opacityOne,setOpacityOne] = useState(1)
    const [opacityTwo,setOpacityTwo] = useState(1)
    const [opacityThree,setOpacityThree] = useState(1)
    const [opacityFour,setOpacityFour] = useState(1)
    const scroll = useScroll();


    useFrame(()=>{
        setOpacityOne(scroll.range(0, 1 / 5));
        setOpacityTwo(scroll.curve(2 / 5, 1 / 5));
        setOpacityThree(scroll.curve(3 / 5, 1 / 5));   
        setOpacityFour(scroll.range(4 / 5, 1 / 5));   
        // console.log("Range",scroll.range(0,1/5))
        // console.log("Range",scroll.range(1/5,1/5))
        // console.log("Range",scroll.curve(2/5,1/5))
        
    })
  return (
    <Scroll html style={{width:'100%'}}>
         <OverlaySection className="start">
            {/* <h2 className="question-h2">
            What is Frontend Mentor, and how will it help me?

            </h2> */}
        </OverlaySection>
        <OverlaySection opacity={opacityOne} className="start">
            <h2 className="question-h2">
            What is Frontend Mentor, and how will it help me?

            </h2>
        </OverlaySection>
        <OverlaySection opacity={opacityTwo} className="end">
            <h2 className="question-h2">
            Is Frontend Mentor free?
            </h2>
        </OverlaySection>
        <OverlaySection opacity={opacityThree} className="start">
            <h2 className="question-h2">
            Can I use Frontend Mentor projects in my portfolio?

            </h2>
        </OverlaySection>
        <OverlaySection opacity={opacityFour} className="end">
            <h2 className="question-h2">
            How can I get help if I'm stuck on a Frontend Mentor challenge?

            </h2>
        </OverlaySection>
    </Scroll>
  )
}

export default Overlays