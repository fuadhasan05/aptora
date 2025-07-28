const Card = ({ apartment }) => {
  const { apartmentImage, apartmentNo, floorNo, blockName, rent, _id } =
    apartment || {};

  return (
    <div
      key={_id}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
    >
      {/* Image */}
      <img
        src={apartmentImage}
        alt={apartmentNo}
        className="w-full h-56 object-cover"
      />
      {/* Details */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Apartment No: {apartmentNo}
        </h3>
        <p className="text-gray-600">
          <strong>Floor:</strong> {floorNo}
        </p>
        <p className="text-gray-600">
          <strong>Block:</strong> {blockName}
        </p>
        <p className="text-gray-700 font-semibold mt-2">Rent: ৳{rent}</p>

        {/* Agreement Button */}
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200">
          Request Agreement
        </button>
      </div>
    </div>
  );
};

export default Card;
