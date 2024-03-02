import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Signup from './pages/Signin.jsx'
import Register from './pages/Register.jsx'
import AddStudent from './pages/AddStudent.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Layout from './components/Layout.jsx'
import AllStudent from './pages/AllStudent.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import AdminDetails from './pages/AdminDetails.jsx'
import Signin from './pages/Signin.jsx'


const router = createBrowserRouter([

  {
    path:'/',
    element:<Layout><App/></Layout>,
    errorElement:<ErrorPage/>

  },
  {
    path:'/adminsignup',
    element:<Layout><Signin/></Layout>
  },
  {
    path:'/adminregister',
    element:<Layout><Register/></Layout>
  },
  {
    path:'/admindetails',
    element:<Layout><AdminDetails/></Layout>
  },
  {
    path:'/addstudent',
    element:<Layout><AddStudent/></Layout>
  },
  {
    path:'/students',
    element:<Layout><AllStudent/></Layout>
  },
  {
    path:'/studentdetails',
    element:<Layout><StudentDetails/></Layout>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
