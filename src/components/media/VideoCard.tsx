import { VideoPlayer } from "./VideoPlayer";
import type { VideoItem } from "@/content/types";

export function VideoCard({ video }: { video: VideoItem }) {
  const meta = [video.category, video.city, video.year, video.language]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="flex flex-col gap-3">
      <VideoPlayer
        playerId={video.id}
        title={video.title}
        sourceUrl={video.sourceUrl}
        posterSrc={video.posterSrc}
        tone="light"
      />
      <div>
        <h3 className="display text-2xl">{video.title}</h3>
        {meta ? <p className="mt-1 text-sm text-muted">{meta}</p> : null}
      </div>
    </article>
  );
}
