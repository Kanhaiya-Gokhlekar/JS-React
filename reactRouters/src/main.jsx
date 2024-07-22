import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './User/User.jsx'
import GitHub from './Components/GitHub/Github.jsx'

//const router = createBrowserRouter([{
  //path: '/',
  //element:<Layout/>,
  //children:[{
    //path:'',
    //element:<Home />
  //},
  //{
    //path:'About',
   // element:<About />
  //},
 // {
   // path:'contact',
  //  element:<Contact />
  //},
  

//}])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route path='github' 
      element={<GitHub />}
      />



    </Route> 
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
