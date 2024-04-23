import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCoffee from './assets/component/AddCoffee.jsx'
import UpdatedCoffee from './assets/component/UpdatedCoffee.jsx'
import Root from "./assets/component/Root.jsx"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:3000/coffee')
      },
      {
        path: "/addcoffee",
        element: <AddCoffee ></AddCoffee>,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdatedCoffee></UpdatedCoffee>,
        loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
      },

    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
