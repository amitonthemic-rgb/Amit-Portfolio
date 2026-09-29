"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
} from "react";

type VideoPlaybackContextValue = {
  activeId: string | null;
  requestPlay: (id: string) => void;
  stop: (id?: string) => void;
  isActive: (id: string) => boolean;
};

const VideoPlaybackContext = createContext<VideoPlaybackContextValue | null>(
  null,
);

export function VideoPlaybackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [playbackPath, setPlaybackPath] = useState(pathname);

  // Provider wraps the shell, so activeId survives client navigations.
  // Reset during render (not in an effect) so the next page never paints
  // with a leftover playing state — e.g. home showreel after /showreel.
  if (pathname !== playbackPath) {
    setPlaybackPath(pathname);
    setActiveId(null);
  }

  const requestPlay = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const stop = useCallback((id?: string) => {
    setActiveId((current) => {
      if (!id || current === id) return null;
      return current;
    });
  }, []);

  const isActive = useCallback(
    (id: string) => activeId === id,
    [activeId],
  );

  const value = useMemo(
    () => ({ activeId, requestPlay, stop, isActive }),
    [activeId, requestPlay, stop, isActive],
  );

  return (
    <VideoPlaybackContext.Provider value={value}>
      {children}
    </VideoPlaybackContext.Provider>
  );
}

export function useVideoPlayback(preferredId?: string) {
  const ctx = useContext(VideoPlaybackContext);
  const generatedId = useId();
  const id = preferredId ?? generatedId;

  if (!ctx) {
    return {
      id,
      playing: false,
      requestPlay: () => undefined,
      stop: () => undefined,
      coordinated: false as const,
    };
  }

  return {
    id,
    playing: ctx.isActive(id),
    requestPlay: () => ctx.requestPlay(id),
    stop: () => ctx.stop(id),
    coordinated: true as const,
  };
}
