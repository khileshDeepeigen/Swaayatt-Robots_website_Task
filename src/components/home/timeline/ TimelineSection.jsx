import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GridBackground from "./GridBackground";
import BlogNodes from "./BlogNodes";
import RoadTimeline from "./RoadTimeline";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3500",
      scrub: 1.2, // smoother
      pin: true,
      onUpdate: (self) => {
        setProgress(self.progress); // single source of truth
      },
    });

    return () => st.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* ROAD */}
      <RoadTimeline progress={progress} />

      {/* IMAGES */}
      <BlogNodes progress={progress} />

      {/* GRID */}
      <GridBackground />
    </section>
  );
}
