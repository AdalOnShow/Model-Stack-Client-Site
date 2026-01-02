import React from "react";
import Heading from "../Heading";

const stats = [
  {
    id: 1,
    number: "15,000+",
    label: "AI Models",
    description: "Curated collection of production-ready models",
    icon: "🤖",
    color: "bg-blue-500",
  },
  {
    id: 2,
    number: "50,000+",
    label: "Active Developers",
    description: "Growing community of AI practitioners",
    icon: "👨‍💻",
    color: "bg-green-500",
  },
  {
    id: 3,
    number: "2.5M+",
    label: "Model Downloads",
    description: "Trusted by teams worldwide",
    icon: "📥",
    color: "bg-purple-500",
  },
  {
    id: 4,
    number: "99.9%",
    label: "Uptime",
    description: "Enterprise-grade reliability",
    icon: "⚡",
    color: "bg-orange-500",
  },
  {
    id: 5,
    number: "24/7",
    label: "Support",
    description: "Round-the-clock assistance",
    icon: "🛟",
    color: "bg-red-500",
  },
  {
    id: 6,
    number: "150+",
    label: "Countries",
    description: "Global reach and accessibility",
    icon: "🌍",
    color: "bg-indigo-500",
  },
];

const PlatformStats = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Heading title="Platform" highlight="Statistics" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Join the world's largest AI model marketplace trusted by developers,
            researchers, and enterprises globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div
                  className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>

                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {stat.label}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Be part of the fastest-growing AI model marketplace. Start building
            amazing AI applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-xl hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors duration-200">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
