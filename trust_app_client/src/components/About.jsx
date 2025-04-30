import { AcademicCapIcon, EyeIcon, SparklesIcon, UsersIcon } from "@heroicons/react/20/solid";
import aboutUs from "../assets/children/mother_teaching.jpg"
import { Link } from "react-router-dom";
import GlobalDataSettings from "./AdminActivites/GlobalDataSettings";
import { useGlobalData } from "../GlobalDataContext";
import { useEffect, useState } from "react";

export default function About() {
    const globalData = useGlobalData();

    const [vision, setVision] = useState();
    const [mission, setMission] = useState();
    const [beneficiaries, setBeneficiaries] = useState();
    const [existReason, setExistReason] = useState();

    useEffect(() => {
        if (globalData.length > 0) {
            const visionData = globalData.find(item => item.dataKey === 'home_about_our_vision');
            const missionData = globalData.find(item => item.dataKey === 'home_about_our_mission');
            const beneficiariesData = globalData.find(item => item.dataKey === 'home_about_our_beneficiaries');
            const existReasonData = globalData.find(item => item.dataKey === 'home_about_exist_reason');
            setVision(visionData?.dataValue);
            setMission(missionData?.dataValue);
            setBeneficiaries(beneficiariesData?.dataValue)
            setExistReason(existReasonData?.dataValue)
        }
    }, [globalData]);


    return (
        <section id="about" className="bg-secondary px-6 md:px-16 py-16 text-platinum">
            <h3 className="mb-6 font-bold text-5xl text-center">About Us</h3>
            <div className="items-center gap-10 grid md:grid-cols-2 mx-auto max-w-7xl">

                {/* Image Section */}
                <div className="w-full">
                    <img
                        src={aboutUs}
                        alt="Akshara Charitable Trust team"
                        className="shadow-md rounded-lg w-full h-96 object-cover"
                    />
                </div>

                {/* Content Section */}
                <div>

                    <div className="space-y-6 text-gray-700">
                        <div className="flex items-start gap-4">
                            <EyeIcon className="mt-1 w-12 h-12 text-blue-500" />
                            <p>
                                <strong>Our Vision: </strong>
                                {/* A world where every individual has access to quality education and the opportunity to reach their full potential. */}
                                {vision}
                            </p>

                        </div>

                        <div className="flex items-start gap-4">
                            <SparklesIcon className="mt-1 w-12 h-12 text-green-500" />
                            <p>
                                <strong>Our Mission: </strong>
                                 {/* Empower underserved communities by breaking the cycle of poverty through learning and access to education. */}
                                {mission}
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <UsersIcon className="mt-1 w-12 h-12 text-purple-500" />
                            <p>
                                <strong>Our Beneficiaries: </strong> 
                                {beneficiaries}
                                {/* Underprivileged children, schools needing resources, and adults seeking vocational training. */}
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <AcademicCapIcon className="mt-1 w-12 h-12 text-yellow-500" />
                            <p>
                                {existReason}
                                {/* We exist to remove educational barriers and support individuals in unlocking their true potential through education. */}
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            to='/about'
                            className="bg-yellow-400 hover:bg-yellow-300 hover:shadow-lg px-6 py-2 rounded-full font-semibold text-gray-900 text-lg hover:scale-105 transition duration-300 ease-in-out transform"
                        >
                            Know More About Us
                        </Link>
                    </div>
                </div>
            </div>
            {/* <GlobalDataSettings /> */}
        </section>
    );
}
