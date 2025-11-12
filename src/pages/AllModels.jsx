import React, { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";
import useAxios from './../hooks/useAxios';
import { toast } from "sonner";
import ModelCardSkeleton from "../components/home/ModelCardSkeleton";
import Heading from "../components/Heading";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axiosInstance.get("/models");
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
      <section className="pb-10">
        <div className="max-w-11/12 mx-auto px-6">
          <Heading title="All" highlight="Models" />
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
    <section className="pb-10">
      <div className="max-w-11/12 mx-auto px-6">
        <Heading title="All" highlight="Models" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllModels;
