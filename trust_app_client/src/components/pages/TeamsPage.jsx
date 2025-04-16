import defaultPic from "../../assets/children/profile_pic_default.webp";
import apsara from "../../assets/team/apsara.jpg";
import lokesh from "../../assets/team/lokesh.jpg";
import suma from "../../assets/team/suma.jpeg";
import { UsersIcon } from "@heroicons/react/20/solid";

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

export default function TeamsPage() {
  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-platinum font-bold text-4xl  flex justify-center items-center gap-2">
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
                  className="object-center object-cover w-full h-full"
                  src={member.image}
                  alt={member.name}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-3/5 text-center p-6 md:p-4 space-y-2 my-auto ">
                <p className="text-xl text-black font-bold">{member.name}</p>
                <p className="text-base text-gray-900 font-medium">
                  {member.title}
                </p>
                <p className="text-sm text-gray-900">{member.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
