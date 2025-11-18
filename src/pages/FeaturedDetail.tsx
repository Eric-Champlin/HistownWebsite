import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import { homeContent } from '../content/home';

const featuredData: Record<string, { name: string; description: string; image: string; bannerImage: string; position: string; longDescription: string }> = {
  'acting': {
    name: 'Acting Classes',
    description: 'Develop stage presence and character work',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908818/Acting_fauf4j.png',
    bannerImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1600&q=80',
    position: 'center center',
    longDescription: 'Our acting classes provide comprehensive training in theatrical performance, character development, and stage presence. Students learn fundamental acting techniques including voice projection, body language, improvisation, and script analysis. Through scene work and monologues, actors develop confidence and the ability to embody diverse characters authentically. Our program emphasizes storytelling that honors Christian values while exploring the full range of human experience. Whether preparing for auditions, school productions, or simply wanting to grow as a performer, our acting classes provide a supportive environment where students can take creative risks and discover their unique voice as actors.'
  },
  'adult': {
    name: 'Adult Classes',
    description: 'Dance and fitness for adults',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908627/Adult_wzixm0.webp',
    bannerImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80',
    position: 'center center',
    longDescription: 'Adult dance and fitness classes at HisTown offer a welcoming space for adults to explore movement, stay active, and connect with community. Our adult program includes ballet, contemporary, barre fitness, and other styles tailored to adult bodies and schedules. Classes focus on proper technique, flexibility, strength, and the joy of dancing without the pressure of performance. Whether you danced as a child and want to return, or are discovering dance for the first time, our adult classes provide excellent instruction in a supportive, non-judgmental environment. Join us to improve fitness, reduce stress, and experience the creative fulfillment that dance brings at any age.'
  },
  'company': {
    name: 'Company Classes',
    description: 'Elite training for dedicated dancers',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908625/Company_iszsdb.png',
    bannerImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1600&q=80',
    position: 'center center',
    longDescription: 'HisTown Company is our pre-professional training program for serious dancers committed to excellence and ministry through dance. Company members receive intensive training in multiple dance styles, participate in regular performances, and develop leadership skills. The program emphasizes technical mastery, artistic expression, and using dance as a form of worship and outreach. Company dancers train multiple times per week, learning choreography for performances at church services, community events, and special showcases. Auditions are required for company placement. This program is ideal for dancers who are passionate about their craft and want to use their talents to glorify God while preparing for potential dance careers or college dance programs.'
  },
  'competition': {
    name: 'Competition Teams',
    description: 'High-level competitive dance training',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908625/Competition_lvgdnb.jpg',
    bannerImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80',
    position: 'center center',
    longDescription: 'Our competition teams provide dancers with the opportunity to showcase their talents at regional dance competitions while maintaining our Christ-centered values. Team members receive advanced technical training, learn sophisticated choreography, and develop performance skills under pressure. Competition experience builds confidence, discipline, and the ability to work as part of a team toward common goals. Dancers learn to handle both success and disappointment with grace, understanding that their worth comes from God, not from scores or placements. Our competition program balances the pursuit of excellence with healthy perspectives on winning and losing. Auditions and additional fees apply for competition team participation.'
  }
};

const FeaturedDetail: React.FC = () => {
  const { featuredId } = useParams<{ featuredId: string }>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const featured = featuredId ? featuredData[featuredId] : null;

  if (!featured) {
    return <div>Featured program not found</div>;
  }

  useEffect(() => {
    // Testimonials carousel
    const testimonials = [
      { author: "Emily Song", text: "My daughter just completed her first semester at Histown and it has been an incredibly positive experience! The teachers are gracious, kind, and very knowledgeable." },
      { author: "Justine Vild", text: "My daughter has been at Histown for many years. The teachers are patient and encouraging, creating a wonderful environment." },
      { author: "Kathleen Crews", text: "Histown provides the healthy experience I wanted for my daughter. The owners, teachers, and office manager have created a family-like atmosphere." }
    ];

    const testimonialsTrack = document.getElementById('testimonials-track-featured-detail');
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

      const prevBtn = document.getElementById('testimonial-prev-featured-detail');
      const nextBtn = document.getElementById('testimonial-next-featured-detail');

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
            backgroundImage: `url(${featured.bannerImage})`,
            backgroundPosition: 'center center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            {featured.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            {featured.description}
          </p>
        </div>
      </section>


      {/* Content Section */}
      <section 
        className="py-20 md:py-32 relative" 
        style={{ 
          clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)', 
          marginTop: '-4rem', 
          paddingTop: '6rem',
          marginBottom: '-4rem',
          paddingBottom: '6rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative max-w-5xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="group rounded-3xl overflow-visible">
            {/* Featured Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: featured.position }}
              />
            </div>
            
            {/* Description Card with Blue Border */}
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-4 relative z-10">
              <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <div className="text-center mb-6">
                  <h3 className="text-3xl md:text-4xl font-black uppercase text-gray-800 mb-4">
                    {featured.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-32 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-16 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {featured.longDescription}
                </p>
                
                {/* View All Featured Classes Button */}
                <div className="text-center">
                  <Link 
                    to="/classes/featured"
                    className="inline-block bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold px-12 py-4 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg"
                  >
                    View All Featured Programs
                  </Link>
                </div>
              </div>
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
          <div className="text-center mb-8 flex flex-col items-center">
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

          <div className="text-center mb-12">
            <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text">
              We provide specialized programs in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
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

            <div>
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-4 text-histown-text">HIS GLORY</h3>
                  <p className="text-histown-text-muted leading-relaxed">
                    We train not for the applause of people, but to reflect God's glory, honoring Him with excellence and joy.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
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
          <div className="text-center mb-8">
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

          <div className="flex justify-center gap-8 mb-8">
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

          <div className="relative px-16">
            <button 
              id="testimonial-prev-featured-detail"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              id="testimonial-next-featured-detail"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden py-4">
              <div id="testimonials-track-featured-detail" className="flex transition-transform duration-300 ease-in-out">
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
            
            <div className="text-white blue-section-text text-center w-full max-w-md">
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
                <Link to="/contact" className="block">
                  <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-histown-primary transition-all duration-300 transform hover:scale-105">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-8 border border-white/20">
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8" style={{ marginTop: '-4rem', paddingTop: '6rem' }}>
        <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            <div className="text-center md:text-left" style={{ marginTop: '-4rem', marginLeft: '2rem' }}>
              <img
                src={homeContent.navigation.logo.src}
                alt={homeContent.navigation.logo.alt}
                className="h-32 w-auto object-contain mx-auto md:mx-0 mb-2"
                style={{
                  filter: 'brightness(0) invert(1)',
                  imageRendering: 'auto',
                  display: 'block'
                }}
              />
              <div className="space-y-1" style={{ marginTop: '-1.5rem' }}>
                <p className="text-sm text-gray-300">1010 Perrone Way, Suite 200</p>
                <p className="text-sm text-gray-300">Franklin, TN, 37069</p>
                <p className="text-sm text-gray-300">(615) 640-8349</p>
                <p className="text-sm text-gray-300">info@histown.com</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
              <div className="space-y-2">
                <a href="/classes/dance" className="block text-sm text-gray-300 hover:text-white transition-colors">Dance Classes</a>
                <a href="/classes/music" className="block text-sm text-gray-300 hover:text-white transition-colors">Music Classes</a>
                <a href="/tuition-fees" className="block text-sm text-gray-300 hover:text-white transition-colors">Tuition & Fees</a>
                <a href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div className="text-center md:text-right" style={{ marginRight: '2rem' }}>
              <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a 
                  href="https://www.instagram.com/histowndancestudio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/HistownDanceStudio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">
              {homeContent.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FeaturedDetail;
