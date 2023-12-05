import React, {useState} from 'react'
import {Header,Carousel,QuestionItem} from "./components"
import "./Solution1.css"

const Solution1 = ({setTheme,setSolution}) => {
  const [data,setData]=useState([
    {id:1,question:"What is FrontEnd Mentor, and how will it help me?",answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",giph:"",isActive:false},
    {id:2,question:"Is FrontEnd Mentor free?",answer:"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",giph:"",isActive:false},
    {id:3,question:"Can I use FrontEnd Mentor projects in my portfolio",answer:" Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",giph:"",isActive:false},
    {id:4,question:"How can I get help if I'm stuck on a Frontend Mentor challenge?",answer:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",giph:"",isActive:false},
  ])


  const handleQuestion = (question)=>{
    setData((data)=>data.map(d=>d.id == question.id ? { ...d,isActive:true} : {...d,isActive:false}))
  }
  return (
    <div className="solution-1-parent view-container">
      <header className="hero">
        {/* <input onClick={()=>{
          setTheme((theme)=>theme == "default" ? "secondary" : "default")
        }} type="checkbox" /> */}
      </header>
<section className="faq-card">
  <div className="faq-header">
    <Header/>
    <Carousel/>
  </div>
  <ul className="questions-list">
    {data.map(question=>(
      <QuestionItem key={question.id} question={question} handleQuestion={handleQuestion}/>
    ))}
  </ul>
  <button onClick={()=>setSolution((solution)=>solution=!solution)}>See 3d Solution</button>
</section>
    </div>
  )
}

export default Solution1