import { homeContent } from './content/home'
import Navigation from './components/layout/Navigation'
import { LazyImage } from './components/common/LazyImage'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

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

    // Testimonials data and carousel functionality
    const testimonials = [
      { author: "Emily Song", text: "My daughter just completed her first semester at Histown and it has been an incredibly positive experience! The teachers are gracious, kind, and very knowledgeable about dance and the instructional tools/pacing needed to help students succeed at various age levels. I have been so impressed with my daughter's gross motor development!" },
      { author: "Justine Vild", text: "My daughter has been dancing at Histown for many years. There are lots of things I love about this studio, not the least of them being that it's a Christian dance studio. I love their scheduling. It's very easy for my daughter to take 6 hours of dance over 2 evenings. I love that the recital songs are either Christian or clean songs." },
      { author: "Kathleen Crews", text: "Histown provides the healthy dance experience I wanted for my daughter. The owners, teachers, and office manager have created a family-like atmosphere where dancers support and cheer for each other. There's the right amount of healthy pressure for growth with the students excited to grow as a dancer." },
      { author: "Maura Sullivan", text: "We have been at Histown for almost 2 years now, and the experiences that my girls (ages 5 & 7) have had (and that we have had as a family) have been invaluable. Every single thing they do here is intentional, from the instructors, to how they run their business, to the recital costumes." },
      { author: "L. Garner", text: "Wonderful nurturing environment with Christian values. They teach children to love to dance. All children welcome. I've even seen special needs children dance with their peers. It's about the kids, not about winning. However, there is a Histown group that does do competition!" },
      { author: "Deepa S.", text: "We had the best time celebrating my kid's 4th birthday at Histown Dance Studio! Ms.Mattie and Ms.Emilia did a fantastic job as hosts and very helpful throughout. The studio is spacious and kids had an amazing time. I highly recommend this place for any celebration!" },
      { author: "Jennifer Kilpartrick", text: "My 4 year old daughter has danced at Histown for almost 2 years now. Even though she is young the lessons she has learned in class have been so valuable (following directions, body control, making friends, etc)! On top of that, she LOVES it! She dances all over the house." },
      { author: "Elizabeth McAlister", text: "Finding Histown was such a blessing! And Miss Delia Waggoner was the best first dance teacher for my little girls. She started each class by talking about how the Lord lives in their hearts and they are his princesses. She filled the hour with so much joy and enthusiasm-it was contagious!" },
      { author: "Justine Vild", text: "My daughter has been dancing at Histown for many years. There are lots of things I love about this studio, not the least of them being that it's a Christian dance studio. I love their scheduling. It's very easy for my daughter to take 6 hours of dance over 2 evenings. They align their scheduling just right." },
      { author: "Allison Hendrickson", text: "Excellent instruction with a superb, encouraging atmosphere. We've taken classes at other places and there is just no comparison. Highly recommend to anyone looking for a new studio!" },
      { author: "David", text: "Saw them perform at Dicken's festival 2024 and they were great. The director witnessed for Jesus. I am glad there is a Christ-centered dance company in Franklin. I really enjoyed the show." },
      { author: "Vanessa Wood", text: "My daughter has been dancing at this studio for two years now. As homeschoolers, it has given her a space to be consistently social with her friends and learn excellent technique." },
      { author: "Chaslynn Garrett", text: "We love HisTown! It has been a very positive, uplifting environment where parental choices are honored, children are respected, and learning in a fun environment is a top priority." },
      { author: "Andrea Millard", text: "My daughter has danced at HisTown for several years now and she has made some great friendships, matured in her dance skills, and has felt valued and part of the community there." },
      { author: "Megan Hord", text: "We have absolutely adored our time with Histown! The teachers are wonder and the owners are amazing! They are the sweetest people and communication is amazing!" },
      { author: "Mimi J.", text: "Histown Dance--What A Wonderful Studio--The Instruction is Superb. I love the Christian atmosphere and the patience and love felt by All the teachers. All Four of My Children have been Blessed to have attended Histown Dance for many years now and have benefited so richly." },
      { author: "DeAnne Bruinsma", text: "His town dance studio was a great fit for our family with flexibility and great dance instruction from beginning to advanced. The staff and teachers care about each dancer and it shows. It has been such a positive environment for my kids to try new dance styles and develop a love for dance. I highly recommend HisTown." },
      { author: "Genie-Nicole Hair", text: "HisTown Dance Studio was referred to our family for my daughter, who is now homeschooling. We absolutely LOVE HISTOWN! They are professional, yet personable! They've always expressed enthusiasm and how much they love having our daughter dance with them!" },
      { author: "Kevin Greaves", text: "I cannot say enough good things about Histown. They have accepted my daughter into a class even though the semester had already started. They let us try 3 different types of classes before we chose 1. They offered a make up class when she missed due to a runny nose. Great experience all around!" },
      { author: "Jacquelyn Britt", text: "I have been a part of different dance studios for over 40 years. Histown Dance Studio surpasses them all. The owners are genuine,kind and hold high standards for their staff. The teachers have encouraged our daughter to love dance, do it in excellence and to be a part of a team." },
      { author: "Jennifer Nichols", text: "My daughter has been with his town for 3 years now. I not only love what they have taught my daughter in regards to ballet but also outside of that. They have helped I still good character qualities in her. The his town dance community is great and we love it. We are very blessed by the HisTown family." },
      { author: "Shailey Ratliff", text: "Our daughter has been so blessed to dance at HisTown for the past 2 years! The teachers take the time to love the girls well and even the other girls are encouraging and kind. Christ is at the center of everything they do and we would recommend HisTown to anyone." },
      { author: "Samantha Allen", text: "Histown dance studio is incredible. The teachers are so intentional, talented and loving. I have made so many friends through dance and many of them I am very close to. Coming to dance is my favorite part of the week, thanks to Histown!" },
      { author: "Amanda Cooper", text: "Incredible teaching, family-like environment, and amazing Christian community! Cannot say enough about how thankful I am to have danced here throughout middle and high school. Histown really is a family of believers worshiping Jesus through dance!" }
    ];

    // Create testimonial cards
    const testimonialsTrack = document.getElementById('testimonials-track');
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

      // Carousel functionality
      let currentIndex = 0;
      const cardWidth = 352; // w-80 (320px) + mx-4 (32px) = 352px total width per card
      const maxIndex = testimonials.length - 3; // Stop when Amanda Cooper is in view (last 3 testimonials)

      const updateCarousel = () => {
        const translateX = -currentIndex * cardWidth;
        testimonialsTrack.style.transform = `translateX(${translateX}px)`;
      };

      const prevBtn = document.getElementById('testimonial-prev');
      const nextBtn = document.getElementById('testimonial-next');

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex = Math.max(0, currentIndex - 1);
          updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
          if (currentIndex >= maxIndex) {
            currentIndex = 0; // Loop back to beginning
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
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-white" style={{ paddingBottom: '6rem', marginBottom: '-4rem' }}>
        <header className="section-container section-padding">
        <h1 
          className="heading-primary text-center hero-fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          dangerouslySetInnerHTML={{ __html: homeContent.hero.headline }}
        ></h1>
        <p 
          className="text-body text-center mt-6 max-w-3xl mx-auto hero-fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          dangerouslySetInnerHTML={{ __html: homeContent.hero.subheadline }}
        ></p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 hero-fade-in opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <a 
            href={homeContent.hero.primaryCta.href}
            className="btn-primary text-center transform hover:scale-105 transition-all duration-300"
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
              className="btn-outline text-center transform hover:scale-105 transition-all duration-300"
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

        <section className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 section-padding">
          {/* Dance Classes - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20 animate-on-scroll">
            <div className="animate-slide-in-left">
              <div className="rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
                <img 
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
                <div className="p-8 rounded-xl h-full flex flex-col justify-center relative z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                  <h3 className="text-3xl md:text-4xl font-black  mb-4 relative inline-block" style={{ fontWeight: 550, fontSize: 'clamp(2.25rem, 5vw, 2.5rem)', fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em' }}>
                    Dance Classes
                    <div className="h-1 w-72 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-4"></div>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Discover the joy of movement through our comprehensive dance program. From classical ballet to contemporary expression, we nurture each dancer's unique gifts while building strong technique, confidence, and character in a Christ-centered environment.
                  </p>
                  <a 
                    href="/classes/dance"
                    className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-fit transform hover:scale-105"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Music Classes - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20 animate-on-scroll">
            <div className="animate-slide-in-left lg:order-1 h-full">
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-2 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 rounded-2xl pointer-events-none"></div>
                <div className="p-8 rounded-xl h-full flex flex-col justify-center relative z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 relative inline-block" style={{ fontWeight: 500, fontSize: 'clamp(2.25rem, 5vw, 2.5rem)', fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em' }}>
                    Music Classes
                    <div className="h-1 w-72 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-4"></div>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Unlock your musical potential with personalized instruction from our gifted teachers. Whether you're drawn to piano melodies, guitar rhythms, violin harmonies, or vocal expression, we'll help you develop your talents while celebrating the gift of music.
                  </p>
                  <a 
                    href="/classes/music"
                    className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-fit transform hover:scale-105"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right lg:order-2">
              <div className="rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222736/HLP9IVj_e4pdod.jpg" 
                  alt="Music Classes" 
                  className="w-full h-full object-cover min-h-[260px]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Featured Programs - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch animate-on-scroll">
            <div className="animate-slide-in-left">
              <div className="rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative">
                <img 
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
                <div className="p-8 rounded-xl h-full flex flex-col justify-center relative z-10" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 relative inline-block" style={{ fontWeight: 500, fontSize: 'clamp(2.25rem, 5vw, 2.5rem)', fontFamily: '"Rock Salt", cursive', letterSpacing: '0.05em' }}>
                    Featured
                    <div className="h-1 w-56 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-4"></div>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Take your artistry to the next level with our specialized offerings. From theatrical performance and adult fitness classes to elite company training and competitive dance teams, we provide pathways for every passion and skill level.
                  </p>
                  <a 
                    href="/classes/featured"
                    className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-fit transform hover:scale-105"
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
      <section className="bg-white py-16 md:py-24" style={{ marginTop: '-4rem', paddingTop: '6rem', marginBottom: '-4rem', paddingBottom: '6rem' }}>
        <div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20">
          {/* Title */}
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

          {/* Images */}
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

          {/* Testimonials Carousel */}
          <div className="relative px-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
            {/* Left Arrow */}
            <button 
              id="testimonial-prev"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              id="testimonial-next"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonials Container */}
            <div className="overflow-hidden py-4">
              <div id="testimonials-track" className="flex transition-transform duration-300 ease-in-out">
                {/* Testimonial Cards - We'll add these via JavaScript */}
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
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
            {/* Title */}
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

            {/* Description */}
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
              <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text">
                We provide dance instruction in a Christ-centered environment that nurtures each dancer's God-given gifts for ministry, outreach, and entertainment. Through rigorous technique, professional mentorship, and an uplifting atmosphere guided by Christ's love, our aim is to inspire dancers to pursue excellence as an act of worship.
              </p>
            </div>

            {/* Why Us Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* His Heart */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-2xl shadow-lg">
                  <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
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

              {/* His Glory */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}>
                <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-2 rounded-2xl shadow-lg">
                  <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-4 text-histown-text">HIS GLORY</h3>
                    <p className="text-histown-text-muted leading-relaxed">
                      We dance not for the applause of people, but to reflect God's glory, honoring Him with excellence and joy.
                    </p>
                  </div>
                </div>
              </div>

              {/* HisTown */}
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '800ms' }}>
                <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-2 rounded-2xl shadow-lg">
                  <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 40%, #dbeafe 70%, #bfdbfe 100%)' }}>
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

      {/* Meet Our Team Section */}
      <section 
        className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-32 relative overflow-hidden" 
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

        <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 relative z-10">
          {/* Enhanced Title */}
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-2 relative inline-block text-black" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
              MEET OUR TEAM
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
              <div className="w-3 h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-40 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
              <div className="w-3 h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the passionate individuals who bring faith, creativity, and excellence to every class!
            </p>
          </div>

          {/* Enhanced Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 -mt-8">
            {/* Owners */}
            <Link to="/about/team" className="group text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out block" style={{ transitionDelay: '200ms' }}>
              <div className="relative mb-8">
                <div className="w-72 h-72 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 bg-gradient-to-br from-histown-primary/5 to-histown-accent/5 p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <LazyImage
                      src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307104/H0VTGeM_wqdtuw.png"
                      alt="Studio Owners"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-histown-primary to-histown-accent text-white px-6 py-2 rounded-full shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-40 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-histown-text mb-3 group-hover:text-histown-primary transition-colors duration-300" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>Owners</h3>
                  <p className="text-histown-text-muted text-lg leading-relaxed">Leading with passion and faith, creating a nurturing environment</p>
                </div>
              </div>
            </Link>

            {/* Dancers */}
            <Link to="/about/team" className="group text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out block" style={{ transitionDelay: '400ms' }}>
              <div className="relative mb-8">
                <div className="w-72 h-72 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 bg-gradient-to-br from-histown-accent/5 to-histown-secondary/5 p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <LazyImage
                      src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307103/5dfj0Ng_z8qr1f.png"
                      alt="Dance Instructors"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-histown-accent to-histown-secondary text-white px-6 py-2 rounded-full shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-40 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-histown-text mb-3 group-hover:text-histown-primary transition-colors duration-300" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>Dancers</h3>
                  <p className="text-histown-text-muted text-lg leading-relaxed">Inspiring movement and grace through artistic technique</p>
                </div>
              </div>
            </Link>

            {/* Musicians */}
            <Link to="/about/team" className="group text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out block" style={{ transitionDelay: '600ms' }}>
              <div className="relative mb-8">
                <div className="w-72 h-72 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 bg-gradient-to-br from-histown-secondary/5 to-histown-primary/5 p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <LazyImage
                      src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307104/zYc8QQs_no8iw4.png"
                      alt="Music Instructors"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-histown-secondary to-histown-primary text-white px-6 py-2 rounded-full shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"/>
                  </svg>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-40 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-histown-text mb-3 group-hover:text-histown-primary transition-colors duration-300" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>Musicians</h3>
                  <p className="text-histown-text-muted text-lg leading-relaxed">Creating harmony and melody that touches hearts and souls</p>
                </div>
              </div>
            </Link>
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
        
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center">
            
            {/* Left Side - Next Steps */}
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
              <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text mb-12">
                Take your first step with a free trial class!
              </p>
              
              <div className="space-y-4">
                <Link to="/free-trial" className="block">
                  <button className="w-full bg-white text-histown-primary hover:bg-white/95 hover:text-histown-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    REQUEST A TRIAL CLASS
                  </button>
                </Link>
                <Link to="/contact" className="block">
                  <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-histown-primary transition-all duration-300 transform hover:scale-105">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Email Signup */}
            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-8 border border-white/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase blue-section-text">
                SIGN UP FOR EMAIL UPDATES
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed blue-section-text">
                If you're not ready to start yet, simply fill out this form to sign up for our email list, and we'll keep you updated on what's happening at HisTown.
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
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-6"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8" style={{ marginTop: '-4rem', paddingTop: '6rem' }}>
        <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Left - HisTown Logo/Info */}
            <div className="text-center md:text-left" style={{ marginTop: '-3.5rem', marginLeft: '2rem' }}>
              <img
                src={homeContent.navigation.logo.src}
                alt={homeContent.navigation.logo.alt}
                className="h-32 w-auto object-contain mx-auto md:mx-0 mb-0"
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

            {/* Center - Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
              <div className="space-y-2">
                <a href="/classes/dance" className="block text-sm text-gray-300 hover:text-white transition-colors">Dance Classes</a>
                <a href="/classes/music" className="block text-sm text-gray-300 hover:text-white transition-colors">Music Classes</a>
                <a href="/tuition-fees" className="block text-sm text-gray-300 hover:text-white transition-colors">Tuition & Fees</a>
                <a href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* Right - Follow Us */}
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
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400">
              {homeContent.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App