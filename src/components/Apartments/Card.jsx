import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Button from "../Shared/Button/Button";

const Card = ({ apartment }) => {
  const { apartmentImage, apartmentNo, floorNo, blockName, rent, _id } =
    apartment || {};
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAgreementRequest = async () => {
    // If user is not logged in, redirect to login
    if (!user) {
      toast.error("Please login to request an agreement");
      navigate("/login");
      return;
    }

    // Prepare agreement data
    const agreementData = {
      userName: user.displayName,
      userEmail: user.email,
      apartmentNo,
      floorNo,
      blockName,
      rent,
      status: "pending",
      requestDate: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/agreements`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(agreementData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Your request has been submitted successfully!");
      } else {
        toast.error(
          data.message || "You have already applied for this apartment."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit request. Please try again later.");
    }
  };

  return (
    <div
      key={_id}
      className="bg-base-100 text-base-content border border-base-300 rounded-xl overflow-hidden hover:shadow-lg"
    >
      {/* Image */}
      <img
        src={apartmentImage}
        alt={apartmentNo}
        className="w-full h-56 object-cover"
      />
      {/* Details */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-base-content mb-2">
          Apartment No: {apartmentNo}
        </h3>
        <p className="text-gray-600 dark:text-base-content">
          <strong>Floor:</strong> {floorNo}
        </p>
        <p className="text-gray-600 dark:text-base-content">
          <strong>Block:</strong> {blockName}
        </p>
        <p className="text-gray-700 dark:text-base-content font-semibold mt-2">Rent: ৳{rent}</p>

        {/* Agreement Button */}
        <Button
          className="mt-4 w-full"
          onClick={handleAgreementRequest}
          variant="primary"
        >
          Request Agreement
        </Button>
      </div>
    </div>
  );
};

export default Card;
