import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCoffee from './assets/component/AddCoffee.jsx'
import Root from "./assets/component/Root.jsx"
import Login from './Login.jsx'
import Registation from './assets/Registation.jsx'
import Categories from './assets/Categori/Categories.jsx'
import Home from './assets/page/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CoffeeCard from './assets/component/CoffeeCard.jsx'
import Authprovider from './assets/provider/Authprovider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Sort from './assets/component/Sort.jsx'
import Dashboard from './assets/page/Dashboard/Dashboard.jsx'
import Allusers from './assets/page/Dashboard/Allusers.jsx'
import { Calendar } from 'react-date-range'
import Mydate from './assets/component/Mydate.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [


      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/app",
        element: <App></App>,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee ></AddCoffee>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registation",
        element: <Registation></Registation>,
      },
      {
        path: '/sort',
        element: <Sort></Sort>
      },
      {
        path: '/calender',
        element: <Mydate></Mydate>
      }


    ]
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'users',
        element: <Allusers></Allusers>
      }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Authprovider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Authprovider>
  </QueryClientProvider>



)
