import { AcademicCapIcon, EyeIcon, SparklesIcon, UsersIcon } from "@heroicons/react/20/solid";
import aboutUs from "../assets/children/mother_teaching.jpg"
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section id="about" className="bg-secondary py-16 px-6 md:px-16 text-platinum">
            <h3 className="text-5xl font-bold mb-6 text-center">About Us</h3>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Image Section */}
                <div className="w-full">
                    <img
                        src={aboutUs}
                        alt="Akshara Charitable Trust team"
                        className="rounded-lg shadow-md w-full object-cover h-96"
                    />
                </div>

                {/* Content Section */}
                <div>

                    <div className="space-y-6 text-gray-700">
                        <div className="flex items-start gap-4">
                            <EyeIcon className="w-12 h-12 text-blue-500 mt-1" />
                            <p>
                                <strong>Our Vision:</strong> A world where every individual has access to quality education and the opportunity to reach their full potential.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <SparklesIcon className="w-12 h-12 text-green-500 mt-1" />
                            <p>
                                <strong>Our Mission:</strong> Empower underserved communities by breaking the cycle of poverty through learning and access to education.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <UsersIcon className="w-12 h-12 text-purple-500 mt-1" />
                            <p>
                                <strong>Our Beneficiaries:</strong> Underprivileged children, schools needing resources, and adults seeking vocational training.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <AcademicCapIcon className="w-12 h-12 text-yellow-500 mt-1" />
                            <p>
                                We exist to remove educational barriers and support individuals in unlocking their true potential through education.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to='/about'
                            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2  px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                        >
                            Know More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
