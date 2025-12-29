import BlogNodes from "./BlogNodes";
import CenterFeature from "./CenterFeature";
import RoadTimeline from "./RoadTimeline";

export default function TimelineSection() {
  return (
    <section className="relative w-full min-h-[900px] bg-black overflow-hidden">

      {/* ================= GRID (TIC TAC TOE) ================= */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="border border-white/10" />
        ))}
      </div>

      {/* ================= BLOG THUMBNAILS ================= */}
      <BlogNodes />

      {/* ================= CENTER FEATURE ================= */}
      <CenterFeature />

      {/* ================= ROAD + CAR ================= */}
      <RoadTimeline />
    </section>
  );
}
