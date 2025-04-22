import {
  EyeIcon,
  UsersIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { aboutContent } from "../data/aboutUsData";
import './AboutUsPage.css'

const iconMap = {
  EyeIcon: EyeIcon,
  UsersIcon: UsersIcon,
  LightBulbIcon: LightBulbIcon,
};

export default function AboutUsPage() {
  return (
    <section id="about" className="bg-secondary py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-platinum mb-12">
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
                    className="object-contain w-full h-full" id={section.id ? section.id : ""}
                  />
                </div>

                {/* Content Overlay */}
                <div className={`${idx % 2 === 0 ? "md:order-2" : "md:order-1"
                  } relative bg-black/50 md:bg-white text-white md:text-gray-800 w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center backdrop-blur-sm md:backdrop-blur-none`}>
                  <div className="flex items-center mb-4">
                    <Icon className="w-10 h-10 text-blue-400 md:text-blue-500 mr-3" />
                    <h3 className="text-2xl font-semibold">{section.title}</h3>
                  </div>
                  <p className="whitespace-pre-line">{section.content}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
