export default function VideoCard({ data, section }) {
  const imageSrc = `/images/research/${section}/${data.thumbnail}`;

  return (
    <div className="min-w-[360px] max-w-[360px]">
      {/* THUMBNAIL */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
        <img
          src="/images/Blogs/Blog-1.webp"
          alt={data.title}
          className="w-full h-full object-cover"
        />

        {/* YOUTUBE PLAY ICON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
          </div>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="mt-4">
        <h3 className="font-rethink font-bold text-[16px] leading-[120%] tracking-[-0.02em] text-[#3F3F3F] line-clamp-2">
          {data.title}
        </h3>

        <p className="mt-2 font-rethink font-normal text-[13px] leading-[140%] tracking-[-0.02em] text-[#737373] line-clamp-3">
          {data.description}
        </p>

        <p className="mt-3 font-mono text-[11px] text-[#9CA3AF]">
          {data.date}
        </p>
      </div>
    </div>
  );
}
