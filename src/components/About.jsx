import React from "react";
import { Users, Heart, Shield, Smile } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassionate Care",
      description:
        "Our approach centers on empathy, understanding, and genuine care for your mental health journey.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Confidential",
      description:
        "Your privacy and safety are our top priorities. All sessions and information remain completely confidential.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description:
        "Work with licensed professionals who specialize in various areas of mental health and wellness.",
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Personalized Support",
      description:
        "Every treatment plan is tailored to your unique needs, goals, and circumstances.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">MindWell</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that mental health is fundamental to overall well-being.
            Our mission is to provide accessible, professional, and
            compassionate mental health services that help you thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Your Journey to Wellness Starts Here
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Take the first step toward better mental health. We're here to
            support you every step of the way.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
