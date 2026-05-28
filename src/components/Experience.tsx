import { motion } from "motion/react";
import { Landmark, GraduationCap, Award, Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10 z-20 relative">
      <div className="text-center mb-16 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-brand font-medium">
          💼 资历背景
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-white">
          核心职业经历
        </h2>
        <p className="text-sm text-white/50 mt-3 font-light">
          聚焦金融大厂与企业B端应用：用专业助力每一个产品细节高还原呈现
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Professional Experience (Col span 2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 liquid-glass rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Briefcase className="w-48 h-48 text-white" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  新晨科技股份有限公司 (Sinosoft)
                </h3>
                <p className="text-xs text-brand font-mono mt-1">
                  UI/UX 设计师 (B端金融领域) | 北京 (全职)
                </p>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50 w-fit font-mono">
              邮储银行大集团体系项目组
            </div>
          </div>

          {/* Details list */}
          <div className="mt-6 space-y-5 text-sm sm:text-[15px] text-white/80 leading-relaxed font-light">
            <p>
              主导并深耕**邮储银行系列核心系统研发**（包括：客服智能大模型管理平台、知识库检索系统、座席复杂配置矩阵系统等）。
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <ChevronRight className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-1">
                    业务需求挖掘与产品体验升级
                  </strong>
                  拆解复杂业务目标，建立可量化的核心交互设计模型。输出完整交互原型图谱、高保真视觉体系及配套详实的原型交付说明文档，确保开发逻辑在金融核心中极度严谨。
                </div>
              </div>

              <div className="flex gap-3">
                <ChevronRight className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-1">
                    主导搭建跨业务模块级联组件库与图标库
                  </strong>
                  将多子系统的信息碎片解混，规范化重塑组件颗粒，让**页面设计一致性提升 83% 以上**；编写并跟进还原落地样式细节，大幅提效产出周期。
                </div>
              </div>

              <div className="flex gap-3">
                <ChevronRight className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-1">
                    UX + 前端双端融合跟进
                  </strong>
                  理解前端基础与盒子模型（HTML, CSS/Flex), 直接使用 VS Code 等工具跟进调试开发代码视觉属性（字体、间距、过渡、重堆），**实现设计到落地 95%+ 真实还原率**。
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education & Info (Col span 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Education Card */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#A4F4FD]/10 border border-[#A4F4FD]/20 flex items-center justify-center text-[#A4F4FD]">
                <GraduationCap className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-base font-bold text-white">教育背景</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  天津财经大学珠江学院
                </h4>
                <p className="text-xs text-white/50 font-mono mt-1">
                  本科 (全日制)
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Award className="w-4 h-4 text-brand" />
                  <span>专业奖学金 (绩点专业前 20%)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <div className="w-4 flex items-center justify-center font-bold text-[10px] text-brand">
                    GPA
                  </div>
                  <span>累计绩点值: 3.55 (优秀级)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Creed Purity Card */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-brand/5 border border-brand/10">
            <h4 className="text-sm font-bold text-brand uppercase tracking-wider font-mono">
              设计信条 / PHILOSOPHY
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-4 font-light">
              “真正的设计不只是装饰，它是逻辑的延伸，是体验最生动的落地。我坚持「需求有出处、交互有闭环、还原能托底」的严谨交付原则。”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
