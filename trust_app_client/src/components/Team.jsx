import { useNavigate } from 'react-router-dom'; // <-- import useNavigate
import defaultPic from "../assets/children/profile_pic_default.webp";
import apsara from "../assets/team/apsara.jpg";
import lokesh from "../assets/team/lokesh.jpg";
import suma from "../assets/team/suma.jpg";
import { UsersIcon } from '@heroicons/react/20/solid';

const team = [
  {
    name: "Suma R",
    title: "Founder",
    qualification: "B.Com., M.B.A.",
    image: suma,
    description:
      "A visionary leader and passionate changemaker, Mrs. R Suma laid the foundation of our organization with the dream of building a more inclusive and impactful future. With a heart for service and a mind for strategy, she continues to inspire the mission forward every day.",
  },
  {
    name: "G Lokesh",
    title: "Trustee",
    qualification: "Chartered Accountant",
    image: lokesh,
    description:
      "His path to becoming a Chartered Accountant was not easy, that made him to believe every struggle had a purpose. So, he developed a heartfelt desire to be a guiding light for children who are not lacking in potential, but in support. He believes that if he can play even the smallest role in someone else's success story, his purpose is served.",
  },
  {
    name: "Apsara B",
    title: "Trustee",
    qualification: "Chartered Accountant",
    image: apsara,
    description:
      "Having faced and overcome significant challenges in her own educational journey, Ms. Apsara B her personal struggles became the driving force behind her vision to uplift underprivileged students. Her journey is not just one of resilience, but one that now creates ripples of hope in the lives of many.",
  },
];

export default function Team() {
  const navigate = useNavigate(); 

  return (
    <section id="team" className="bg-gray-100 py-16 px-6 md:px-16">
      <h3 className="text-4xl font-bold text-center text-platinum mb-12">Our Team</h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center bg-white"
          >
            {/* Profile Image */}
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 mx-auto rounded-full object-cover mb-4"
              />
            ) : (
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-200">
                <UsersIcon className="w-10 h-10 text-gray-500" />
              </div>
            )}

            <div className="text-xl font-semibold text-gray-800">{member.name}</div>
            <div className="text-sm text-blue-600 font-medium">{member.title}</div>
            <div className="text-gray-500 text-sm mb-3">{member.qualification}</div>

            {/* Know More Link/Button */}
            <button
              onClick={() => navigate("/team")}
              className="mt-4 text-sm text-blue-600 hover:underline"
            >
              Know More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
