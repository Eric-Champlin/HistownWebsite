import { homeContent } from './content/home'
import Navigation from './components/layout/Navigation'
import { LazyImage } from './components/common/LazyImage'
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
      <div className="bg-white" style={{ paddingBottom: '4rem', marginBottom: '-2rem' }}>
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
      

      {/* Programs Section - Dance Classes, Music Classes, Featured Programs */}
      <main className="relative bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800 overflow-hidden" style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)', marginTop: '-2rem', paddingTop: '4rem', marginBottom: '-2rem', paddingBottom: '4rem' }}>
        {/* EXTREME DETAIL Background Pattern - Programs Section */}
        <div className="absolute inset-0">
          {/* Base atmospheric foundation with extreme depth - matching purple reference */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-cyan-200/32 to-cyan-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-100/38 via-cyan-300/28 to-cyan-800/45"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/35 via-cyan-400/25 to-cyan-950/48"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-300/40 via-cyan-500/22 to-cyan-700/42"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-150/30 via-cyan-600/18 to-cyan-850/38"></div>
          
          {/* Multi-layered 3D lighting system with extreme complexity - purple reference level */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(ellipse 2200px 1400px at 10% 5%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.48) 6%, rgba(255, 255, 255, 0.42) 12%, rgba(255, 255, 255, 0.36) 18%, rgba(255, 255, 255, 0.30) 24%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.20) 36%, rgba(255, 255, 255, 0.16) 42%, rgba(255, 255, 255, 0.12) 48%, rgba(255, 255, 255, 0.08) 54%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.03) 66%, rgba(255, 255, 255, 0.01) 72%, transparent 78%),
              radial-gradient(ellipse 2000px 1100px at 90% 95%, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.45) 8%, rgba(255, 255, 255, 0.38) 16%, rgba(255, 255, 255, 0.32) 24%, rgba(255, 255, 255, 0.26) 32%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.16) 48%, rgba(255, 255, 255, 0.12) 56%, rgba(255, 255, 255, 0.08) 64%, rgba(255, 255, 255, 0.05) 72%, rgba(255, 255, 255, 0.02) 80%, transparent 88%),
              radial-gradient(ellipse 2400px 800px at 50% 50%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.38) 10%, rgba(255, 255, 255, 0.32) 20%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.12) 60%, rgba(255, 255, 255, 0.08) 70%, rgba(255, 255, 255, 0.04) 80%, transparent 90%),
              radial-gradient(circle 1000px at 2% 88%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.40) 10%, rgba(255, 255, 255, 0.33) 20%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.20) 40%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.10) 60%, rgba(255, 255, 255, 0.06) 70%, rgba(255, 255, 255, 0.03) 80%, rgba(255, 255, 255, 0.01) 90%, transparent 100%),
              radial-gradient(circle 900px at 98% 12%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.38) 12%, rgba(255, 255, 255, 0.31) 24%, rgba(255, 255, 255, 0.24) 36%, rgba(255, 255, 255, 0.18) 48%, rgba(255, 255, 255, 0.13) 60%, rgba(255, 255, 255, 0.08) 72%, rgba(255, 255, 255, 0.04) 84%, transparent 96%),
              radial-gradient(circle 800px at 20% 20%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.33) 15%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.20) 45%, rgba(255, 255, 255, 0.14) 60%, rgba(255, 255, 255, 0.08) 75%, rgba(255, 255, 255, 0.03) 90%, transparent 100%),
              radial-gradient(circle 700px at 80% 80%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.31) 18%, rgba(255, 255, 255, 0.24) 36%, rgba(255, 255, 255, 0.17) 54%, rgba(255, 255, 255, 0.11) 72%, rgba(255, 255, 255, 0.05) 90%, transparent 100%)
            `
          }}></div>
          
          {/* Ultra-complex conic lighting with 3D depth - purple reference level */}
          <div className="absolute inset-0 opacity-70" style={{
            backgroundImage: `
              conic-gradient(from 12deg at 15% 3%, transparent 0deg, rgba(255, 255, 255, 0.50) 6deg, rgba(255, 255, 255, 0.45) 12deg, rgba(255, 255, 255, 0.40) 18deg, rgba(255, 255, 255, 0.35) 24deg, rgba(255, 255, 255, 0.30) 30deg, rgba(255, 255, 255, 0.25) 36deg, rgba(255, 255, 255, 0.20) 42deg, rgba(255, 255, 255, 0.16) 48deg, rgba(255, 255, 255, 0.12) 54deg, rgba(255, 255, 255, 0.08) 60deg, rgba(255, 255, 255, 0.05) 66deg, rgba(255, 255, 255, 0.02) 72deg, rgba(255, 255, 255, 0.01) 78deg, transparent 84deg),
              conic-gradient(from 192deg at 85% 97%, transparent 0deg, rgba(255, 255, 255, 0.48) 9deg, rgba(255, 255, 255, 0.42) 18deg, rgba(255, 255, 255, 0.36) 27deg, rgba(255, 255, 255, 0.30) 36deg, rgba(255, 255, 255, 0.25) 45deg, rgba(255, 255, 255, 0.20) 54deg, rgba(255, 255, 255, 0.15) 63deg, rgba(255, 255, 255, 0.11) 72deg, rgba(255, 255, 255, 0.07) 81deg, rgba(255, 255, 255, 0.04) 90deg, rgba(255, 255, 255, 0.02) 99deg, rgba(255, 255, 255, 0.01) 108deg, transparent 117deg),
              conic-gradient(from 102deg at 92% 18%, transparent 0deg, rgba(255, 255, 255, 0.42) 8deg, rgba(255, 255, 255, 0.36) 16deg, rgba(255, 255, 255, 0.30) 24deg, rgba(255, 255, 255, 0.25) 32deg, rgba(255, 255, 255, 0.20) 40deg, rgba(255, 255, 255, 0.15) 48deg, rgba(255, 255, 255, 0.11) 56deg, rgba(255, 255, 255, 0.07) 64deg, rgba(255, 255, 255, 0.04) 72deg, rgba(255, 255, 255, 0.02) 80deg, rgba(255, 255, 255, 0.01) 88deg, transparent 96deg),
              conic-gradient(from 282deg at 8% 82%, transparent 0deg, rgba(255, 255, 255, 0.40) 12deg, rgba(255, 255, 255, 0.34) 24deg, rgba(255, 255, 255, 0.28) 36deg, rgba(255, 255, 255, 0.22) 48deg, rgba(255, 255, 255, 0.17) 60deg, rgba(255, 255, 255, 0.12) 72deg, rgba(255, 255, 255, 0.08) 84deg, rgba(255, 255, 255, 0.04) 96deg, rgba(255, 255, 255, 0.02) 108deg, rgba(255, 255, 255, 0.01) 120deg, transparent 132deg),
              conic-gradient(from 152deg at 55% 65%, transparent 0deg, rgba(255, 255, 255, 0.35) 15deg, rgba(255, 255, 255, 0.29) 30deg, rgba(255, 255, 255, 0.23) 45deg, rgba(255, 255, 255, 0.18) 60deg, rgba(255, 255, 255, 0.13) 75deg, rgba(255, 255, 255, 0.08) 90deg, rgba(255, 255, 255, 0.04) 105deg, rgba(255, 255, 255, 0.02) 120deg, transparent 135deg)
            `
          }}></div>
          
          {/* Extreme atmospheric ray system with 3D perspective - purple reference level */}
          <div className="absolute inset-0 opacity-55">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent transform -skew-y-30 origin-top-left"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white/42 to-transparent transform skew-y-30 origin-bottom-right"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/38 to-transparent transform -skew-y-25 origin-center"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/35 to-transparent transform skew-y-25 origin-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/32 to-transparent transform -skew-y-20 origin-top"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-transparent transform skew-y-20 origin-bottom"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent transform -skew-y-15"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/26 to-transparent transform skew-y-15"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/24 to-transparent transform -skew-y-10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/22 to-transparent transform skew-y-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-5"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/18 to-transparent transform skew-y-5"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/16 to-transparent transform -skew-y-2"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/14 to-transparent transform skew-y-2"></div>
          </div>
          
          {/* Ultra-complex 3D depth field matrix - purple reference level */}
          <div className="absolute inset-0 opacity-48">
            <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-white/32 to-white/38"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/42 via-white/30 to-white/35"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/38 via-white/28 to-white/32"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/35 via-white/26 to-white/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/32 via-white/24 to-white/28"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/22 to-white/26"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/28 via-white/20 to-white/24"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/26 via-white/18 to-white/22"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/24 via-white/16 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/22 via-white/14 to-white/18"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/12 to-white/16"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/18 via-white/10 to-white/14"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/16 via-white/8 to-white/12"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/14 via-white/6 to-white/10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/12 via-white/5 to-white/8"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/4 to-white/6"></div>
          </div>
          
          {/* Maximum detail geometric line system - purple reference level */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `
              linear-gradient(2deg, transparent 3%, rgba(255, 255, 255, 0.35) 8%, rgba(255, 255, 255, 0.30) 13%, rgba(255, 255, 255, 0.26) 18%, rgba(255, 255, 255, 0.22) 23%, rgba(255, 255, 255, 0.18) 28%, rgba(255, 255, 255, 0.15) 33%, rgba(255, 255, 255, 0.12) 38%, rgba(255, 255, 255, 0.09) 43%, rgba(255, 255, 255, 0.07) 48%, rgba(255, 255, 255, 0.05) 53%, rgba(255, 255, 255, 0.03) 58%, rgba(255, 255, 255, 0.02) 63%, rgba(255, 255, 255, 0.01) 68%, transparent 73%),
              linear-gradient(18deg, transparent 5%, rgba(255, 255, 255, 0.32) 10%, rgba(255, 255, 255, 0.28) 15%, rgba(255, 255, 255, 0.24) 20%, rgba(255, 255, 255, 0.20) 25%, rgba(255, 255, 255, 0.17) 30%, rgba(255, 255, 255, 0.14) 35%, rgba(255, 255, 255, 0.11) 40%, rgba(255, 255, 255, 0.08) 45%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.04) 55%, rgba(255, 255, 255, 0.02) 60%, rgba(255, 255, 255, 0.01) 65%, transparent 70%),
              linear-gradient(34deg, transparent 7%, rgba(255, 255, 255, 0.30) 12%, rgba(255, 255, 255, 0.26) 17%, rgba(255, 255, 255, 0.22) 22%, rgba(255, 255, 255, 0.19) 27%, rgba(255, 255, 255, 0.16) 32%, rgba(255, 255, 255, 0.13) 37%, rgba(255, 255, 255, 0.10) 42%, rgba(255, 255, 255, 0.07) 47%, rgba(255, 255, 255, 0.05) 52%, rgba(255, 255, 255, 0.03) 57%, rgba(255, 255, 255, 0.01) 62%, transparent 67%),
              linear-gradient(50deg, transparent 9%, rgba(255, 255, 255, 0.28) 14%, rgba(255, 255, 255, 0.24) 19%, rgba(255, 255, 255, 0.21) 24%, rgba(255, 255, 255, 0.18) 29%, rgba(255, 255, 255, 0.15) 34%, rgba(255, 255, 255, 0.12) 39%, rgba(255, 255, 255, 0.09) 44%, rgba(255, 255, 255, 0.06) 49%, rgba(255, 255, 255, 0.04) 54%, rgba(255, 255, 255, 0.02) 59%, transparent 64%),
              linear-gradient(66deg, transparent 11%, rgba(255, 255, 255, 0.26) 16%, rgba(255, 255, 255, 0.22) 21%, rgba(255, 255, 255, 0.19) 26%, rgba(255, 255, 255, 0.16) 31%, rgba(255, 255, 255, 0.13) 36%, rgba(255, 255, 255, 0.10) 41%, rgba(255, 255, 255, 0.07) 46%, rgba(255, 255, 255, 0.05) 51%, rgba(255, 255, 255, 0.03) 56%, rgba(255, 255, 255, 0.01) 61%, transparent 66%),
              linear-gradient(82deg, transparent 13%, rgba(255, 255, 255, 0.24) 18%, rgba(255, 255, 255, 0.21) 23%, rgba(255, 255, 255, 0.18) 28%, rgba(255, 255, 255, 0.15) 33%, rgba(255, 255, 255, 0.12) 38%, rgba(255, 255, 255, 0.09) 43%, rgba(255, 255, 255, 0.06) 48%, rgba(255, 255, 255, 0.04) 53%, rgba(255, 255, 255, 0.02) 58%, transparent 63%),
              linear-gradient(98deg, transparent 15%, rgba(255, 255, 255, 0.22) 20%, rgba(255, 255, 255, 0.19) 25%, rgba(255, 255, 255, 0.16) 30%, rgba(255, 255, 255, 0.13) 35%, rgba(255, 255, 255, 0.10) 40%, rgba(255, 255, 255, 0.07) 45%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.03) 55%, rgba(255, 255, 255, 0.01) 60%, transparent 65%),
              linear-gradient(114deg, transparent 17%, rgba(255, 255, 255, 0.20) 22%, rgba(255, 255, 255, 0.17) 27%, rgba(255, 255, 255, 0.14) 32%, rgba(255, 255, 255, 0.11) 37%, rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0.06) 47%, rgba(255, 255, 255, 0.04) 52%, rgba(255, 255, 255, 0.02) 57%, transparent 62%),
              linear-gradient(130deg, transparent 19%, rgba(255, 255, 255, 0.18) 24%, rgba(255, 255, 255, 0.15) 29%, rgba(255, 255, 255, 0.12) 34%, rgba(255, 255, 255, 0.09) 39%, rgba(255, 255, 255, 0.07) 44%, rgba(255, 255, 255, 0.05) 49%, rgba(255, 255, 255, 0.03) 54%, rgba(255, 255, 255, 0.01) 59%, transparent 64%),
              linear-gradient(146deg, transparent 21%, rgba(255, 255, 255, 0.16) 26%, rgba(255, 255, 255, 0.13) 31%, rgba(255, 255, 255, 0.10) 36%, rgba(255, 255, 255, 0.08) 41%, rgba(255, 255, 255, 0.06) 46%, rgba(255, 255, 255, 0.04) 51%, rgba(255, 255, 255, 0.02) 56%, transparent 61%),
              linear-gradient(-14deg, transparent 23%, rgba(255, 255, 255, 0.14) 28%, rgba(255, 255, 255, 0.11) 33%, rgba(255, 255, 255, 0.09) 38%, rgba(255, 255, 255, 0.07) 43%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0.03) 53%, rgba(255, 255, 255, 0.01) 58%, transparent 63%),
              linear-gradient(-30deg, transparent 25%, rgba(255, 255, 255, 0.12) 30%, rgba(255, 255, 255, 0.10) 35%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.06) 45%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 55%, transparent 60%),
              linear-gradient(-46deg, transparent 27%, rgba(255, 255, 255, 0.10) 32%, rgba(255, 255, 255, 0.08) 37%, rgba(255, 255, 255, 0.06) 42%, rgba(255, 255, 255, 0.04) 47%, rgba(255, 255, 255, 0.02) 52%, transparent 57%),
              linear-gradient(-62deg, transparent 29%, rgba(255, 255, 255, 0.08) 34%, rgba(255, 255, 255, 0.06) 39%, rgba(255, 255, 255, 0.04) 44%, rgba(255, 255, 255, 0.02) 49%, transparent 54%),
              linear-gradient(-78deg, transparent 31%, rgba(255, 255, 255, 0.06) 36%, rgba(255, 255, 255, 0.04) 41%, rgba(255, 255, 255, 0.02) 46%, transparent 51%)
            `
          }}></div>
          
          {/* Ultra-detailed 3D shadow and highlight system - purple reference level */}
          <div className="absolute inset-0 opacity-25" style={{
            backgroundImage: `
              radial-gradient(ellipse 800px 400px at 12% 88%, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.15) 20%, rgba(0, 0, 0, 0.10) 40%, rgba(0, 0, 0, 0.06) 60%, rgba(0, 0, 0, 0.03) 80%, transparent 95%),
              radial-gradient(ellipse 700px 350px at 88% 12%, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.13) 25%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.04) 75%, transparent 90%),
              radial-gradient(ellipse 900px 200px at 50% 98%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.10) 30%, rgba(0, 0, 0, 0.05) 60%, rgba(0, 0, 0, 0.02) 80%, transparent 95%),
              radial-gradient(circle 500px at 20% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 35%, rgba(255, 255, 255, 0.04) 65%, rgba(255, 255, 255, 0.02) 85%, transparent 95%),
              radial-gradient(circle 450px at 80% 80%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.07) 40%, rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0.01) 90%, transparent 100%),
              radial-gradient(circle 400px at 65% 35%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.02) 75%, transparent 95%)
            `
          }}></div>
        </div>
        <section className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 section-padding">
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
      </main>

      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24" style={{ marginTop: '-2rem', paddingTop: '4rem', marginBottom: '-2rem', paddingBottom: '4rem' }}>
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

      {/* Why Us Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800 py-16 md:py-24 overflow-hidden" style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)', marginTop: '-2rem', paddingTop: '4rem', marginBottom: '-2rem', paddingBottom: '4rem' }}>
          {/* EXTREME DETAIL Background Pattern - Why Us Section */}
          <div className="absolute inset-0">
            {/* Base atmospheric foundation with extreme depth - matching purple reference */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-cyan-200/32 to-cyan-900/50"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-100/38 via-cyan-300/28 to-cyan-800/45"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/35 via-cyan-400/25 to-cyan-950/48"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-300/40 via-cyan-500/22 to-cyan-700/42"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-150/30 via-cyan-600/18 to-cyan-850/38"></div>
            
            {/* Multi-layered 3D lighting system with extreme complexity - purple reference level */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(ellipse 2200px 1400px at 10% 5%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.48) 6%, rgba(255, 255, 255, 0.42) 12%, rgba(255, 255, 255, 0.36) 18%, rgba(255, 255, 255, 0.30) 24%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.20) 36%, rgba(255, 255, 255, 0.16) 42%, rgba(255, 255, 255, 0.12) 48%, rgba(255, 255, 255, 0.08) 54%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.03) 66%, rgba(255, 255, 255, 0.01) 72%, transparent 78%),
                radial-gradient(ellipse 2000px 1100px at 90% 95%, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.45) 8%, rgba(255, 255, 255, 0.38) 16%, rgba(255, 255, 255, 0.32) 24%, rgba(255, 255, 255, 0.26) 32%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.16) 48%, rgba(255, 255, 255, 0.12) 56%, rgba(255, 255, 255, 0.08) 64%, rgba(255, 255, 255, 0.05) 72%, rgba(255, 255, 255, 0.02) 80%, transparent 88%),
                radial-gradient(ellipse 2400px 800px at 50% 50%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.38) 10%, rgba(255, 255, 255, 0.32) 20%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.12) 60%, rgba(255, 255, 255, 0.08) 70%, rgba(255, 255, 255, 0.04) 80%, transparent 90%),
                radial-gradient(circle 1000px at 2% 88%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.40) 10%, rgba(255, 255, 255, 0.33) 20%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.20) 40%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.10) 60%, rgba(255, 255, 255, 0.06) 70%, rgba(255, 255, 255, 0.03) 80%, rgba(255, 255, 255, 0.01) 90%, transparent 100%),
                radial-gradient(circle 900px at 98% 12%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.38) 12%, rgba(255, 255, 255, 0.31) 24%, rgba(255, 255, 255, 0.24) 36%, rgba(255, 255, 255, 0.18) 48%, rgba(255, 255, 255, 0.13) 60%, rgba(255, 255, 255, 0.08) 72%, rgba(255, 255, 255, 0.04) 84%, transparent 96%),
                radial-gradient(circle 800px at 20% 20%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.33) 15%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.20) 45%, rgba(255, 255, 255, 0.14) 60%, rgba(255, 255, 255, 0.08) 75%, rgba(255, 255, 255, 0.03) 90%, transparent 100%),
                radial-gradient(circle 700px at 80% 80%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.31) 18%, rgba(255, 255, 255, 0.24) 36%, rgba(255, 255, 255, 0.17) 54%, rgba(255, 255, 255, 0.11) 72%, rgba(255, 255, 255, 0.05) 90%, transparent 100%)
              `
            }}></div>
            
            {/* Ultra-complex conic lighting with 3D depth - purple reference level */}
            <div className="absolute inset-0 opacity-70" style={{
              backgroundImage: `
                conic-gradient(from 12deg at 15% 3%, transparent 0deg, rgba(255, 255, 255, 0.50) 6deg, rgba(255, 255, 255, 0.45) 12deg, rgba(255, 255, 255, 0.40) 18deg, rgba(255, 255, 255, 0.35) 24deg, rgba(255, 255, 255, 0.30) 30deg, rgba(255, 255, 255, 0.25) 36deg, rgba(255, 255, 255, 0.20) 42deg, rgba(255, 255, 255, 0.16) 48deg, rgba(255, 255, 255, 0.12) 54deg, rgba(255, 255, 255, 0.08) 60deg, rgba(255, 255, 255, 0.05) 66deg, rgba(255, 255, 255, 0.02) 72deg, rgba(255, 255, 255, 0.01) 78deg, transparent 84deg),
                conic-gradient(from 192deg at 85% 97%, transparent 0deg, rgba(255, 255, 255, 0.48) 9deg, rgba(255, 255, 255, 0.42) 18deg, rgba(255, 255, 255, 0.36) 27deg, rgba(255, 255, 255, 0.30) 36deg, rgba(255, 255, 255, 0.25) 45deg, rgba(255, 255, 255, 0.20) 54deg, rgba(255, 255, 255, 0.15) 63deg, rgba(255, 255, 255, 0.11) 72deg, rgba(255, 255, 255, 0.07) 81deg, rgba(255, 255, 255, 0.04) 90deg, rgba(255, 255, 255, 0.02) 99deg, rgba(255, 255, 255, 0.01) 108deg, transparent 117deg),
                conic-gradient(from 102deg at 92% 18%, transparent 0deg, rgba(255, 255, 255, 0.42) 8deg, rgba(255, 255, 255, 0.36) 16deg, rgba(255, 255, 255, 0.30) 24deg, rgba(255, 255, 255, 0.25) 32deg, rgba(255, 255, 255, 0.20) 40deg, rgba(255, 255, 255, 0.15) 48deg, rgba(255, 255, 255, 0.11) 56deg, rgba(255, 255, 255, 0.07) 64deg, rgba(255, 255, 255, 0.04) 72deg, rgba(255, 255, 255, 0.02) 80deg, rgba(255, 255, 255, 0.01) 88deg, transparent 96deg),
                conic-gradient(from 282deg at 8% 82%, transparent 0deg, rgba(255, 255, 255, 0.40) 12deg, rgba(255, 255, 255, 0.34) 24deg, rgba(255, 255, 255, 0.28) 36deg, rgba(255, 255, 255, 0.22) 48deg, rgba(255, 255, 255, 0.17) 60deg, rgba(255, 255, 255, 0.12) 72deg, rgba(255, 255, 255, 0.08) 84deg, rgba(255, 255, 255, 0.04) 96deg, rgba(255, 255, 255, 0.02) 108deg, rgba(255, 255, 255, 0.01) 120deg, transparent 132deg),
                conic-gradient(from 152deg at 55% 65%, transparent 0deg, rgba(255, 255, 255, 0.35) 15deg, rgba(255, 255, 255, 0.29) 30deg, rgba(255, 255, 255, 0.23) 45deg, rgba(255, 255, 255, 0.18) 60deg, rgba(255, 255, 255, 0.13) 75deg, rgba(255, 255, 255, 0.08) 90deg, rgba(255, 255, 255, 0.04) 105deg, rgba(255, 255, 255, 0.02) 120deg, transparent 135deg)
              `
            }}></div>
            
            {/* Extreme atmospheric ray system with 3D perspective - purple reference level */}
            <div className="absolute inset-0 opacity-55">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent transform -skew-y-30 origin-top-left"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white/42 to-transparent transform skew-y-30 origin-bottom-right"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/38 to-transparent transform -skew-y-25 origin-center"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/35 to-transparent transform skew-y-25 origin-center"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/32 to-transparent transform -skew-y-20 origin-top"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-transparent transform skew-y-20 origin-bottom"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent transform -skew-y-15"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/26 to-transparent transform skew-y-15"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/24 to-transparent transform -skew-y-10"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/22 to-transparent transform skew-y-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-5"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/18 to-transparent transform skew-y-5"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/16 to-transparent transform -skew-y-2"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/14 to-transparent transform skew-y-2"></div>
            </div>
            
            {/* Ultra-complex 3D depth field matrix - purple reference level */}
            <div className="absolute inset-0 opacity-48">
              <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-white/32 to-white/38"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/42 via-white/30 to-white/35"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/38 via-white/28 to-white/32"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-white/35 via-white/26 to-white/30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/32 via-white/24 to-white/28"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/22 to-white/26"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-white/28 via-white/20 to-white/24"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/26 via-white/18 to-white/22"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/24 via-white/16 to-white/20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/22 via-white/14 to-white/18"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/12 to-white/16"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-white/18 via-white/10 to-white/14"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/16 via-white/8 to-white/12"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/14 via-white/6 to-white/10"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-white/12 via-white/5 to-white/8"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/4 to-white/6"></div>
            </div>
            
            {/* Maximum detail geometric line system - purple reference level */}
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage: `
                linear-gradient(2deg, transparent 3%, rgba(255, 255, 255, 0.35) 8%, rgba(255, 255, 255, 0.30) 13%, rgba(255, 255, 255, 0.26) 18%, rgba(255, 255, 255, 0.22) 23%, rgba(255, 255, 255, 0.18) 28%, rgba(255, 255, 255, 0.15) 33%, rgba(255, 255, 255, 0.12) 38%, rgba(255, 255, 255, 0.09) 43%, rgba(255, 255, 255, 0.07) 48%, rgba(255, 255, 255, 0.05) 53%, rgba(255, 255, 255, 0.03) 58%, rgba(255, 255, 255, 0.02) 63%, rgba(255, 255, 255, 0.01) 68%, transparent 73%),
                linear-gradient(18deg, transparent 5%, rgba(255, 255, 255, 0.32) 10%, rgba(255, 255, 255, 0.28) 15%, rgba(255, 255, 255, 0.24) 20%, rgba(255, 255, 255, 0.20) 25%, rgba(255, 255, 255, 0.17) 30%, rgba(255, 255, 255, 0.14) 35%, rgba(255, 255, 255, 0.11) 40%, rgba(255, 255, 255, 0.08) 45%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.04) 55%, rgba(255, 255, 255, 0.02) 60%, rgba(255, 255, 255, 0.01) 65%, transparent 70%),
                linear-gradient(34deg, transparent 7%, rgba(255, 255, 255, 0.30) 12%, rgba(255, 255, 255, 0.26) 17%, rgba(255, 255, 255, 0.22) 22%, rgba(255, 255, 255, 0.19) 27%, rgba(255, 255, 255, 0.16) 32%, rgba(255, 255, 255, 0.13) 37%, rgba(255, 255, 255, 0.10) 42%, rgba(255, 255, 255, 0.07) 47%, rgba(255, 255, 255, 0.05) 52%, rgba(255, 255, 255, 0.03) 57%, rgba(255, 255, 255, 0.01) 62%, transparent 67%),
                linear-gradient(50deg, transparent 9%, rgba(255, 255, 255, 0.28) 14%, rgba(255, 255, 255, 0.24) 19%, rgba(255, 255, 255, 0.21) 24%, rgba(255, 255, 255, 0.18) 29%, rgba(255, 255, 255, 0.15) 34%, rgba(255, 255, 255, 0.12) 39%, rgba(255, 255, 255, 0.09) 44%, rgba(255, 255, 255, 0.06) 49%, rgba(255, 255, 255, 0.04) 54%, rgba(255, 255, 255, 0.02) 59%, transparent 64%),
                linear-gradient(66deg, transparent 11%, rgba(255, 255, 255, 0.26) 16%, rgba(255, 255, 255, 0.22) 21%, rgba(255, 255, 255, 0.19) 26%, rgba(255, 255, 255, 0.16) 31%, rgba(255, 255, 255, 0.13) 36%, rgba(255, 255, 255, 0.10) 41%, rgba(255, 255, 255, 0.07) 46%, rgba(255, 255, 255, 0.05) 51%, rgba(255, 255, 255, 0.03) 56%, rgba(255, 255, 255, 0.01) 61%, transparent 66%),
                linear-gradient(82deg, transparent 13%, rgba(255, 255, 255, 0.24) 18%, rgba(255, 255, 255, 0.21) 23%, rgba(255, 255, 255, 0.18) 28%, rgba(255, 255, 255, 0.15) 33%, rgba(255, 255, 255, 0.12) 38%, rgba(255, 255, 255, 0.09) 43%, rgba(255, 255, 255, 0.06) 48%, rgba(255, 255, 255, 0.04) 53%, rgba(255, 255, 255, 0.02) 58%, transparent 63%),
                linear-gradient(98deg, transparent 15%, rgba(255, 255, 255, 0.22) 20%, rgba(255, 255, 255, 0.19) 25%, rgba(255, 255, 255, 0.16) 30%, rgba(255, 255, 255, 0.13) 35%, rgba(255, 255, 255, 0.10) 40%, rgba(255, 255, 255, 0.07) 45%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.03) 55%, rgba(255, 255, 255, 0.01) 60%, transparent 65%),
                linear-gradient(114deg, transparent 17%, rgba(255, 255, 255, 0.20) 22%, rgba(255, 255, 255, 0.17) 27%, rgba(255, 255, 255, 0.14) 32%, rgba(255, 255, 255, 0.11) 37%, rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0.06) 47%, rgba(255, 255, 255, 0.04) 52%, rgba(255, 255, 255, 0.02) 57%, transparent 62%),
                linear-gradient(130deg, transparent 19%, rgba(255, 255, 255, 0.18) 24%, rgba(255, 255, 255, 0.15) 29%, rgba(255, 255, 255, 0.12) 34%, rgba(255, 255, 255, 0.09) 39%, rgba(255, 255, 255, 0.07) 44%, rgba(255, 255, 255, 0.05) 49%, rgba(255, 255, 255, 0.03) 54%, rgba(255, 255, 255, 0.01) 59%, transparent 64%),
                linear-gradient(146deg, transparent 21%, rgba(255, 255, 255, 0.16) 26%, rgba(255, 255, 255, 0.13) 31%, rgba(255, 255, 255, 0.10) 36%, rgba(255, 255, 255, 0.08) 41%, rgba(255, 255, 255, 0.06) 46%, rgba(255, 255, 255, 0.04) 51%, rgba(255, 255, 255, 0.02) 56%, transparent 61%),
                linear-gradient(-14deg, transparent 23%, rgba(255, 255, 255, 0.14) 28%, rgba(255, 255, 255, 0.11) 33%, rgba(255, 255, 255, 0.09) 38%, rgba(255, 255, 255, 0.07) 43%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0.03) 53%, rgba(255, 255, 255, 0.01) 58%, transparent 63%),
                linear-gradient(-30deg, transparent 25%, rgba(255, 255, 255, 0.12) 30%, rgba(255, 255, 255, 0.10) 35%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.06) 45%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 55%, transparent 60%),
                linear-gradient(-46deg, transparent 27%, rgba(255, 255, 255, 0.10) 32%, rgba(255, 255, 255, 0.08) 37%, rgba(255, 255, 255, 0.06) 42%, rgba(255, 255, 255, 0.04) 47%, rgba(255, 255, 255, 0.02) 52%, transparent 57%),
                linear-gradient(-62deg, transparent 29%, rgba(255, 255, 255, 0.08) 34%, rgba(255, 255, 255, 0.06) 39%, rgba(255, 255, 255, 0.04) 44%, rgba(255, 255, 255, 0.02) 49%, transparent 54%),
                linear-gradient(-78deg, transparent 31%, rgba(255, 255, 255, 0.06) 36%, rgba(255, 255, 255, 0.04) 41%, rgba(255, 255, 255, 0.02) 46%, transparent 51%)
              `
            }}></div>
            
            {/* Ultra-detailed 3D shadow and highlight system - purple reference level */}
            <div className="absolute inset-0 opacity-25" style={{
              backgroundImage: `
                radial-gradient(ellipse 800px 400px at 12% 88%, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.15) 20%, rgba(0, 0, 0, 0.10) 40%, rgba(0, 0, 0, 0.06) 60%, rgba(0, 0, 0, 0.03) 80%, transparent 95%),
                radial-gradient(ellipse 700px 350px at 88% 12%, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.13) 25%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.04) 75%, transparent 90%),
                radial-gradient(ellipse 900px 200px at 50% 98%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.10) 30%, rgba(0, 0, 0, 0.05) 60%, rgba(0, 0, 0, 0.02) 80%, transparent 95%),
                radial-gradient(circle 500px at 20% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 35%, rgba(255, 255, 255, 0.04) 65%, rgba(255, 255, 255, 0.02) 85%, transparent 95%),
                radial-gradient(circle 450px at 80% 80%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.07) 40%, rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0.01) 90%, transparent 100%),
                radial-gradient(circle 400px at 65% 35%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.02) 75%, transparent 95%)
              `
            }}></div>
            

          </div>
          <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
            {/* Title */}
            <div className="text-center mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block text-white blue-section-text" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
                WHY US?
                <div className="h-1 w-48 bg-gradient-to-r from-white via-white/80 to-transparent rounded-full mt-2 mx-auto"></div>
              </h2>
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

      {/* Meet Our Team Section */}
      <section className="bg-white py-16 md:py-24" style={{ marginTop: '-2rem', paddingTop: '4rem', marginBottom: '-2rem', paddingBottom: '4rem' }}>
        <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          {/* Title */}
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 relative inline-block" style={{ fontWeight: 900, fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>
              MEET OUR TEAM
              <div className="h-1 w-72 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mt-2 mx-auto"></div>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Owners */}
            <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
              <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <LazyImage
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307104/H0VTGeM_wqdtuw.png"
                  alt="Studio Owners"
                  className="w-64 h-64"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase text-histown-text mb-2">OWNERS</h3>
              <p className="text-histown-text-muted">Leading with passion and faith</p>
            </div>

            {/* Dancers */}
            <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
              <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <LazyImage
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307103/5dfj0Ng_z8qr1f.png"
                  alt="Dance Instructors"
                  className="w-64 h-64"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase text-histown-text mb-2">DANCERS</h3>
              <p className="text-histown-text-muted">Inspiring movement and grace</p>
            </div>

            {/* Musicians */}
            <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}>
              <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <LazyImage
                  src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762307104/zYc8QQs_no8iw4.png"
                  alt="Music Instructors"
                  className="w-64 h-64"
                />
              </div>
              <h3 className="text-2xl font-bold uppercase text-histown-text mb-2">MUSICIANS</h3>
              <p className="text-histown-text-muted">Creating harmony and melody</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-800 py-20 md:py-32 relative overflow-hidden" style={{ clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 100%)', marginTop: '-2rem', paddingTop: '4rem', marginBottom: '-2rem', paddingBottom: '4rem' }}>
        {/* EXTREME DETAIL Background Pattern - Next Steps Section */}
        <div className="absolute inset-0">
          {/* Base atmospheric foundation with extreme depth - matching purple reference */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-cyan-200/32 to-cyan-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-100/38 via-cyan-300/28 to-cyan-800/45"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/35 via-cyan-400/25 to-cyan-950/48"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-300/40 via-cyan-500/22 to-cyan-700/42"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-150/30 via-cyan-600/18 to-cyan-850/38"></div>
          
          {/* Multi-layered 3D lighting system with extreme complexity - purple reference level */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(ellipse 2200px 1400px at 10% 5%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.48) 6%, rgba(255, 255, 255, 0.42) 12%, rgba(255, 255, 255, 0.36) 18%, rgba(255, 255, 255, 0.30) 24%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.20) 36%, rgba(255, 255, 255, 0.16) 42%, rgba(255, 255, 255, 0.12) 48%, rgba(255, 255, 255, 0.08) 54%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.03) 66%, rgba(255, 255, 255, 0.01) 72%, transparent 78%),
              radial-gradient(ellipse 2000px 1100px at 90% 95%, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.45) 8%, rgba(255, 255, 255, 0.38) 16%, rgba(255, 255, 255, 0.32) 24%, rgba(255, 255, 255, 0.26) 32%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.16) 48%, rgba(255, 255, 255, 0.12) 56%, rgba(255, 255, 255, 0.08) 64%, rgba(255, 255, 255, 0.05) 72%, rgba(255, 255, 255, 0.02) 80%, transparent 88%),
              radial-gradient(ellipse 2400px 800px at 50% 50%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.38) 10%, rgba(255, 255, 255, 0.32) 20%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.21) 40%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0.12) 60%, rgba(255, 255, 255, 0.08) 70%, rgba(255, 255, 255, 0.04) 80%, transparent 90%),
              radial-gradient(circle 1000px at 2% 88%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.40) 10%, rgba(255, 255, 255, 0.33) 20%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.20) 40%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.10) 60%, rgba(255, 255, 255, 0.06) 70%, rgba(255, 255, 255, 0.03) 80%, rgba(255, 255, 255, 0.01) 90%, transparent 100%),
              radial-gradient(circle 900px at 98% 12%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.38) 12%, rgba(255, 255, 255, 0.31) 24%, rgba(255, 255, 255, 0.24) 36%, rgba(255, 255, 255, 0.18) 48%, rgba(255, 255, 255, 0.13) 60%, rgba(255, 255, 255, 0.08) 72%, rgba(255, 255, 255, 0.04) 84%, transparent 96%),
              radial-gradient(circle 800px at 20% 20%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.33) 15%, rgba(255, 255, 255, 0.26) 30%, rgba(255, 255, 255, 0.20) 45%, rgba(255, 255, 255, 0.14) 60%, rgba(255, 255, 255, 0.08) 75%, rgba(255, 255, 255, 0.03) 90%, transparent 100%),
              radial-gradient(circle 700px at 80% 80%, rgba(255, 255, 255, 0.38) 0%, rgba(255, 255, 255, 0.31) 18%, rgba(255, 255, 255, 0.24) 36%, rgba(255, 255, 255, 0.17) 54%, rgba(255, 255, 255, 0.11) 72%, rgba(255, 255, 255, 0.05) 90%, transparent 100%)
            `
          }}></div>
          
          {/* Ultra-complex conic lighting with 3D depth - purple reference level */}
          <div className="absolute inset-0 opacity-70" style={{
            backgroundImage: `
              conic-gradient(from 12deg at 15% 3%, transparent 0deg, rgba(255, 255, 255, 0.50) 6deg, rgba(255, 255, 255, 0.45) 12deg, rgba(255, 255, 255, 0.40) 18deg, rgba(255, 255, 255, 0.35) 24deg, rgba(255, 255, 255, 0.30) 30deg, rgba(255, 255, 255, 0.25) 36deg, rgba(255, 255, 255, 0.20) 42deg, rgba(255, 255, 255, 0.16) 48deg, rgba(255, 255, 255, 0.12) 54deg, rgba(255, 255, 255, 0.08) 60deg, rgba(255, 255, 255, 0.05) 66deg, rgba(255, 255, 255, 0.02) 72deg, rgba(255, 255, 255, 0.01) 78deg, transparent 84deg),
              conic-gradient(from 192deg at 85% 97%, transparent 0deg, rgba(255, 255, 255, 0.48) 9deg, rgba(255, 255, 255, 0.42) 18deg, rgba(255, 255, 255, 0.36) 27deg, rgba(255, 255, 255, 0.30) 36deg, rgba(255, 255, 255, 0.25) 45deg, rgba(255, 255, 255, 0.20) 54deg, rgba(255, 255, 255, 0.15) 63deg, rgba(255, 255, 255, 0.11) 72deg, rgba(255, 255, 255, 0.07) 81deg, rgba(255, 255, 255, 0.04) 90deg, rgba(255, 255, 255, 0.02) 99deg, rgba(255, 255, 255, 0.01) 108deg, transparent 117deg),
              conic-gradient(from 102deg at 92% 18%, transparent 0deg, rgba(255, 255, 255, 0.42) 8deg, rgba(255, 255, 255, 0.36) 16deg, rgba(255, 255, 255, 0.30) 24deg, rgba(255, 255, 255, 0.25) 32deg, rgba(255, 255, 255, 0.20) 40deg, rgba(255, 255, 255, 0.15) 48deg, rgba(255, 255, 255, 0.11) 56deg, rgba(255, 255, 255, 0.07) 64deg, rgba(255, 255, 255, 0.04) 72deg, rgba(255, 255, 255, 0.02) 80deg, rgba(255, 255, 255, 0.01) 88deg, transparent 96deg),
              conic-gradient(from 282deg at 8% 82%, transparent 0deg, rgba(255, 255, 255, 0.40) 12deg, rgba(255, 255, 255, 0.34) 24deg, rgba(255, 255, 255, 0.28) 36deg, rgba(255, 255, 255, 0.22) 48deg, rgba(255, 255, 255, 0.17) 60deg, rgba(255, 255, 255, 0.12) 72deg, rgba(255, 255, 255, 0.08) 84deg, rgba(255, 255, 255, 0.04) 96deg, rgba(255, 255, 255, 0.02) 108deg, rgba(255, 255, 255, 0.01) 120deg, transparent 132deg),
              conic-gradient(from 152deg at 55% 65%, transparent 0deg, rgba(255, 255, 255, 0.35) 15deg, rgba(255, 255, 255, 0.29) 30deg, rgba(255, 255, 255, 0.23) 45deg, rgba(255, 255, 255, 0.18) 60deg, rgba(255, 255, 255, 0.13) 75deg, rgba(255, 255, 255, 0.08) 90deg, rgba(255, 255, 255, 0.04) 105deg, rgba(255, 255, 255, 0.02) 120deg, transparent 135deg)
            `
          }}></div>
          
          {/* Extreme atmospheric ray system with 3D perspective - purple reference level */}
          <div className="absolute inset-0 opacity-55">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/45 to-transparent transform -skew-y-30 origin-top-left"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white/42 to-transparent transform skew-y-30 origin-bottom-right"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/38 to-transparent transform -skew-y-25 origin-center"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/35 to-transparent transform skew-y-25 origin-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/32 to-transparent transform -skew-y-20 origin-top"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-transparent transform skew-y-20 origin-bottom"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent transform -skew-y-15"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/26 to-transparent transform skew-y-15"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/24 to-transparent transform -skew-y-10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/22 to-transparent transform skew-y-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-5"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/18 to-transparent transform skew-y-5"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/16 to-transparent transform -skew-y-2"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/14 to-transparent transform skew-y-2"></div>
          </div>
          
          {/* Ultra-complex 3D depth field matrix - purple reference level */}
          <div className="absolute inset-0 opacity-48">
            <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-white/32 to-white/38"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/42 via-white/30 to-white/35"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/38 via-white/28 to-white/32"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/35 via-white/26 to-white/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/32 via-white/24 to-white/28"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/22 to-white/26"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/28 via-white/20 to-white/24"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/26 via-white/18 to-white/22"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/24 via-white/16 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-white/22 via-white/14 to-white/18"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/12 to-white/16"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-white/18 via-white/10 to-white/14"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/16 via-white/8 to-white/12"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/14 via-white/6 to-white/10"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/12 via-white/5 to-white/8"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/4 to-white/6"></div>
          </div>
          
          {/* Maximum detail geometric line system - purple reference level */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `
              linear-gradient(2deg, transparent 3%, rgba(255, 255, 255, 0.35) 8%, rgba(255, 255, 255, 0.30) 13%, rgba(255, 255, 255, 0.26) 18%, rgba(255, 255, 255, 0.22) 23%, rgba(255, 255, 255, 0.18) 28%, rgba(255, 255, 255, 0.15) 33%, rgba(255, 255, 255, 0.12) 38%, rgba(255, 255, 255, 0.09) 43%, rgba(255, 255, 255, 0.07) 48%, rgba(255, 255, 255, 0.05) 53%, rgba(255, 255, 255, 0.03) 58%, rgba(255, 255, 255, 0.02) 63%, rgba(255, 255, 255, 0.01) 68%, transparent 73%),
              linear-gradient(18deg, transparent 5%, rgba(255, 255, 255, 0.32) 10%, rgba(255, 255, 255, 0.28) 15%, rgba(255, 255, 255, 0.24) 20%, rgba(255, 255, 255, 0.20) 25%, rgba(255, 255, 255, 0.17) 30%, rgba(255, 255, 255, 0.14) 35%, rgba(255, 255, 255, 0.11) 40%, rgba(255, 255, 255, 0.08) 45%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.04) 55%, rgba(255, 255, 255, 0.02) 60%, rgba(255, 255, 255, 0.01) 65%, transparent 70%),
              linear-gradient(34deg, transparent 7%, rgba(255, 255, 255, 0.30) 12%, rgba(255, 255, 255, 0.26) 17%, rgba(255, 255, 255, 0.22) 22%, rgba(255, 255, 255, 0.19) 27%, rgba(255, 255, 255, 0.16) 32%, rgba(255, 255, 255, 0.13) 37%, rgba(255, 255, 255, 0.10) 42%, rgba(255, 255, 255, 0.07) 47%, rgba(255, 255, 255, 0.05) 52%, rgba(255, 255, 255, 0.03) 57%, rgba(255, 255, 255, 0.01) 62%, transparent 67%),
              linear-gradient(50deg, transparent 9%, rgba(255, 255, 255, 0.28) 14%, rgba(255, 255, 255, 0.24) 19%, rgba(255, 255, 255, 0.21) 24%, rgba(255, 255, 255, 0.18) 29%, rgba(255, 255, 255, 0.15) 34%, rgba(255, 255, 255, 0.12) 39%, rgba(255, 255, 255, 0.09) 44%, rgba(255, 255, 255, 0.06) 49%, rgba(255, 255, 255, 0.04) 54%, rgba(255, 255, 255, 0.02) 59%, transparent 64%),
              linear-gradient(66deg, transparent 11%, rgba(255, 255, 255, 0.26) 16%, rgba(255, 255, 255, 0.22) 21%, rgba(255, 255, 255, 0.19) 26%, rgba(255, 255, 255, 0.16) 31%, rgba(255, 255, 255, 0.13) 36%, rgba(255, 255, 255, 0.10) 41%, rgba(255, 255, 255, 0.07) 46%, rgba(255, 255, 255, 0.05) 51%, rgba(255, 255, 255, 0.03) 56%, rgba(255, 255, 255, 0.01) 61%, transparent 66%),
              linear-gradient(82deg, transparent 13%, rgba(255, 255, 255, 0.24) 18%, rgba(255, 255, 255, 0.21) 23%, rgba(255, 255, 255, 0.18) 28%, rgba(255, 255, 255, 0.15) 33%, rgba(255, 255, 255, 0.12) 38%, rgba(255, 255, 255, 0.09) 43%, rgba(255, 255, 255, 0.06) 48%, rgba(255, 255, 255, 0.04) 53%, rgba(255, 255, 255, 0.02) 58%, transparent 63%),
              linear-gradient(98deg, transparent 15%, rgba(255, 255, 255, 0.22) 20%, rgba(255, 255, 255, 0.19) 25%, rgba(255, 255, 255, 0.16) 30%, rgba(255, 255, 255, 0.13) 35%, rgba(255, 255, 255, 0.10) 40%, rgba(255, 255, 255, 0.07) 45%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.03) 55%, rgba(255, 255, 255, 0.01) 60%, transparent 65%),
              linear-gradient(114deg, transparent 17%, rgba(255, 255, 255, 0.20) 22%, rgba(255, 255, 255, 0.17) 27%, rgba(255, 255, 255, 0.14) 32%, rgba(255, 255, 255, 0.11) 37%, rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0.06) 47%, rgba(255, 255, 255, 0.04) 52%, rgba(255, 255, 255, 0.02) 57%, transparent 62%),
              linear-gradient(130deg, transparent 19%, rgba(255, 255, 255, 0.18) 24%, rgba(255, 255, 255, 0.15) 29%, rgba(255, 255, 255, 0.12) 34%, rgba(255, 255, 255, 0.09) 39%, rgba(255, 255, 255, 0.07) 44%, rgba(255, 255, 255, 0.05) 49%, rgba(255, 255, 255, 0.03) 54%, rgba(255, 255, 255, 0.01) 59%, transparent 64%),
              linear-gradient(146deg, transparent 21%, rgba(255, 255, 255, 0.16) 26%, rgba(255, 255, 255, 0.13) 31%, rgba(255, 255, 255, 0.10) 36%, rgba(255, 255, 255, 0.08) 41%, rgba(255, 255, 255, 0.06) 46%, rgba(255, 255, 255, 0.04) 51%, rgba(255, 255, 255, 0.02) 56%, transparent 61%),
              linear-gradient(-14deg, transparent 23%, rgba(255, 255, 255, 0.14) 28%, rgba(255, 255, 255, 0.11) 33%, rgba(255, 255, 255, 0.09) 38%, rgba(255, 255, 255, 0.07) 43%, rgba(255, 255, 255, 0.05) 48%, rgba(255, 255, 255, 0.03) 53%, rgba(255, 255, 255, 0.01) 58%, transparent 63%),
              linear-gradient(-30deg, transparent 25%, rgba(255, 255, 255, 0.12) 30%, rgba(255, 255, 255, 0.10) 35%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.06) 45%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 55%, transparent 60%),
              linear-gradient(-46deg, transparent 27%, rgba(255, 255, 255, 0.10) 32%, rgba(255, 255, 255, 0.08) 37%, rgba(255, 255, 255, 0.06) 42%, rgba(255, 255, 255, 0.04) 47%, rgba(255, 255, 255, 0.02) 52%, transparent 57%),
              linear-gradient(-62deg, transparent 29%, rgba(255, 255, 255, 0.08) 34%, rgba(255, 255, 255, 0.06) 39%, rgba(255, 255, 255, 0.04) 44%, rgba(255, 255, 255, 0.02) 49%, transparent 54%),
              linear-gradient(-78deg, transparent 31%, rgba(255, 255, 255, 0.06) 36%, rgba(255, 255, 255, 0.04) 41%, rgba(255, 255, 255, 0.02) 46%, transparent 51%)
            `
          }}></div>
          
          {/* Ultra-detailed 3D shadow and highlight system - purple reference level */}
          <div className="absolute inset-0 opacity-25" style={{
            backgroundImage: `
              radial-gradient(ellipse 800px 400px at 12% 88%, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.15) 20%, rgba(0, 0, 0, 0.10) 40%, rgba(0, 0, 0, 0.06) 60%, rgba(0, 0, 0, 0.03) 80%, transparent 95%),
              radial-gradient(ellipse 700px 350px at 88% 12%, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.13) 25%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.04) 75%, transparent 90%),
              radial-gradient(ellipse 900px 200px at 50% 98%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.10) 30%, rgba(0, 0, 0, 0.05) 60%, rgba(0, 0, 0, 0.02) 80%, transparent 95%),
              radial-gradient(circle 500px at 20% 20%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 35%, rgba(255, 255, 255, 0.04) 65%, rgba(255, 255, 255, 0.02) 85%, transparent 95%),
              radial-gradient(circle 450px at 80% 80%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.07) 40%, rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0.01) 90%, transparent 100%),
              radial-gradient(circle 400px at 65% 35%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.02) 75%, transparent 95%)
            `
          }}></div>
          

        </div>
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Next Steps */}
            <div className="text-white blue-section-text animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 blue-section-text" style={{ fontFamily: 'cursive', fontWeight: 900 }}>
                Next Steps
              </h2>
              <p className="text-xl mb-8 leading-relaxed opacity-90 blue-section-text">
                Take your first step with a free trial music lesson or dance class.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-white text-histown-primary hover:bg-white/95 hover:text-histown-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  REQUEST A MUSIC TRIAL LESSON
                </button>
                <button className="w-full bg-white text-histown-primary hover:bg-white/95 hover:text-histown-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  REQUEST A DANCE TRIAL CLASS
                </button>
                <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-histown-primary transition-all duration-300 transform hover:scale-105">
                  CONTACT US
                </button>
              </div>
            </div>

            {/* Right Side - Email Signup */}
            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-8 border border-white/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase blue-section-text">
                SIGN UP FOR EMAIL UPDATES
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed blue-section-text">
                If you're not ready to start there, simply fill out this form to sign up for our email list, and we'll keep you updated on what's happening at HisTown.
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
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2 blue-section-text">Interests/Programs*</label>
                  <div className="text-sm text-white/80 mb-3 blue-section-text">Choose all that apply:</div>
                  <div className="space-y-2 text-white blue-section-text">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 rounded" />
                      HisTown Updates
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 rounded" />
                      Dance Classes
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 rounded" />
                      Music Lessons
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 rounded" />
                      Musical Theatre
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 rounded" />
                      Summer Camps
                    </label>
                  </div>
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

      <footer className="section-container py-8 border-t border-histown-secondary bg-white" style={{ marginTop: '-2rem', paddingTop: '4rem' }}>
        <p className="text-center text-histown-text-muted">
          {homeContent.footer.copyright}
        </p>
      </footer>
    </div>
  )
}

export default App