import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import { useEffect, useState } from 'react'; 
import { UsersIcon } from '@heroicons/react/20/solid';
import { baseURL } from './config/baseURL';

const fallbackImage =
  'https://lara.blr1.digitaloceanspaces.com/real_estate/aksharaTrust/gallery/317c018f-7969-401f-8c1a-ad23daa87409-Logo.jpeg.jpg';

export default function Team() {
  const navigate = useNavigate();
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch team members dynamically
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/media/all`);
      const mediaList = response.data.data;

      // Filter by "team" category
      const teamList = mediaList.filter(item => item.category === 'team' && item.visible === true);

      // Sort: role "Founder" first (case-insensitive, trimmed)
      const sortedTeamList = teamList.sort((a, b) => {
        const roleA = (a.role?.trim().toLowerCase() || '');
        const roleB = (b.role?.trim().toLowerCase() || '');

        // Prioritize "founder" role first
        if (roleA === 'founder' && roleB !== 'founder') return -1;
        if (roleB === 'founder' && roleA !== 'founder') return 1;

        return 0; // Keep the original order for others
      });

      setTeamMembers(sortedTeamList);
    } catch (error) {
      console.error('Failed to fetch team data:', error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []); // Run once when the component mounts

  return (
    <section id="team" className="bg-gray-100 py-16 px-6 md:px-16">
      <h3 className="text-4xl font-bold text-center text-platinum mb-12">Our Team</h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center bg-white"
          >
            {/* Profile Image */}
            {member.imageUrl ? (
              <img
                src={member.imageUrl}
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
              onClick={() => navigate('/team')}
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
