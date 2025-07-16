import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import ForgotPasswordRecovery from "./ForgotPasswordRecovery"
import { Outlet } from "react-router-dom"



function App() {
  
  
  return (
    <>
      {/* ok so now we are going to change our home page and addding all these functions besides
      this because the only thing we needed was auth which took time but it did and now we need to
      add post also */}
      {/* <Login/> */}
      <ForgotPassword/>
      <Outlet/>
    </>
  )
}

export default App
