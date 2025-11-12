import React, { useEffect } from 'react';
import NavBar from '../components/layout/NavBar';

const MusicClasses: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const musicClasses = [
    { id: 'piano', name: 'Piano', description: 'Master the keys with classical and contemporary piano instruction that develops technique, musicality, and expression', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800', position: 'center center' },
    { id: 'violin', name: 'Violin', description: 'Discover the beauty of strings through violin lessons that build proper technique, tone production, and musical artistry', image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800', position: 'center center' },
    { id: 'guitar', name: 'Guitar', description: 'Learn acoustic and electric guitar with instruction in chords, strumming, fingerpicking, and contemporary styles', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800', position: 'center center' },
    { id: 'vocal', name: 'Vocal', description: 'Develop your voice through vocal training that focuses on breath control, tone, range, and confident performance', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800', position: 'center center' }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    // Testimonials carousel
    const testimonials = [
      { author: "Emily Song", text: "My daughter just completed her first semester at Histown and it has been an incredibly positive experience! The teachers are gracious, kind, and very knowledgeable about music and the instructional tools/pacing needed to help students succeed at various age levels. I have been so impressed with my daughter's development!" },
      { author: "Justine Vild", text: "My daughter has been taking music lessons at Histown for many years. There are lots of things I love about this studio, not the least of them being that it's a Christian music studio. The teachers are patient and encouraging." },
      { author: "Kathleen Crews", text: "Histown provides the healthy music experience I wanted for my daughter. The owners, teachers, and office manager have created a family-like atmosphere where students support and cheer for each other." }
    ];

    const testimonialsTrack = document.getElementById('testimonials-track-music');
    if (testimonialsTrack) {
      testimonialsTrack.innerHTML = testimonials.map(testimonial => `
        <div class="flex-none w-80 mx-4 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 min-h-80 flex flex-col">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 mr-3">
              <svg viewBox="0 0 24 24" class="w-full h-full">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <h4 class="font-bold text-lg text-gray-800">${testimonial.author}</h4>
          </div>
          <div class="flex mb-4">
            ${Array(5).fill(0).map(() => `
              <svg class="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            `).join('')}
          </div>
          <p class="text-gray-600 text-sm leading-relaxed flex-1">${testimonial.text}</p>
        </div>
      `).join('');

      let currentIndex = 0;
      const cardWidth = 352;
      const maxIndex = Math.max(0, testimonials.length - 3);

      const updateCarousel = () => {
        const translateX = -currentIndex * cardWidth;
        testimonialsTrack.style.transform = `translateX(${translateX}px)`;
      };

      const prevBtn = document.getElementById('testimonial-prev-music');
      const nextBtn = document.getElementById('testimonial-next-music');

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex = Math.max(0, currentIndex - 1);
          updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
          if (currentIndex >= maxIndex) {
            currentIndex = 0;
          } else {
            currentIndex = currentIndex + 1;
          }
          updateCarousel();
        });
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            MUSIC CLASSES
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Unlock your musical potential with personalized instruction from our gifted teachers
          </p>
        </div>
      </section>

      {/* Music Classes Grid Section */}
      <section 
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)',
          marginTop: '-4rem',
          paddingTop: '6rem',
          marginBottom: '-4rem',
          paddingBottom: '6rem',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 20%, #7dd3fc 40%, #38bdf8 60%, #0ea5e9 80%, #0284c7 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="relative">
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {musicClasses.map((musicClass, index) => (
              <div 
                key={musicClass.id}
                id={musicClass.id}
                className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-mt-32 flex flex-col" 
                style={{ transitionDelay: `${(index % 2) * 200 + 200}ms` }}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={musicClass.image}
                    alt={musicClass.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: musicClass.position }}
                  />
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-lg -mt-8 mx-4 relative z-10 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-black uppercase text-gray-800 mb-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', lineHeight: '1.2' }}>
                    {musicClass.name}
                  </h3>
                  <div className="h-1 w-56 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-4"></div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1 min-h-[3rem]">
                    {musicClass.description}
                  </p>
                  <button className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-6 py-2 rounded-lg font-bold uppercase text-sm hover:scale-105 transform transition-all duration-300 w-full">
                    LEARN MORE →
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section 
        className="relative py-16 md:py-24 overflow-hidden" 
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
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
            <div className="text-center mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-2 text-white blue-section-text" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
                WHY US?
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
                <div className="h-1 w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
            </div>

            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
              <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text">
                We provide music instruction in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-2xl shadow-lg">
                  <div className="text-center bg-white p-8 rounded-xl h-full">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-histown-text">HIS HEART</h3>
                    <p className="text-histown-text-muted leading-relaxed">
                      At the heart of our mission is God's love—a love that nurtures, uplifts, and calls us to use our gifts for His praise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}>
                <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-2 rounded-2xl shadow-lg">
                  <div className="text-center bg-white p-8 rounded-xl h-full">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-histown-text">HIS GLORY</h3>
                    <p className="text-histown-text-muted leading-relaxed">
                      We teach not for the applause of people, but to reflect God's glory, honoring Him with excellence and joy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '800ms' }}>
                <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-2 rounded-2xl shadow-lg">
                  <div className="text-center bg-white p-8 rounded-xl h-full">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-histown-text">HISTOWN</h3>
                    <p className="text-histown-text-muted leading-relaxed">
                      HisTown is more than a studio—it's God's town, where creativity, community, and worship come together in His name.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24" style={{ marginTop: '-4rem', paddingTop: '6rem', marginBottom: '-4rem', paddingBottom: '6rem' }}>

        <div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="text-center mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-2 relative inline-block" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
              TESTIMONIALS
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
              <div className="w-3 h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-40 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
              <div className="w-3 h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
            <img 
              src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762302377/2yG3qAq_nzcotl.png" 
              alt="Williamson's Best 2025 Winner" 
              className="h-48 w-auto object-contain rounded-2xl"
            />
            <img 
              src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762304027/ChatGPT_Image_Nov_4_2025_at_06_53_22_PM_w3why3.png" 
              alt="Best of Parenting 2025 Winner" 
              className="h-48 w-auto object-contain rounded-2xl"
            />
          </div>

          <div className="relative px-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
            <button 
              id="testimonial-prev-music"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              id="testimonial-next-music"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden py-4">
              <div id="testimonials-track-music" className="flex transition-transform duration-300 ease-in-out">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section 
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)',
          marginTop: '-4rem',
          paddingTop: '6rem',
          backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/w_2400,q_100,f_jpg,e_sharpen:100/v1762365784/blue-texture_yyysa2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) saturate(1.05)'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center">
            
            <div className="text-white blue-section-text animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center w-full max-w-md">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-2 relative inline-block text-white blue-section-text" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
                NEXT STEPS
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
                <div className="h-1 w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
              <p className="text-lg mb-8 text-white blue-section-text leading-relaxed">
                Take your first step with a free trial class!
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-white text-histown-primary hover:bg-white/95 hover:text-histown-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  REQUEST A TRIAL CLASS
                </button>
                <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-histown-primary transition-all duration-300 transform hover:scale-105">
                  CONTACT US
                </button>
              </div>
            </div>

            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-8 border border-white/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase blue-section-text">
                SIGN UP FOR EMAIL UPDATES
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed blue-section-text">
                If you're not ready to start yet, simply fill out this form to sign up for our email list.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2 blue-section-text">First name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2 blue-section-text">Email*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your@email.com"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-white text-histown-primary hover:bg-white/95 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicClasses;
