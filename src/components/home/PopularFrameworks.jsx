import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import useAxios from "../../hooks/useAxios";
import { toast } from "sonner";

const PopularFrameworks = () => {
  const [frameworks, setFrameworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchFrameworks = async () => {
      try {
        const response = await axiosInstance.get("/frameworks");
        // Ensure response.data is an array before mapping
        if (Array.isArray(response.data)) {
          // Transform the framework names into objects with additional data
          const frameworksData = response.data.map((name, index) => ({
            id: index + 1,
            name: name,
            description: getFrameworkDescription(name),
            models: getRandomModelCount(),
            color: getFrameworkColor(index),
            textColor: getFrameworkTextColor(index),
          }));
          setFrameworks(frameworksData);
        } else {
          // If response is not an array, set empty array
          setFrameworks([]);
          toast.error("Invalid frameworks data received");
        }
      } catch (err) {
        toast.error(err?.message || "Failed to load frameworks");
        // Fallback to empty array if API fails
        setFrameworks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFrameworks();
  }, [axiosInstance]);

  // Helper function to get framework descriptions
  const getFrameworkDescription = (name) => {
    const descriptions = {
      TensorFlow: "Google's open-source machine learning framework",
      PyTorch: "Facebook's dynamic neural network framework",
      Keras: "High-level neural networks API",
      "Scikit-learn": "Machine learning library for Python",
      ONNX: "Open Neural Network Exchange format",
      "Hugging Face": "Transformers and NLP model hub",
      XGBoost: "Gradient boosting framework",
      LightGBM: "Gradient boosting framework by Microsoft",
      CatBoost: "Gradient boosting library by Yandex",
      OpenCV: "Computer vision and machine learning library",
    };
    return (
      descriptions[name] || `Advanced ${name} framework for AI development`
    );
  };

  // Helper function to generate random model counts
  const getRandomModelCount = () => {
    const counts = [
      "2,847",
      "1,923",
      "1,456",
      "892",
      "734",
      "567",
      "423",
      "312",
      "245",
      "189",
    ];
    return counts[Math.floor(Math.random() * counts.length)];
  };

  // Helper function to get framework colors
  const getFrameworkColor = (index) => {
    const colors = [
      "bg-orange-100 dark:bg-orange-900/20",
      "bg-red-100 dark:bg-red-900/20",
      "bg-yellow-100 dark:bg-yellow-900/20",
      "bg-blue-100 dark:bg-blue-900/20",
      "bg-purple-100 dark:bg-purple-900/20",
      "bg-green-100 dark:bg-green-900/20",
      "bg-pink-100 dark:bg-pink-900/20",
      "bg-indigo-100 dark:bg-indigo-900/20",
      "bg-teal-100 dark:bg-teal-900/20",
      "bg-cyan-100 dark:bg-cyan-900/20",
    ];
    return colors[index % colors.length];
  };

  // Helper function to get framework text colors
  const getFrameworkTextColor = (index) => {
    const colors = [
      "text-orange-600 dark:text-orange-400",
      "text-red-600 dark:text-red-400",
      "text-yellow-600 dark:text-yellow-400",
      "text-blue-600 dark:text-blue-400",
      "text-purple-600 dark:text-purple-400",
      "text-green-600 dark:text-green-400",
      "text-pink-600 dark:text-pink-400",
      "text-indigo-600 dark:text-indigo-400",
      "text-teal-600 dark:text-teal-400",
      "text-cyan-600 dark:text-cyan-400",
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Heading title="Popular AI" highlight="Frameworks" />
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              Discover AI models built with the most popular and trusted
              frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
                  <div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-24"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Heading title="Popular AI" highlight="Frameworks" />
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Discover AI models built with the most popular and trusted
            frameworks. From deep learning to traditional ML, find the right
            tools for your project.
          </p>
        </div>

        {frameworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework) => (
              <div
                key={framework.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`w-16 h-16 ${framework.color} rounded-xl flex items-center justify-center`}
                  >
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                        {framework.name.slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {framework.name}
                    </h3>
                    <p className={`text-sm font-medium ${framework.textColor}`}>
                      {framework.models} models available
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {framework.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Updated daily
                  </span>
                  <button
                    className={`text-sm font-medium ${framework.textColor} hover:underline`}
                  >
                    Browse Models →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              No frameworks available at the moment.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Don't see your preferred framework? We're constantly adding new
            ones.
          </p>
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors duration-200">
            Request Framework
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularFrameworks;
