import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateBasics from './components/StateBasics'
import Example from './components/Example'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import DataForm from './components/DataForm'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import DataFetch from './components/DataFetch'
import DataCard from './components/DataCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<StateBasics/>*/}
      {/*<Example/>*/}
      {/*<Counter/>*/}
      {/*<TextInput/>*/}
      {/*<DataForm/>*/}
       <NavBar/>
      <Routes>
        <Route path='/' element={<StateBasics/>}/>
        <Route path='/e' element={<Example/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/t' element={<TextInput/>}/>
        <Route path='/d' element={<DataForm/>}/>
        <Route path='/f' element={<DataFetch/>}/>
        <Route path='/a' element={<DataCard/>}/>
      </Routes>
    </>
  )
}

export default App
