import { motion } from "motion/react";
import { Command, Search, CheckCircle } from "lucide-react";

export default function MenuBar() {
  const menuItems = ["File", "Edit", "View", "Go", "Window", "Help"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-10 bg-black/45 backdrop-blur-md border-y border-white/10 select-none z-20 relative"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs font-mono">
        {/* Left items */}
        <div className="flex items-center gap-4 sm:gap-6 text-white/50 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 text-white font-bold flex-shrink-0">
            <Command className="w-3.5 h-3.5 text-brand" />
            <span>Ruimin OS</span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            {menuItems.map((item) => (
              <span
                key={item}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right status */}
        <div className="flex items-center gap-2 text-brand font-medium">
          <CheckCircle className="w-3.5 h-3.5 text-brand" />
          <span>Active & Available for Hire</span>
          <span className="hidden md:inline text-white/30">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-white/50">
            <Search className="w-3.5 h-3.5" />
            <span>Luoyang / Zhengzhou / Remote</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
