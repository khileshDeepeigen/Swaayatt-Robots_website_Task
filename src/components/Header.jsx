import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { researchMenu } from "../data/researchMenu";

const researchCollage = [
  "/images/research/collage/img-1.webp",
  "/images/research/collage/img-2.png",
  "/images/research/collage/img-3.jpg",
  "/images/research/collage/img-4.webp",
  "/images/research/collage/img-5.webp",
];

export default function Header({ variant = "default" }) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // header solid on scroll (home only)
  useEffect(() => {
    if (variant !== "home") return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const isHome = variant === "home";
  const isDark = variant === "dark";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[1000] transition-all duration-300
        ${
          isHome
            ? scrolled
              ? "bg-black/90 backdrop-blur border-b border-white/10"
              : "bg-transparent"
            : isDark
            ? "bg-black border-b border-white/10"
            : "bg-white border-b"
        }
      `}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-[80px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/Swaayatt/Swaayatt.png"
              className="w-12 h-12 object-contain"
              alt="Swaayatt Robots"
            />
            <div
              className={`font-semibold text-[16px] leading-tight ${
                isHome || isDark ? "text-white" : "text-[#1C1C1C]"
              }`}
            >
              <div>SWAAYATT</div>
              <div>ROBOTS</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-10 text-[18px] font-semibold ${
              isHome || isDark ? "text-white" : "text-[#1C1C1C]"
            }`}
          >
            {/* RESEARCH */}
            <div ref={ref} className="relative">
              <button
                onClick={() => setOpen((p) => !p)}
                className="flex items-center gap-2 hover:opacity-80"
              >
                Research <ChevronDown size={18} />
              </button>

              {open && (
                <div className="absolute left-[-180px] top-[60px] w-[720px] h-[300px] bg-white rounded-[16px] shadow-2xl flex overflow-hidden">
                  {/* LEFT COLLAGE */}
                  <div className="relative w-[420px] h-full overflow-hidden">
                    <div className="grid grid-cols-5 h-full">
                      {researchCollage.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-[36px] font-semibold">Research</h3>
                      <p className="text-sm opacity-90 max-w-[320px]">
                        Autonomous driving research & breakthroughs.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT MENU */}
                  <div className="flex-1 px-7 py-7 flex flex-col justify-center">
                    {researchMenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 rounded hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/media">Media</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <X size={26} className={isHome || isDark ? "text-white" : ""} />
            ) : (
              <Menu size={26} className={isHome || isDark ? "text-white" : ""} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="lg:hidden bg-black text-white border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
              className="w-full flex justify-between"
            >
              Research <ChevronDown />
            </button>

            {mobileResearchOpen && (
              <div className="pl-4 space-y-2 text-white/80">
                {researchMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/media">Media</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
