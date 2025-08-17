import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaHeadset,
  FaBusinessTime,
  FaCommentDots,
  FaPaperPlane,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import { MdOutlineSupportAgent, MdOutlineContactSupport } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
import Button from "../../components/Shared/Button/Button";
import toast from "react-hot-toast";

const ContactPage = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: <FaHeadset className="text-3xl text-purple-500" />,
      title: "Customer Care",
      description: "For general inquiries and support",
      contact: "support@aptora.com",
      hours: "24/7 Availability",
      badge: "Fast Response",
    },
    {
      icon: <FaBusinessTime className="text-3xl text-blue-500" />,
      title: "Sales Team",
      description: "For business and partnership inquiries",
      contact: "sales@aptora.com",
      hours: "Mon-Fri, 9AM-6PM",
      badge: "Expert Guidance",
    },
    {
      icon: <MdOutlineSupportAgent className="text-3xl text-green-500" />,
      title: "Technical Support",
      description: "For platform assistance",
      contact: "tech@aptora.com",
      hours: "Mon-Sun, 8AM-10PM",
      badge: "Quick Resolution",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-base-200" : "bg-base-200"
      }`}
    >
      {/* Hero Section with Gradient */}
      <div
        className={`bg-gradient-to-r ${
          theme === "dark"
            ? "from-secondary to-primary"
            : "from-primary to-secondary "
        } text-white py-20`}
      >
        <div className="container mx-auto px-2 md:px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MdOutlineContactSupport className="text-5xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How Can We Help You?
            </h1>
            <p className="text-xl opacity-90">
              Our team is ready to assist with all your property management
              needs. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Form Card */}
          <div className="lg:w-1/2">
            <div
              className={`rounded-xl overflow-hidden border border-base-300 ${
                theme === "dark" ? "bg-base-100" : "bg-base-100"
              }`}
            >
              <div
                className={`p-6 ${
                  theme === "dark" ? "bg-base-300" : "bg-base-200"
                } flex items-center gap-4`}
              >
                <FaPaperPlane className="text-2xl text-blue-500" />
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "border-gray-300"
                      }`}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        theme === "dark"
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "border-gray-300"
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300"
                    }`}
                    placeholder="+880 1234 567890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sales">Sales Inquiry</option>
                    <option value="Support">Technical Support</option>
                    <option value="Feedback">Product Feedback</option>
                    <option value="Partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="privacy"
                    className={`ml-2 text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    I agree to the{" "}
                    <a
                      href="/privacy"
                      className={`underline hover:text-blue-600 ${
                        theme === "dark"
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600"
                      }`}
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms"
                      className={`underline hover:text-blue-600 ${
                        theme === "dark"
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600"
                      }`}
                    >
                      terms of service
                    </a>
                  </label>
                </div>
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="mt-4 w-full flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane /> Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  theme === "dark" ? "bg-base-100" : "bg-white"
                } shadow-sm`}
              >
                <FaShieldAlt className="text-green-500 text-xl" />
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Secure Data
                </span>
              </div>
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  theme === "dark" ? "bg-base-100" : "bg-white"
                } shadow-sm`}
              >
                <FaHandshake className="text-blue-500 text-xl" />
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Trusted Partner
                </span>
              </div>
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  theme === "dark" ? "bg-base-100" : "bg-white"
                } shadow-sm`}
              >
                <MdOutlineSupportAgent className="text-purple-500 text-xl" />
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden border border-base-300 ${
                    theme === "dark" ? "bg-base-100" : "bg-base-100"
                  }`}
                >
                  <div
                    className={`p-6 flex items-start gap-6 ${
                      theme === "dark" ? "bg-base-300" : "bg-base-200"
                    }`}
                  >
                    <div className="p-3 rounded-full bg-white shadow-md">
                      {method.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {method.title}
                      </h3>
                      <p
                        className={`mt-1 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <h4
                          className={`text-sm font-medium ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Contact
                        </h4>
                        <p
                          className={`text-lg font-medium ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {method.contact}
                        </p>
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-medium ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          Hours
                        </h4>
                        <p
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          {method.hours}
                        </p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium self-start">
                        {method.badge}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Office Location */}
            <div
              className={`rounded-xl border border-base-300 overflow-hidden ${
                theme === "dark" ? "bg-base-100" : "bg-base-100"
              }`}
            >
              <div
                className={`p-6 ${
                  theme === "dark" ? "bg-base-300" : "bg-base-200"
                } flex items-center gap-4`}
              >
                <FaMapMarkerAlt className="text-2xl text-red-500" />
                <h2 className="text-2xl font-bold">Our Headquarters</h2>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-red-100 text-red-500">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Aptora Technologies Ltd.
                    </h3>
                    <p
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      House #12, Road #55, Gulshan-2
                      <br />
                      Dhaka 1212, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    title="Aptora Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9037251240264!2d90.27582867534445!3d23.780887488614195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76f3d09c0ff%3A0x6a0e4e9ec3a1e95d!2sGulshan%202%20Dhaka!5e0!3m2!1sen!2sbd!4v1692522354879!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={theme === "dark" ? "grayscale-[30%]" : ""}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
