import React from "react";
import { Link } from "react-router";


const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-700 px-6 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-[10rem] font-extrabold text-indigo-600 mb-6 animate-bounce">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for does not exist, has been removed, or
          is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-indigo-500 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
