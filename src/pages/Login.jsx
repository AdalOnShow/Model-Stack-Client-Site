import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';
import useAuth from '../hooks/useAuth';
import PrimaryBtn from '../components/PrimaryBtn';

const Login = () => {
  const { loginUserFunc, setUser, googleSigninFunc } = useAuth();
  const [loginLoader, setLoginLoader] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  const handleSigninError = (error) => {
    if (error.code === "auth/invalid-email") {
      return "Invalid email format"
    } else if (error.code === "auth/invalid-credential") {
      return "Invalid credentials. Please try again."
    } else if (error.code === "auth/user-disabled") {
      return "User has been disabled"
    } else if (error.code === "auth/user-not-found") {
      return "No user found with this email"
    } else if (error.code === "auth/wrong-password") {
      return "Incorrect password"
    } else if (error.code === "auth/too-many-requests") {
      return "Too many login attempts. Please try again later."
    } else if (error.code === "auth/network-request-failed") {
      return "Network error. Please check your connection."
    } else {
      return "Something went wrong. Please try again later.";
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginLoader(true)
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUserFunc(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        setTimeout(() => {
          navigate(from, { replace: true })
        }, 300)
      })
      .catch((error) => {
        const massage = handleSigninError(error)
        toast.error(massage)
        setLoginLoader(false)
      });
  }

  const handleGoogleSignin = () => {
    googleSigninFunc()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        setTimeout(() => {
          navigate(from, { replace: true })
        }, 300)
      })
      .catch((error) => {
        const massage = handleSigninError(error)
        toast.error(massage)
      });
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen py-16">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Login to Model Stack</h2>
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="pt-4">
              <PrimaryBtn submit loader={loginLoader} className="w-full">
                Login
              </PrimaryBtn>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center mt-4">
              Don't have an account?{' '}
              <Link className="text-indigo-600 hover:text-indigo-500 font-medium" to="/register">
                Register here
              </Link>
            </p>
          </form>
          <div className="divider text-gray-500 dark:text-gray-400">OR</div>
          <button onClick={handleGoogleSignin} className="w-full px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center gap-3">
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login