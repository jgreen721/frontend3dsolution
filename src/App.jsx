import { useState } from 'react'
import {Solution1,Solution2} from "./views"
import './App.css'

const Solutions={
  solution1:0,
  solution2:1
}

function App() {
  const [solution, setSolution] = useState(Solutions["solution1"])

  return (
    <div
      // onClick={()=>{
      //   console.log("Fx fired!")
      //   setSolution((solution)=>solution = !solution)
      // }} 
      className="app">
      {!solution ? <Solution1 setSolution={setSolution}/> : <Solution2 setSolution={setSolution}/>}
    </div>
  )
}

export default App
