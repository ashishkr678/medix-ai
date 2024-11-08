import React from "react";
import image1 from '../../assets/mission-images/edu.png';
import image2 from '../../assets/mission-images/opn.png';
import image3 from '../../assets/mission-images/add.png';
import image4 from '../../assets/mission-images/peh.png';

const missionItems = [
  {
    title: "Enhance Disease Understanding",
    description: "Utilize genetic data to reveal disease mechanisms and risk factors. By analyzing large genetic datasets, HelixDiscovery™ identifies patterns that highlight the causes of various diseases. This insight supports the development of targeted therapies and interventions, improving disease management.",
    image: image1,
    link: "/",
  },
  {
    title: "Optimize Precision Nutrition",
    description: "Analyze genetic profiles to provide personalized nutrition recommendations. HelixDiscovery™ leverages AI to interpret genetic data and offer tailored dietary advice, helping individuals optimize their diets based on their unique genetic makeup. This approach aims to prevent and manage chronic diseases through precise nutritional strategies.",
    image: image2,
    link: "/",
  },
  {
    title: "Accelerate Drug Discovery",
    description: "Employ AI to discover new drug candidates and enhance existing treatments. HelixDiscovery™ uses machine learning algorithms to analyze chemical compounds and their interactions, identifying potential new drugs and improving current medications. This accelerates the drug discovery process, saving time and reducing costs.",
    image: image3,
    link: "/",
  },
  {
    title: "Promote Equity in Healthcare",
    description: "Address healthcare disparities by focusing on underserved populations. HelixDiscovery™ prioritizes research and solutions that benefit marginalized communities, ensuring that advancements in healthcare reach those who need them most. This commitment aims to improve overall health equity and address unique health challenges faced by these groups.",
    image: image4,
    link: "/",
  },
];

const MissionSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-18 lg:py-24">
      <div className="mx-auto -mt-8 max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our mission is to revolutionize healthcare through cutting-edge
            technology, making advanced health management accessible to
            everyone.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                index % 2 === 0 ? "" : "sm:flex-row-reverse"
              } bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300`}
              style={{ maxWidth: '1000px', margin: 'auto' }}
            >
              <div className="sm:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:w-1/2 flex flex-col justify-between bg-gradient-to-br from-[#1e3c72] via-[#183d7e] to-[#2c58a5]">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base text-white">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex justify-start">
                  <a
                    href={item.link}
                    className="text-yellow-300 hover:text-yellow-200 font-medium transition-transform transform hover:scale-110"
                  >
                    Explore More →
                  </a>
                </div>
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
          className="aspect-[1155/678] w-[120rem] h-[120rem] bg-gradient-to-tr from-[#643c95] to-[#0e0547] opacity-30"
        />
      </div>
    </div>
  );
};

export default MissionSection;
