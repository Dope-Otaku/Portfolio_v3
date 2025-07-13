import { useDispatch } from "react-redux"
import conf from "./creds/conf"
import authService from "./appwrite/authBackend"
import { login as authLogin} from "./features/authSlicer"
import { useState } from "react"


function App() {
  const dispatch = useDispatch()
  const [error, setError] = useState("")


  const loginHandle = async (data) => {
    try {
      const user = await authService.login(data);
      if (user) {
        console.log("Logged in user:", user);
        dispatch(authLogin(user)); // Update Redux store
        console.log("Redux store updated with user info.");
      }
    } catch (error) {
      console.log("Login error:", error);
      setError(error.message || "An error occurred during login.");
    }
  }
  return (
    <>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={(e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const formData = {
      email: e.target[0].value, // Get email from the first input field
      password: e.target[1].value, // Get password from the second input field
    };
    loginHandle(formData); // Pass the form data to loginHandle
  }}
  className="mt-8">
            <div className='space-y-5'>
                <input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                
                />
                <input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                
                />
                <button
                type="submit"
                className="w-full"
                >Sign in</button>
            </div>
        </form>
    </>
  )
}

export default App
