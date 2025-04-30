import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/20/solid";
import collageImg from "../../assets/programs_collage.jpg";
import { useEffect, useState } from "react";
import { useGlobalData } from "../../GlobalDataContext";

const ProgramsPage = () => {
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
      icon: <AcademicCapIcon className="w-8 h-8 text-blue-500" />,
      title: "Scholarships",
      desc: scholarship,
    },
    {
      icon: <BuildingLibraryIcon className="w-8 h-8 text-green-500" />,
      title: "School Support",
      desc: schoolSupport,
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8 text-yellow-500" />,
      title: "Vocational Training",
      desc: vocTraining,
    },
  ];

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
                  <p className="text-gray-600 mt-1">{prog.desc || "Loading..."}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description Paragraph */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg">
            {briefDescription || "Loading program description..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPage;



// const currentTime = new Date().getTime();
// const meetingStartTime = new Date(this.meetings[i].starttime).getTime();
// const meetingEndTime = new Date(this.meetings[i].endtime).getTime();

// const allowJoinBefore = 15 * 60 * 1000; // 15 minutes (you can change 15 to anything)

// const isJoinPeriodActive =
//   currentTime >= (meetingStartTime - allowJoinBefore) &&
//   currentTime <= meetingEndTime;

// const disableButton = !isJoinPeriodActive;

// this.meetings[i] = {
//   ...this.meetings[i],
//   ...startMeeting,
//   disableButton: disableButton
// };
