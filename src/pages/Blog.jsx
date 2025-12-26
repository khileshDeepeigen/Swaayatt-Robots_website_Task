import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: "/images/Blogs/Blog-1.webp",
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    description:
      "Autonomous Driving is undeniably the most formidable AI challenge of this decade, and it remains a dynamic focus of active research. Autonomous vehicles often have to negotiate not just unstructured environmental conditions, but also unpredictable obstacles — where each such obstacle is an agent with its own behaviour model.",
    date: "2023-10-28",
  },
  {
    id: 2,
    image: "/images/Blogs/Blogs.webp",
    title: "Autonomous Driving: Ellipsoidal Constrained Agent Navigation",
    description:
      "Motion and path planning in completely unknown environments is an extremely challenging problem.",
    date: "2023-10-17",
  },
  {
    id: 3,
    image: "/images/Blogs/Blog-3.webp",
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    description:
      "Autonomous Driving is undeniably the most formidable AI challenge of this decade.",
    date: "2023-10-28",
  },
  {
    id: 4,
    image: "/images/Blogs/Blog-1.webp",
    title:
      "Introducing Bidirectional Negotiation to the World of Autonomous Driving: Biologically Inspired Model",
    description:
      "Autonomous Driving is undeniably the most formidable AI challenge of this decade.",
    date: "2023-10-28",
  },
];

export default function Blogs() {
  return (
    <main className="bg-white">

      {/* ================= INTRO ================= */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-14">
        <div className="text-center max-w-[572px] mx-auto">
          <h1 className="font-rethink font-medium text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-[-0.02em] text-[#1A212F] mb-4">
            Discover and Learn
          </h1>

          <p className="font-rethink text-[20px] leading-[1.4] tracking-[-0.02em] text-[#1A212F]/70">
            Explore in-depth articles on autonomous driving and the challenges of
            decision-making in unstructured environments
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blogs/${blog.id}`} className="block">
              <div className="bg-white rounded-[20px] overflow-hidden border border-gray-200 transition hover:shadow-sm">

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[220px] sm:h-[240px] object-cover"
                  />

                  {/* WATERMARK */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <img
                      src="/images/Swaayatt/logo-mark.png"
                      alt="Swaayatt Robots"
                      className="w-6 h-6"
                    />
                    <span className="text-white text-[12px] font-medium opacity-90">
                      Swaayatt Robots
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-5 pt-4 pb-5">
                  <h3 className="font-rethink font-medium text-[20px] leading-[1.3] tracking-[-0.02em] text-[#3F3F3F] mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="font-rethink text-[14px] leading-[1.5] tracking-[-0.02em] text-[#737373] mb-4 line-clamp-3">
                    {blog.description}
                  </p>

                  <p className="text-[12px] text-[#9CA3AF] font-mono">
                    {blog.date}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
