import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>React + Appi data</h3>

    <Friends></Friends>
      
    
    </>
  )
}

export default App
