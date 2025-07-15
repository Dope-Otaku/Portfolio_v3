import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import authService from "./appwrite/authBackend";

function ForgotPasswordRecovery() {
  const [message, setMessage] = useState(""); // State for success message
  const [error, setError] = useState(""); // State for error message
  const [queryParams, setQueryParams] = useState({
    userId: "",
    secret: "",
  });
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for showing popup
  const navigate = useNavigate(); // React Router's navigation hook

  // Extract query parameters from the URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");

    if (userId && secret) {
      setQueryParams({ userId, secret });
    } else {
      setError("URL does not contain a secret key or userId.");
    }
  }, []);

  // Handle password update
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== password) {
      setError("Passwords do not match!");
      return;
    }

    // Check if query parameters are valid
    if (!queryParams.userId || !queryParams.secret) {
      setError("Missing userId or secret key.");
      return;
    }

    try {
      const confirmPassword = await authService.forgotPswdRecovery({
        userId: queryParams.userId,
        secret: queryParams.secret,
        password: password,
      });

      if (confirmPassword) {
        setMessage("Password changed successfully!");
        setShowPopup(true); // Show popup
        console.log("Password changed successfully.");

        // Redirect after 3 seconds
        setTimeout(() => {
          setShowPopup(false); // Hide popup
          navigate("/"); // Redirect to main page
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred during password update.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
      <form
        onSubmit={handlePasswordUpdate}
        className="bg-white p-8 rounded shadow-md w-96 space-y-4"
      >
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Update Password
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p>Password changed successfully!</p>
            <p>Redirecting you to the main page...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPasswordRecovery;