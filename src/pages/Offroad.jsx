import React from "react";
import offroadVideos from "../data/offroadVideo";
import { useTheme } from "../context/ThemeContext";

const heroImage = "/images/research/offroad/Offroad.webp";

const OffRoadPage = () => {
  useTheme();

  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-white pt-[12.5vh] transition-colors duration-300">

      {/* ================= HERO ================= */}
      <section className="w-[88vw] mx-auto px-[1.6vw] sm:px-[2.7vw] lg:px-[4.4vw]">
        <div className="relative h-[28.9vh] sm:h-[35.5vh] md:h-[44.5vh] rounded-[1.38vw] overflow-hidden bg-gray-900">
          <img
            src={heroImage}
            alt="Off-road autonomous driving"
            className="w-full h-full object-cover opacity-85"
          />

          <div className="absolute inset-0 flex flex-col justify-center text-white px-[1.6vw] sm:px-[2.7vw] lg:px-[4.4vw]">
            <h1 className="font-rethink font-medium tracking-[-0.02em] leading-none text-[2.5vw] sm:text-[3.05vw] md:text-[3.9vw] lg:text-[4.7vw]">
              Off Road
            </h1>

            <p className="max-w-[33vw] mt-[0.9vh] text-[0.97vw] sm:text-[1.1vw] md:text-[1.25vw] opacity-90">
              Revolutionizing Off-Road Autonomy: Conquering Uneven, Adversarial,
              and Unpredictable Terrains
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="w-[88vw] mx-auto px-[1.6vw] sm:px-[2.7vw] lg:px-[4.4vw] py-[6.6vh]">
        <p className="max-w-[104vw] font-rethink font-medium text-[2.22vw] leading-[1] tracking-[-0.02em] text-[#686868] dark:text-[#A3A3A3]">
          These demonstrations highlight our autonomous vehicles tackling
          challenging off-road terrains, leveraging advanced reinforcement
          learning to redefine decision-making across diverse and unpredictable
          conditions for future Level-5 autonomy.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="w-[88vw] mx-auto px-[1.6vw] sm:px-[2.7vw] lg:px-[4.4vw] pb-[11vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.7vw]">
          {offroadVideos.map((card) => (
            <div key={card.id} className="flex flex-col">

              {/* ================= THUMBNAIL ================= */}
              <div className="relative aspect-video rounded-[1vw] overflow-hidden bg-gray-200 dark:bg-[#111] group cursor-pointer">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[5vw] h-[3.33vw] bg-[#FF0000] rounded-[0.8vw] flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-[1.9vw] h-[1.9vw] fill-white ml-[0.15vw]">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ================= TEXT ================= */}
              <div className="mt-[2vh] max-w-[36vw]">
                <h3 className="font-rethink font-bold text-[1.38vw] leading-[1] tracking-[-0.02em] text-[#3F3F3F] dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-[1.7vh] font-rethink font-normal text-[0.97vw] leading-[1] tracking-[-0.02em] text-[#737373] dark:text-[#A3A3A3]">
                  {card.description}
                </p>

                <p className="mt-[1.7vh] text-[0.83vw] text-[#9CA3AF] font-mono">
                  {card.date}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default OffRoadPage;
