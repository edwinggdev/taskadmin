import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import DashOr from './pages/DashOr'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dashboard></Dashboard> */}
      <DashOr></DashOr>
    </>
  )
}

export default App
