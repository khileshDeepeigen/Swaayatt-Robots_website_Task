import React from "react";

export default function InTheMedia() {
  const mediaCards = [
    {
      id: 1,
      image: "/images/media/news/n1.webp",
      title:
        "Driverless Car: बिना ड्राइवर के ही फर्राटे भर रही ये गाड़ी, अब तक 50 हजार Km का ट्रायल रन हुआ कंप्लीट",
      description:
        "Driverless Car Trial: यह एक गाड़ी है जिसे चलाने के लिए ड्राइवर की ज़रूरत नहीं पड़ती.",
      date: "2023-10-28",
    },
    {
      id: 2,
      image: "/images/media/news/n2.webp",
      title:
        "Anand Mahindra praises startup from Bhopal for developing self-driving cars",
      description:
        "With advancements in tech, self-driving cars are creating a buzz across the automobile industry.",
      date: "2023-10-28",
    },
    {
      id: 3,
      image: "/images/media/news/n3.webp",
      title:
        "Self-Driving Vehicle | Meet Sanjeev Sharma, An IITian Who Turned Bolero Into Self-Driving Car",
      description:
        "Self-driving Vehicle: Sanjeev Sharma, an IITian living in Bhopal, has been doing research on self-driving cars.",
      date: "2023-10-28",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20">
      {/* SECTION TITLE */}
      <h2 className="text-[20px] font-semibold mb-8">
        In the Media
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {mediaCards.map((item) => (
          <div key={item.id} className="flex flex-col h-full">
            
            {/* THUMBNAIL */}
            <div className="relative rounded-[12px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-video object-cover"
              />

              {/* DARK OVERLAY (SUBTLE) */}
              <div className="absolute inset-0 bg-black/20" />

              {/* YOUTUBE PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="
                  w-14 h-14
                  bg-red-600
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shadow-lg
                ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 ml-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-4 flex flex-col flex-grow">
              {/* TITLE */}
              <h3
                className="
                  font-rethink
                  font-bold
                  text-[#3F3F3F]
                  tracking-[-0.02em]
                  leading-[120%]

                  text-[18px]
                  sm:text-[20px]
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-2
                  font-rethink
                  font-normal
                  text-[#737373]
                  tracking-[-0.02em]
                  leading-[140%]

                  text-[13px]
                  sm:text-[14px]
                "
              >
                {item.description}
              </p>

              {/* DATE */}
              <p className="mt-auto pt-4 text-[12px] text-gray-400">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
