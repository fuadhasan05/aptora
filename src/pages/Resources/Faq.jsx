import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaUser,
  FaCreditCard,
  FaTools,
  FaQuestionCircle,
} from "react-icons/fa";
import Button from "../../components/Shared/Button/Button";
import { useTheme } from "../../context/ThemeContext";

const Faq = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      name: "General",
      icon: <FaQuestionCircle className="text-primary" />,
      questions: [
        {
          question: "What is Aptora?",
          answer:
            "Aptora is a comprehensive property management platform designed to streamline operations for residential and commercial buildings while enhancing the living experience for residents.",
        },
        {
          question: "How do I create an account?",
          answer:
            "You can create an account by clicking 'Sign Up' on our homepage or mobile app. Property managers will need an invitation code from their administrator.",
        },
        {
          question: "Is there a mobile app available?",
          answer:
            "No, currently we do not have a mobile app, but our web platform is fully responsive and optimized for mobile use.",
        },
      ],
    },
    {
      name: "Residents",
      icon: <FaUser className="text-secondary" />,
      questions: [
        {
          question: "How do I pay my rent online?",
          answer:
            "Log in to your resident portal, navigate to the 'Payments' section, and follow the instructions to make a secure payment via credit card or bank transfer.",
        },
        {
          question: "How do I submit a maintenance request?",
          answer:
            "From your dashboard, click 'Maintenance Request', fill out the form with details about the issue, and submit. You can track the status in real-time.",
        },
        {
          question: "Can I schedule building amenities?",
          answer:
            "Yes, the 'Amenities' section allows you to book common areas like the gym, party room, or guest suites according to your building's policies.",
        },
      ],
    },
    {
      name: "Property Managers",
      icon: <FaHome className="text-accent" />,
      questions: [
        {
          question: "How does Aptora help with property management?",
          answer:
            "Our platform provides tools for lease management, maintenance tracking, financial reporting, tenant communication, and more - all in one centralized system.",
        },
        {
          question: "Can I integrate with existing accounting software?",
          answer:
            "Yes, Aptora integrates with QuickBooks, Xero, and other major accounting platforms for seamless financial management.",
        },
        {
          question: "How do I onboard a new property?",
          answer:
            "Our implementation team will guide you through the setup process, including unit configuration, resident data import, and staff training.",
        },
      ],
    },
    {
      name: "Payments & Billing",
      icon: <FaCreditCard className="text-success" />,
      questions: [
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept all major credit cards, ACH bank transfers, and in some locations, digital wallets like Apple Pay and Google Pay.",
        },
        {
          question: "Are there any transaction fees?",
          answer:
            "Credit card payments incur a 2.9% fee, while ACH transfers are free. Property owners may choose to absorb these fees for their residents.",
        },
        {
          question: "How do I view my payment history?",
          answer:
            "All payment records are available in the 'Transactions' section of your account, with options to download statements or receipts.",
        },
      ],
    },
    {
      name: "Technical Support",
      icon: <FaTools className="text-warning" />,
      questions: [
        {
          question: "What are your support hours?",
          answer:
            "Our support team is available 24/7 via live chat and email. Phone support is available Monday-Friday from 8AM to 8PM EST.",
        },
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page and follow the instructions sent to your registered email address.",
        },
        {
          question: "Where can I find tutorial resources?",
          answer:
            "Visit our Help Center for video tutorials, user guides, and FAQs. We also offer weekly training webinars for new users.",
        },
      ],
    },
  ];

  return (
    <div className="bg-base-200 py-12 px-2 md:px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-base-content mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Find quick answers to common questions about Aptora's property
            management solutions.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-base-200/50 rounded-xl overflow-hidden shadow-sm border border-base-300"
            >
              <div className="flex items-center bg-base-300 px-6 py-4">
                <div className="mr-4 text-2xl">{category.icon}</div>
                <h2 className="text-xl font-semibold text-base-content">
                  {category.name}
                </h2>
              </div>

              <div className="divide-y divide-base-300">
                {category.questions.map((item, index) => (
                  <div key={index} className="px-6 py-4">
                    <button
                      onClick={() => toggleAccordion(`${catIndex}-${index}`)}
                      className="flex justify-between items-center w-full text-left"
                    >
                      <h3 className="text-lg font-medium text-base-content">
                        {item.question}
                      </h3>
                      {activeIndex === `${catIndex}-${index}` ? (
                        <FaChevronUp className="text-primary" />
                      ) : (
                        <FaChevronDown className="text-primary" />
                      )}
                    </button>

                    <div
                      className={`mt-2 text-base-content/80 overflow-hidden transition-all duration-300 ${
                        activeIndex === `${catIndex}-${index}`
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >
                      <div className="pb-4">
                        {item.answer}
                        {index === 0 && catIndex === 0 && (
                          <div className="mt-4">
                            <a
                              href="/contact"
                              className="text-primary hover:underline font-medium"
                            >
                              Contact our team for more information →
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div
          className={`bg-gradient-to-r ${
            theme === "dark"
              ? "from-secondary to-primary"
              : "from-primary to-secondary "
          } text-white mt-16 rounded-xl p-8 text-center`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our support team is ready to help you with any additional questions
            you may have.
          </p>
          <Button onClick={() => (window.location.href = "/contact")}>
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
