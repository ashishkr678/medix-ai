import React from "react";
import { FaNewspaper, FaCalendarAlt, FaLightbulb, FaCogs, FaArrowRight } from "react-icons/fa";

const updates = [
  {
    title: "New Feature Release",
    description:
      "We are excited to announce the release of our new feature that will enhance user experience and increase productivity. Stay tuned for more details and updates.",
    icon: <FaNewspaper />,
    link: "/",
  },
  {
    title: "Upcoming Event",
    description:
      "Join us for an exclusive webinar where industry experts will share their insights on the latest trends and best practices. Register now to secure your spot.",
    icon: <FaCalendarAlt />,
    link: "/",
  },
  {
    title: "Training Program",
    description:
      "We are thrilled to announce our new partnerships with leading companies in the industry. These collaborations will bring more value to our users.",
    icon: <FaLightbulb />,
    link: "/",
  },
  {
    title: "Product Updates",
    description:
      "Our team is constantly working to improve our product. Stay informed about the latest updates and enhancements. Your feedback is valuable to us.",
    icon: <FaCogs />,
    link: "/",
  },
];

const UpdateCard = ({ title, description, icon, link }) => {
  return (
    <div className="flex flex-col lg:flex-row p-6 bg-gradient-to-br from-[#1e3c72] via-[#183d7e] to-[#2c58a5] rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl">
      <div className="flex flex-col items-center lg:w-1/4 w-full mb-4 lg:mb-0">
        <div className="text-4xl text-yellow-300 mb-3">{icon}</div>
        <h3 className="text-lg font-bold leading-7 text-white text-center">{title}</h3>
      </div>
      <div className="flex flex-col justify-between lg:w-3/4 w-full pl-0 lg:pl-6">
        <p className="text-base text-gray-200 mb-4">{description}</p>
        <a
          href={link}
          className="self-end text-yellow-300 hover:text-yellow-200 font-semibold transition-transform transform hover:scale-110 flex items-center"
        >
          Get Started <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const UpdateSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl -mt-8 font-bold tracking-tight text-white sm:text-4xl">
            Latest News and Updates
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay updated with the latest news and updates from our team and the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {updates.map((update, index) => (
            <UpdateCard
              key={index}
              title={update.title}
              description={update.description}
              icon={update.icon}
              link={update.link}
            />
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
          className="aspect-[1155/678] w-[112.1875rem] h-[40rem] bg-gradient-to-tr from-[#643c95] to-[#0e0547] opacity-40"
        />
      </div>
    </div>
  );
};

export default UpdateSection;
