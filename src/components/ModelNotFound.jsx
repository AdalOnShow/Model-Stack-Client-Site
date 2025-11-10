import React from "react";
import { Link } from "react-router-dom";

const ModelNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 text-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
        <div className="text-6xl font-bold text-red-500 mb-4">404</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! This AI model doesn’t exist.
        </h2>
        <p className="text-gray-600 mb-6">
          The model you’re looking for might have been deleted or never existed.
          Please go back to the homepage and try again.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ModelNotFound;
