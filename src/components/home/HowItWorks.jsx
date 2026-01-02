import Heading from "../Heading";

const steps = [
  {
    id: 1,
    title: "Browse & Discover",
    description:
      "Explore our extensive collection of AI models across different frameworks and use cases.",
    icon: "🔍",
    color: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    id: 2,
    title: "Evaluate & Compare",
    description:
      "Review model details, performance metrics, and user ratings to find the perfect fit.",
    icon: "⚖️",
    color: "bg-green-100 dark:bg-green-900/20",
  },
  {
    id: 3,
    title: "Purchase & Download",
    description:
      "Securely purchase and instantly access your chosen AI models with full documentation.",
    icon: "💳",
    color: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    id: 4,
    title: "Deploy & Scale",
    description:
      "Integrate models into your applications and scale your AI solutions with confidence.",
    icon: "🚀",
    color: "bg-orange-100 dark:bg-orange-900/20",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Heading title="How It" highlight="Works" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Get started with Model Stack in four simple steps. From discovery to
            deployment, we make AI model management effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="mb-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-sm font-bold mb-3">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector for desktop - only show between steps, not after last */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
