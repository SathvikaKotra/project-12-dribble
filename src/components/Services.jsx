import React from "react";
import { Brain, MessageCircle, Calendar, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Individual Therapy",
      description:
        "One-on-one sessions with licensed therapists specializing in anxiety, depression, trauma, and more.",
      features: [
        "Personalized treatment plans",
        "Flexible scheduling",
        "Multiple therapy approaches",
      ],
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Cognitive Behavioral Therapy",
      description:
        "Evidence-based CBT techniques to help identify and change negative thought patterns and behaviors.",
      features: [
        "Structured approach",
        "Practical tools",
        "Measurable outcomes",
      ],
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Online Sessions",
      description:
        "Convenient virtual therapy sessions from the comfort of your own home with secure video platforms.",
      features: [
        "Secure & private",
        "Flexible scheduling",
        "Accessible anywhere",
      ],
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Wellness Programs",
      description:
        "Structured programs focusing on stress management, mindfulness, and building healthy habits.",
      features: ["Group sessions", "Expert guidance", "Ongoing support"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of mental health services designed to
            meet your unique needs and support your journey toward better mental
            wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
