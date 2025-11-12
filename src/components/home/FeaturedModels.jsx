import React, { useEffect, useState } from "react";
import ModelCard from "../ModelCard";
import { Link } from "react-router";
import useAxios from './../../hooks/useAxios';
import { toast } from "sonner";
import ModelCardSkeleton from "./ModelCardSkeleton";
import PrimaryBtn from "../PrimaryBtn";
import Heading from "../Heading";

const FeaturedModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios()

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axiosInstance.get("/latest-models");
        setModels(response.data);
      } catch (err) {
        toast.error(err?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchModels();
  }, [axiosInstance]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-11/12 mx-auto px-6">
          <Heading title="Featured AI" highlight="Models" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="max-w-11/12 mx-auto px-6">
        <Heading title="Featured AI" highlight="Models" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>

      <div className="flex-center pt-6">
        <Link
          to="/models"
        >
          <PrimaryBtn>View All Models</PrimaryBtn>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedModels;
