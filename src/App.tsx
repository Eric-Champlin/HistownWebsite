import { homeContent } from './content/home'
import Navigation from './components/layout/Navigation'
import { LazyImage } from './components/common/LazyImage'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { WhyUs } from './components/sections/WhyUs'
import { whyUsValues } from './data/whyUsValues'
import { Testimonials } from './components/sections/Testimonials'
import { NextSteps } from './components/sections/NextSteps'
import { Footer } from './components/layout/Footer'

function App() {
  useEffect(() => {
    // Hero fade-in animation on page load
    const heroElements = document.querySelectorAll('.hero-fade-in');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('in-view');
      }, index * 200); // Stagger the animations
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          // Remove the class when element goes out of view to allow re-animation
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-white" style={{ paddingBottom: '6rem', marginBottom: '-4rem' }}>
        <header className="mobile-container mobile-section">
        <h1 
          className="text-3xl sm:text-5xl lg:text-6xl text-center hero-fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out font-bold leading-tight"
          dangerouslySetInnerHTML={{ __html: homeContent.hero.headline }}
        ></h1>
        <p 
          className="text-lg sm:text-xl lg:text-1xl text-center mt-4 sm:mt-6 max-w-3xl mx-auto hero-fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out leading-relaxed px-4"
          dangerouslySetInnerHTML={{ __html: homeContent.hero.subheadline }}
        ></p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mt-6 sm:mt-8 hero-fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out px-4 max-w-md sm:max-w-none mx-auto">
          <a 
            href={homeContent.hero.primaryCta.href}
            className="btn-primary text-center transform hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto py-4 sm:py-3 px-6 sm:px-8 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
            style={{
              background: 'linear-gradient(to right, #0e7490, #0891b2)',
              color: 'white'
            }}
          >
            {homeContent.hero.primaryCta.label}
          </a>
          {homeContent.hero.secondaryCta && (
            <Link 
              to={homeContent.hero.secondaryCta.href}
              className="border-2 border-histown-primary text-histown-primary hover:bg-histown-primary hover:text-white active:bg-histown-primary-dark active:text-white font-medium text-center transform hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto py-4 sm:py-3 px-6 sm:px-8 min-h-[44px] flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
            >
              {homeContent.hero.secondaryCta.label}
            </Link>
          )}
        </div>
        </header>
      </div>
      

      {/* Programs Section - Dance Classes, Music Classes, Featured Programs */}
      <main 
        className="relative overflow-hidden" 
        style={{ 
          clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)', 
          marginTop: '-4rem', 
          paddingTop: '6rem', 
          marginBottom: '-4rem', 
          paddingBottom: '6rem',
          backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/w_2400,q_100,f_jpg,e_sharpen:100/v1762365784/blue-texture_yyysa2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) saturate(1.05)'
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20 mobile-section">
          {/* Dance Classes - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 md:gap-14 items-stretch mb-12 sm:mb-20 animate-on-scroll">
            <div className="animate-slide-in-left hidden lg:block">
              <div className="rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative" style={{ aspectRatio: '4/3' }}>
                <LazyImage
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222737/4L3t1SQ_gqvwxi.jpg" 
                  alt="Dance Classes" 
                  className="w-full h-full object-cover min-h-[260px]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>
              </div>
            </div>
            <div className="animate-slide-in-right h-full">
              <div className="bg-gradient-to-br from-histown-primary/40 via-histown-secondary/40 to-histown-accent/40 p-2 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 rounded-2xl pointer-events-none"></div>
                <div className="p-6 sm:p-8 rounded-xl h-full flex flex-col justify-center relative z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 relative inline-block" style={{ fontWeight: 550, fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em' }}>
                    Dance Classes
                    <div className="h-1 w-48 sm:w-72 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-3 sm:mt-4"></div>
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Discover the joy of movement through our comprehensive dance program. From classical ballet to contemporary expression, we nurture each dancer's unique gifts while building strong technique, confidence, and character in a Christ-centered environment.
                  </p>
                  <a 
                    href="/classes/dance"
                    className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark active:from-histown-primary-dark active:to-histown-primary-dark text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-full sm:w-fit text-center transform hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Music Classes - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 md:gap-14 items-stretch mb-12 sm:mb-20 animate-on-scroll">
            <div className="animate-slide-in-left lg:order-1 h-full">
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-2 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 rounded-2xl pointer-events-none"></div>
                <div className="p-6 sm:p-8 rounded-xl h-full flex flex-col justify-center relative z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 relative inline-block" style={{ fontWeight: 500, fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em' }}>
                    Music Classes
                    <div className="h-1 w-48 sm:w-72 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-3 sm:mt-4"></div>
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Unlock your musical potential with personalized instruction from our gifted teachers. Whether you're drawn to piano melodies, guitar rhythms, violin harmonies, or vocal expression, we'll help you develop your talents while celebrating the gift of music.
                  </p>
                  <a 
                    href="/classes/music"
                    className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark active:from-histown-primary-dark active:to-histown-primary-dark text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-full sm:w-fit text-center transform hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right lg:order-2 hidden lg:block">
              <div className="rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative" style={{ aspectRatio: '4/3' }}>
                <LazyImage
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222736/HLP9IVj_e4pdod.jpg" 
                  alt="Music Classes" 
                  className="w-full h-full object-cover min-h-[260px]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Featured Programs - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 md:gap-14 items-stretch animate-on-scroll">
            <div className="animate-slide-in-left hidden lg:block">
              <div className="rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative" style={{ aspectRatio: '4/3' }}>
                <LazyImage
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222735/P6AF87u_coofig.jpg" 
                  alt="Featured Programs" 
                  className="w-full h-full object-cover min-h-[260px]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>
              </div>
            </div>
            <div className="animate-slide-in-right h-full">
              <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-2 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 rounded-2xl pointer-events-none"></div>
                <div className="p-6 sm:p-8 rounded-xl h-full flex flex-col justify-center relative z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 relative inline-block" style={{ fontWeight: 500, fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em' }}>
                    Featured
                    <div className="h-1 w-40 sm:w-56 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-3 sm:mt-4"></div>
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Take your artistry to the next level with our specialized offerings. From theatrical performance and adult fitness classes to elite company training and competitive dance teams, we provide pathways for every passion and skill level.
                  </p>
                  <a 
                    href="/classes/featured"
                    className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark active:from-histown-primary-dark active:to-histown-primary-dark text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-full sm:w-fit text-center transform hover:scale-105 active:scale-95 min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Why Us Section */}
      <WhyUs values={whyUsValues} />

      {/* Meet Our Team Section */}
      <section 
        className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-20 md:py-32 relative overflow-hidden" 
        style={{ 
          clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 100%)', 
          marginTop: '-4rem', 
          paddingTop: '6rem', 
          marginBottom: '-4rem', 
          paddingBottom: '6rem' 
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-histown-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-histown-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-histown-secondary rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20 relative z-10">
          {/* Enhanced Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-black uppercase mb-2 relative inline-block text-black" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              MEET OUR TEAM
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Meet the passionate individuals who bring faith, creativity, and excellence to every class!
            </p>
          </div>

          {/* Enhanced Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-8 lg:gap-16 -mt-4 sm:-mt-8">
            {/* Owners */}
            <Link to="/about/team" className="group text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out block min-h-[44px]" style={{ transitionDelay: '200ms' }}>
              <div className="relative mb-6 sm:mb-8 md:mb-6 lg:mb-8">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl group-active:shadow-3xl transition-all duration-500 transform group-hover:scale-105 group-active:scale-105 bg-gradient-to-br from-histown-primary/5 to-histown-accent/5 p-2" style={{ aspectRatio: '1/1' }}>
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <LazyImage
                      src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307104/H0VTGeM_wqdtuw.png"
                      alt="Studio Owners"
                      className="w-full h-full object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-3 lg:-bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-histown-primary to-histown-accent text-white px-4 py-2 sm:px-6 sm:py-2 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full shadow-lg">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-4 lg:p-6 shadow-lg group-hover:shadow-xl group-active:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 group-active:-translate-y-2 min-h-[140px] sm:h-40 md:h-36 lg:h-40 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-lg lg:text-2xl font-bold text-histown-text mb-2 sm:mb-3 md:mb-2 lg:mb-3 group-hover:text-histown-primary group-active:text-histown-primary transition-colors duration-300" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>Owners</h3>
                  <p className="text-histown-text-muted text-base sm:text-lg md:text-sm lg:text-lg leading-relaxed">Leading with passion and faith, creating a nurturing environment</p>
                </div>
              </div>
            </Link>

            {/* Dancers */}
            <Link to="/about/team" className="group text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out block min-h-[44px]" style={{ transitionDelay: '400ms' }}>
              <div className="relative mb-6 sm:mb-8 md:mb-6 lg:mb-8">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl group-active:shadow-3xl transition-all duration-500 transform group-hover:scale-105 group-active:scale-105 bg-gradient-to-br from-histown-accent/5 to-histown-secondary/5 p-2" style={{ aspectRatio: '1/1' }}>
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <LazyImage
                      src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307103/5dfj0Ng_z8qr1f.png"
                      alt="Dance Instructors"
                      className="w-full h-full object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-3 lg:-bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-histown-accent to-histown-secondary text-white px-4 py-2 sm:px-6 sm:py-2 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full shadow-lg">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-4 lg:p-6 shadow-lg group-hover:shadow-xl group-active:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 group-active:-translate-y-2 min-h-[140px] sm:h-40 md:h-36 lg:h-40 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-lg lg:text-2xl font-bold text-histown-text mb-2 sm:mb-3 md:mb-2 lg:mb-3 group-hover:text-histown-primary group-active:text-histown-primary transition-colors duration-300" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>Dancers</h3>
                  <p className="text-histown-text-muted text-base sm:text-lg md:text-sm lg:text-lg leading-relaxed">Inspiring movement and grace through artistic technique</p>
                </div>
              </div>
            </Link>

            {/* Musicians */}
            <Link to="/about/team" className="group text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out block min-h-[44px]" style={{ transitionDelay: '600ms' }}>
              <div className="relative mb-6 sm:mb-8 md:mb-6 lg:mb-8">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl group-active:shadow-3xl transition-all duration-500 transform group-hover:scale-105 group-active:scale-105 bg-gradient-to-br from-histown-secondary/5 to-histown-primary/5 p-2" style={{ aspectRatio: '1/1' }}>
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <LazyImage
                      src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307104/zYc8QQs_no8iw4.png"
                      alt="Music Instructors"
                      className="w-full h-full object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-3 lg:-bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-histown-secondary to-histown-primary text-white px-4 py-2 sm:px-6 sm:py-2 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full shadow-lg">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-4 lg:p-6 shadow-lg group-hover:shadow-xl group-active:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 group-active:-translate-y-2 min-h-[140px] sm:h-40 md:h-36 lg:h-40 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-lg lg:text-2xl font-bold text-histown-text mb-2 sm:mb-3 md:mb-2 lg:mb-3 group-hover:text-histown-primary group-active:text-histown-primary transition-colors duration-300" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>Musicians</h3>
                  <p className="text-histown-text-muted text-base sm:text-lg md:text-sm lg:text-lg leading-relaxed">Creating harmony and melody that touches hearts and souls</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <NextSteps />

      <Footer />
    </div>
  )
}

export default App