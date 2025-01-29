import { useState } from 'react'
import './App.css'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'


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

      <Home />
      <About />
      <Gallery />
      <Contact/>
    </>
  )
}

export default App
