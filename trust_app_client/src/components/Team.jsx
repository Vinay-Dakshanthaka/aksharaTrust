import defaultPic from "../assets/children/profile_pic_default.webp"
import apsara from "../assets/team/apsara.jpg"
import lokesh from "../assets/team/lokesh.jpg"
import suma from "../assets/team/suma.jpeg"
import { UsersIcon } from '@heroicons/react/20/solid';

const team = [
  {
    name: "Suma R",
    title: "Founder",
    qualification: "B.Com., M.B.A.",
    image: suma,
  },
  {
    name: "G Lokesh",
    title: "Trustee",
    qualification: "Chartered Accountant",
    image: lokesh, 
  },
  {
    name: "Apsara B",
    title: "Trustee",
    qualification: "Chartered Accountant",
    image: apsara, 
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-gray-100 py-16 px-6 md:px-16">
      <h3 className="text-4xl font-bold text-center text-platinum mb-12">Our Team</h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
          >
            {/* Profile Image */}
            {member.image ? (
              <img
                src={member.image}
                // src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
            ) : (
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-200">
                <UsersIcon className="w-10 h-10 text-gray-500" />
              </div>
            )}

            <div className="text-xl font-semibold text-gray-800">{member.name}</div>
            <div className="text-sm text-blue-600 font-medium">{member.title}</div>
            <div className="text-gray-500 text-sm">{member.qualification}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
