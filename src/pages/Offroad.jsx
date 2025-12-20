import React from "react";

/* ================= PUBLIC IMAGE PATHS ================= */
const Offroad = "/images/research/offroad/Offroad.webp";
const thumbnail = "/images/Blogs/Blogs.webp";

const OffRoadPage = () => {
  const videoCards = [
    {
      id: 1,
      title:
        "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
      description:
        "Autonomous Driving is undeniably the most formidable AI challenge of this decade, and it remains a dynamic focus of active research. Autonomous vehicles often have to negotiate not just unstructured environmental conditions, but also unpredictable obstacles — where each such obstacle is an agent with its own behaviour model.",
      date: "2023-10-28",
    },
    {
      id: 2,
      title:
        "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
      description:
        "Autonomous Driving is undeniably the most formidable AI challenge of this decade, and it remains a dynamic focus of active research. Autonomous vehicles often have to negotiate not just unstructured environmental conditions, but also unpredictable obstacles — where each such obstacle is an agent with its own behaviour model.",
      date: "2023-10-28",
    },
    {
      id: 3,
      title:
        "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
      description:
        "Autonomous Driving is undeniably the most formidable AI challenge of this decade, and it remains a dynamic focus of active research. Autonomous vehicles often have to negotiate not just unstructured environmental conditions, but also unpredictable obstacles — where each such obstacle is an agent with its own behaviour model.",
      date: "2023-10-28",
    },
    {
      id: 4,
      title:
        "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
      description:
        "Autonomous Driving is undeniably the most formidable AI challenge of this decade, and it remains a dynamic focus of active research. Autonomous vehicles often have to negotiate not just unstructured environmental conditions, but also unpredictable obstacles — where each such obstacle is an agent with its own behaviour model.",
      date: "2023-10-28",
    },
    {
      id: 5,
      title:
        "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
      description:
        "Autonomous Driving is undeniably the most formidable AI challenge of this decade, and it remains a dynamic focus of active research. Autonomous vehicles often have to negotiate not just unstructured environmental conditions, but also unpredictable obstacles — where each such obstacle is an agent with its own behaviour model.",
      date: "2023-10-28",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ================= HERO ================= */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative h-64 md:h-[400px] rounded-xl overflow-hidden bg-gray-900">
          <img
            src={Offroad}
            alt="Off-road autonomous driving"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 text-white">
            <h1
              className="
                font-rethink
                font-medium
                tracking-[-0.02em]
                leading-none
                text-[40px]
                sm:text-[48px]
                md:text-[56px]
                lg:text-[68px]
              "
            >
              Off Road
            </h1>

            <p className="max-w-lg text-sm sm:text-base md:text-lg opacity-90 mt-2 text-white">
              Revolutionizing Off-Road Autonomy: Conquering Unseen, Adversarial,
              and Unpredictable Terrains.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="px-6 md:px-16 py-12">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-6xl">
          These demonstrations highlight our autonomous vehicles tackling
          challenging off-road terrains, leveraging advanced reinforcement
          learning to redefine decision-making across diverse and unpredictable
          conditions for future Level-5 autonomy.
        </p>
      </section>

      {/* ================= CARDS ================= */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videoCards.map((card) => (
            <div
              key={card.id}
              className="group cursor-pointer transition duration-300 ease-out"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4 max-w-[519px]">
                {/* Title */}
                <h3
                  className="
                    font-rethink
                    font-bold
                    text-[20px]
                    leading-none
                    tracking-[-0.02em]
                    text-[#3F3F3F]
                    line-clamp-2
                  "
                >
                  {card.title}
                </h3>

                {/* ✅ DESCRIPTION — FIGMA MATCH */}
                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-[14px]
                    tracking-[-0.02em]
                    font-normal
                    text-[#737373]
                    line-clamp-3
                  "
                >
                  {card.description}
                </p>

                {/* Date */}
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

export default OffRoadPage;
