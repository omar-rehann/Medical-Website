import React from "react";
import "../pagesstyles/three.css";

function ThreeCards() {
const stats = [
  {
    number: "120",
    title: "Years With You",
    desc: "We have been serving our community with dedication and excellence.",
    borderColor: "border-blue-500",
  },
  {
    number: "50K+",
    title: "Happy Patients",
    desc: "Successfully treated and cared for thousands of patients annually.",
    borderColor: "border-green-500",
  },
  {
    number: "200+",
    title: "Expert Doctors",
    desc: "Highly qualified specialists across all medical departments.",
    borderColor: "border-purple-500",
  },
  {
    number: "24/7",
    title: "Emergency Care",
    desc: "Round-the-clock emergency services with rapid response teams.",
    borderColor: "border-red-500",
  },
  {
    number: "99%",
    title: "Patient Satisfaction",
    desc: "Consistently high ratings from our valued patients across all services.",
    borderColor: "border-yellow-500",
  },
  {
    number: "30+",
    title: "Medical Specialties",
    desc: "Comprehensive care across a wide range of medical disciplines.",
    borderColor: "border-teal-500",
  },
  {
    number: "10K+",
    title: "Surgeries Performed",
    desc: "Safe and successful procedures by our experienced surgical teams.",
    borderColor: "border-pink-500",
  },
  {
    number: "500+",
    title: "Staff Members",
    desc: "Dedicated professionals working together to ensure top-quality care.",
    borderColor: "border-indigo-500",
  },
  {
    number: "100+",
    title: "Awards & Recognitions",
    desc: "Honored for excellence in healthcare and patient service.",
    borderColor: "border-orange-500",
  },
  {
    number: "5",
    title: "International Accreditations",
    desc: "Certified by global health organizations for safety and quality.",
    borderColor: "border-cyan-500",
  },
];

  return (
    <div className="three py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
          <div className="col-md-6 g-2 rounded">
              <div
              key={index}
              className={`col stat-card relative bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
            >              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 ${stat.borderColor} rounded-l-xl`}
              ></div>
              <h4 className="text-5xl font-bold text-gray-800 mb-2">
                {stat.number}
              </h4>
              <h5 className="text-xl font-semibold text-gray-700 mb-3">
                {stat.title}
              </h5>
              <p className="text-gray-500 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThreeCards;