import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import ForgotPasswordRecovery from "./ForgotPasswordRecovery"
import { Outlet } from "react-router-dom"
import useMouseHover from "./UseMouseHover"



function App() {
  const {x, y} = useMouseHover()
  
  
  return (
    <>
      {/* ok so now we are going to change our home page and addding all these functions besides
      this because the only thing we needed was auth which took time but it did and now we need to
      add post also */}
      {/* <Login/> */}
      <div>
        {x !== null && y !== null ? `Your cursor is at ${x}, ${y}.` : "Move your mouse around."}
      </div>

      {/* another day missed but we are still going to implement one thing */}
      
      <ForgotPassword/>
      <Outlet/>
    </>
  )
}

export default App
