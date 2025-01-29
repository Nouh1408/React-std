import { useState } from 'react'
import './App.css'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'


function App() {
  const [count, setCount] = useState(0)
  function Increment() {
    setCount(count + 1)
  }
  function Decrement() {
    setCount(count - 1)
  }

  return (
    <>

      <div className='d-flex justify-content-center bg-danger'>
        <h1>Count: {count}</h1>
      </div>
      <div className='d-flex justify-content-center bg-info'>

        <button className='btn btn-success' onClick={Decrement}>-</button>
        <h3>Count</h3>
        <button className='btn btn-danger' onClick={Increment}>+</button>
      </div>
      <About />
      <Home />
    </>
  )
}

export default App
