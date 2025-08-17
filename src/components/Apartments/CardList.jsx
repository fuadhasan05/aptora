import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useTheme } from "../../context/ThemeContext";
import {
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiAlertCircle,
} from "react-icons/fi";
import { FaSearch, FaSyncAlt } from "react-icons/fa";
import Button from "../Shared/Button/Button";

const CardList = ({
  apartments = [],
  isLoading = false,
  error = null,
  onRetry,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [currentApartments, setCurrentApartments] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const apartmentsPerPage = 8;
  const { theme } = useTheme();

  // Process and filter apartments
  useEffect(() => {
    if (!Array.isArray(apartments)) {
      console.error("apartments is not an array:", apartments);
      setFilteredApartments([]);
      return;
    }

    const filtered = apartments.filter((apartment) => {
      if (!apartment || typeof apartment !== "object") return false;
      if (apartment.status === "rented") return false;

      // Search filter with null checks
      const matchesSearch = searchQuery
        ? (apartment.title || "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (apartment.location || "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        : true;

      // Rent filter with validation
      try {
        const rent = parseInt(apartment.rent || 0);
        const min = minRent ? parseInt(minRent) : 0;
        const max = maxRent ? parseInt(maxRent) : Infinity;
        return matchesSearch && rent >= min && rent <= max;
      } catch (error) {
        console.error("Error parsing rent values:", error);
        return false;
      }
    });

    setFilteredApartments(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [apartments, minRent, maxRent, searchQuery]);

  // Pagination calculation
  useEffect(() => {
    const total = Math.ceil(filteredApartments.length / apartmentsPerPage);
    setTotalPages(total);

    if (currentPage > total && total > 0) {
      setCurrentPage(1);
      return;
    }

    const indexOfLast = currentPage * apartmentsPerPage;
    const indexOfFirst = indexOfLast - apartmentsPerPage;
    setCurrentApartments(filteredApartments.slice(indexOfFirst, indexOfLast));
  }, [filteredApartments, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setMinRent("");
    setMaxRent("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const hasFilters = minRent || maxRent || searchQuery;

  // Error state
  if (error) {
    return (
      <div
        className={`min-h-screen w-full ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-50 dark:bg-gray-800 border border-red-200 dark:border-red-900 rounded-xl p-8 text-center">
            <FiAlertCircle className="mx-auto h-12 w-12 text-red-500 dark:text-red-400" />
            <h3 className="mt-4 text-lg font-medium text-red-800 dark:text-red-200">
              Failed to load apartments
            </h3>
            <p className="mt-2 text-red-700 dark:text-red-300">
              {error.message || "An unexpected error occurred"}
            </p>
            <button
              onClick={onRetry}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FaSyncAlt className="mr-2" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div
        className={`min-h-screen w-full ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`rounded-xl shadow-md overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div
                  className={`h-48 ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  } animate-pulse`}
                ></div>
                <div className="p-4">
                  <div
                    className={`h-6 rounded ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    } animate-pulse mb-2 w-3/4`}
                  ></div>
                  <div
                    className={`h-4 rounded ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    } animate-pulse mb-1 w-1/2`}
                  ></div>
                  <div
                    className={`h-4 rounded ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    } animate-pulse w-1/3`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen w-full ${
        theme === "dark" ? "bg-base-200" : "bg-base-200"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header and Search */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Find Your Perfect Apartment
          </h1>
          <p className="text-lg text-base-content/70">
            {filteredApartments.length}{" "}
            {filteredApartments.length === 1 ? "property" : "properties"}{" "}
            available
          </p>
        </div>
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by location or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`block w-full pl-10 pr-3 py-3 rounded-lg border ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-100"
            } border ${
              theme === "dark" ? "border-gray-700" : "border-gray-300"
            } shadow-sm`}
          >
            <FiFilter />
            <span>Filters</span>
            {hasFilters && (
              <span className="h-5 w-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
                {[minRent, maxRent, searchQuery].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div
            className={`p-6 rounded-xl shadow-md mb-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Min Rent (৳)
                </label>
                <input
                  type="number"
                  placeholder="Any"
                  value={minRent}
                  onChange={(e) => setMinRent(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Max Rent (৳)
                </label>
                <input
                  type="number"
                  placeholder="Any"
                  value={maxRent}
                  onChange={(e) => setMaxRent(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300"
                  } focus:ring-blue-500 focus:border-blue-500`}
                  min="0"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <Button
                onClick={handleClearFilters}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                Clear all
              </Button>
              <Button
                onClick={() => setShowFilters(false)}
                variant="primary"
                className="px-4 py-2 text-sm font-medium"
              >
                Apply filters
              </Button>
            </div>
          </div>
        )}

        {/* Results */}
        {filteredApartments.length === 0 ? (
          <div className="py-16 text-center">
            <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
              <FaSearch className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-lg font-medium text-primary mb-1">
              No apartments found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {hasFilters
                ? "Try adjusting your filters or search criteria"
                : "No apartments are currently available"}
            </p>
            {hasFilters && (
              <button
                onClick={handleClearFilters}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Apartment Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentApartments.map((apartment) => (
                <Card
                  key={apartment._id || apartment.id || Math.random()}
                  apartment={apartment}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * apartmentsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(
                      currentPage * apartmentsPerPage,
                      filteredApartments.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {filteredApartments.length}
                  </span>{" "}
                  results
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-md ${
                      currentPage === 1
                        ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <FiChevronLeft size={20} />
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }).map(
                    (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-1 rounded-md ${
                            currentPage === pageNum
                              ? "bg-blue-600 text-white"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    }
                  )}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="px-3 py-1 text-gray-500">...</span>
                  )}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      className="px-3 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    >
                      {totalPages}
                    </button>
                  )}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-md ${
                      currentPage === totalPages
                        ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <FiChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default CardList;
