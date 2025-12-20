import VideoCard from "./VideoCard";
import { offroadVideos } from "../data/offroadVideo";

export default function VideoGrid() {
  return (
    <section className="px-6 md:px-16 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {offroadVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
