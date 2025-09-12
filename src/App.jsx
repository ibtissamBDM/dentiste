import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DentistWebsite from './DentistWebsite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
      <DentistWebsite/>
    </div>
  )
}

export default App
