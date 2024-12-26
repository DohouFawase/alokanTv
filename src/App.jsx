import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from "./routes/routes"
import Preload from './components/content/load/loadPage'
// Load
function App() {
   const [Loading, setLoading] = useState(true)


  return (
    <>
    {
      
      Loading ? <Preload/>:<Root />
    }
    </>
  )
}

export default App
