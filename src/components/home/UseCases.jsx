import React from "react";
import Heading from "../Heading";

const useCases = [
  {
    id: 1,
    title: "Healthcare & Medical",
    description:
      "Diagnostic imaging, drug discovery, patient monitoring, and medical research applications.",
    icon: "🏥",
    examples: ["Medical Imaging", "Drug Discovery", "Patient Analytics"],
    color: "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800",
  },
  {
    id: 2,
    title: "Finance & Banking",
    description:
      "Fraud detection, risk assessment, algorithmic trading, and customer service automation.",
    icon: "💰",
    examples: ["Fraud Detection", "Risk Analysis", "Trading Bots"],
    color:
      "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800",
  },
  {
    id: 3,
    title: "E-commerce & Retail",
    description:
      "Recommendation systems, inventory management, price optimization, and customer insights.",
    icon: "🛒",
    examples: ["Recommendations", "Inventory AI", "Price Optimization"],
    color:
      "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800",
  },
  {
    id: 4,
    title: "Manufacturing",
    description:
      "Quality control, predictive maintenance, supply chain optimization, and process automation.",
    icon: "🏭",
    examples: ["Quality Control", "Predictive Maintenance", "Supply Chain"],
    color:
      "bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800",
  },
  {
    id: 5,
    title: "Transportation",
    description:
      "Autonomous vehicles, route optimization, traffic management, and logistics planning.",
    icon: "🚗",
    examples: ["Autonomous Driving", "Route Planning", "Traffic AI"],
    color:
      "bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800",
  },
  {
    id: 6,
    title: "Entertainment & Media",
    description:
      "Content recommendation, video processing, game AI, and creative content generation.",
    icon: "🎬",
    examples: ["Content AI", "Video Processing", "Game Intelligence"],
    color:
      "bg-pink-50 dark:bg-pink-900/10 border-pink-200 dark:border-pink-800",
  },
];

const UseCases = () => {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Heading title="Use Cases &" highlight="Industries" />
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Model Stack powers AI solutions across diverse industries. Discover
            how our models are transforming businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-2 ${useCase.color}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Popular Applications
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200">
                  Explore Models →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI models are versatile and can be adapted to virtually any
              industry. Contact our team to discuss your specific use case.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors duration-200">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
