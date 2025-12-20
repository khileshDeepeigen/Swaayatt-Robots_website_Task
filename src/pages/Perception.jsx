import React from "react";

import {perceptionVideos} from "../data/perceptionVideos"

const Perception = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero */}
      <section className="px-4 md:px-16 mt-8">
        <div className="relative w-full aspect-[1634/384] rounded-xl overflow-hidden">
          <img
            src="/images/research/perception/Perception.webp"
            alt="Perception Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white">
            <h1 className="max-w-[521px] text-4xl md:text-6xl font-bold mb-4">
              Perception
            </h1>
            <p className="max-w-[521px] text-base md:text-[20px] leading-relaxed opacity-95">
              These videos demonstrate robust environmental understanding and
              implicit reasoning through cameras.
            </p>
          </div>
        </div>
      </section>

      {/* Space */}
      <section className="h-10 sm:h-14 md:h-20 lg:h-24" />

      {/* Thumbnails Section */}
      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="Perception Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Environmental Understanding
            </h3>
          </div>

          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="Perception Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Camera-Based Reasoning
            </h3>
          </div>

          <div>
            <img
              src="/images/Blogs/Blog-1.webp"
              alt="Perception Demo"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              Real-Time Perception
            </h3>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Perception;
