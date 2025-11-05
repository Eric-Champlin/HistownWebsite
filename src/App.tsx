import { homeContent } from './content/home'
import Navigation from './components/layout/Navigation'
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
      const visibleCards = 3;
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
      <div className="bg-white">
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
            className="btn-primary text-center"
            style={{
              background: 'linear-gradient(to right, #0e7490, #0891b2)',
              color: 'white'
            }}
          >
            {homeContent.hero.primaryCta.label}
          </a>
          {homeContent.hero.secondaryCta && (
            <a 
              href={homeContent.hero.secondaryCta.href}
              className="btn-outline text-center"
            >
              {homeContent.hero.secondaryCta.label}
            </a>
          )}
        </div>
        </header>
      </div>
      
      {/* Slanted transition from white to grey */}
      <div className="relative h-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-histown-neutral transform skew-y-3 origin-top-left"></div>
      </div>
      
      <main className="bg-histown-neutral">
        <section className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 section-padding">
          {/* Dance Classes - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20 animate-on-scroll">
            <div className="animate-slide-in-left">
              <div className="rounded-2xl overflow-hidden shadow-strong h-full">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222737/4L3t1SQ_gqvwxi.jpg" 
                  alt="Dance Classes" 
                  className="w-full h-full object-cover min-h-[260px]"
                />
              </div>
            </div>
            <div className="animate-slide-in-right bg-white p-8 rounded-2xl shadow-medium border border-gray-200 h-full flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 relative inline-block" style={{ fontWeight: 975, fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}>
                DANCE CLASSES
                <div className="h-1 w-56 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-2"></div>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Discover the joy of movement through our comprehensive dance program. From classical ballet to contemporary expression, we nurture each dancer's unique gifts while building strong technique, confidence, and character in a Christ-centered environment.
              </p>
              <a 
                href="/programs/dance"
                className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-fit"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Music Classes - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20 animate-on-scroll">
            <div className="animate-slide-in-left lg:order-1 bg-white p-8 rounded-2xl shadow-medium border border-gray-200 h-full flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 relative inline-block" style={{ fontWeight: 975, fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}>
                MUSIC CLASSES
                <div className="h-1 w-56 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-2"></div>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Unlock your musical potential with personalized instruction from our gifted teachers. Whether you're drawn to piano melodies, guitar rhythms, violin harmonies, or vocal expression, we'll help you develop your talents while celebrating the gift of music.
              </p>
              <a 
                href="/programs/music"
                className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-fit"
              >
                LEARN MORE
              </a>
            </div>
            <div className="animate-slide-in-right lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-strong h-full">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222736/HLP9IVj_e4pdod.jpg" 
                  alt="Music Classes" 
                  className="w-full h-full object-cover min-h-[260px]"
                />
              </div>
            </div>
          </div>

          {/* Featured Programs - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch animate-on-scroll">
            <div className="animate-slide-in-left">
              <div className="rounded-2xl overflow-hidden shadow-strong h-full">
                <img 
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762222735/P6AF87u_coofig.jpg" 
                  alt="Featured Programs" 
                  className="w-full h-full object-cover min-h-[260px]"
                />
              </div>
            </div>
            <div className="animate-slide-in-right bg-white p-8 rounded-2xl shadow-medium border border-gray-200 h-full flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 relative inline-block" style={{ fontWeight: 975, fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}>
                FEATURED
                <div className="h-1 w-56 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-2"></div>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Take your artistry to the next level with our specialized offerings. From theatrical performance and adult fitness classes to elite company training and competitive dance teams, we provide pathways for every passion and skill level.
              </p>
              <a 
                href="/programs/featured"
                className="bg-gradient-to-r from-histown-accent to-histown-primary hover:from-histown-accent hover:to-histown-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 drop-shadow-lg uppercase tracking-wide inline-block w-fit"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </section>

        {/* Slanted transition from grey to white */}
        <div className="relative h-24 bg-histown-neutral overflow-hidden">
          <div className="absolute inset-0 bg-white transform skew-y-3 origin-top-left"></div>
        </div>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-12 sm:px-16 lg:px-20">
            {/* Title */}
            <div className="text-center mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
                TESTIMONIALS
                <div className="h-1 w-72 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-2 mx-auto"></div>
              </h2>
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

        {/* Slanted transition from white to grey */}
        <div className="relative h-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-histown-neutral transform skew-y-3 origin-top-left"></div>
        </div>

        {/* Why Us Section */}
        <section className="bg-histown-neutral py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
            {/* Title */}
            <div className="text-center mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
                WHY US?
                <div className="h-1 w-48 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-2 mx-auto"></div>
              </h2>
            </div>

            {/* Description */}
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
              <p className="text-lg text-histown-text max-w-4xl mx-auto leading-relaxed">
                We provide dance instruction in a Christ-centered environment that nurtures each dancer's God-given gifts for ministry, outreach, and entertainment. Through rigorous technique, professional mentorship, and an uplifting atmosphere guided by Christ's love, our aim is to inspire dancers to pursue excellence as an act of worship.
              </p>
            </div>

            {/* Why Us Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* His Heart */}
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
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

              {/* His Glory */}
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 2v6H6v4h4v10h4V12h4V8h-4V2h-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 text-histown-text">HIS GLORY</h3>
                <p className="text-histown-text-muted leading-relaxed">
                  We dance not for the applause of people, but to reflect God's glory, honoring Him with excellence and joy.
                </p>
              </div>

              {/* HisTown */}
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '800ms' }}>
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
        </section>
      </main>
      
      <footer className="section-container py-8 border-t border-histown-secondary bg-histown-neutral">
        <p className="text-center text-histown-text-muted">
          {homeContent.footer.copyright}
        </p>
      </footer>
    </div>
  )
}

export default App