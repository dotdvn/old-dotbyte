
import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Cpu, BadgePercent, Orbit, GraduationCap } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgePercent: BadgePercent,
  Sparkles: Sparkles,
  Orbit: Orbit,
  GraduationCap: GraduationCap,
  Cpu: Cpu
};

export default function FeaturesGrid() {
  return (
    <section id="capabilities" className="py-20 lg:py-28 relative w-full border-t border-white/5 bg-black/20">
      
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-gold-base/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-gold-base/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-left mb-16 max-w-3xl">
          <span className="font-mono text-[10px] font-bold text-gold-base tracking-[0.25em] uppercase block mb-3">
            WHY CLIENTS STAND WITH US
          </span>
          <h2 className="font-serif italic text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Why Choose DotByte Systems for IoT & Electronics?
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 mt-4 leading-relaxed max-w-2xl">
            We deliver premium hardware design and custom microcontroller systems, specializing in ESP32 firmware, Arduino automation, multi-layer KiCad PCB layouts, and modern web application interfaces tailored for academic prototypes and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="glass-panel group p-6 rounded-[24px] hover:border-gold-base/35 flex flex-col justify-between cursor-pointer transition-all duration-500 bg-white/[0.02] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
                id={`why_us_card_${idx}`}
              >
                <div>
                  <div className="w-12 h-12 bg-gold-base/10 rounded-xl flex items-center justify-center border border-gold-base/20 mb-6 group-hover:bg-gold-base/20 transition-all duration-500">
                    <IconComponent className="w-5 h-5 text-gold-light group-hover:scale-110 transition-transform duration-500 ease-out" />
                  </div>

                  <h3 className="font-sans font-extrabold text-base lg:text-lg text-white tracking-wide mb-3 text-left">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed tracking-wide text-left">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-mono text-[9px] text-gray-600 tracking-wider">PILLAR 0{idx + 1}</span>
                  <span className="font-mono text-[10px] text-gold-base font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    VERIFIED ✓
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
