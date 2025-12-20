import React from "react";



const OffRoadPage = () => {
  const videoCards = [
    {
      id: 1,
      thumbnail: videoThumb1,
      title:
        "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
      description:
        "Autonomous driving is undoubtedly the most formidable AI challenge of this decade...",
      date: "2023-10-28",
    },
    {
      id: 2,
      thumbnail: videoThumb2,
      title: "Biologically Inspired Model for Off-Road Navigation",
      description:
        "These demonstrations highlight our autonomous vehicles tackling challenging terrains...",
      date: "2023-10-28",
    },
    {
      id: 3,
      thumbnail: videoThumb3,
      title: "Learning-Based Off-Road Decision Making",
      description:
        "Reinforcement learning enables vehicles to adapt to unstructured environments...",
      date: "2023-10-28",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* --- Hero Section --- */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative h-64 md:h-[400px] rounded-xl overflow-hidden bg-gray-900">
          <img
            src={heroImage}
            alt="Off-road autonomous driving"
            className="w-full h-full object-cover opacity-60"
          />

<div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16 text-red-600">
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

  <p className="max-w-lg text-sm sm:text-base md:text-lg opacity-90 mt-2 text-red-600">
    Revolutionizing Off-Road Autonomy: Conquering Unseen, Adversarial,
    and Unpredictable Terrains.
  </p>
</div>


        </div>
      </section>

      {/* --- Intro Text --- */}
      <section className="px-6 md:px-16 py-12">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-6xl">
          These demonstrations highlight our autonomous vehicles tackling
          challenging off-road terrains, leveraging advanced reinforcement
          learning to redefine decision-making across diverse and unpredictable
          conditions for future Level-5 autonomy.
        </p>
      </section>

      {/* --- Video Grid --- */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videoCards.map((card) => (
            <div key={card.id} className="group cursor-pointer">

              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="font-bold text-lg leading-tight hover:text-orange-600 transition">
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

export default OffRoadPage;
