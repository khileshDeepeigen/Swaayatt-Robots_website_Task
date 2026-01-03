import { ArrowRight } from "lucide-react";


function MediaCard({
  imageSrc,
  sourceIcon,
  sourceName,
  headline,
  isFeatured = false,
}) {
  return (
    <div
      className={`relative overflow-hidden  rounded-lg cursor-pointer group ${
        isFeatured ? "h-full" : "h-full"
      }`}
    >
      <img
        src={imageSrc}
        alt={headline}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 ${
          isFeatured ? "featured-overlay" : "card-overlay"
        }`}
      />
      <div className="absolute sm:bottom-10  bottom-5 left-0 right-0 p-4">
        <div className="flex items-start gap-3">
          <img
            src={sourceIcon}
            alt={sourceName || "Source"}
            className="sm:w-12 sm:h-12  h-10 w-10 rounded-full object-cover flex-shrink-0 border border-border/20"
          />
          <div className="flex flex-col">
            {sourceName && (
              <span className="text-foreground/80 text-sm font-medium mb-1">
                {sourceName}
              </span>
            )}
            <h3
              className={`text-foreground  font-medium leading-tight ${
                isFeatured ? "sm:text-2xl" : "sm:text-xl"
              }`}
            >
              {headline}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const mediaArticles = [
  {
    id: 1,
    imageSrc: "/images/img-media/featured-article (1).jpg",
    sourceIcon: "/images/Home/logo.png",
    headline: "Anand Mahindra Praises Swaayatt Robots' Level 5 Autonomy Efforts",
    isFeatured: true,
  },
  {
    id: 2,
    imageSrc: "/images/img-media/article-2.jpg",
    sourceIcon: "/images/Home/logo2.png",
    sourceName: "Swaayatt Robots",
    headline: "Swaayatt Robots Raises $4 Million at $151 Million Valuation",
  },
  {
    id: 3,
         imageSrc: "/images/img-media/article-3.jpg",
      sourceIcon: "/images/Home/logo3.png",
    headline:
      "Self-Driving Vehicle | Meet Sanjeev Sharma, An IITian Who Turned Bolero Into Self-Driving Car",
  },
  {
    id: 4,
     imageSrc: "/images/img-media/article-4.jpg",
     sourceIcon: "/images/Home/logo3.png",
    headline: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
  },
  {
    id: 5,
     imageSrc: "/images/img-media/article-4.jpg",
    sourceIcon: "/images/Home/logo3.png",
    headline: "Bhopal Entrepreneur Builds L-5 Autonomous Driving System In India",
  },
];

function Index() {
  return (
    <main className="min-h-screen  bg-background overflow-hidden">
      <section className="min-h-screen mx-auto  w-[94vw] bg-background py-16 p-4 px-0 md:px-12 lg:px-20 mb-32   overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <p className="text-4xl md:text-5xl font-Rethink Sans font-semibold  font-heading text-white">
            Media Coverage
          </p>
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 text-white border border-foreground rounded-md hover:bg-foreground hover:text-background transition-colors"
          >
            SEE ALL ARTICLES
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[600px]">
          {/* Featured Article - Left Side */}
          <div className="lg:col-span-1 lg:row-span-2 h-[400px] text-white lg:h-full">
            <MediaCard
              imageSrc={mediaArticles[0].imageSrc}
              sourceIcon={mediaArticles[0].sourceIcon}
              headline={mediaArticles[0].headline}
              isFeatured={true}
            />
          </div>

          {/* Right Side Grid - 2x2 */}
          <div className="lg:col-span-2 grid grid-cols-1 text-white  md:grid-cols-2 gap-4 h-auto lg:h-full">
            {mediaArticles.slice(1).map((article) => (
              <div key={article.id} className="h-[250px] text-xl lg:h-auto">
                <MediaCard
                  imageSrc={article.imageSrc}
                  sourceIcon={article.sourceIcon}
                  sourceName={article.sourceName}
                  headline={article.headline}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden mt-8 flex justify-center">
          <button
            className="flex items-center gap-2 px-4 py-2 text-white border border-foreground rounded-md hover:bg-foreground hover:text-background transition-colors"
          >
            SEE ALL ARTICLES
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Index;