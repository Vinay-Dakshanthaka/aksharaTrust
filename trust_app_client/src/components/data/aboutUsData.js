import visionAndMission from '../../assets/visionAndMission.jpg'
import childMirror from '../../assets/children/child_infront_mirror.jpg'
import beneficiaries from '../../assets/children/collage_images.jpg'

export const aboutContent = {
    sectionTitle: "About Us", 
    sections: [
      {
        icon: "EyeIcon",
        title: "Our Vision and Mission",
        content:
          "At Akshara Charitable Trust, our vision is to create a world where education is accessible to all, regardless of background, and where every individual has the opportunity to reach their full potential.\n\nOur mission is to provide quality education, empower underserved communities, and break the cycle of poverty through learning. \n\nWe are committed to creating lasting change by promoting education as the key to personal and societal transformation.",
        image: childMirror
        },
      {
        icon: "UsersIcon",
        title: "Who Are Our Beneficiaries?",
        content:
          "Our trust is dedicated to supporting individuals and communities who face barriers in accessing education. Our beneficiaries include:\n• Children and young adults from underprivileged communities who lack access to quality education.\n• Schools and educational institutions that require resources, infrastructure, and teacher training.\n• Students who need financial assistance, scholarships, or mentorship.\n• Adults seeking to enhance their skills through vocational training and adult education programs.\n\n We believe that every individual deserves the chance to learn, grow, and succeed, regardless of their circumstances.",
        image: beneficiaries
        },
      {
        icon: "LightBulbIcon",
        title: "Why Do We Exist?",
        content:
          "We exist because we believe that education is the foundation for a better, more equitable world. With millions of children and adults still lacking access to quality education, we are driven by the need to ensure that learning opportunities are available to all.\n\nOur trust was founded to address these disparities and make a lasting impact through accessible, high-quality education.\n\nBy supporting schools, providing scholarships, and offering training programs, we strive to empower individuals to break through barriers and unlock their potential. Through education, we can build a brighter, more inclusive future.",
        image: visionAndMission
        },
    ],
    image: visionAndMission
  };
  

  // Teams 
  // <section className="bg-gray-50 py-16 px-6 md:px-16 min-h-screen">
    //   <div className="max-w-6xl mx-auto text-center">
    //     <h3 className="text-4xl font-bold text-platinum mb-12">Meet Our Team</h3>
    //     <div className="grid md:grid-cols-3 gap-10">
    //       {team.map((member, idx) => (
    //         <div
    //           key={idx}
    //           className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
    //         >
    //           {member.image ? (
    //             <img
    //               src={member.image}
    //             // src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
    //               alt={member.name}
    //               className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
    //             />
    //           ) : (
    //             <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-200">
    //               <UsersIcon className="w-10 h-10 text-gray-500" />
    //             </div>
    //           )}

    //           <div className="text-xl font-semibold text-gray-800">{member.name}</div>
    //           <div className="text-sm text-blue-600 font-medium">{member.title}</div>
    //           <div className="text-gray-500 text-sm">{member.qualification}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>