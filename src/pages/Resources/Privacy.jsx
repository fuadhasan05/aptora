import React, { useState } from "react";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaDatabase,
  FaCookieBite,
  FaInfoCircle,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import Button from "../../components/Shared/Button/Button";

const Privacy = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FaInfoCircle className="text-blue-500" />,
    },
    {
      id: "collection",
      title: "Information We Collect",
      icon: <FaDatabase className="text-purple-500" />,
    },
    {
      id: "use",
      title: "How We Use Information",
      icon: <FaUserShield className="text-green-500" />,
    },
    {
      id: "sharing",
      title: "Sharing Information",
      icon: <FaShieldAlt className="text-yellow-500" />,
    },
    {
      id: "security",
      title: "Data Security",
      icon: <FaLock className="text-red-500" />,
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: <FaCookieBite className="text-indigo-500" />,
    },
  ];

  const privacyContent = {
    introduction: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
        <p className="mb-4">
          Welcome to Aptora. We
          respect your privacy and are committed to protecting your personal
          data. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our
          services.
        </p>
        <p>
          By accessing or using our services, you agree to the terms of this
          Privacy Policy. If you do not agree, please do not use our services.
        </p>
      </div>
    ),
    collection: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Information We Collect</h3>
        <p className="mb-4">
          We may collect the following types of information:
        </p>

        <h4 className="text-xl font-semibold mb-2">Personal Information</h4>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Payment details (if applicable)</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Non-Personal Information</h4>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Browser type</li>
          <li>IP address</li>
          <li>Device information</li>
          <li>Cookies and usage data</li>
        </ul>

        <p>
          We collect this information when you register, use our services, or
          interact with our website.
        </p>
      </div>
    ),
    use: (
      <div>
        <h3 className="text-2xl font-bold mb-4">How We Use Your Information</h3>
        <p className="mb-4">
          We may use your information for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To provide and maintain our services</li>
          <li>To process transactions</li>
          <li>To improve user experience</li>
          <li>To send updates and promotional materials (with your consent)</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">
          Legal Basis for Processing
        </h4>
        <p>
          We process your data based on your consent, contractual necessity,
          legal obligations, or legitimate interests.
        </p>
      </div>
    ),
    sharing: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Sharing and Disclosure</h3>
        <p className="mb-4">
          We do not sell your personal information. However, we may share data
          with:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Service providers (e.g., payment processors, hosting services)
          </li>
          <li>Business partners (with your consent)</li>
          <li>Law enforcement or government authorities when required</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">International Transfers</h4>
        <p>
          Your information may be transferred to and maintained on computers
          located outside of your country, where data protection laws may
          differ.
        </p>
      </div>
    ),
    security: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Data Security</h3>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal
          information:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Encryption of sensitive data</li>
          <li>Secure servers and networks</li>
          <li>Regular security audits</li>
          <li>Access controls</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Data Retention</h4>
        <p>
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this policy.
        </p>
      </div>
    ),
    cookies: (
      <div>
        <h3 className="text-2xl font-bold mb-4">
          Cookies and Tracking Technologies
        </h3>
        <p className="mb-4">
          We use cookies and similar tracking technologies to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Remember user preferences</li>
          <li>Analyze website traffic</li>
          <li>Improve user experience</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">Managing Cookies</h4>
        <p className="mb-4">
          You can control cookies through your browser settings. However,
          disabling cookies may affect website functionality.
        </p>

        <h4 className="text-xl font-semibold mb-2">Third-Party Analytics</h4>
        <p>
          We may use third-party services like Google Analytics to help analyze
          how users use our site.
        </p>
      </div>
    ),
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`bg-gradient-to-r ${
          theme === "dark"
            ? "from-secondary to-primary"
            : "from-primary to-secondary "
        } text-white py-20`}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <FaLock className="text-5xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl opacity-90">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div
              className={`rounded-xl shadow-lg overflow-hidden sticky top-8 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`p-4 ${
                  theme === "dark" ? "bg-gray-700" : "bg-blue-50"
                }`}
              >
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FaLock /> Contents
                </h2>
              </div>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-colors ${
                        activeSection === section.id
                          ? theme === "dark"
                            ? "bg-blue-900/30 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                          : theme === "dark"
                          ? "hover:bg-gray-700 text-gray-300"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span className="font-medium">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <div
              className={`rounded-xl shadow-lg overflow-hidden ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="p-8">
                <div
                  className={`mb-8 p-6 rounded-lg ${
                    theme === "dark" ? "bg-gray-700" : "bg-blue-50"
                  }`}
                >
                  <h2 className="text-2xl font-bold mb-2">
                    Your Privacy Matters
                  </h2>
                  <p>
                    We are committed to protecting your personal information and
                    being transparent about how we collect and use your data.
                  </p>
                </div>

                {/* Active Section Content */}
                <div
                  className={`prose max-w-none ${
                    theme === "dark" ? "prose-invert" : ""
                  }`}
                >
                  {privacyContent[activeSection]}
                </div>

                {/* Rights Section */}
                <div
                  className={`mt-12 p-6 rounded-lg border ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-700"
                      : "border-blue-200 bg-blue-50"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">Your Rights</h3>
                  <p className="mb-4">
                    Depending on your location, you may have certain rights
                    regarding your personal data:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccurate information</li>
                    <li>Right to request deletion of your data</li>
                    <li>Right to restrict or object to processing</li>
                    <li>Right to data portability</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the
                    information below.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Questions */}
            <div
              className={`mt-8 rounded-xl shadow-lg overflow-hidden ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`p-6 ${
                  theme === "dark" ? "bg-gray-700" : "bg-blue-50"
                } flex items-center gap-4`}
              >
                <FaInfoCircle className="text-2xl text-blue-500" />
                <h2 className="text-xl font-bold">Questions About Privacy?</h2>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  If you have any questions about our Privacy Policy or your
                  data, please contact our privacy team:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() =>
                      (window.location.href = "mailto:fuadhasan.web.com")
                    }
                  >
                    Email Privacy Team
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/contact")}
                    variant="secondary"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
