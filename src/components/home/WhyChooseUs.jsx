import React from "react";
import Heading from "../Heading";

const benefits = [
  {
    id: 1,
    title: "Curated Quality",
    description:
      "Every model is thoroughly tested and verified by our expert team before being listed on the platform.",
    icon: "✅",
    stats: "99.9% Uptime",
  },
  {
    id: 2,
    title: "Instant Access",
    description:
      "Download and deploy AI models immediately after purchase with comprehensive documentation included.",
    icon: "⚡",
    stats: "< 30 Seconds",
  },
  {
    id: 3,
    title: "Multi-Framework Support",
    description:
      "Support for TensorFlow, PyTorch, ONNX, and more. Find models that work with your existing tech stack.",
    icon: "🔧",
    stats: "15+ Frameworks",
  },
  {
    id: 4,
    title: "Enterprise Ready",
    description:
      "Scalable solutions with enterprise-grade security, compliance, and dedicated support channels.",
    icon: "🏢",
    stats: "SOC 2 Compliant",
  },
  {
    id: 5,
    title: "Community Driven",
    description:
      "Join thousands of developers sharing knowledge, best practices, and contributing to the AI ecosystem.",
    icon: "👥",
    stats: "50K+ Developers",
  },
  {
    id: 6,
    title: "Cost Effective",
    description:
      "Transparent pricing with no hidden fees. Pay only for what you use with flexible licensing options.",
    icon: "💰",
    stats: "Save 60% Costs",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Heading title="Why Choose" highlight="Model Stack" />
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Model Stack is the trusted platform for AI professionals worldwide.
            Here's why thousands of developers choose us for their AI model
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{benefit.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                    {benefit.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
