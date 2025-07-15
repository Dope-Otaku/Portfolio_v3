import React, { useState } from "react";
// import authService from "./appwrite/authBackend"; // Import your AuthClient service

function ForgotPassword() {
  const [email, setEmail] = useState(""); // State to store the email input
  const [message, setMessage] = useState(""); // State to store success/error messages
  const [error, setError] = useState(""); // State to store error messages

//   const handleForgotPassword = async (e) => {
//     e.preventDefault(); // Prevent form submission refresh
//     try {
//       const recovery = await authService.createRecovery(email, "https://your-redirect-url.com/recovery"); // Replace with your redirect URL
//       console.log("Password recovery initiated:", recovery);
//       setMessage("Recovery email sent successfully. Please check your inbox.");
//       setError(""); // Clear any previous errors
//     } catch (error) {
//       console.log("Error initiating password recovery:", error);
//       setMessage(""); // Clear any previous success messages
//       setError(error.message || "An error occurred while sending recovery email.");
//     }
//   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>
      <form
        // onSubmit={handleForgotPassword}
        className="bg-white p-8 rounded shadow-md w-96 space-y-4"
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Send Recovery Email
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}

export default ForgotPassword;