import { useState } from 'react'
import './App.css'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='w-screen h-screen flex justify-center items-center bg-white'> 
      <Register/>
    </main>
    </>
  )
}

export default App
