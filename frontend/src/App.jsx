import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/shared/Navbar.jsx';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import Home from './components/Home.jsx';
import Jobs from './components/Jobs.jsx';
import Browse from './components/Browse.jsx';
import Profile from './components/Profile.jsx';
import JobDescription from './components/JobDescription.jsx';
import Companies from './components/admin/Companies.jsx';
import CompanyCreate from './components/admin/CompanyCreate.jsx';
import CompanySetup from './components/admin/CompanySetup.jsx';
import AdminJobs from './components/admin/AdminJobs.jsx';
import PostJob from './components/admin/PostJob.jsx';
import Applicants from './components/admin/Applicants.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';



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
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  //admin ke liye yahan se start hoga
  {
    path:"/admin/companies",
    element:<ProtectedRoute> <Companies/></ProtectedRoute> 
  },

  {
    path:"/admin/companies/create",
    element:<CompanyCreate/>
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/>
  },
  {
    path:"/admin/jobs/create",
    element:<PostJob/>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/>
  },

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
