import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import ForgotPasswordRecovery from "./ForgotPasswordRecovery"
import { Outlet } from "react-router-dom"



function App() {
  
  
  return (
    <>
      {/* <Login/> */}
      <ForgotPassword/>
      <Outlet/>
    </>
  )
}

export default App
