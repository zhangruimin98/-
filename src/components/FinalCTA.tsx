import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, Copy, Check, ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 md:py-32 z-20 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-6 py-16 md:py-24 text-center"
      >
        {/* Radial glow background overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(600px circle at 50% 0%, rgba(0, 210, 255, 0.12), transparent 70%)",
            opacity: 0.8
          }}
        />

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
          Let's build outstanding
          <span className="block mt-2 text-brand">enterprise products together.</span>
        </h2>

        {/* Sub-text */}
        <p className="mt-6 text-white/50 max-w-lg mx-auto text-sm sm:text-base leading-relaxed font-light">
          期待与您探讨 B 端复杂产品体验设计、组件级高还原落地、以及 AIGC 工作流赋能的更多可能性。我支持远程面试与跨城发展。
        </p>

        {/* Buttons triggers */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:2061789364@qq.com"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-black font-semibold text-sm px-7 py-4.5 transition-all duration-300 hover:bg-brand hover:text-black hover:scale-[1.03] active:scale-[0.98] cursor-pointer hover:shadow-[0_0_20px_rgba(0,210,255,0.4)]"
          >
            <Mail className="w-4 h-4" />
            <span>发送邮件联系我</span>
          </a>

          <a
            href="tel:+8615122186936"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 text-white font-semibold text-sm px-7 py-4.5 transition-all hover:bg-white/5 active:scale-[0.98] cursor-pointer"
          >
            <Phone className="w-4 h-4 text-brand" />
            <span>拨号：151-2218-6936</span>
          </a>
        </div>

        {/* Contact credentials with copy functions */}
        <div className="mt-16 max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email clip card */}
          <div className="liquid-glass rounded-xl p-4 flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block">
                  EMAIL
                </span>
                <span className="text-xs sm:text-sm text-white/80 truncate block">
                  2061789364@qq.com
                </span>
              </div>
            </div>

            <button
              onClick={() => handleCopy("2061789364@qq.com", "email")}
              className="text-white/40 hover:text-white p-2 transition-colors cursor-pointer"
              title="Copy email"
            >
              {copiedText === "email" ? (
                <Check className="w-4 h-4 text-brand" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone / WeChat clip card */}
          <div className="liquid-glass rounded-xl p-4 flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 flex-shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block">
                  PHONE / WECHAT
                </span>
                <span className="text-xs sm:text-sm text-white/80 truncate block">
                  151-2218-6936
                </span>
              </div>
            </div>

            <button
              onClick={() => handleCopy("15122186936", "phone")}
              className="text-white/40 hover:text-white p-2 transition-colors cursor-pointer"
              title="Copy WeChat"
            >
              {copiedText === "phone" ? (
                <Check className="w-4 h-4 text-brand" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Disclaimer/Resume statement */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-white/35 font-mono">
            © 2026 Zhang Ruimin. All rights reserved. 业务数据均已进行脱敏与保密处理。
          </p>
          <a
            href="https://www.zcool.com.cn/work/ZNzM2MzMwODA=.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-brand/70 hover:text-brand transition-colors mt-3 font-medium"
          >
            <span>👉 访问站酷 (Zcool) 完整设计长图解析主页</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
