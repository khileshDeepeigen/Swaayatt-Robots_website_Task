import React from "react";

const Offroad = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="px-3 sm:px-4 md:px-16 mt-6 md:mt-8">
        <div
          className="
            relative
            w-full
            rounded-xl
            overflow-hidden
            min-h-[260px]
            sm:min-h-[320px]
            md:min-h-[380px]
            lg:min-h-[420px]
          "
        >
          {/* Background Image */}
          <img
            src="/images/research/offroad/Offroad.webp"
            alt="Off Road Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-center
              px-4
              sm:px-6
              md:px-12
              text-white
            "
          >
            <h1
              className="
                max-w-[520px]
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
                mb-3
                sm:mb-4
              "
            >
              Off Road
            </h1>

            <p
              className="
                max-w-[520px]
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                opacity-95
              "
            >
              Revolutionizing off-road autonomy across unseen, adversarial,
              and unpredictable terrains.
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
            "Unstructured Terrain Navigation",
            "Autonomous Hill Climbing",
            "Rough Terrain Handling",
            "Reinforcement Learning Control",
            "Adaptive Off-Road Decision Making",
          ].map((title, index) => (
            <div key={index}>
              <img
                src="/images/Blogs/Blog-1.webp"
                alt={title}
                className="w-full h-[200px] sm:h-[220px] object-cover rounded-lg"
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

export default Offroad;
