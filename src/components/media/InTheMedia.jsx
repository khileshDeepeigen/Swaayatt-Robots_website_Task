export default function InTheMedia() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20">
      <h2 className="text-[20px] font-semibold mb-6">In the Media</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i}>
            <div className="relative rounded-lg overflow-hidden">
              <img src={`/images/media/news/n${(i%3)+1}.webp`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <h3 className="mt-3 text-[14px] font-semibold">
              Self-Driving Vehicle | IITian Who Turned Bolero Into Self-Driving Car
            </h3>

            <p className="text-[12px] text-gray-500 mt-1">2023-10-28</p>
          </div>
        ))}
      </div>
    </section>
  );
}
