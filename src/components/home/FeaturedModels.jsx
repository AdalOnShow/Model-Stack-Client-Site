import React, { useEffect, useState } from "react";
import ModelCard from "../ModelCard";
import { Link } from "react-router";
import useAxios from "./../../hooks/useAxios";
import { toast } from "sonner";
import ModelCardSkeleton from "./ModelCardSkeleton";
import PrimaryBtn from "../PrimaryBtn";
import Heading from "../Heading";

const FeaturedModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axiosInstance.get("/latest-models");
        // Ensure response.data is an array before setting
        const modelsData = Array.isArray(response.data) ? response.data : [];
        setModels(modelsData);
      } catch (err) {
        toast.error(err?.message || "Something went wrong");
        setModels([]); // Ensure models is always an array on error
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, [axiosInstance]);

  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Heading title="Featured AI" highlight="Models" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <ModelCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Heading title="Featured AI" highlight="Models" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(models) && models.length > 0 ? (
            models.map((model) => (
              <ModelCard key={model._id} model={model} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No models available</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-center pt-6">
        <Link to="/models">
          <PrimaryBtn>View All Models</PrimaryBtn>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedModels;
