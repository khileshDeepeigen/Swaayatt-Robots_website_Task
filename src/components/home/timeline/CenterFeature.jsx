export default function CenterFeature() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

      <div className="relative w-[360px] aspect-video rounded-xl overflow-hidden">
        <img
          src="/images/blogs/blog1.webp"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="mt-4 text-center text-white/80 text-sm max-w-[360px]">
        Introducing Bidirectional Negotiation to the World of Autonomous Driving
      </p>
    </div>
  );
}
