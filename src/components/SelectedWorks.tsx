import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";

export default function SelectedWorks() {
  const projects = [
    {
      subtitle: "Code Fidelity",
      metric: "95%+",
      name: "客服大模型管理平台",
      desc: "以 UX + 前端双重角色深入跟进落地过程，解决核心还原瓶颈",
      details: [
        "搭建企业级设计系统与前端组件库规范，彻底对齐视觉与代码",
        "使用 VS Code 参与核心界面样式调整，确保设计图跟开发网页 1:1 还原",
        "跟进并独立调试修复 90% 以上前端视觉差异，消除卡顿和布局错位",
        "让最终用户体验流畅自然，极大强化了前台智能客服的操作交互感"
      ],
      link: "https://www.zcool.com.cn/work/ZNzM2MzMwODA=.html",
      btnText: "查看项目解析",
      isPro: false
    },
    {
      subtitle: "Data Driven",
      metric: "100%",
      name: "知识库管理系统",
      desc: "依托埋点数据与合规指引进行界面升级，精准解决交互难点",
      details: [
        "严密拆解业务合规流程，依托埋点研判客服查询时的痛点反馈",
        "对高频操作（查询、过滤、知识定位）设计极致简洁的信息视觉层级",
        "有效消除客服办理金融业务时的疑惑感，全流程降低二次操作误区",
        "完美通过邮储银行大集团极严格的软件合规与可用性安全测试"
      ],
      link: "https://www.zcool.com.cn/work/ZNzM2MzMwODA=.html",
      btnText: "查看项目解析",
      isPro: false
    },
    {
      subtitle: "Experience Upgrade",
      metric: "83%↑",
      name: "座席管理系统",
      desc: "全面优化复杂金融场景下的信息架构与多工单交叉处理能力",
      details: [
        "深度解析多窗口多角色座席场景，简化传统复杂表单的多步骤操作",
        "搭建高复用度原子级设计组件库，产品界面一致度实现 83% 的跃进",
        "与核心前后端开发团队直连，交付效率获得项目决策层卓越好评",
        "成功将智能座席开户及工单分发流转周期整体缩短 24% 以上"
      ],
      link: "https://www.zcool.com.cn/work/ZNzM2MzMwODA=.html",
      btnText: "查看项目解析 ↗",
      isPro: true
    }
  ];

  return (
    <section id="works" className="c3-works-section max-w-6xl mx-auto px-6 z-20 relative">
      {/* Works filter inside of Works section as specified in specs */}
      <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="c3-noise-works">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.075" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </defs>
      </svg>

      {/* Watermark element */}
      <div className="c3-watermark-container">
        <div className="c3-watermark-main" style={{ filter: "url(#c3-noise-works)" }}>
          <span className="c3-watermark-line-1">Selected</span>
          <span className="c3-watermark-line-2">Works.</span>
        </div>
      </div>

      {/* Header Info */}
      <div className="relative z-10 text-center mb-16 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-brand font-medium">
          🌟 代表作品
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-white">
          深耕邮储银行，代表案例展示
        </h2>
        <p className="text-sm md:text-base text-white/50 mt-4 leading-relaxed font-light">
          聚焦北京新晨科技负责的邮储银行系列核心系统研发：通过严谨的设计体系与极致的前端还原实践，重塑 B 端金融核心生产效率。
        </p>
      </div>

      {/* Cards List container */}
      <div className="c3-cards-container relative z-10">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.15 * i, duration: 0.8 }}
            className={`c3-card ${proj.isPro ? "c3-card-pro" : ""}`}
          >
            {/* Top Row with details */}
            <div>
              <div className="c3-tier-small">{proj.subtitle}</div>
              <div className="c3-tier-large flex items-baseline">
                {proj.metric}
              </div>
              <h3 className="c3-desc text-white flex items-center justify-between border-b border-white/5 pb-3">
                <span>{proj.name}</span>
                {proj.isPro && (
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-brand/10 text-brand px-2 py-0.5 rounded border border-brand/20">
                    Featured
                  </span>
                )}
              </h3>
              <p className="text-xs text-white/50 mt-3 mb-6 bg-white/5 rounded-lg p-3 border border-white/5">
                {proj.desc}
              </p>

              {/* List Details with checkmarks */}
              <div className="c3-list">
                {proj.details.map((detail, index) => (
                  <div key={index} className="c3-list-item">
                    <Check className="c3-list-item-icon text-brand w-4 h-4 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Link button to zcool */}
            <div className="mt-8">
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="c3-btn group"
              >
                <span>{proj.btnText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
