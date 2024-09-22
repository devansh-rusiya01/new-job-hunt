import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/shared/Navbar'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/signup'
import Home from './components/Home'


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // }

])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
