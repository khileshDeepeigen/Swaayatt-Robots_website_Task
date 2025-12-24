import React from "react";

export default function TwitterSpotlight() {
  // ✅ DEFINE IMAGES ONCE
  const t1 = "/images/media/twitter/t1.webp";
  const t2 = "/images/media/twitter/t2.webp";
  const t3 = "/images/media/twitter/t3.webp";
  const t4 = "/images/media/twitter/t4.webp"

  // ✅ REUSE / REPEAT AS YOU WANT
  const twitterCards = [
    t1,
    t2,
    t3, // repeated
    t4,
    t2, // repeated
    t4, // repeated again
    t3,
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20">
      <h2 className="text-[20px] font-semibold mb-6">
        Twitter Spotlight
      </h2>

      <div className="
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
      ">
        {twitterCards.map((img, index) => (
          <div
            key={index}
            className="
              rounded-[12px]
              overflow-hidden
              border
              bg-white
              hover:shadow-md
              transition
            "
          >
            <img
              src={img}
              alt={`Twitter spotlight ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
