import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import NotFound from './NotFound/NotFound.jsx';



export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound/> }, 
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}