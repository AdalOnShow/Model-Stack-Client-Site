import React from "react";
import { Link } from "react-router";
import PrimaryBtn from "../PrimaryBtn";
import SecondaryBtn from "../SecondaryBtn";

const GetStarted = () => {
  return (
    <section className="relative bg-indigo-600 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Manage Your AI Models?
        </h2>

        <p className="text-lg md:text-xl text-indigo-100 mb-8">
          Organize, track, and deploy your AI models effortlessly. Register or
          log in to start your journey with AI Model Inventory Manager.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link to="/register">
            <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-colors duration-200">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-colors duration-200 flex items-center gap-2">
              <span>LogIn</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  clipRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
