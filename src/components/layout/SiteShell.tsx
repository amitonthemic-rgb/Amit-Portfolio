"use client";

import { Footer } from "./Footer";
import { MobileBookingBar } from "./MobileBookingBar";
import { Navbar } from "./Navbar";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { VideoPlaybackProvider } from "@/components/media/VideoPlaybackContext";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <VideoPlaybackProvider>
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <MobileBookingBar />
      <WhatsAppFloat />
    </VideoPlaybackProvider>
  );
}
