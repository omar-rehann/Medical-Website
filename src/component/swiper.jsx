import React from "react";
import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/swiper.css"; // لو عايز تضيف CSS إضافي للكروت

function SwiperComponent() {
  const services = [
  {
    title: "Treatment",
    description:
      "We deliver comprehensive, patient-centered treatment plans designed by expert physicians and specialists. Our approach integrates advanced medical protocols, personalized medication management, and continuous monitoring to treat chronic conditions, acute illnesses, and post-operative recovery. Using evidence-based therapies and cutting-edge technology, we ensure faster recovery, reduced complications, and long-term health improvement for every individual under our care.",
    color: "#FF6B6B",
  },
  {
    title: "Surgery",
    description:
      "Our advanced surgical unit performs a wide range of procedures with precision and safety. From minimally invasive laparoscopic surgeries to complex reconstructive operations, our board-certified surgeons use robotic-assisted systems, 3D imaging, and sterile operating environments. We prioritize pre-surgical planning, real-time monitoring, and dedicated post-operative care to minimize risks and accelerate healing for all patients.",
    color: "#4ECDC4",
  },
  {
    title: "Vaccine",
    description:
      "We provide a full-spectrum vaccination program for all ages, following WHO and CDC guidelines. Our services include routine childhood immunizations, travel vaccines, seasonal flu shots, and boosters for HPV, hepatitis, and pneumococcal diseases. Administered by trained nurses in a sterile environment, we offer pre-vaccination consultations, digital record-keeping, and follow-up reminders to ensure lifelong immunity and public health protection.",
    color: "#FFD93D",
  },
  {
    title: "Emergency",
    description:
      "Our 24/7 Emergency Department is fully equipped to handle life-threatening conditions with immediate response. Featuring trauma bays, advanced cardiac life support, on-site CT and X-ray, and a rapid triage system, our ER team of emergency physicians, trauma surgeons, and critical care nurses acts swiftly to stabilize patients. We manage heart attacks, strokes, severe injuries, and pediatric emergencies with compassion and clinical excellence around the clock.",
    color: "#1A535C",
  },
  {
    title: "Diagnostics",
    description:
      "We offer state-of-the-art diagnostic services using the latest imaging and laboratory technologies. This includes digital MRI, 3D ultrasound, full-body CT scans, blood chemistry panels, and molecular testing with same-day results. Our certified radiologists and lab specialists provide detailed reports, second-opinion reviews, and direct physician consultations to enable early detection, accurate diagnosis, and timely treatment planning.",
    color: "#FF6B6B",
  },
];

  return (
    <div className="services-swiper container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center mb-4">
    We provide a wide range of medical services to ensure your health and well-being. 
    From treatment and surgery to vaccinations, emergency care, and diagnostics, 
    our expert team is here to support you every step of the way.
  </p>
      <SwiperCore
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="serv-card"
              style={{
                backgroundColor: service.color,
                color: "#fff",
                padding: "30px",
                borderRadius: "15px",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </SwiperCore>
    </div>
  );
}

export default SwiperComponent;
