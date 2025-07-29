import React, { useState } from "react";
import Card from "./Card";

const CardList = ({ apartments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

  const apartmentsPerPage = 6;

  // Filter apartments: hide rented & filter by rent range
  const filteredApartments = apartments.filter((apartment) => {
    // 1. Hide apartments with status: rented
    if (apartment.status === "rented") return false;

    // 2. Rent filter
    const rent = parseInt(apartment.rent);
    const min = minRent ? parseInt(minRent) : 0;
    const max = maxRent ? parseInt(maxRent) : Infinity;
    return rent >= min && rent <= max;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredApartments.length / apartmentsPerPage);
  const indexOfLast = currentPage * apartmentsPerPage;
  const indexOfFirst = indexOfLast - apartmentsPerPage;
  const currentApartments = filteredApartments.slice(indexOfFirst, indexOfLast);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 when range changes
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setMinRent("");
    setMaxRent("");
    setCurrentPage(1);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Search Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 mb-10">
        <h2 className="text-white text-2xl font-semibold mb-8 text-center">
          Search Apartments by Rent Range
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="number"
            placeholder="Min Rent (৳)"
            value={minRent}
            onChange={handleInputChange(setMinRent)}
            className="border bg-white border-purple-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Max Rent (৳)"
            value={maxRent}
            onChange={handleInputChange(setMaxRent)}
            className="border bg-white border-purple-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none"
          />
          <button
            onClick={handleClearFilters}
            className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Apartment Grid */}
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentApartments.length > 0 ? (
          currentApartments.map((apartment) => (
            <Card key={apartment._id} apartment={apartment} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg font-medium">
            😕 No apartments found in this rent range.
          </p>
        )}
      </div>

      {/* Pagination */}
      {filteredApartments.length > apartmentsPerPage && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          {/* Previous Button */}
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentPage === number
                  ? "bg-blue-700 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}

          {/* Next Button */}
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
