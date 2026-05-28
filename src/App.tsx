import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuBar from "./components/MenuBar";
import DashboardMockup from "./components/DashboardMockup";
import Expertise from "./components/Expertise";
import SelectedWorks from "./components/SelectedWorks";
import Experience from "./components/Experience";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white selection:bg-brand/35 select-text">
      {/* 1. Global background video (fixed, behind everything) */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none opacity-50 scale-105"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        {/* Dark radial glow overlay to keep text extremely readable */}
        <div className="absolute inset-0 bg-[#0c0c0c]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient(ellipse at center, transparent 30%, #0c0c0c 90%) opacity-80" />
      </div>

      {/* 2. Hidden-on-mobile fixed vertical guide lines at 36rem container edges */}
      <div className="hidden xl:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/[0.04] z-[5]" />
      <div className="hidden xl:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/[0.04] z-[5]" />

      {/* 3. Global SVG noise filters */}
      <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="c3-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
            />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </defs>
      </svg>

      {/* Structured grid of modern components */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Head */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* macOS status toolbar */}
        <MenuBar />

        {/* Interactive mockups */}
        <DashboardMockup />

        {/* Personal capabilities / Expertise */}
        <Expertise />

        {/* Featured Case studies */}
        <SelectedWorks />

        {/* Career Corporate Work experience */}
        <Experience />

        {/* Footer info & CTA */}
        <FinalCTA />
      </div>
    </div>
  );
}
