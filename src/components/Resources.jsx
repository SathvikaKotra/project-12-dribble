import React from "react";
import { BookOpen, Headphones, Smartphone, FileText } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Self-Help Guides",
      description:
        "Comprehensive guides on managing anxiety, depression, stress, and building resilience.",
      items: [
        "Anxiety Management Toolkit",
        "Depression Recovery Guide",
        "Stress Reduction Techniques",
      ],
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Meditation & Audio",
      description:
        "Guided meditations, breathing exercises, and relaxation audio content.",
      items: [
        "5-Minute Daily Meditations",
        "Sleep Stories",
        "Breathing Exercises",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description:
        "Recommended mental health apps for mood tracking, meditation, and daily wellness.",
      items: ["Mood Tracking Apps", "Meditation Apps", "Crisis Support Apps"],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Worksheets",
      description:
        "Downloadable worksheets and exercises to support your mental health journey.",
      items: ["CBT Worksheets", "Gratitude Journals", "Goal Setting Templates"],
    },
  ];

  const crisisResources = [
    { name: "National Suicide Prevention Lifeline", contact: "988" },
    { name: "Crisis Text Line", contact: "Text HOME to 741741" },
    { name: "SAMHSA National Helpline", contact: "1-800-662-HELP" },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mental Health <span className="text-green-600">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access a curated collection of tools, guides, and resources to
            support your mental wellness journey between sessions and in your
            daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
            >
              <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {resource.description}
              </p>
              <ul className="space-y-2">
                {resource.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm text-gray-700 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Crisis Resources */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-4">
            Emergency Mental Health Resources
          </h3>
          <p className="text-red-700 mb-4">
            If you're experiencing a mental health crisis or having thoughts of
            self-harm, please reach out immediately:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {crisisResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-red-200"
              >
                <h4 className="font-semibold text-red-800">{resource.name}</h4>
                <p className="text-red-700 font-medium">{resource.contact}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Access All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
