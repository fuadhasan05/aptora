import React from "react";
import {
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineSupportAgent } from "react-icons/md";
import TeamPhoto from "../../assets/images/aptora-team.jpg";
import BuildingPhoto from "../../assets/images/banner-1.jpg";
import Button from "../../components/Shared/Button/Button";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    toast.error("Please Create Acount first!");
    navigate("/login");
  };

  const features = [
    {
      icon: <FaBuilding className="text-primary text-3xl" />,
      title: "Modern Property Management",
      description:
        "Streamlined solutions for residential and commercial buildings of all sizes",
    },
    {
      icon: <FaUsers className="text-secondary text-3xl" />,
      title: "Resident-Centric Approach",
      description: "Designed with resident experience as our top priority",
    },
    {
      icon: <FaChartLine className="text-accent text-3xl" />,
      title: "Data-Driven Decisions",
      description: "Real-time analytics for optimal building operations",
    },
    {
      icon: <FaShieldAlt className="text-success text-3xl" />,
      title: "Enterprise Security",
      description: "Bank-grade security protecting all your data",
    },
    {
      icon: <FaLeaf className="text-warning text-3xl" />,
      title: "Sustainable Solutions",
      description: "Eco-friendly features to reduce environmental impact",
    },
    {
      icon: <MdOutlineDesignServices className="text-danger text-3xl" />,
      title: "Customizable Platform",
      description: "Tailored to your building's specific needs",
    },
  ];

  const stats = [
    { value: "500+", label: "Properties Managed" },
    { value: "95%", label: "Resident Satisfaction" },
    { value: "24/7", label: "Support Availability" },
    { value: "10+", label: "Years Experience" },
  ];

  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-2 md:px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aptora</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Revolutionizing property management through technology, innovation,
            and exceptional service
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="lg:w-1/2">
              <img
                src={BuildingPhoto}
                alt="Aptora headquarters"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-base-content">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-base-content/80 mb-4">
                Founded in 2023, Aptora began as a small team of property
                managers and technologists who saw an opportunity to transform
                the industry. Frustrated with outdated systems, we set out to
                create a comprehensive solution that would benefit both property
                owners and residents.
              </p>
              <p className="text-lg text-base-content/80 mb-6">
                Today, we serve hundreds of properties across the country,
                helping managers streamline operations while delivering
                exceptional living experiences. Our platform continues to evolve
                with the latest technologies to meet the changing needs of
                modern communities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-base-200 p-4 rounded-lg text-center"
                  >
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-base-content/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-base-content">
            Our <span className="text-secondary">Mission</span>
          </h2>
          <p className="text-xl text-base-content/80 max-w-4xl mx-auto mb-12">
            To empower property managers with intuitive tools that enhance
            operational efficiency while creating thriving, connected
            communities where residents love to live.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-base-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-base-content">
                Vision
              </h3>
              <p className="text-base-content/80">
                To be the most trusted name in smart property management
                solutions worldwide.
              </p>
            </div>
            <div className="bg-base-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-base-content">
                Values
              </h3>
              <p className="text-base-content/80">
                Innovation, Integrity, Community, and Exceptional Service guide
                everything we do.
              </p>
            </div>
            <div className="bg-base-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-base-content">
                Promise
              </h3>
              <p className="text-base-content/80">
                Continuous improvement and 100% commitment to our clients'
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-base-content">
            Why Choose <span className="text-primary">Aptora</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-base-100 p-6 rounded-xl border border-base-300 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-base-content">
                  {feature.title}
                </h3>
                <p className="text-base-content/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-base-content">
                Meet Our <span className="text-accent">Team</span>
              </h2>
              <p className="text-lg text-base-content/80 mb-6">
                Our diverse team of property experts, software engineers, and
                customer success professionals brings decades of combined
                experience to deliver exceptional service.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <MdOutlineSupportAgent className="text-3xl text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-base-content">
                    Always Here to Help
                  </h3>
                  <p className="text-base-content/80">
                    Dedicated support team available around the clock
                  </p>
                </div>
              </div>
              <Button onClick={() => (window.location.href = "/contact")}>
                Contact Support
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img
                src={TeamPhoto}
                alt="Aptora team"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied property managers using Aptora today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleClick} variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
