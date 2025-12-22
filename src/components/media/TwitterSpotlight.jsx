export default function TwitterSpotlight() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20">
      <h2 className="text-[20px] font-semibold mb-6">Twitter Spotlight</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <img
            key={i}
            src={`/images/media/twitter/t${(i%3)+1}.webp`}
            className="rounded-lg border"
          />
        ))}
      </div>
    </section>
  );
}
