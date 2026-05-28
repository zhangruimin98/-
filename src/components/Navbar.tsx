import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={`${className} fill-current`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "专业能力", id: "expertise" },
    { name: "代表作品", id: "works" },
    { name: "核心经历", id: "experience" },
    { name: "联系我", id: "contact" }
  ];

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full bg-[#0c0c0ced]/60 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <LogoMark className="w-8 h-8 text-white hover:text-brand transition-colors duration-300" />
          <span className="font-semibold text-lg tracking-tight hover:text-brand transition-colors duration-300">
            張瑞敏 <span className="text-xs text-white/50 font-normal">Ruimin</span>
          </span>
        </div>

        {/* Center: Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.7, y: 0 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
              onClick={() => handleScroll(item.id)}
              className="text-sm font-medium text-white transition-colors cursor-pointer"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Right: CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="https://www.zcool.com.cn/work/ZNzM2MzMwODA=.html"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold text-sm px-5 py-2.5 transition-all duration-300 hover:bg-brand hover:text-black hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] active:scale-[0.98]"
          >
            站酷作品集
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#0c0c0cf5] backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-left py-2 text-base font-medium text-white/80 hover:text-white hover:text-brand transition-colors border-b border-white/5"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://www.zcool.com.cn/work/ZNzM2MzMwODA=.html"
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full text-center rounded-full bg-white text-black font-semibold text-sm py-3 flex items-center justify-center gap-2"
              >
                前往站酷主页
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
