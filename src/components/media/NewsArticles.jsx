export default function NewsArticles() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-24">
      <h2 className="text-[20px] font-semibold mb-6">News and Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-sm">
            <img src={`/images/media/news/n${i}.webp`} />
            <div className="p-4">
              <h3 className="text-[14px] font-semibold">
                Bhopal Entrepreneur Builds L-5 Autonomous Driving System
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
