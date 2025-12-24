import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);

  const researchRef = useRef(null);

  const navItems = ["media", "blogs", "career", "contact"];

  // Close desktop Research dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        researchRef.current &&
        !researchRef.current.contains(event.target)
      ) {
        setResearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP BAR */}
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/Swaayatt/Swaayatt.png"
              alt="Swaayatt Robots"
              className="w-14 h-14 object-contain"
            />
            <div className="leading-none">
              <div className="font-bold text-sm">SWAAYATT</div>
              <div className="font-bold text-sm">ROBOTS</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 text-sm font-medium items-center">

            {/* Research Dropdown (Desktop) */}
            <div className="relative" ref={researchRef}>
              <button
                onClick={() => setResearchOpen((prev) => !prev)}
                className="flex items-center gap-1 text-gray-900 hover:text-gray-500"
              >
                Research <ChevronDown size={14} />
              </button>

              {researchOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-md shadow-lg py-2 z-50">
                  {[
                    ["off-road", "Off Road"],
                    ["on-road", "On Road"],
                    ["mapping-localization", "Mapping & Localization"],
                    ["motion-planning", "Motion Planning"],
                  ].map(([path, label]) => (
                    <Link
                      key={path}
                      to={`/research/${path}`}
                      onClick={() => setResearchOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Desktop Links */}
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="text-gray-900 hover:text-gray-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t py-4 text-sm space-y-2">

            {/* Research Accordion */}
            <button
              onClick={() => setMobileResearchOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-2 py-2 font-semibold"
            >
              <span>Research</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobileResearchOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileResearchOpen && (
              <div className="pl-6 space-y-1">
                {[
                  ["off-road", "Off Road"],
                  ["on-road", "On Road"],
                  ["mapping-localization", "Mapping & Localization"],
                  ["motion-planning", "Motion Planning"],
                ].map(([path, label]) => (
                  <Link
                    key={path}
                    to={`/research/${path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-gray-600 hover:text-gray-900"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {/* Other Mobile Links */}
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2 py-2 hover:text-gray-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
}
