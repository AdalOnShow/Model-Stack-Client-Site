import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { toast } from 'sonner';

const Login = () => {
  const { loginUserFunc, setUser, googleSigninFunc } = useAuth();
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
    <div className="max-w-11/12 mx-auto">
      <div className="flex flex-col items-center justify-center h-[80dvh] dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">Login Model Stack</h2>
          <form onSubmit={handleLogin} className="flex flex-col">
            <input
              placeholder="Email"
              className="form-input"
              type="email"
              name="email"
            />
            <input
              placeholder="Password"
              className="form-input"
              type="password"
              name="password"
            />
            <button
              className="bg-linear-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Login
            </button>
            <p className="text-white mt-4">
              Don't have an account?
              <Link className="text-sm text-blue-500 -200 hover:underline mt-4" to="/register"
              >Register</Link>
            </p>
          </form>
          <div className="divider divider-info text-white">OR</div>
          <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5] w-full">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login