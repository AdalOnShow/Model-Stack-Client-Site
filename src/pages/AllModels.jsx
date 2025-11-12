import React, { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";
import useAxios from './../hooks/useAxios';
import { toast } from "sonner";
import ModelCardSkeleton from "../components/home/ModelCardSkeleton";
import Heading from "../components/Heading";


const AllModels = () => {
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [frameworksList, setFrameworksList] = useState([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchFrameworks = async () => {
      try {
        const response = await axiosInstance.get("/frameworks");
        setFrameworksList(response.data);
      } catch (err) {
        toast.error(err?.message || "Something went wrong");
      }
    };
    fetchFrameworks();
  }, [axiosInstance]);

  useEffect(() => {
  const fetchModels = async () => {
    setLoading(true);

    const params = new URLSearchParams();
    if (searchTerm) params.append("search", searchTerm);
    if (selectedFrameworks.length > 0) {
      params.append("frameworks", selectedFrameworks.join(","));
    }

    const url = `/models?${params.toString()}`;

    try {
      const response = await axiosInstance.get(url);
      setModels(response.data);
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchModels();
}, [axiosInstance, searchTerm, selectedFrameworks]);


  const handleFrameworkChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFrameworks(prev => [...prev, value]);
    } else {
      setSelectedFrameworks(prev => prev.filter(f => f !== value));
    }
  };

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
          <div className="mb-6 max-w-lg">
            <h3 className="font-semibold mb-2">Filter by Framework:</h3>
            <div className="flex flex-wrap gap-3">
              {frameworksList.map((fw) => (
                <label key={fw} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={fw}
                    checked={selectedFrameworks.includes(fw)}
                    onChange={handleFrameworkChange}
                    className="checkbox checkbox-sm"
                  />
                  {fw}
                </label>
              ))}
            </div>
          </div>
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
