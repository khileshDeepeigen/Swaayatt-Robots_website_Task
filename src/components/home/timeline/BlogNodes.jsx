import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

/* ================= DATA ================= */

const images = [
  "/images/Blogs/Homepage-1.webp",
  "/images/Blogs/Homepage-1.webp",
  "/images/Blogs/Blog-1.webp",
  "/images/media/news/n1.webp",
  "/images/Blogs/Homepage-1.webp",
];

const CENTER_TEXT =
  "Introducing Bidirectional Negotiation to the World of Autonomous Driving:\nBiologically Inspired Model";

/* ================= POSITIONS ================= */

const SLOTS = [
  { x: "-42vw", scale: 0.42, opacity: 0.18, z: 5 },
  { x: "-24vw", scale: 0.65, opacity: 0.38, z: 10 },
  { x: "0vw",   scale: 1.1,  opacity: 1,    z: 30 }, // CENTER
  { x: "24vw",  scale: 0.65, opacity: 0.38, z: 10 },
  { x: "39vw",  scale: 0.32, opacity: 0.16, z: 4 },
];

/* ================= COMPONENT ================= */

export default function BlogNodes({ progress }) {
  const refs = useRef([]);
  const glowRefs = useRef([]);
  const [centerIndex, setCenterIndex] = useState(null);

  useLayoutEffect(() => {
    const total = images.length;
    const indexProgress = progress * (total - 1);

    refs.current.forEach((el, i) => {
      if (!el) return;

      const offset = i - indexProgress;
      const slotIndex = Math.round(
        gsap.utils.clamp(0, total - 1, offset + 2)
      );

      const slot = SLOTS[slotIndex];
      const isCenter = slotIndex === 2;

      /* IMAGE MOTION */
      gsap.to(el, {
        x: slot.x,
        scale: slot.scale,
        opacity: slot.opacity,
        zIndex: slot.z,
        duration: 0.45,
        ease: "power3.out",
      });

      /* GREEN GLOW */
      gsap.to(glowRefs.current[i], {
        opacity: isCenter ? 1 : 0,
        scale: isCenter ? 1 : 0.85,
        duration: 0.6,
        ease: "power3.out",
      });

      /* TRACK CENTER IMAGE */
      if (isCenter) {
        setCenterIndex(i);
      }
    });
  }, [progress]);

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">

      {/* ================= IMAGES ================= */}
      {images.map((src, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="absolute top-[18%] left-1/2 -translate-x-1/2"
        >
          <div className="relative w-[22vw] aspect-video overflow-visible">

            {/* 🌿 GREEN GLOW */}
           {/* 🌿 GREEN GLOW */}
<div
  ref={(el) => (glowRefs.current[i] = el)}
  className="
    absolute
    -inset-[55%]
    rounded-full
    opacity-0
    blur-[180px]
    z-0
    mix-blend-screen
  "
 style={{
  background: `
    radial-gradient(
      ellipse at center,
      rgba(28, 60, 40, 0.85) 0%,
      rgba(28, 60, 40, 0.55) 30%,
      rgba(28, 60, 40, 0.32) 50%,
      rgba(28, 60, 40, 0.26) 65%,
      rgba(0, 0, 0, 0.55) 85%,
      rgba(0, 0, 0, 0.85) 100%
    )
  `,
}}
/>


            {/* IMAGE CARD */}
            <div className="relative z-10 overflow-hidden rounded-lg">

              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/35" />

              {/* 🔴 SMALL YOUTUBE PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div
                  className="
                    w-[3.6vw]
                    h-[3.6vw]
                    min-w-[40px]
                    min-h-[40px]
                    max-w-[60px]
                    max-h-[60px]
                    rounded-full
                    bg-[#FF0000]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  "
                >
                  <div
                    className="
                      ml-[2px]
                      w-0
                      h-0
                      border-t-[8px]
                      border-b-[8px]
                      border-l-[13px]
                      border-t-transparent
                      border-b-transparent
                      border-l-white
                    "
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* ================= CENTER IMAGE TEXT ONLY ================= */}
      {centerIndex !== null && (
        <div
          className="
            absolute
            left-1/2
            top-[45%]
            -translate-x-1/2
            text-center
          "
        >
          <p
            className="
              font-['Chivo_Mono']
              text-[20px]
              leading-[100%]
              tracking-[-0.02em]
              text-white
              max-w-[505px]
              whitespace-pre-line
            "
          >
            {CENTER_TEXT}
          </p>
        </div>
      )}

    </div>
  );
}
