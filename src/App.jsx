import './App.css'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> }, // Root route
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/gallery', element: <Gallery /> },
  ])
  
  return (
    <>
    
  <RouterProvider router={router} />
    </>
  
  )
}
