import React from "react";
import onroadVideos from "../data/onroadVideo";

/* ================= HERO IMAGE ================= */
const heroImage = "/images/research/onroad/Onroad.webp";

const PreceptionPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 mt-8">
        <div className="relative h-[260px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden bg-gray-900">
          <img
            src={heroImage}
            alt="Perception autonomous driving"
            className="w-full h-full object-cover opacity-85"
          />

          <div className="absolute inset-0 flex flex-col justify-center text-white px-6 sm:px-10 lg:px-16">
            <h1
              className="
                font-rethink
                font-medium
                tracking-[-0.02em]
                leading-none
                text-[36px]
                sm:text-[44px]
                md:text-[56px]
                lg:text-[68px]
              "
            >
              Perception
            </h1>

            <p className="max-w-xl mt-2 text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
              These videos demonstrate robust environmental understanding and
              implicit reasoning through cameras.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <p
          className="
            max-w-5xl
            text-[16px]
            sm:text-[18px]
            leading-[28px]
            text-[#4B5563]
          "
        >
          These demonstrations highlight perception systems enabling autonomous
          vehicles to understand complex environments using cameras and sensors.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {onroadVideos.map((card) => (
            <div key={card.id} className="flex flex-col cursor-pointer">

              {/* THUMBNAIL */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4 max-w-[520px]">
                <h3
                  className="
                    font-rethink
                    font-medium
                    text-[18px]
                    leading-[22px]
                    tracking-[-0.02em]
                    text-[#3F3F3F]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[14px]
                    leading-[20px]
                    tracking-[-0.01em]
                    text-[#6B7280]
                  "
                >
                  {card.description}
                </p>

                <p className="mt-2 text-[12px] text-[#9CA3AF] font-mono">
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

export default PreceptionPage;
