import {
  ArrowPathIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const features = [
  {
    name: "Artificial Intelligence",
    description:
      "Leverage the power of AI to gain insights, predict outcomes, and optimize your health management strategies with precision.",
    icon: CpuChipIcon,
    link: "/",
  },
  {
    name: "Visualization Tools",
    description:
      "Transform complex data into easy-to-understand visual representations to facilitate better decision-making and analysis.",
    icon: ChartBarIcon,
    link: "/",
  },
  {
    name: "Virtual Simulation",
    description:
      "Experience realistic simulations that help you predict and analyze outcomes in a virtual environment, enhancing decision-making processes.",
    icon: CubeTransparentIcon,
    link: "/",
  },
  {
    name: "Genetic Analysis",
    description:
      "Unlock the secrets of genetics with our comprehensive analysis tools. From genome sequencing to gene expression analysis, we have you covered.",
    icon: ArrowPathIcon,
    link: "/",
  },
  {
    name: "Data Management",
    description:
      "Efficiently manage and organize your data with our advanced tools. Ensure data integrity and accessibility for all your needs.",
    icon: CloudArrowUpIcon,
    link: "/",
  },
  {
    name: "Advanced Security",
    description:
      "Protect your data with our state-of-the-art security features. Ensure your information is safe from unauthorized access and cyber threats.",
    icon: FingerPrintIcon,
    link: "/",
  },
];

const FeatureSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto lg:text-center">
          <h2 className="text-3xl -mt-6 font-bold tracking-tight text-white sm:text-4xl">
            Advanced Features
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience a wide range of features designed to provide
            comprehensive health management solutions.
          </p>
        </div>
        <div className="mt-16 max-w-lg mx-auto grid gap-10 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`relative p-6 rounded-lg shadow-lg flex flex-col bg-gradient-to-br from-[#1e3c72] via-[#183d7e] to-[#2c58a5] transition-transform transform hover:scale-105 hover:shadow-2xl ${
                index >= 3 ? "mt-6" : ""
              }`}
            >
              <div className="absolute -mt-12 flex items-center justify-center h-16 w-16 rounded-full bg-blue-800">
                <feature.icon className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-white">
                {feature.name}
              </h3>
              <p className="mt-4 text-base text-gray-200 flex-grow">
                {feature.description}
              </p>
              <div className="mt-4 flex justify-start">
                <a
                  href={feature.link}
                  className="text-yellow-300 hover:text-yellow-200 font-medium transition-transform transform hover:scale-110"
                >
                  Explore More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)",
          }}
          className="aspect-[1155/678] w-[92.1875rem] h-[60rem] bg-gradient-to-tr from-[#643c95] to-[#0e0547] opacity-40"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
