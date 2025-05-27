import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import DataTable from './components/DataTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome To REACT</h1>
      {/* <First/> */}
      { /*<Reg/> */}
      <DataTable/>
    </>
  )
}

export default App
