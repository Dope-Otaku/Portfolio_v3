import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import ForgotPasswordRecovery from "./ForgotPasswordRecovery"
import { Outlet } from "react-router-dom"



function App() {
  
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-8 bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="w-1/5 h-90 bg-red-500/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl flex items-center justify-center text-red-600 font-bold text-xl hover:bg-red-500/30 transition-all duration-300">
          1
        </div>
        <div className="w-1/5 h-90 bg-blue-500/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl flex items-center justify-center text-blue-600 font-bold text-xl hover:bg-blue-500/30 transition-all duration-300">
          2
        </div>
      </div>
      {/* <ForgotPassword />
      <Outlet /> */}
    </>
  )
}

export default App
