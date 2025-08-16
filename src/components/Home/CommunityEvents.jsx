import { FaCalendarAlt, FaUsers, FaGlassCheers, FaChild } from 'react-icons/fa';
import { MdSportsVolleyball, MdOutlinePets } from 'react-icons/md';

const CommunityEvents = () => {
  const upcomingEvents = [
    {
      title: "Resident Mixer",
      date: "June 15, 2023",
      time: "6:00 PM",
      icon: <FaGlassCheers className="text-pink-500" size={20} />,
      description: "Meet your neighbors at our rooftop social hour"
    },
    {
      title: "Yoga in the Park",
      date: "Every Saturday",
      time: "8:00 AM",
      icon: <MdSportsVolleyball className="text-emerald-500" size={20} />,
      description: "Free community yoga sessions"
    },
    {
      title: "Pet Meetup",
      date: "June 22, 2023",
      time: "4:00 PM",
      icon: <MdOutlinePets className="text-amber-500" size={20} />,
      description: "Bring your furry friends to our dog park"
    },
    {
      title: "Kids Art Workshop",
      date: "June 25, 2023",
      time: "10:00 AM",
      icon: <FaChild className="text-blue-500" size={20} />,
      description: "Creative activities for young residents"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Community
            </span> & Events
          </h2>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            Building connections and creating memorable experiences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Events Calendar */}
          <div className="lg:w-2/3 bg-base-100 rounded-xl shadow-md overflow-hidden border border-base-300">
            <div className="bg-primary text-primary-content p-4 flex items-center gap-3">
              <FaCalendarAlt size={24} />
              <h3 className="text-2xl font-semibold">Upcoming Events</h3>
            </div>
            
            <div className="divide-y divide-base-300">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-6 hover:bg-base-200/50 transition-colors duration-200">
                  <div className="flex gap-4">
                    <div className="bg-base-200 p-3 rounded-lg">
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <h4 className="text-xl font-semibold text-base-content">{event.title}</h4>
                        <div className="flex items-center gap-2 text-sm bg-base-200 px-3 py-1 rounded-full">
                          <span className="font-medium">{event.date}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-base-content/80">{event.description}</p>
                      <button className="mt-3 text-primary hover:text-primary-focus font-medium text-sm flex items-center gap-1">
                        Learn more →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Highlights */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-base-100 p-6 rounded-xl shadow-md border border-base-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <FaUsers size={20} />
                </div>
                <h3 className="text-xl font-semibold text-base-content">Resident Portal</h3>
              </div>
              <p className="text-base-content/80 mb-4">
                Access our exclusive resident portal to connect with neighbors, join committees, and participate in community decisions.
              </p>
              <button className="btn btn-secondary btn-sm">Join Now</button>
            </div>

            <div className="bg-base-100 p-6 rounded-xl shadow-md border border-base-300">
              <h3 className="text-xl font-semibold text-base-content mb-4">Community Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base-content/90">Private Facebook Group</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base-content/90">Monthly Newsletter</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base-content/90">Resident App</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base-content/90">Suggestion Box</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-base-content mb-4">Want to host your own event?</h3>
          <p className="text-base-content/80 mb-6 max-w-2xl mx-auto">
            Our community spaces are available for resident-organized activities, classes, and gatherings.
          </p>
          <button className="btn btn-primary px-8">Propose an Event</button>
        </div>
      </div>
    </section>
  );
};
export default CommunityEvents;