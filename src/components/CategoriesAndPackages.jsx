import React, { useState, useEffect } from "react";
import {
  FiFilm,
  FiTv,
  FiYoutube,
  FiCpu,
  FiCode,
  FiImage,
  FiPlay,
  FiX,
  FiPlayCircle,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";

const categoriesData = [
  {
    name: "Streaming",
    icon: <FiFilm className="text-2xl" />,
    subcategories: [
      { name: "Netflix", icon: <FiTv /> },
      { name: "Hulu", icon: <FiPlay /> },
      { name: "Disney+", icon: <FiYoutube /> },
      { name: "Prime Video", icon: <FiPlayCircle /> },
    ],
  },
  {
    name: "AI Tools",
    icon: <FiCpu className="text-2xl" />,
    subcategories: [
      { name: "ChatGPT", icon: <FiCode /> },
      { name: "MidJourney", icon: <FiImage /> },
      { name: "D-ID", icon: <FiCpu /> },
      { name: "Runway", icon: <FiCode /> },
    ],
  },
  {
    name: "Gaming",
    icon: <FiPlay className="text-2xl" />,
    subcategories: [
      { name: "Steam", icon: <FiPlay /> },
      { name: "Xbox Game Pass", icon: <FiX /> },
      { name: "PlayStation Plus", icon: <FiPlayCircle /> },
    ],
  },
];

const allPackages = {
  Netflix: {
    name: "Basic",
    price: "$4.99",
    duration: "1 month",
    features: ["HD Streaming", "1 Device", "Email Support"],
  },
  Hulu: {
    name: "Standard",
    price: "$9.99",
    duration: "3 months",
    features: ["Full HD Streaming", "2 Devices", "Priority Support"],
  },
  "Disney+": {
    name: "Premium",
    price: "$14.99",
    duration: "6 months",
    features: ["4K Streaming", "4 Devices", "24/7 Support", "Free Trial"],
  },
  "Prime Video": {
    name: "Standard",
    price: "$9.99",
    duration: "3 months",
    features: ["Full HD Streaming", "2 Devices", "Priority Support"],
  },
  ChatGPT: {
    name: "Premium",
    price: "$14.99",
    duration: "6 months",
    features: ["Unlimited Access", "Priority API", "Community Access"],
  },
  MidJourney: {
    name: "Basic",
    price: "$4.99",
    duration: "1 month",
    features: ["Limited Prompts", "Standard Queue"],
  },
  "D-ID": {
    name: "Standard",
    price: "$9.99",
    duration: "3 months",
    features: ["Video Avatars", "API Access"],
  },
  Runway: {
    name: "Premium",
    price: "$14.99",
    duration: "6 months",
    features: ["Unlimited Video Exports", "Pro Editing Tools"],
  },
  Steam: {
    name: "Basic",
    price: "$4.99",
    duration: "1 month",
    features: ["Game Sharing", "Community Market Access"],
  },
  "Xbox Game Pass": {
    name: "Standard",
    price: "$9.99",
    duration: "3 months",
    features: ["Access to 100+ Games", "Cloud Gaming"],
  },
  "PlayStation Plus": {
    name: "Premium",
    price: "$14.99",
    duration: "6 months",
    features: [
      "Exclusive Discounts",
      "Free Monthly Games",
      "Online Multiplayer",
    ],
  },
};

const CategoriesAndPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    categoriesData[0].name
  );
  const [selectedService, setSelectedService] = useState(
    categoriesData[0].subcategories[0].name
  );

  useEffect(() => {
    const defaultSub = categoriesData[0].subcategories[0].name;
    setSelectedService(defaultSub);
  }, []);

  const handleCategoryClick = (catName) => {
    setSelectedCategory(catName);
    const defaultSub = categoriesData.find((c) => c.name === catName)
      ?.subcategories[0].name;
    setSelectedService(defaultSub);
  };

  return (
    <div className="p-6 mx-auto  text-white">
      {/* Categories Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categoriesData.map((cat, idx) => (
          <div
            key={idx}
            className={`card w-72 h-44 cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 ${
              selectedCategory === cat.name
                ? "border-cyan-500 bg-gray-800 scale-105 shadow-lg shadow-cyan-500/20"
                : "border-gray-700 bg-gray-800 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            }`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <div className="card-body items-center text-center justify-center">
              <div
                className={`mb-2 text-3xl ${
                  selectedCategory === cat.name ? "text-cyan-400" : "text-white"
                }`}
              >
                {cat.icon}
              </div>
              <h3
                className={`card-title text-2xl font-semibold ${
                  selectedCategory === cat.name ? "text-cyan-400" : "text-white"
                }`}
              >
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Services Section - Now matching category card dimensions */}
      {selectedCategory && (
        <div className="mt-8 p-8 bg-gray-800/70 rounded-box shadow-xl border border-gray-700 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-cyan-400">
              {selectedCategory} Services
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesData
              .find((cat) => cat.name === selectedCategory)
              ?.subcategories.map((sub, idx) => (
                <div
                  key={idx}
                  className={`card w-full h-44 cursor-pointer transform transition-all duration-300 hover:scale-105 border-2 ${
                    selectedService === sub.name
                      ? "border-cyan-500 bg-gray-700 scale-105 shadow-lg shadow-cyan-500/20"
                      : "border-gray-600 bg-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                  }`}
                  onClick={() => setSelectedService(sub.name)}
                >
                  <div className="card-body items-center text-center justify-center p-4">
                    <div
                      className={`text-3xl mb-2 ${
                        selectedService === sub.name
                          ? "text-cyan-400"
                          : "text-white"
                      }`}
                    >
                      {sub.icon}
                    </div>
                    <h4
                      className={`text-xl font-semibold ${
                        selectedService === sub.name
                          ? "text-cyan-400"
                          : "text-white"
                      }`}
                    >
                      {sub.name}
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Package Details */}
      {selectedService && (
        <div className="p-6 max-w-6xl mx-auto mt-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
            {selectedService} Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="card w-full max-w-sm shadow-2xl bg-gray-800/80 border-2 border-cyan-500/50 backdrop-blur-sm">
              <div className="card-body text-center">
                <h3 className="card-title text-3xl font-bold mb-2 justify-center text-white">
                  {allPackages[selectedService].name}{" "}
                  <FiAward className="ml-2 text-cyan-400" />
                </h3>
                <div className="text-5xl font-extrabold mb-4 text-cyan-400">
                  {allPackages[selectedService].price}
                </div>
                <div className="text-lg text-gray-300 mb-6">
                  {allPackages[selectedService].duration}
                </div>
                <div className="space-y-4 text-lg">
                  {allPackages[selectedService].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center text-white"
                    >
                      <FiCheckCircle className="text-cyan-400 mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 btn bg-cyan-600 hover:bg-cyan-500 border-none text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesAndPackages;
