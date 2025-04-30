import {
  EyeIcon,
  UsersIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { aboutContent } from "../data/aboutUsData";
import './AboutUsPage.css'
import GlobalData from "../AdminActivites/GlobalData";

const iconMap = {
  EyeIcon: EyeIcon,
  UsersIcon: UsersIcon,
  LightBulbIcon: LightBulbIcon,
};

export default function AboutUsPage() {
  return (
    <section id="about" className="bg-secondary px-6 md:px-16 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 font-bold text-platinum text-4xl text-center ">
          {aboutContent.sectionTitle}
        </h2>
        <div className="space-y-16">
          {aboutContent.sections.map((section, idx) => {
            const Icon = iconMap[section.icon];

            return (
              <div
                key={idx}
                className={`relative rounded-lg bg-white overflow-hidden shadow-lg flex flex-col-reverse md:flex-row ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Background Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-contain" id={section.id ? section.id : ""}
                  />
                </div>

                {/* Content Overlay */}
                <div className={`${idx % 2 === 0 ? "md:order-2" : "md:order-1"
                  } relative bg-black/50 md:bg-white text-white md:text-gray-800 w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center backdrop-blur-sm md:backdrop-blur-none`}>
                  <div className="flex items-center mb-4">
                    <Icon className="mr-3 w-10 h-10 text-blue-400 md:text-blue-500" />
                    <h3 className="font-semibold text-2xl">{section.title}</h3>
                  </div>
                  <p className="whitespace-pre-line">{section.content}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      {/* <GlobalData /> */}
    </section>
  );
}
