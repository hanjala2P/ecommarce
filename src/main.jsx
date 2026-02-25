import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Componants/Home.jsx'
import RootLayout from './Layouts/RootLayout.jsx'
import PlantsDetails from './Pages/PlantsDetails.jsx'
import axios from 'axios'
import LodingSpiner from './Componants/LodingSpiner.jsx'
import AddtoCart from './Pages/AddtoCart.jsx'
import Cart from './Pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component:RootLayout,
    hydrateFallbackElement: <LodingSpiner/>,
    children:[
      {
        index:true,
        element: <Home/>,
        loader:()=>fetch('https://openapi.programming-hero.com/api/plants')
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
       path: '/contact',
       element: <Contact/>,
    },

  // this is about page
       {
          path: '/about',
           element: <About/>
       },
   
       {
          path: '/plants-details/:id',
           element: <PlantsDetails/>,
           loader:({params})=>
            axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
       },
       {
        path: '/add-to-cart',
        element: <AddtoCart/>
       },
       {
        path: '/cart',
        Component: Cart,
       },
    ]
  },
  
  // this is contact page

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
