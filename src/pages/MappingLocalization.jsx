import React from "react";

const MappingLocalization = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">

          <img
            src="/images/research/mapping/mapping.webp"
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

      {/* ================= SPACING ================= */}
      <section className="h-10 sm:h-14 md:h-20" />

      {/* ================= CARDS ================= */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "High-Definition Map Generation",
            "Real-Time Localization",
            "Sensor Fusion Mapping",
            "SLAM in Dynamic Environments",
            "Robust Localization in GPS-Denied Areas",
          ].map((title, index) => (
            <div key={index}>
              <img
                src="/images/Blogs/Blog-1.webp"
                alt={title}
                className="w-full h-[220px] object-cover rounded-lg"
              />
              <h3 className="mt-3 font-semibold text-[#1A212F]">
                {title}
              </h3>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default MappingLocalization;
