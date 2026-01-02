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
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const axiosInstance = useAxios();

  const ITEMS_PER_PAGE = 6;

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
      params.append("page", currentPage.toString());
      params.append("limit", ITEMS_PER_PAGE.toString());
      params.append("sortBy", sortBy);

      const url = `/models?${params.toString()}`;

      try {
        const response = await axiosInstance.get(url);
        
        // Handle response - prioritize new paginated format
        if (response.data && response.data.models && response.data.pagination) {
          // New paginated format from updated server
          const modelsData = Array.isArray(response.data.models) ? response.data.models : [];
          setModels(modelsData);
          setPagination(response.data.pagination);
        } else {
          // Fallback: treat as old format and create pagination
          const allModels = Array.isArray(response.data) ? response.data : [];
          setModels(allModels);
          
          // Create basic pagination for old format
          setPagination({
            currentPage: currentPage,
            totalPages: Math.max(1, Math.ceil(allModels.length / ITEMS_PER_PAGE)),
            totalModels: allModels.length,
            hasNextPage: false, // Since we got all data
            hasPrevPage: false,
            limit: ITEMS_PER_PAGE
          });
        }
      } catch (err) {
        toast.error(err?.message || "Something went wrong");
        setModels([]);
        setPagination({});
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, [axiosInstance, searchTerm, selectedFrameworks, currentPage, sortBy]);

  // Reset to page 1 when search, filter, or sort changes (but not on initial load)
  useEffect(() => {
    if (searchTerm || selectedFrameworks.length > 0 || sortBy !== "newest") {
      if (currentPage !== 1) {
        setCurrentPage(1);
      }
    }
  }, [searchTerm, selectedFrameworks, sortBy, currentPage]);

  const handleFrameworkChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFrameworks(prev => [...prev, value]);
    } else {
      setSelectedFrameworks(prev => prev.filter(f => f !== value));
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSortLabel = (value) => {
    switch (value) {
      case 'newest': return 'Newest First';
      case 'mostPurchased': return 'Most Purchased';
      case 'nameAZ': return 'Name A-Z';
      default: return 'Newest First';
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Heading title="All" highlight="Models" />
        
        {/* Search, Filter, and Sort Controls */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start mb-8">
          {/* Search Input */}
          <div className="w-full lg:w-1/3">
            <input
              type="text"
              placeholder="Search models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="w-full lg:w-1/4">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="newest">Newest First</option>
              <option value="mostPurchased">Most Purchased</option>
              <option value="nameAZ">Name A-Z</option>
            </select>
          </div>

          {/* Framework Filter */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Filter by Framework:</h3>
              <div className="flex flex-wrap gap-3 max-h-32 overflow-y-auto">
                {frameworksList.map((fw) => (
                  <label key={fw} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      value={fw}
                      checked={selectedFrameworks.includes(fw)}
                      onChange={handleFrameworkChange}
                      className="checkbox checkbox-sm checkbox-primary"
                    />
                    <span className="text-gray-700 dark:text-gray-300">{fw}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        {!loading && pagination.totalModels !== undefined && (
          <div className="flex justify-between items-center mb-6 text-sm text-gray-600 dark:text-gray-400">
            <span>
              Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, pagination.totalModels)} of {pagination.totalModels} models
            </span>
            <span>
              Sorted by: {getSortLabel(sortBy)}
            </span>
          </div>
        )}

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {loading ? (
            [...Array(ITEMS_PER_PAGE)].map((_, i) => (
              <ModelCardSkeleton key={i} />
            ))
          ) : models.length > 0 ? (
            models.map((model) => (
              <ModelCard key={model._id} model={model} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.207-2.175.168-.288.36-.566.575-.832C7.662 10.736 9.73 10 12 10s4.338.736 5.632 1.993c.215.266.407.544.575.832A7.962 7.962 0 0112 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No models found</h3>
              <p className="text-gray-500 dark:text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Pagination - Always show if we have pagination data */}
        {!loading && pagination && pagination.totalPages && pagination.totalPages > 1 && (
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Page Info */}
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">
                  Page {pagination.currentPage || currentPage} of {pagination.totalPages}
                </span>
                <span className="mx-2">•</span>
                <span>
                  {pagination.totalModels} total models
                </span>
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {pagination.totalPages <= 7 ? (
                    // Show all pages if 7 or fewer
                    [...Array(pagination.totalPages)].map((_, index) => {
                      const pageNum = index + 1;
                      const isCurrentPage = pageNum === currentPage;
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                            isCurrentPage
                              ? 'bg-indigo-600 text-white shadow-md'
                              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })
                  ) : (
                    // Show abbreviated pagination for many pages
                    <>
                      {/* First page */}
                      <button
                        onClick={() => handlePageChange(1)}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                          currentPage === 1
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        1
                      </button>
                      
                      {currentPage > 3 && <span className="px-2 text-gray-400">...</span>}
                      
                      {/* Current page and neighbors */}
                      {[currentPage - 1, currentPage, currentPage + 1].map(pageNum => {
                        if (pageNum <= 1 || pageNum >= pagination.totalPages) return null;
                        const isCurrentPage = pageNum === currentPage;
                        
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                              isCurrentPage
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      
                      {currentPage < pagination.totalPages - 2 && <span className="px-2 text-gray-400">...</span>}
                      
                      {/* Last page */}
                      {pagination.totalPages > 1 && (
                        <button
                          onClick={() => handlePageChange(pagination.totalPages)}
                          className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                            currentPage === pagination.totalPages
                              ? 'bg-indigo-600 text-white shadow-md'
                              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          {pagination.totalPages}
                        </button>
                      )}
                    </>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= pagination.totalPages}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllModels;