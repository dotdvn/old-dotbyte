
import { motion } from 'motion/react';
import { Check, Sparkles, Receipt, HelpCircle, HardDrive, Layout, Laptop, DraftingCompass } from 'lucide-react';
import { PRICING_PLANS_DOT } from '../data';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const getPlanIcon = (planId: string) => {
    switch (planId) {
      case 'plan-starter':
        return <HardDrive className="w-5 h-5 text-gold-light" />;
      case 'plan-prof':
        return <Layout className="w-5 h-5 text-gold-light" />;
      case 'plan-advanced':
        return <Laptop className="w-5 h-5 text-gold-light" />;
      case 'plan-pcb':
        return <DraftingCompass className="w-5 h-5 text-gold-light" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-light" />;
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 relative w-full border-t border-white/5 bg-black/40">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gold-base/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] font-bold text-gold-base tracking-[0.25em] uppercase block mb-3">
            PRICING STRUCTURE
          </span>
          <h2 className="font-serif italic text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Transparent, Student-Friendly Pricing Plans
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 mt-4 leading-relaxed max-w-xl mx-auto">
            High-caliber electronics deliverables and web structures priced specifically to be accessible for student academic submissions and emerging businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch pt-2">
          {PRICING_PLANS_DOT.map((tier, idx) => {
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 3, rotateY: 3 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`relative rounded-[28px] p-7 flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                  tier.isPopular
                    ? 'border-2 border-gold-base bg-white/[0.04] shadow-[0_0_60px_rgba(167,139,113,0.15)] scale-[1.02] z-10'
                    : 'border border-white/10 bg-white/[0.012] hover:border-white/20 hover:bg-white/[0.025]'
                }`}
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
                id={`pricing_tier_card_${tier.id}`}
              >
                {tier.isPopular && (
                  <div className="absolute top-5 right-5 bg-gold-base text-black font-sans font-bold text-[8.5px] uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-2.5 h-2.5" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-9 h-9 rounded-lg bg-gold-base/10 border border-gold-base/20 flex items-center justify-center">
                      {getPlanIcon(tier.id)}
                    </div>
                    <span className="font-sans font-extrabold text-white text-sm tracking-wide">
                      {tier.name}
                    </span>
                  </div>
                  
                  <p className="font-sans text-xs text-gray-400 leading-relaxed tracking-wide mb-6 text-left min-h-[50px]">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-6 text-left">
                    <span className="font-sans text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                      {tier.priceLabel}
                    </span>
                    <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest">
                      / Flat Rate
                    </span>
                  </div>

                  <hr className="border-white/5 mb-6" />

                  <ul className="space-y-4.5 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-left">
                        <span className="w-4 h-4 rounded-full bg-gold-base/10 flex items-center justify-center shrink-0 border border-gold-base/20 mt-0.5 animate-pulse">
                          <Check className="w-2 text-gold-light" />
                        </span>
                        <span className="font-sans text-[11.5px] text-gray-300 leading-snug tracking-wide">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan(tier.name, tier.priceLabel)}
                  className={`w-full py-3.5 rounded-md font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-gold-base to-gold-light text-black hover:brightness-110 shadow-lg shadow-gold-base/15'
                      : 'border border-white/10 hover:border-gold-base/40 text-gray-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                  id={`btn_choose_plan_${tier.id}`}
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Choose Plan</span>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
