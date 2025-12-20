import React from "react";

/* ================= PUBLIC IMAGE PATHS ================= */
const head = "../../public/images/research/precption/preception.webp";
const thumbnail = "../../public/images/Blogs/Blog-1.webp";

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
            src={head}
            alt="Perception"
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
              Perception
            </h1>

            <p className="max-w-lg text-sm sm:text-base md:text-lg opacity-90 mt-2 text-white">
              These videos demonstrate robust environmental understanding and
              implicit reasoning through cameras.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CARDS ================= */}
      <section className="px-6 md:px-16 mt-8 sm:mt-12 md:mt-16 pb-20">
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
