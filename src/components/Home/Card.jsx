import { Link } from "react-router";

const Card = () => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Available Apartment
        </h2>

        {/* Apartment Card */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
          {/* Image */}
          <img
            src="https://i.ibb.co/n3tfShv/apartment1.jpg"
            alt="Apartment 205"
            className="w-full h-56 object-cover"
          />

          {/* Details */}
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Apartment 205
            </h3>
            <p className="text-gray-600">
              <strong>Floor:</strong> 2
            </p>
            <p className="text-gray-600">
              <strong>Block:</strong> B
            </p>
            <p className="text-gray-700 font-semibold mt-2">Rent: ৳12000</p>

            {/* Agreement Button */}
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200">
              Request Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
