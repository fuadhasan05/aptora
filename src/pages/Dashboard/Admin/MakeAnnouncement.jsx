import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaBullhorn } from "react-icons/fa";

const MakeAnnouncement = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/announcements`,
        { title, description },
        { withCredentials: true }
      );
      toast.success("✅ Announcement created successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
      toast.error("❌ Error creating announcement");
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl border-t-4 border-blue-600">
        {/* Icon + Heading */}
        <div className="flex items-center justify-center mb-6">
          <FaBullhorn className="text-blue-600 text-4xl mr-2 animate-bounce" />
          <h2 className="text-3xl font-extrabold text-blue-700">
            Make an Announcement
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Announcement Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Gym Renovation Completed"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write the details here..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            🚀 Submit Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
