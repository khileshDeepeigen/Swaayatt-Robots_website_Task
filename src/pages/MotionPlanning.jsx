import React from "react";

/* ================= PUBLIC IMAGE PATHS ================= */
const bannerImage = "/images/research/motion-planning/motion.webp";
const thumbnail = "/images/Blogs/Blog-1.webp";

const videoCards = [
  {
    id: 1,
    title: "Urban Motion Planning",
    description:
      "Advanced motion planning techniques for dense urban environments with dynamic obstacles.",
    date: "2023-10-28",
  },
  {
    id: 2,
    title: "Decision Making in Traffic",
    description:
      "Robust decision-making frameworks for autonomous driving in complex traffic scenarios.",
    date: "2023-10-28",
  },
  {
    id: 3,
    title: "Reinforcement Learning Control",
    description:
      "Learning-based control strategies enabling adaptive and safe autonomous motion.",
    date: "2023-10-28",
  },
  {
    id: 4,
    title: "Adaptive Motion Policies",
    description:
      "Policy learning methods for real-time adaptation in stochastic driving environments.",
    date: "2023-10-28",
  },
  {
    id: 5,
    title: "Multi-Agent Planning",
    description:
      "Cooperative and competitive planning among multiple autonomous agents.",
    date: "2023-10-28",
  },
];

const MotionPlanning = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">
          <img
            src={bannerImage}
            alt="Motion Planning Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
            <h1 className="max-w-[521px] text-4xl md:text-6xl font-bold mb-4">
              Motion Planning & Decision Making
            </h1>

            <p className="max-w-[521px] text-base md:text-[20px] leading-relaxed opacity-95">
              Reinforcement-driven motion planning and robust decision strategies
              for real-world autonomous mobility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 md:px-16 py-12">
        <p className="
          max-w-[1497px]
          text-lg
          md:text-[32px]
          leading-snug
          md:leading-[32px]
          tracking-[-0.64px]
          font-medium
          text-[#686868]
        ">
          These videos demonstrate advanced motion planning and adaptive
          decision-making in stochastic dynamic traffic, employing reinforcement
          learning and robust control strategies.
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

export default MotionPlanning;
