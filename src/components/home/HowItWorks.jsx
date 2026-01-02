import React from "react";
import Heading from "../Heading";

const steps = [
  {
    id: 1,
    title: "Browse & Discover",
    description: "Explore our extensive collection of AI models across different frameworks and use cases with advanced filtering.",
    icon: "🔍",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
  },
  {
    id: 2,
    title: "Evaluate & Compare",
    description: "Review detailed model specifications, performance metrics, and community ratings to make informed decisions.",
    icon: "⚖️",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20"
  },
  {
    id: 3,
    title: "Purchase & Access",
    description: "Securely purchase models with instant access to downloads, documentation, and implementation guides.",
    icon: "💳",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
  },
  {
    id: 4,
    title: "Deploy & Scale",
    description: "Integrate models seamlessly into your applications with our deployment tools and scaling solutions.",
    icon: "🚀",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Heading title="How It" highlight="Works" />
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Get started with Model Stack in four simple steps. From discovery to deployment, 
            we've streamlined the entire AI model lifecycle for maximum efficiency.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 via-purple-200 to-orange-200 dark:from-blue-800 dark:via-emerald-800 dark:via-purple-800 dark:to-orange-800 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Step Card */}
                <div className={`bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 dark:border-gray-700/50`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl filter drop-shadow-sm">{step.icon}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className={`bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50`}>
                <div className="flex items-start space-x-4">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center shadow-lg relative`}>
                      <span className="text-2xl">{step.icon}</span>
                      <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md`}>
                        {step.id}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-lg transform rotate-90`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already building amazing AI applications with Model Stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Browsing Models
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;