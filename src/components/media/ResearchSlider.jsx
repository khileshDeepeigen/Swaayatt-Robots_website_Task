import { useRef } from "react";
import VideoCard from "../VideoCard";

export default function ResearchSlider({ data, section }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="group relative">
      {/* ARROWS (HOVER ONLY) */}
      <div className="absolute right-0 -top-12 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={scrollLeft}
          className="w-8 h-8 border rounded-full flex items-center justify-center bg-white"
        >
          ‹
        </button>
        <button
          onClick={scrollRight}
          className="w-8 h-8 border rounded-full flex items-center justify-center bg-white"
        >
          ›
        </button>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {data.map((item) => (
          <VideoCard
            key={item.id}
            data={item}
            section={section}
          />
        ))}
      </div>
    </section>
  );
}
