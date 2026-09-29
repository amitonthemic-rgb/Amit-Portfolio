"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { useVideoPlayback } from "./VideoPlaybackContext";
import { cn } from "@/lib/utils";

function isLocalMedia(sourceUrl: string) {
  return (
    sourceUrl.startsWith("/") ||
    /\.(mp4|webm|ogg)(\?|$)/i.test(sourceUrl)
  );
}

function toEmbedUrl(sourceUrl: string): string | null {
  try {
    const url = new URL(sourceUrl);
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "");
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
    }
    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v") ?? url.pathname.split("/").pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
    }
    if (url.hostname.includes("vimeo.com")) {
      const id = url.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

export function VideoPlayer({
  title,
  sourceUrl,
  posterSrc,
  meta,
  tone = "dark",
  className,
  playerId,
}: {
  title: string;
  sourceUrl?: string;
  posterSrc?: string;
  meta?: string;
  tone?: "dark" | "light";
  className?: string;
  /** Stable id so only one video plays site-wide */
  playerId?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { id, playing, requestPlay, stop } = useVideoPlayback(
    playerId ?? sourceUrl,
  );

  const local = useMemo(
    () => (sourceUrl && isLocalMedia(sourceUrl) ? sourceUrl : null),
    [sourceUrl],
  );
  const embed = useMemo(
    () => (sourceUrl && !local ? toEmbedUrl(sourceUrl) : null),
    [sourceUrl, local],
  );
  const canPlay = Boolean(local || embed);

  useEffect(() => {
    if (!playing) {
      const el = videoRef.current;
      if (el) {
        el.pause();
        el.currentTime = 0;
      }
      return;
    }
    if (!local || !videoRef.current) return;
    const el = videoRef.current;
    const playPromise = el.play();
    if (playPromise) {
      playPromise.catch(() => {
        /* User can still use native controls */
      });
    }
  }, [playing, local]);

  const shell =
    tone === "dark"
      ? "bg-[#1c1916] text-cinema-ink border-white/10"
      : "bg-paper-deep text-ink border-line";

  return (
    <div className={cn("w-full", className)} data-video-player={id}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-lg)] border aspect-video",
          shell,
        )}
      >
        {playing && local ? (
          <div className="absolute inset-0 bg-black">
            <video
              ref={videoRef}
              className="h-full w-full object-contain"
              src={local}
              poster={posterSrc}
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
              aria-label={title}
            />
            <button
              type="button"
              onClick={stop}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-black/60 text-white hover:bg-black/80"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ) : null}

        {playing && embed ? (
          <iframe
            key={id}
            title={title}
            src={`${embed}${embed.includes("?") ? "&" : "?"}autoplay=1`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        ) : null}

        {!playing ? (
          <button
            type="button"
            onClick={() => {
              if (canPlay) requestPlay();
            }}
            disabled={!canPlay}
            className="group absolute inset-0 flex w-full flex-col items-center justify-center gap-4 p-6 text-center"
            aria-label={canPlay ? `Play ${title}` : `${title} unavailable`}
          >
            {posterSrc ? (
              <Image
                src={posterSrc}
                alt=""
                fill
                className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-80"
                sizes="(max-width: 768px) 100vw, 900px"
                priority={false}
              />
            ) : null}
            <span className="relative z-10 flex flex-col items-center gap-4">
              <span
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105",
                  tone === "dark"
                    ? "border-cinema-ink/50 bg-cinema-ink/15 text-cinema-ink"
                    : "border-ink/30 bg-ink/5 text-ink",
                )}
              >
                <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden />
              </span>
              <span>
                <span className="display block text-2xl md:text-3xl drop-shadow">
                  {title}
                </span>
                <span
                  className={cn(
                    "mt-2 block text-sm",
                    tone === "dark" ? "text-cinema-ink/90" : "text-muted",
                  )}
                >
                  {canPlay
                    ? "Tap to play — audio starts on play"
                    : "Video unavailable"}
                </span>
              </span>
            </span>
          </button>
        ) : null}
      </div>
      {meta ? (
        <p
          className={cn(
            "mt-3 text-sm",
            tone === "dark" ? "text-cinema-muted" : "text-muted",
          )}
        >
          {meta}
        </p>
      ) : null}
    </div>
  );
}
