export interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface WhyUsProps {
  title?: string;
  description?: string;
  values: ValueCard[];
  backgroundImage?: string;
  noSlant?: boolean;
}

export const WhyUs: React.FC<WhyUsProps> = ({
  title = "WHY US?",
  description = "We provide dance instruction in a Christ-centered environment that nurtures each dancer's God-given gifts for ministry, outreach, and entertainment. Through rigorous technique, professional mentorship, and an uplifting atmosphere guided by Christ's love, our aim is to inspire dancers to pursue excellence as an act of worship.",
  values,
  backgroundImage = "https://res.cloudinary.com/dxqzby6fc/image/upload/w_2400,q_100,f_jpg,e_sharpen:100/v1762365784/blue-texture_yyysa2",
  noSlant = false
}) => {
  return (
    <section 
      data-component="WhyUs"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" 
      style={{ 
        clipPath: noSlant ? 'none' : 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)', 
        marginTop: noSlant ? '0' : '-8rem', 
        paddingTop: noSlant ? '3rem' : '6rem', 
        marginBottom: noSlant ? '0' : '-4rem', 
        paddingBottom: noSlant ? '3rem' : '6rem',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'crisp-edges',
        filter: 'contrast(1.1) saturate(1.05)'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col items-center">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-black uppercase mb-2 text-white blue-section-text" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            {title}
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
          <p className="text-base sm:text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text">
            {description}
          </p>
        </div>

        {/* Why Us Grid - Stack vertically on mobile, 2 columns on tablet, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out ${
                value.title === "HIS GLORY" ? "md:hidden lg:block" : ""
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-2xl shadow-lg">
                <div className="text-center p-6 sm:p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4 text-histown-text">{value.title}</h3>
                  <p className="text-sm sm:text-base text-histown-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
