import { motion } from "motion/react";
import {
  Sparkles,
  Layers,
  Database,
  GitBranch,
  Terminal,
  Settings,
  TrendingUp,
  UserCheck,
  Zap,
  Activity,
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function DashboardMockup() {
  const activeNavItem = "Overview";
  const navItems = [
    { name: "Overview", icon: Layers },
    { name: "Data Models", icon: Database },
    { name: "Workflows", icon: GitBranch },
    { name: "Audit Logs", icon: Terminal },
    { name: "Settings", icon: Settings }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 z-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e1014]/93 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
      >
        {/* Title Bar */}
        <div className="h-12 border-b border-white/10 bg-black/40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border border-[#ff5f57]/10 flex-shrink-0" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#febc2e] border border-[#febc2e]/10 flex-shrink-0" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#28c840] border border-[#28c840]/10 flex-shrink-0" />
          </div>
          <span className="text-xs text-white/40 font-mono select-none tracking-wider">
            Finance Management System — B-End Design Standard
          </span>
          <div className="w-[48px]" /> {/* Spacer to center the label */}
        </div>

        {/* Studio Window Body */}
        <div className="grid grid-cols-12 h-auto md:h-[550px] overflow-hidden text-sm">
          {/* Sidebar (Desktop) */}
          <aside className="col-span-12 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10 bg-black/20 p-5 flex flex-col justify-between">
            <div>
              {/* Creator Pill */}
              <button className="w-full group inline-flex items-center justify-between rounded-lg bg-white text-black text-xs font-semibold px-4 py-3 hover:bg-brand hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                  <span>Interactive Component</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Sidebar Menu Items */}
              <div className="mt-8 space-y-1.5">
                {navItems.map((item) => {
                  const IconComp = item.icon;
                  const isActive = item.name === activeNavItem;
                  return (
                    <button
                      key={item.name}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 text-left cursor-pointer ${
                        isActive
                          ? "bg-white/10 text-white font-medium"
                          : "text-white/50 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isActive ? "text-brand" : "text-white/40"}`} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Tech-indicator dots */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block mb-3 font-mono">
                Component Stack & Restore
              </span>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
                  <span className="text-white/60 font-mono text-[11px]">HTML/CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A4F4FD]" />
                  <span className="text-white/60 font-mono text-[11px]">JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                  <span className="text-white/60 font-mono text-[11px]">VS Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span className="text-white/60 font-mono text-[11px]">AIGC Feed</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Area */}
          <main className="col-span-12 md:col-span-9 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto index-charts text-white">
            {/* Top Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="liquid-glass rounded-xl p-5 hover:bg-white/[0.03] transition-all group cursor-pointer duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/50">企业级一致性</span>
                  <Activity className="w-4 h-4 text-brand group-hover:rotate-12 transition-transform" />
                </div>
                <div className="text-3xl font-extrabold text-white mt-3 select-none flex items-baseline gap-1.5">
                  83%
                  <span className="text-xs text-emerald-400 font-medium font-mono">↑ 提升</span>
                </div>
                <div className="text-[11px] text-white/40 mt-1.5 font-mono">组件粒度解耦与效率重构</div>
              </div>

              {/* Card 2 */}
              <div className="liquid-glass rounded-xl p-5 hover:bg-white/[0.03] transition-all group cursor-pointer duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/50">前端设计还原</span>
                  <UserCheck className="w-4 h-4 text-brand group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-extrabold text-white mt-3 select-none flex items-baseline gap-1.5">
                  95%+
                  <span className="text-xs text-[#00d2ff] font-medium font-mono">Fidelity</span>
                </div>
                <div className="text-[11px] text-white/40 mt-1.5 font-mono">深度把控样式与边界盒模型</div>
              </div>

              {/* Card 3 */}
              <div className="liquid-glass rounded-xl p-5 hover:bg-white/[0.03] transition-all group cursor-pointer duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/50">AIGC提效指数</span>
                  <Zap className="w-4 h-4 text-[#f59e0b] group-hover:animate-bounce" />
                </div>
                <div className="text-3xl font-extrabold text-white mt-3 select-none flex items-baseline gap-1.5">
                  +40%
                  <span className="text-xs text-amber-400 font-medium font-mono">效率</span>
                </div>
                <div className="text-[11px] text-white/40 mt-1.5 font-mono">业务物料与原型快速验证</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="liquid-glass rounded-xl p-6 mt-6 flex-grow flex flex-col justify-between min-h-[220px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand" />
                    <span>邮储银行客服平台交互热度与埋点链路研判</span>
                  </h4>
                  <p className="text-[11px] text-white/40 mt-0.5">
                    通过追踪低效停留、优化冗长表单流程，降低 24% 误操作风险
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-white/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand" /> 重构后
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" /> 重构前
                  </span>
                </div>
              </div>

              {/* Simulated Charts layout */}
              <div className="flex-grow mt-6 flex flex-col justify-end gap-4">
                {/* Simulated bar 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-white/50 font-mono">
                    <span>系统高复杂度页面载入效率提升 (客服交互大模型)</span>
                    <span className="text-white">680ms ➡️ 120ms</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-right from-brand/20 to-brand rounded-full"
                    />
                  </div>
                </div>

                {/* Simulated bar 2 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-white/50 font-mono">
                    <span>信息层级冗余度消减量 (知识库查询面板)</span>
                    <span className="text-brand">83% (大幅精简)</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-right from-[#A4F4FD]/20 to-[#A4F4FD] rounded-full"
                    />
                  </div>
                </div>

                {/* Simulated table row/status */}
                <div className="flex items-center gap-3 mt-4 border-t border-white/5 pt-4 text-xs">
                  <ShieldAlert className="w-4 h-4 text-brand flex-shrink-0" />
                  <span className="text-white/60">
                    B端金融核心合规保障: 严格规避超长输入风险，高危功能配置高可读二次确认提示。
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </motion.div>
    </section>
  );
}
