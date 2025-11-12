import React from "react";
import Heading from "../Heading";

const slides = [
  {
    id: 1,
    url: "https://i.ibb.co.com/V0fSFbgY/Generated-Image-November-09-2025-9-52-PM.png",
    alt: "Neural network visualization with glowing nodes",
    title: "Neural Network Visualization",
  },
  {
    id: 2,
    url: "https://i.ibb.co.com/wF1Z8v9Y/Generated-Image-November-09-2025-9-53-PM.png",
    alt: "AI model training concept with a person and laptop",
    title: "Model Training in Progress",
  },
  {
    id: 3,
    url: "https://i.ibb.co.com/23JJMz8R/Generated-Image-November-09-2025-9-53-PM-1.png",
    alt: "Human brain blended with digital circuits",
    title: "Human + Machine Intelligence",
  },
];

export default function AboutAIModels() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <Heading title="About AI" highlight="Models" />
        <p className="text-gray-600 dark:text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
          AI models are computer systems that learn from data to make
          predictions, classify objects, or generate creative content.
          They’re built using neural networks — structures inspired by the
          human brain — that help machines recognize patterns and make
          decisions. These models power everything from chatbots and voice
          assistants to self-driving cars and image recognition systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-700"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
              <p className="text-gray-600 text-sm">{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
