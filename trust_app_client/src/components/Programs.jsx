import {
    AcademicCapIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const programs = [
    {
        icon: <AcademicCapIcon className="w-10 h-10 text-blue-500" />,
        title: "Scholarships",
        desc: "Financial aid to students from low-income backgrounds to support higher education.",
    },
    {
        icon: <BuildingLibraryIcon className="w-10 h-10 text-green-500" />,
        title: "School Support",
        desc: "Infrastructure and educational resources to underserved schools.",
    },
    {
        icon: <BriefcaseIcon className="w-10 h-10 text-yellow-500" />,
        title: "Vocational Training",
        desc: "Training programs for adults to develop employable skills and build sustainable careers.",
    },
];

const programContent = {
    content: " At Akshara Charitable Trust, we offer a range of educational programs designed to uplift and empower communities. From providing scholarships to supporting schools with resources and infrastructure, to offering vocational training for adults, our initiatives focus on creating sustainable, impactful change. Through these programs, we aim to bridge the gap in educational access, ensuring that every individual has the opportunity to learn, grow, and succeed."
}

export default function Programs() {
    return (
        <section id="programs" className="py-16 px-6 md:px-16 ">
            <h3 className="text-4xl font-bold text-platinum mb-6 text-center">Our Programs</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
                {programs.map((prog, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition"
                    >
                        <div className="flex justify-center">{prog.icon}</div>
                        <h4 className="mt-4 text-xl font-bold text-gray-800">{prog.title}</h4>
                        <p className="text-gray-700 mt-2">{prog.desc}</p>
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto text-center mb-12">
                <p className="text-gray- text-lg max-w-3xl mx-auto">
                    {programContent.content}
                </p>
            </div>
        </section>
    );
}
