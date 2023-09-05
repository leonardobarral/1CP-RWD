import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from "./routes/pageHome"
import Error from "./routes/pageError"
import Produtos from "./routes/pageProdutos"
import EditarProduto from "./routes/pageEditarProduto"
import ExcluirProduto from "./routes/pageExcluirProduto"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {path : "/", element: <Home/>},
      {path : "/produtos", element: <Produtos/>},
      {path : "/editar/produto/:id", element: <EditarProduto/>},
      {path : "/excluir/produto/:id", element: <ExcluirProduto/>}
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
