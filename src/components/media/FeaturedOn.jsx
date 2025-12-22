export default function FeaturedOn() {
  return (
    <section className="bg-gray-50 py-16">
      <p className="text-center text-[14px] text-gray-500 mb-6">
        Featured on
      </p>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {["et","bbc","ndtv"].map((l) => (
          <img
            key={l}
            src={`/images/media/logos/${l}.webp`}
            className="h-8 object-contain"
          />
        ))}
      </div>
    </section>
  );
}
