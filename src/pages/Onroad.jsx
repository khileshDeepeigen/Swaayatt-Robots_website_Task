import React from "react";

/* ================= PUBLIC IMAGE PATHS ================= */
const bannerImage = "/images/research/onroad/Onroad.webp";
const thumbnail = "/images/Blogs/Blog-1.webp";

const videoCards = [
  {
    id: 1,
    title: "Urban Traffic Navigation",
    description:
      "Autonomous navigation strategies for dense urban traffic with complex interactions.",
    date: "2023-10-28",
  },
  {
    id: 2,
    title: "Highway Driving Autonomy",
    description:
      "Robust motion planning and control for safe and efficient highway driving.",
    date: "2023-10-28",
  },
  {
    id: 3,
    title: "Lane-Level Planning",
    description:
      "Precise lane-level planning for smooth and predictable on-road autonomy.",
    date: "2023-10-28",
  },
  {
    id: 4,
    title: "Traffic Interaction Reasoning",
    description:
      "Reasoning about multi-agent interactions in complex on-road traffic scenarios.",
    date: "2023-10-28",
  },
  {
    id: 5,
    title: "Safe Decision Making at Intersections",
    description:
      "Decision-making frameworks ensuring safety and compliance at intersections.",
    date: "2023-10-28",
  },
];

const Onroad = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-3 sm:px-4 md:px-16 mt-6 md:mt-8">
        <div className="
          relative
          w-full
          rounded-xl
          overflow-hidden
          min-h-[260px]
          sm:min-h-[320px]
          md:min-h-[380px]
          lg:min-h-[420px]
        ">
          {/* ✅ FIXED HERO IMAGE */}
          <img
            src={bannerImage}
            alt="On Road Banner"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              object-center md:object-top
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 text-white">
            <h1 className="max-w-[520px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              On Road
            </h1>

            <p className="max-w-[520px] text-sm sm:text-base md:text-lg opacity-95">
              Advancing safe, efficient, and intelligent autonomy for structured
              on-road environments.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 md:px-16 py-12">
        <p className="max-w-6xl text-base sm:text-lg md:text-2xl text-[#686868] leading-relaxed">
          These demonstrations highlight our autonomous driving technology (i)
          enabling navigation through unstructured environments, with complex
          road conditions, and (ii) effectively negotiating stochastic, complex,
          and adversarial traffic-dynamics.
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
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 group-hover:shadow-lg transition">
                <img
                  src={thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />

                {/* 🔴 YouTube Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
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

export default Onroad;
