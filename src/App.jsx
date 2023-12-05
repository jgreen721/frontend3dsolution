import { useState } from 'react'
import {Solution1,Solution2} from "./views"
import './App.css'

const Solutions={
  solution1:0,
  solution2:1
}

function App() {
  const [solution, setSolution] = useState(Solutions["solution2"])
  const [theme,setTheme] = useState("default")

  return (
    <div
    data-theme={theme}
      // onClick={()=>{
      //   console.log("Fx fired!")
      //   setSolution((solution)=>solution = !solution)
      // }} 
      className="app">
      {!solution ? <Solution1 setTheme={setTheme} setSolution={setSolution}/> : <Solution2 setSolution={setSolution}/>}
    </div>
  )
}

export default App
