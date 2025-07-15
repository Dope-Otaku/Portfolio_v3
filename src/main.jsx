import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import mainStore from './store/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"

const routerFn = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/fpswd",
          element: <ForgotPassword/>
        }
      ]
    },{}
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mainStore}> 
      <RouterProvider router={routerFn}>
        <App/>  
      </RouterProvider> 
    </Provider>
  </StrictMode>
)
