"use client";

import { useEffect, useState } from "react";

// Upload your video files here: public/videos/  → e.g. public/videos/video-1.mp4
// Upload your poster/thumbnail images here: public/images/  → e.g. public/images/video-1-poster.jpg
// Then just change the "src" and "poster" paths below to match your filenames.
const VIDEOS = [
  {
    id: "v1",
    tag: "AlephTalks",
    title: "The Key to Spiritual Awakening — Consciousness, Explained",
    poster: "/images/video-1-poster.jpg",
    src: "/videos/video-1.mp4",
  },
  {
    id: "v2",
    tag: "OlyLife",
    title: "Energy & Frequency: The Science Behind the Feeling",
    poster: "/images/video-1-poster.jpg",
    src: "/videos/video-1.mp4",
  },
  {
    id: "v3",
    tag: "Astrology",
    title: "Astrology for Beginners: Reading Your First Birth Chart",
    poster: "/images/video-1-poster.jpg",
    src: "/videos/video-1.mp4",
  },
];

export default function Videos() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = VIDEOS.find((v) => v.id === activeId) ?? null;

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="videos" id="videos">
      <div className="videos-head">
        <div>
          <span className="eyebrow">Featured Videos</span>
          <h2>Start where curiosity is loudest</h2>
        </div>
        <a href="#videos" className="view-all">
          View All Videos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
      <div className="video-grid">
        {VIDEOS.map((v) => (
          <button
            type="button"
            className="v-card"
            key={v.id}
            onClick={() => setActiveId(v.id)}
            aria-label={`Play video: ${v.title}`}
          >
            <div className="v-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={v.poster} alt={v.title} />
              <span className="play">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A0F1C">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
            <div className="v-info">
              <span className="tag">{v.tag}</span>
              <h4>{v.title}</h4>
            </div>
          </button>
        ))}
      </div>

      <div
        className={`video-modal-overlay${active ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveId(null);
        }}
      >
        {active && (
          <div className="video-modal-card" role="dialog" aria-modal="true" aria-label={active.title}>
            <button className="video-modal-close" aria-label="Close" onClick={() => setActiveId(null)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <video
              className="video-modal-player"
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              playsInline
            />
          </div>
        )}
      </div>
    </section>
  );
}
