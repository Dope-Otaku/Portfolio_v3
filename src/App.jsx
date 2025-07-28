import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import ForgotPasswordRecovery from "./ForgotPasswordRecovery"
import { Outlet } from "react-router-dom"
import useMouseHover from "./UseMouseHover"



function App() {
  const {x, y} = useMouseHover()
  
  
  return (
    <>
      {/* Display cursor position */}
      {x !== null && y !== null ? `Your cursor is at ${x}, ${y}.` : "Move your mouse around."}

      {/* Container with Tailwind CSS */}
      <div className="w-screen h-screen bg-black relative overflow-hidden">
        <p>Move your mouse over this area.</p>
        <div
          className="absolute w-10 h-10 bg-transparent border border-white rounded-full pointer-events-none shadow-[0_0_10px_3px_rgba(255,255,255,0.5)]"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: "translate(-50%, -50%)", // Custom inline style for translate
          }}
        />
      </div>
      {/* <ForgotPassword />
      <Outlet /> */}
    </>
  )
}

export default App
