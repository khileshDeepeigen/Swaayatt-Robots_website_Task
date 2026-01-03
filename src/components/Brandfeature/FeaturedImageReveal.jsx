import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedImageReveal() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 📱 Mobile
      mm.add("(max-width: 639px)", () => {
        gsap.fromTo(
          imageWrapperRef.current,
          { width: "80vw", height: "40vh" },
          {
            width: "96vw",
            height: "60vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "top 20%",
              scrub: 1.2,
            },
          }
        );
      });

      // 📱 Tablet
      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
        gsap.fromTo(
          imageWrapperRef.current,
          { width: "60vw", height: "35vh" },
          {
            width: "92vw",
            height: "70vh",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 55%",
              end: "top 15%",
              scrub: 1.4,
            },
          }
        );
      });

      // 🖥 Desktop
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          imageWrapperRef.current,
          { width: "42vw", height: "36vh" },
          {
            width: "88vw",
            height: "80vh",
            ease: "none",
            willChange: "width, height",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              end: "top 10%",
              scrub: 1.5,
              anticipatePin: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white min-h-[100vh]"
    >
      <div className="relative w-full h-screen flex items-center">
        <div
          ref={imageWrapperRef}
          className="
            mx-auto
            overflow-hidden
            bg-black
            origin-center
            rounded-xl
          "
        >
          <img
            src="/images/Blogs/Blog-3.webp"
            alt="Autonomous mobility"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
