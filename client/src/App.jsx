import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'
import { Route, Routes } from 'react-router-dom'
import FindPattern from './component/FindPattern'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/pattern/find' element={<FindPattern/>} />
      </Routes>
    </div>
  )
}

export default App
