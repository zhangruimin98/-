import { motion } from "motion/react";
import { Laptop, Code, BrainCircuit, Figma } from "lucide-react";

export function SectionEyebrow({
  label,
  tag
}: {
  label: string;
  tag?: string;
}) {
  return (
    <div className="inline-flex items-center gap-3.5 select-none text-xs">
      <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#00d2ff]" />
        <span>{label}</span>
      </div>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/45 font-mono text-[11px]">
          {tag}
        </span>
      )}
    </div>
  );
}

export default function Expertise() {
  const chips = [
    "To B (企业级大系统)",
    "金融核心系统设计",
    "VS Code 样式跟进",
    "盒子模型调试",
    "组件库开发规范",
    "AIGC 流程提效",
    "全链路可用性测试"
  ];

  return (
    <section id="expertise" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10 z-20 relative">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-start"
        >
          <SectionEyebrow label="Expertise" tag="Full-Stack UX Mindset" />

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] text-white">
            让设计与代码完美融合，
            <span className="block mt-2 text-brand">Bridge the Design-to-Code Gap.</span>
          </h2>

          <p className="mt-6 text-white/70 text-base sm:text-lg leading-[1.75] max-w-lg font-light text-justify">
            不仅仅是“画图”的设计师，我致力于打通「需求挖掘 ➡️ 视觉规范 ➡️
            前端落地」的全链路。具备极强的业务理解力与自驱力，习惯用数据与合规指引设计决策。
            掌握前端基础，能读懂并自主调试布局结构，让每个像素完美呈现。
          </p>

          {/* Chips Row */}
          <div className="mt-8 flex flex-wrap gap-2 max-w-lg">
            {chips.map((chip) => (
              <span
                key={chip}
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium cursor-default hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
            <span className="text-sm font-semibold tracking-wide text-white/50">Core Capabilities / 核心能力</span>
            <Figma className="w-4 h-4 text-brand" />
          </div>

          <div className="space-y-4">
            {/* Sub-card 1 */}
            <div className="liquid-glass rounded-lg p-5 group transition-all duration-300 hover:bg-white/[0.03]">
              <div className="flex items-center gap-3 text-white mb-2">
                <Laptop className="w-5 h-5 text-white" />
                <h3 className="font-semibold text-[15px]">B-End Systems (企业大系统)</h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed pl-8">
                拆解业务目标建立可量化的设计指标，输出完整高保真交互原型、页面树谱与组件规范（实现设计一致性提升 83%+）。
              </p>
            </div>

            {/* Sub-card 2 */}
            <div className="liquid-glass rounded-lg p-5 group transition-all duration-300 hover:bg-[#A4F4FD]/[0.02]">
              <div className="flex items-center gap-3 text-[#A4F4FD] mb-2">
                <Code className="w-5 h-5 text-[#A4F4FD]" />
                <h3 className="font-semibold text-[15px]">Vibe Coding (代码级还原)</h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed pl-8">
                深入理解盒子原理，熟练使用 VS Code 参与核心界面样式调整，独立解决 90% 以上前端视觉差异，保障核心还原度 95% 极其精雕。
              </p>
            </div>

            {/* Sub-card 3 */}
            <div className="liquid-glass rounded-lg p-5 group transition-all duration-300 hover:bg-brand/[0.02]">
              <div className="flex items-center gap-3 text-brand mb-2">
                <BrainCircuit className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-[15px]">AIGC Workflow (全工具赋能)</h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed pl-8">
                熟练应用 Google AI、Lovart、即梦 等生产式 AI 工具进行工作流提效（提速Demo、快速原型输出、轻量运营物料），倍增曝光。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
