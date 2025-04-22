import defaultPic from "../../assets/children/profile_pic_default.webp";
import apsara from "../../assets/team/apsara.jpg";
import lokesh from "../../assets/team/lokesh.jpg";
import suma from "../../assets/team/suma.jpg";
import { UsersIcon } from "@heroicons/react/20/solid";

const team = [
  {
    name: "Suma R",
    title: "Founder",
    qualification: "B.Com., M.B.A.",
    image: suma,
    description: "A visionary leader and passionate changemaker, Mrs. R Suma laid the foundation of our organization with the dream of building a more inclusive and impactful future. With a heart for service and a mind for strategy, she continues to inspire the mission forward every day."
  },
  {
    name: "G Lokesh",
    title: "Trustee",
    qualification: "Chartered Accountant",
    image: lokesh,
    description: "His path to becoming a Chartered Accountant was not easy, that made him to believe every struggle had a purpose. So, he developed a heartfelt desire to be a guiding light for children who are not lacking in potential, but in support. He believes that if he can play even the smallest role in someone else's success story, his purpose is served."
  },
  {
    name: "Apsara B",
    title: "Trustee",
    qualification: "Chartered Accountant",
    image: apsara,
    description: "Having faced and overcome significant challenges in her own educational journey, Ms. Apsara B  her personal struggles became the driving force behind her vision to uplift underprivileged students. Her journey is not just one of resilience, but one that now creates ripples of hope in the lives of many."
  },
];

export default function TeamsPage() {
  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-platinum font-bold text-4xl flex justify-center items-center gap-2">
            <UsersIcon className="w-5 h-5" />
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="w-full md:w-2/5 h-80">
                <img
                  className="object-contain sm:object-contain md:object-cover w-full h-full"
                  src={member.image}
                  alt={member.name}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-3/5 p-4 flex flex-col justify-center space-y-2 text-center md:text-left">
                <p className="text-xl text-black font-bold">{member.name}</p>
                <p className="text-base text-gray-900 font-medium">{member.title}</p>
                <p className="text-sm text-gray-900">{member.qualification}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
