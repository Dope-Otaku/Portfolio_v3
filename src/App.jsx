import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import ForgotPasswordRecovery from "./ForgotPasswordRecovery"
import { Outlet } from "react-router-dom"
import upfront from "../src/assets/upfront.png"



function App() {
  
  
  return (
    <>
      <div 
        className="flex justify-center items-center min-h-screen gap-8 bg-no-repeat"
        style={{
          backgroundImage: `url(${upfront})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: '60% auto', 
          backgroundPosition: 'center 10%' 
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative z-10 w-1/5 h-60 bg-red-500/20 cursor-pointer backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl flex items-center justify-center text-red-600 font-bold text-xl hover:bg-red-500/30 transition-all duration-300">
          Recruiter
        </div>
        <div className="relative z-10 w-1/5 h-60 bg-blue-500/20 cursor-pointer backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl flex items-center justify-center text-blue-600 font-bold text-xl hover:bg-blue-500/30 transition-all duration-300">
          Developer
        </div>
      </div>
      {/* <ForgotPassword />
      /need to add routin
      <Outlet /> */}
    </>
  )
}

export default App
