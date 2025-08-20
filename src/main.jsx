import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import mainStore from './store/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import ForgotPasswordRecovery from './ForgotPasswordRecovery.jsx'
import Developer from './components/Developer/Developer.jsx'
import Recruiter from './components/Recruiter/Recruiter.jsx'
// import { BrowserRouter, Route } from "react-router-dom"


const routerFn = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "fpswd",
          element: <ForgotPassword/>
        },
        {
              path: "api/recovery",
              element: <ForgotPasswordRecovery/>
            }
        
      ]
    },
    {
      path: "/developer",
      element: <Developer/>
    },
    {
      path: "/recruiter",
      element: <Recruiter/>
    }
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
