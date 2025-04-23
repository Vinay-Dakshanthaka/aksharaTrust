import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";
import collageImg from "../../assets/programs_collage.jpg";

const programs = [
  {
    icon: <AcademicCapIcon className="w-8 h-8 text-blue-500" />,
    title: "Scholarships",
    desc: "Financial aid for the education of students who are below the poverty line.",
  },
  {
    icon: <BuildingLibraryIcon className="w-8 h-8 text-green-500" />,
    title: "School Support",
    desc: "Provisions of infrastructure and educational resources.",
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-yellow-500" />,
    title: "Vocational Training",
    desc: "Training programs for adults to develop employable skills and build sustainable careers.",
  },
];

const  programContent = {
  content : "At Akshara Charitable Trust, we offer a range of educational programs designed to uplift and empower communities. From providing scholarships to supporting schools with resources and infrastructure, to offering vocational training for adults, our initiatives focus on creating sustainable, impactful change. Through these programs, we aim to bridge the gap in educational access, ensuring that every individual has the opportunity to learn, grow, and succeed."
}

const ProgramsPage = () => {
  return (
    <section id="programs" className="bg-white py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      Our Programs
    </h2>

    {/* Main Layout */}
    <div className="grid md:grid-cols-2 gap-10 items-stretch">
      {/* Image Collage */}
      <div className="flex">
        <img
          src={collageImg}
          alt="Programs collage"
          className="rounded-lg shadow-lg w-full object-cover object-center"
        />
      </div>

      {/* Programs List */}
      <div className="flex flex-col justify-center space-y-8">
        {programs.map((prog, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="shrink-0">{prog.icon}</div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                {prog.title}
              </h4>
              <p className="text-gray-600 mt-1">{prog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Description Paragraph */}
    <div className="mt-16 max-w-4xl mx-auto text-center">
      <p className="text-gray-700 text-lg">{programContent.content}</p>
    </div>
  </div>
</section>

  );
};

export default ProgramsPage;
