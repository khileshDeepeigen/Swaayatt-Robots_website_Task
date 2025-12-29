export default function RoadTimeline() {
  return (
    <div className="absolute bottom-0 w-full h-[160px]">

      {/* ROAD */}
      <div className="absolute bottom-0 w-full h-[80px] bg-[#1c1c1c]">
        <div className="absolute inset-x-0 top-1/2 h-[2px]
          bg-[repeating-linear-gradient(to_right,white_0_20px,transparent_20px_40px)]
          opacity-40
        " />
      </div>

      {/* CAR */}
      <img
        src="/images/car.png"
        className="absolute left-1/2 bottom-[30px] w-[120px] -translate-x-1/2"
      />
    </div>
  );
}
