import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { whyUsValues } from '../data/whyUsValues';
import { Footer } from '../components/layout/Footer';

const DanceClasses: React.FC = () => {
  const [selectedDance, setSelectedDance] = React.useState<{ id: string; name: string; description: string; longDescription: string } | null>(null);

  const danceClasses = [
    { id: 'acro', name: 'Acro', description: 'Combining dance technique with acrobatic elements to build strength, flexibility, and dynamic performance skills', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825371/Acro_vmmyyu.png', position: 'center 80%', longDescription: 'Acro is a style of dance that combines classical dance technique with precision acrobatic elements. It is defined by its athletic character, its unique choreography, which seamlessly blends dance and acrobatics, and its use of acrobatics in a dance context. Classes are offered for ages 3 years and up, based on skill level and experience.' },
    { id: 'ballet', name: 'Ballet', description: 'Classical ballet technique and artistry that develops grace, poise, and fundamental dance foundations', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825370/Ballet_zgvpjm.jpg', position: 'center 20%', longDescription: 'Ballet emphasizes the development of classical ballet skills with a focus on technique as it relates to proper placement, alignment and coordination of legs, footwork and the rest of the body. Classes are offered for ages 2 years and up, based on skill level and experience, with beginner, intermediate and advanced ballet classes available. We also have a Teen Beginner Ballet class for dancers ages 11 & up, for those who have never taken any ballet classes before and want to have the opportunity to learn ballet at their own pace before transitioning into a regular ballet class.' },
    { id: 'barre-fitness', name: 'Barre Fitness', description: 'Ballet-inspired fitness for adults combining strength training with graceful movement and flexibility', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762826588/barre-benefits-to-know-about_40148968-88b1-4497-be7e-49b05582d188.jpg_qa2f67.webp', position: '60% center', longDescription: 'Led by certified instructor, Mattie Tichenor, whether you\'re a seasoned Barre enthusiast or looking to try something new, this method has something to offer to women of all fitness levels in an empowering and God honoring environment! Every Monday from 11:10am to 12pm, it\'s a faith-based workout that\'s both high energy and full of peace and tones, lifts, strengthens, stretches, and so much more! Open to women age 16 and up.. all ability levels welcome. There is a place for you! First class is only $10 so grab a friend and come sweat with us! Class size is limited so please sign up as soon as possible.' },
    { id: 'contemporary', name: 'Contemporary', description: 'Expressive modern dance movement that blends technique with emotional storytelling and creative expression', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825366/Contemporary_doscju.png', position: 'center 25%', longDescription: 'Contemporary combines elements of ballet, modern, and lyrical. Students explore movement, space, rhythm and creativity with as a way of expressing the music and message they are dancing to. Classes are offered for ages 6 years and up, based on skill level and experience, with beginner, intermediate and advanced contemporary classes available.' },
    { id: 'creative-movement', name: 'Creative Movement', description: 'Introduction to dance for young children through playful exploration and imaginative movement activities', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825368/Creative_Movement_impfds.png', position: 'center 5%', longDescription: 'These classes provide a fun, creative and game filled way to get children to understand how to control their movements and learn the introduction to terminology, positions, following ability, movement and choreography. Classes are offered for ages 2-3 and 3-5. All taught in a positive, encouraging environment.' },
    { id: 'foundations', name: 'Foundations', description: 'Building strong dance fundamentals with proper technique, body alignment, and essential movement principles', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825367/Foundations_kh2o17.jpg', position: 'center center', longDescription: 'Foundations is a program (ages 9-12) for students seeking a more intense opportunity to dance while fully glorifying God. Foundations is a two-fold dance training and discipleship program. Members of Foundations will be introduced to dance as worship and ministry, and technically trained: striving for excellence that displays His glory! Classes are held 10am-12pm on Saturday. This is a performing company. During the fall and spring semesters, dancers will have opportunities to perform locally as well as attend and perform at other events like the Dance Revolution Convention in North Carolina, Orlando and Dallas. Cost is $100 a month. Weekly class requirements for ages 8-12 includes one hour of ballet, one hour of jazz or contemporary along with at least one other elective class (i.e. jazz, ballet, contemporary, Acro, leaps & turns, hip-hop, musical theater, modern, tap, etc.)' },
    { id: 'hip-hop', name: 'Hip-Hop', description: 'Urban dance styles and choreography featuring high-energy moves and contemporary street dance culture', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825372/HipHop_yzzsxu.png', position: 'center center', longDescription: 'Hip-hop highlights the vibrancy and relevancy of dance in our culture today. Combining emotion and an uniqueness to the style itself, students are encouraged to create something new and find their own sense of style. Classes are offered for ages 3 years and up, based on skill level and experience, with beginner, intermediate and advanced hip-hop classes available.' },
    { id: 'jazz', name: 'Jazz', description: 'Energetic and dynamic jazz technique with sharp movements, leaps, and expressive performance style', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825363/Jazz_hwekyw.png', position: 'center 20%', longDescription: 'Jazz combines many styles and techniques from ethnic and contemporary dance, musical theater, swing, funk and ballet. Using a variety of music, students train in flexibility, rhythm, and control incorporating the basic principles of this dance style. Classes are offered for ages 3 years and up, based on skill level and experience, with beginner, intermediate and advanced jazz classes available.' },
    { id: 'modern', name: 'Modern', description: 'Contemporary modern dance technique emphasizing floor work, improvisation, and expressive movement quality', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825358/Modern_gnrpmd.png', position: 'center 70%', longDescription: 'Modern emphasizes the use of the floor for centering and grounding oneself in movement. Concepts of over curve/under curve and contraction/release musicality and rhythm will be explored. Graham and Limon technique are both taught. Classes are offered for ages 10 years and up, based on skill level and experience, with beginner, intermediate and advanced modern classes available.' },
    { id: 'mommy-and-me', name: 'Mommy & Me', description: 'Parent and child bonding through dance with fun activities that develop coordination and rhythm together', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825968/Mommy_ncdf6m.webp', position: 'center center', longDescription: 'Monday Mornings from 10:15am -11am, 16 months - 3 years. A Creative Movement dance class that incorporates sign language, learning colors and shapes, social interaction with other children, following instructions and more. It\'s a fun and engaging developmental class involving parent and child and is a great class to help your child transition into a dance class on their own. COST: $35 - $90 a month depending on the number of dance classes your family is signed up for.' },
    { id: 'musical-theater', name: 'Musical Theater', description: 'Broadway-style dance and performance combining acting, singing, and theatrical movement for the stage', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825360/Musical_Theater_om16de.png', position: 'center center', longDescription: 'Musical Theater places an emphasis on theater dance, jazz, Broadway style productions, story through movement and improvisation. Dancers also learn skills and concepts that will help boost their confidence and elevate their stage presence, making them better performers and dancers. Classes are offered for ages 6 years and up, based on skill level and experience, with beginner, intermediate and advanced musical theater classes available.' },
    { id: 'tap', name: 'Tap', description: 'Rhythmic tap dance technique creating music with your feet through precise footwork and timing', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825362/Tap_dnxfal.jpg', position: 'center center', longDescription: 'Tap is an excellent class for those who love to make music with their feet, and will focus on developing skills in tap technique, rhythm and coordination. Classes are offered for ages 3 years and up, based on skill level and experience, with beginner, intermediate and advanced tap classes available.' }
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Mobile optimized */}
      <section className="relative h-[40vh] min-h-[350px] sm:h-[45vh] sm:min-h-[400px] md:h-[50vh] md:min-h-[450px] flex items-start lg:items-center justify-center overflow-hidden section-divider-mobile pt-12 sm:pt-20 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dxqzby6fc/image/upload/v1762556986/GRoup_Shot_D2edit.jpg_nk0m0v.webp)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 md:pt-8 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            DANCE CLASSES
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed px-2" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            From ballet to hip-hop, discover the perfect class to express your passion for dance
          </p>
        </div>
      </section>

      {/* Jump To Navigation Ribbon - Mobile optimized with horizontal scroll */}
      <section className="bg-gradient-to-r from-[#0891b2] via-[#0e7490] to-[#06b6d4] py-3 sm:py-4 sticky top-[70px] z-40 shadow-lg overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-start sm:justify-center whitespace-nowrap">
            {danceClasses.map((danceClass, index) => (
              <React.Fragment key={danceClass.id}>
                <button
                  onClick={() => setSelectedDance(danceClass)}
                  className="text-white hover:bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 min-h-[44px] flex items-center"
                >
                  {danceClass.name}
                </button>
                {index < danceClasses.length - 1 && (
                  <span className="text-white/60 mx-1 sm:mx-2 text-xs">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Classes Grid Section - Mobile optimized with single column */}
      <section className="pt-12 pb-20 sm:py-20 md:py-32 relative" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)' }}>
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            
            {danceClasses.map((danceClass, index) => (
              <div 
                key={danceClass.id}
                id={danceClass.id}
                className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-mt-32 flex flex-col" 
                style={{ transitionDelay: `${(index % 3) * 200 + 200}ms` }}
              >
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={danceClass.image}
                    alt={danceClass.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: danceClass.position }}
                    loading="lazy"
                  />
                </div>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10 flex flex-col flex-1">
                  <div className="p-4 sm:p-6 rounded-2xl flex flex-col flex-1" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400, fontSize: 'clamp(1rem, 2vw, 1.35rem)', lineHeight: '1.2' }}>
                      {danceClass.name}
                    </h3>
                    <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1 min-h-[3rem]">
                      {danceClass.description}
                    </p>
                    <button 
                      onClick={() => setSelectedDance(danceClass)}
                      className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-sm hover:scale-105 transform transition-all duration-300 w-full min-h-[44px]"
                    >
                      LEARN MORE →
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
        </div>
      </section>

      {/* Why Us Section - Shared Component */}
      <WhyUs values={whyUsValues} noSlant={true} />

      {/* Testimonials Section - Shared Component */}
      <Testimonials />

      {/* Next Steps Section - Shared Component */}
      <NextSteps noSlant={true} />

      {/* Footer */}
      <Footer />

      {/* Modal - Mobile optimized */}
      {selectedDance && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDance(null)}
        >
          <div className="bg-gradient-to-br from-histown-primary/80 to-histown-accent/80 p-1.5 rounded-3xl shadow-2xl max-w-2xl w-full">
            <div 
              className="rounded-3xl max-h-[80vh] overflow-y-auto"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 p-4 sm:p-8 rounded-t-3xl relative" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <button 
                  onClick={() => setSelectedDance(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-center pr-8">
                  <h2 
                    className="text-2xl sm:text-4xl md:text-5xl text-gray-900 mb-3 sm:mb-4" 
                    style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400, fontSize: 'clamp(1.5rem, 4.5vw, 3rem)' }}
                  >
                    {selectedDance.name}
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-12 sm:w-24 bg-gradient-to-r from-transparent to-cyan-600 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-24 sm:w-48 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-12 sm:w-24 bg-gradient-to-r from-cyan-600 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="px-4 sm:px-8 pb-4 sm:pb-6 pt-0">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {selectedDance.longDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DanceClasses;
