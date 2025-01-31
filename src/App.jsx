import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';

const router = createBrowserRouter([
  {
    path: '', 
    element: <Layout />, // Wrap all pages inside Layout
    children: [
      { index:true  , element: <Home /> },  // Default route
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <h1>404 - Page Not Found</h1> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
