import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User'
import Header from './components/Header'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
    {
      path: "/login",
      element: <><Header/><Login /></>
    },
    {
      path: "/register",
      element: <><Header/><Register /></>
    },
    {
      path:"/user",
      element: <><Header/><User /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
