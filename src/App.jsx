import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#fff")

  return (
    <>
    <div className="home" style={{backgroundColor: color}}></div>
    <div className="bg_changer_container">
      <div className="color_item" onClick={() => setColor("#ff5151")} style={{backgroundColor: "#ff5151"}}></div>
      <div className="color_item" onClick={() => setColor("#51c2ff")} style={{backgroundColor: "#51c2ff"}}></div>
      <div className="color_item" onClick={() => setColor("#57ff51")} style={{backgroundColor: "#57ff51"}}></div>
      <div className="color_item" onClick={() => setColor("#ffb751")} style={{backgroundColor: "#ffb751"}}></div>
      <div className="color_item" onClick={() => setColor("#c498ff")} style={{backgroundColor: "#c498ff"}}></div>
      <div className="color_item" onClick={() => setColor("#ff86e5")} style={{backgroundColor: "#ff86e5"}}></div>
    </div>
    </>
  )
}

export default App
