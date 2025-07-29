import { useEffect, useState } from "react";
import axios from "axios";
import { FaBullhorn } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/announcements`)
      .then((res) => setAnnouncements(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 md:p-12 bg-white">
      {/* Heading */}
      <div className="flex justify-center items-center gap-3 mb-8">
        <FaBullhorn className="text-blue-600 text-3xl" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center">
          Latest Announcements
        </h1>
      </div>

      {announcements.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No announcements yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {announcements.map((a) => (
            <div
              key={a._id}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
            >
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {a.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 whitespace-pre-line leading-relaxed mb-4">
                {a.description}
              </p>

              {/* Date */}
              <div className="flex justify-end items-center">
                <span className="flex items-center gap-2 text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                  <BsCalendarDate className="text-blue-600" />
                  Posted: {new Date(a.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcement;
