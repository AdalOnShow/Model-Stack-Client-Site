import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Manage Your AI Models?
        </h2>

        <p className="text-lg md:text-xl text-indigo-100 mb-8">
          Organize, track, and deploy your AI models effortlessly.
          Register or log in to start your journey with AI Model Inventory Manager.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/register"
            className="btn btn-success text-white px-8 py-3 text-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="btn btn-outline border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-indigo-700 transition-colors duration-300"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
