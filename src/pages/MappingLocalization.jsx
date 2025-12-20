import React from "react";

/* ================= PUBLIC IMAGE PATHS ================= */
const bannerImage = "/images/research/mapping/mapping.webp";
const thumbnail = "/images/Blogs/Blog-1.webp";

const videoCards = [
  {
    id: 1,
    title: "Robust Mapping in Unstructured Environments",
    description:
      "Advanced mapping pipelines designed to operate reliably in dynamic, GPS-denied terrains.",
    date: "2023-10-28",
  },
  {
    id: 2,
    title: "Real-Time Localization for Autonomous Systems",
    description:
      "Accurate and scalable localization methods enabling autonomous navigation in complex environments.",
    date: "2023-10-28",
  },
  {
    id: 3,
    title: "Multi-Sensor Fusion for Mapping & Localization",
    description:
      "Sensor fusion techniques combining LiDAR, vision, and inertial data for precision autonomy.",
    date: "2023-10-28",
  },
];

const MappingLocalization = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">
          <img
            src={bannerImage}
            alt="Mapping and Localization Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
            <h1 className="max-w-[521px] text-4xl md:text-6xl font-bold leading-tight mb-4">
              Mapping & Localization
            </h1>

            <p className="max-w-[521px] text-base md:text-[20px] leading-relaxed opacity-95">
              High-precision mapping and real-time localization built for dynamic,
              unpredictable environments.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 md:px-16 py-12">
        <p className="max-w-6xl text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed">
          These demonstrations highlight state-of-the-art mapping and localization
          systems that empower autonomous vehicles to perceive, localize, and
          navigate confidently across diverse real-world conditions.
        </p>
      </section>

      {/* ================= VIDEO CARDS ================= */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videoCards.map((card) => (
            <div
              key={card.id}
              className="group cursor-pointer transition duration-300 ease-out"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 group-hover:shadow-lg transition">
                <img
                  src={thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                {/* 🔴 YOUTUBE PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4">
                {/* ✅ PROFESSIONAL TEXT HOVER */}
                <h3 className="font-bold text-lg leading-tight text-gray-900 transition-colors hover:text-gray-700">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                  {card.description}
                </p>

                <p className="text-xs text-gray-400 mt-4 font-mono">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MappingLocalization;
  