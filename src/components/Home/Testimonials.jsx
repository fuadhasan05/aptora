import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The management team is incredibly responsive. Any maintenance issues are resolved within hours.",
      author: "Sarah K.",
      role: "Resident for 3 years",
      rating: 5
    },
    {
      quote: "Best apartment I've lived in. The amenities and location are unmatched in this price range.",
      author: "Michael T.",
      role: "Resident for 1 year",
      rating: 5
    },
    {
      quote: "Moving here was the best decision. The community events make it feel like home.",
      author: "Priya M.",
      role: "Resident for 2 years",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-2 md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Resident <span className="text-secondary">Testimonials</span>
          </h2>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            Hear what our residents say about living here
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-base-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-base-300"
            >
              <FaQuoteLeft className="text-primary/30 text-3xl mb-4" />
              <p className="text-lg text-base-content/90 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-6">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-base-content">{testimonial.author}</h4>
                  <p className="text-sm text-base-content/70">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;