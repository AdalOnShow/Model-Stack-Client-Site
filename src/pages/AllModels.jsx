import React, { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";
import useAxios from './../hooks/useAxios';
import { toast } from "sonner";
import ModelCardSkeleton from "../components/home/ModelCardSkeleton";
import Heading from "../components/Heading";
import { FaSearch } from "react-icons/fa";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    const url = searchTerm ? `/models?search=${searchTerm}` : "/models";
    const fetchModels = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(url);
        setModels(response.data);
        setLoading(false);
      } catch (err) {
        toast.error(err?.message || "Something went wrong");
        setLoading(false);
      }
    };
    fetchModels();
  }, [axiosInstance, searchTerm]);



  return (
    <section className="pb-10">
      <div className="max-w-11/12 mx-auto px-6">
        <Heading title="All" highlight="Models" />
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input border rounded-lg max-w-xs sm:w-1/2 px-4 py-2 focus:outline-none focus:ring-0 focus:border-blue-500 focus:border-2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <ModelCardSkeleton key={i} />
            ))
          ) : null}
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllModels;
