import { motion } from "motion/react";
import { ArrowDownRight, Compass, Sparkles } from "lucide-react";

export default function Hero() {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #A4F4FD 67.5%, #0B2551 87.5%, #091020 100%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    filter: "url(#c3-noise)"
  };

  const handleScrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-16 md:pt-28 pb-20 text-center flex flex-col items-center max-w-5xl mx-auto px-6 z-10">
      {/* Root level noise filter declaration */}
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

      {/* Recruiter Alert Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,210,255,0.05)]"
      >
        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        <span>现正寻求 郑州 / 上海 / 深圳 / 杭州 / 北京 等地 UI/UX 全职机会 (支持远程)</span>
      </motion.div>

      {/* Main Big Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.05]"
      >
        <span className="block text-white">UI/UX Design.</span>
        <span className="block animate-shiny py-1" style={gradientStyle}>
          Vibe Coding.
        </span>
      </motion.h1>

      {/* Intro Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-[1.8] font-light"
      >
        Hi, 我是 <span className="font-semibold text-white">张瑞敏 (Ruimin Zhang)</span>。
        <span className="block mt-2 text-white">
          懂前端的业务型 UI/UX 设计师，用严谨的逻辑与代码助力产品体验落地。
        </span>
        深耕 B 端金融领域，主导过企业级组件库设计，并跨界扮演 UX+前端双重角色直接保障开发还原度达 95%+。
      </motion.p>

      {/* CTA Trigger and Career details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10 flex flex-col items-center gap-4"
      >
        <button
          onClick={handleScrollToWorks}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-semibold text-sm px-8 py-4 transition-all duration-300 hover:bg-brand hover:text-black hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] cursor-pointer"
        >
          <span>浏览代表作品</span>
          <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </button>

        <div className="flex items-center gap-2 text-xs text-white/45 mt-2">
          <Compass className="w-3.5 h-3.5" />
          <span>期望城市：郑州 / 上海 / 深圳 / 杭州 (接受跨城发展与面试)</span>
        </div>
      </motion.div>
    </section>
  );
}
