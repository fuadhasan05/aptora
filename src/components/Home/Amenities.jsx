import { FaSwimmingPool, FaWifi, FaDog, FaDumbbell, FaSnowflake, FaUmbrellaBeach } from 'react-icons/fa';
import { MdSecurity, MdLocalLaundryService } from 'react-icons/md';

const Amenities = () => {
  const amenities = [
    { icon: <FaSwimmingPool size={28} />, name: 'Infinity Pool', description: 'Rooftop pool with city views' },
    { icon: <FaWifi size={28} />, name: 'High-Speed WiFi', description: 'Fiber optic throughout building' },
    { icon: <MdSecurity size={28} />, name: '24/7 Security', description: 'Guarded premises with CCTV' },
    { icon: <FaDumbbell size={28} />, name: 'Fitness Center', description: 'Premium equipment & classes' },
    { icon: <FaSnowflake size={28} />, name: 'Central AC', description: 'Climate-controlled units' },
    { icon: <MdLocalLaundryService size={28} />, name: 'Laundry', description: 'On-site facilities' },
    { icon: <FaDog size={28} />, name: 'Pet Friendly', description: 'Dedicated pet areas' },
    { icon: <FaUmbrellaBeach size={28} />, name: 'Sun Deck', description: 'Outdoor relaxation space' },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Premium <span className="text-primary">Amenities</span>
          </h2>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            Designed for comfort and convenience in every detail
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <div 
              key={index}
              className="bg-base-200/50 hover:bg-base-200 transition-all duration-300 p-6 rounded-xl border border-base-300 flex flex-col items-center text-center hover:shadow-lg"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-base-content mb-1">{item.name}</h3>
              <p className="text-sm text-base-content/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Amenities;