import { useEffect, useState } from "react";
import axios from "axios";
import { FaBullhorn } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/announcements`)
      .then((res) => {
        setAnnouncements(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-base-100 text-base-content">
      <div className="container mx-auto">
        {/* Heading with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
            <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto"></div>
          </div>
          <div className="inline-flex items-center justify-center bg-blue-100 rounded-full p-3 mb-4 shadow-lg">
            <FaBullhorn className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Community Announcements
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stay updated with the latest news and important information
          </p>
        </div>

        {/* Announcements Grid */}
        {announcements.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No announcements yet
            </h3>
            <p className="text-gray-500">
              Check back later for community updates
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((a) => (
              <div
                key={a._id}
                className="group relative bg-base-200 text-base-content rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-100"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600">
                    {a.title}
                  </h2>

                  {/* Description */}
                  <p className=" mb-6 leading-relaxed whitespace-pre-line">
                    {a.description}
                  </p>

                  {/* Date and decorative elements */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="flex items-center text-sm text-gray-500">
                      <BsCalendarDate className="mr-2 text-blue-500" />
                      {new Date(a.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      New
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcement;