import React, { useEffect, useState } from "react";
import axios from "axios";
import ModelCard from "../ModelCard";

const FeaturedModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get("http://localhost:3000/models");
        const sorted = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6);
        setModels(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <p className="text-lg text-gray-600">Loading models...</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Featured AI Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
