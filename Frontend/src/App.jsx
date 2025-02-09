import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
    {
      path: "/login",
      element: <><Login /></>
    },
    {
      path: "/register",
      element: <><Register /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
