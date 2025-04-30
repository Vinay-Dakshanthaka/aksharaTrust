import { useEffect, useState } from "react";
import axios from "axios";
import { UsersIcon } from "@heroicons/react/20/solid";
import { baseURL } from "../config/baseURL";

const fallbackImage = "https://lara.blr1.digitaloceanspaces.com/real_estate/aksharaTrust/gallery/317c018f-7969-401f-8c1a-ad23daa87409-Logo.jpeg.jpg";

export default function TeamsPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchMedia = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/media/all`);
      const mediaList = response.data.data;
  
      let teamList = mediaList.filter(item => item.category === "team" && item.visible === true);
  
      // Sort: role "Founder" first (case-insensitive, trimmed)
      teamList = teamList.sort((a, b) => {
        const roleA = (a.role?.trim().toLowerCase() || "");
        const roleB = (b.role?.trim().toLowerCase() || "");
  
        // Prioritize "founder" role first
        if (roleA === "founder" && roleB !== "founder") return -1;
        if (roleB === "founder" && roleA !== "founder") return 1;
  
        return 0; // Keep the original order for others
      });
  
      setTeamMembers(teamList);
    } catch (error) {
      console.error("Failed to fetch team data:", error);
    }
  };  
  
  useEffect(() => {
    fetchMedia();
  }, []);

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
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image */}
              <div className="w-full md:w-2/5 h-80">
                <img
                  className="object-contain sm:object-contain md:object-cover w-full h-full"
                  src={member.imageUrl || fallbackImage}
                  alt={member.name || "Team Member"}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-3/5 p-4 flex flex-col justify-center space-y-2 text-center md:text-left">
                <p className="text-xl text-black font-bold">{member.name}</p>
                <p className="text-base text-gray-900 font-medium">{member.role}</p>
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
