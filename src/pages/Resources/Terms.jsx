import React, { useState } from "react";
import {
  FaGavel,
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaFileContract,
  FaHeadset,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import Button from "../../components/Shared/Button/Button";

const Terms = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FaFileContract className="text-blue-500" />,
    },
    {
      id: "accounts",
      title: "User Accounts",
      icon: <FaUserShield className="text-purple-500" />,
    },
    {
      id: "privacy",
      title: "Privacy",
      icon: <FaLock className="text-green-500" />,
    },
    {
      id: "liability",
      title: "Liability",
      icon: <FaShieldAlt className="text-yellow-500" />,
    },
    {
      id: "governance",
      title: "Governing Law",
      icon: <FaGavel className="text-red-500" />,
    },
  ];

  const termsContent = {
    introduction: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Welcome to Aptora</h3>
        <p className="mb-4">
          These Terms of Service ("Terms") govern your access to and use of
          Aptora's website, mobile applications, and services ("Services"). By
          accessing or using our Services, you agree to be bound by these Terms.
        </p>
        <p>
          Aptora provides property management solutions for residential and
          commercial properties. Our Services are designed to facilitate
          communication between property managers, residents, and service
          providers.
        </p>
      </div>
    ),
    accounts: (
      <div>
        <h3 className="text-2xl font-bold mb-4">User Accounts</h3>
        <h4 className="text-xl font-semibold mb-2">1. Account Creation</h4>
        <p className="mb-4">
          To access certain features, you must create an account. You agree to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your credentials</li>
          <li>Promptly update any changes to your information</li>
        </ul>

        <h4 className="text-xl font-semibold mb-2">
          2. Account Responsibilities
        </h4>
        <p>
          You are responsible for all activities under your account. Aptora
          reserves the right to suspend or terminate accounts that violate these
          Terms.
        </p>
      </div>
    ),
    privacy: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Privacy & Data Protection</h3>
        <p className="mb-4">
          Your privacy is important to us. Our Privacy Policy explains how we
          collect, use, and protect your personal information. By using our
          Services, you consent to our collection and use of data as described
          in the Privacy Policy.
        </p>

        <h4 className="text-xl font-semibold mb-2">Data Security</h4>
        <p className="mb-4">
          We implement industry-standard security measures including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>End-to-end encryption for sensitive data</li>
          <li>Regular security audits</li>
          <li>Multi-factor authentication options</li>
        </ul>

        <p>
          However, no method of transmission over the Internet is 100% secure.
          You use our Services at your own risk.
        </p>
      </div>
    ),
    liability: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Limitation of Liability</h3>
        <p className="mb-4">
          To the maximum extent permitted by law, Aptora shall not be liable for
          any indirect, incidental, special, consequential or punitive damages,
          or any loss of profits or revenues, whether incurred directly or
          indirectly.
        </p>

        <h4 className="text-xl font-semibold mb-2">Service Availability</h4>
        <p className="mb-4">
          We strive to maintain 24/7 availability but cannot guarantee
          uninterrupted service. We may perform maintenance that temporarily
          limits access.
        </p>

        <h4 className="text-xl font-semibold mb-2">Third-Party Services</h4>
        <p>
          Our Services may integrate with third-party applications. We are not
          responsible for their content or practices.
        </p>
      </div>
    ),
    governance: (
      <div>
        <h3 className="text-2xl font-bold mb-4">Governing Law</h3>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the
          laws of Bangladesh, without regard to its conflict of law provisions.
        </p>

        <h4 className="text-xl font-semibold mb-2">Dispute Resolution</h4>
        <p className="mb-4">
          Any disputes shall first attempt to be resolved through good-faith
          negotiations. If unresolved, disputes shall be submitted to binding
          arbitration in Dhaka.
        </p>

        <h4 className="text-xl font-semibold mb-2">Changes to Terms</h4>
        <p>
          We may modify these Terms at any time. Continued use after changes
          constitutes acceptance of the new Terms.
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
            <FaGavel className="text-5xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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
        <div className="flex flex-col lg:flex-row gap-8">
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
                  <FaFileContract /> Contents
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
                  <h2 className="text-2xl font-bold mb-2">Important Notice</h2>
                  <p>
                    Please read these Terms carefully before using Aptora's
                    Services. By accessing or using our Services, you agree to
                    be bound by these Terms and our Privacy Policy.
                  </p>
                </div>

                {/* Active Section Content */}
                <div
                  className={`prose max-w-none ${
                    theme === "dark" ? "prose-invert" : ""
                  }`}
                >
                  {termsContent[activeSection]}
                </div>

                {/* Acceptance Section */}
                <div
                  className={`mt-12 p-6 rounded-lg border ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-700"
                      : "border-blue-200 bg-blue-50"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">
                    Acceptance of Terms
                  </h3>
                  <p className="mb-4">
                    By using Aptora's Services, you acknowledge that you have
                    read, understood, and agree to be bound by these Terms of
                    Service.
                  </p>
                  <p>
                    If you do not agree with any part of these Terms, you must
                    not use our Services.
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
                <FaHeadset className="text-2xl text-blue-500" />
                <h2 className="text-xl font-bold">
                  Questions About These Terms?
                </h2>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  If you have any questions about our Terms of Service, please
                  contact our legal team:
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

export default Terms;
