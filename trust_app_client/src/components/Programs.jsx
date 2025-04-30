import {
    AcademicCapIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
  } from "@heroicons/react/20/solid";
  import { useGlobalData } from "../GlobalDataContext";
  import { useEffect, useState } from "react";
  
  export default function Programs() {
    const globalData = useGlobalData();
  
    const [scholarship, setScholarship] = useState('');
    const [schoolSupport, setSchoolSupport] = useState('');
    const [vocTraining, setVocTraining] = useState('');
    const [briefDescription, setBriefDescription] = useState('');
  
    useEffect(() => {
      if (globalData.length > 0) {
        setScholarship(globalData.find(item => item.dataKey === 'home_programs_scholarship_card')?.dataValue || '');
        setSchoolSupport(globalData.find(item => item.dataKey === 'home_programs_school_support_card')?.dataValue || '');
        setVocTraining(globalData.find(item => item.dataKey === 'home_programs_vocational_training_card')?.dataValue || '');
        setBriefDescription(globalData.find(item => item.dataKey === 'home_programs_brief_description')?.dataValue || '');
      }
    }, [globalData]);
  
    const programs = [
      {
        icon: <AcademicCapIcon className="w-10 h-10 text-blue-500" />,
        title: "Scholarships",
        desc: scholarship,
      },
      {
        icon: <BuildingLibraryIcon className="w-10 h-10 text-green-500" />,
        title: "School Support",
        desc: schoolSupport,
      },
      {
        icon: <BriefcaseIcon className="w-10 h-10 text-yellow-500" />,
        title: "Vocational Training",
        desc: vocTraining,
      },
    ];
  
    return (
      <section id="programs" className="py-16 px-6 md:px-16">
        <h3 className="text-4xl font-bold text-platinum mb-6 text-center">Our Programs</h3>
  
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {programs.map((prog, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition"
            >
              <div className="flex justify-center">{prog.icon}</div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">{prog.title}</h4>
              <p className="text-gray-700 mt-2">{prog.desc || 'Loading...'}</p>
            </div>
          ))}
        </div>
  
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            {briefDescription || 'Loading program details...'}
          </p>
        </div>
      </section>
    );
  }
  