import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Footer } from '../components/layout/Footer';

const featuredData: Record<string, { name: string; description: string; image?: string; images?: string[]; bannerImage: string; position: string; longDescription: string; useOriginalLayout?: boolean; pricingTable?: { package: string; cost: string; savings?: string }[] }> = {
  'acting': {
    name: 'Acting Classes',
    description: 'Develop stage presence and character work',
    images: [
      'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763511939/Screenshot_2025-11-18_at_6.25.26_PM_pxliij.png',
      'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166100/Heather_ng7kpl.png'
    ],
    bannerImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1600&q=80',
    position: 'center center',
    longDescription: '<strong>Ben Francisco</strong><br/>Acting Up! Confidence Through the Stage: 6-week acting and improv course for ages 9-12, meeting once weekly for one hour. Build confidence, emotional awareness, and creative expression through movement games, acting lessons, and group reflections. Students explore improv skills—listening, collaboration, physicality, vocal expression, empathy, and resilience—while embracing their God-given uniqueness. Culminates in a mini-showcase. $135 for six weeks. Limited to 14 students.<br/><br/><strong>Heather Wise</strong><br/>Beginning Acting/Stage Presence (Ages 8-11): Mondays 5:30-6:30pm. Learn acting fundamentals through theater games, improv, monologues, and scenes to build self-confidence and imagination. Beginning/Intermediate Acting (Ages 12-17): Mondays 6:30-7:30pm. Master stage comfort through improv, theater games, monologue and scene work. Regular tuition fees apply. Free trial available.'
  },
  'adult': {
    name: 'Adult Barre Classes',
    description: 'Faith-based fitness for women',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763513212/Screenshot_2025-11-18_at_6.46.07_PM_yr3o0w.png',
    bannerImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
    position: 'center center',
    useOriginalLayout: true,
    longDescription: 'Led by certified instructor Mattie Tichenor, our Barre classes offer something for women of all fitness levels in an empowering, God-honoring environment. Every Monday from 11:10am to 12:00pm, experience a faith-based workout that\'s both high-energy and peaceful. This method tones, lifts, strengthens, stretches, and so much more! Open to women age 16 and up—all ability levels welcome. There is a place for you! First class is only $10, so grab a friend and come sweat with us!',
    pricingTable: [
      { package: 'Single Drop-In Class', cost: '$25', savings: '' },
      { package: '5 Class Package', cost: '$90', savings: 'Save $35!' },
      { package: '10 Class Package', cost: '$160', savings: 'Save $90!' },
      { package: '20 Class Package', cost: '$300', savings: 'Save $200!' }
    ]
  },
  'company': {
    name: 'Company Classes',
    description: 'Elite training for dedicated dancers',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763514053/Screenshot_2025-11-18_at_7.00.33_PM_egyjic.png',
    bannerImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1600&q=80',
    position: 'center center',
    useOriginalLayout: true,
    longDescription: '<p class="mb-4">HisTown has five companies this year (Senior, 1st, 2nd, 3rd & 4th) that meet weekly to train, dance, and worship together. It\'s an opportunity for dancers to grow technically and connect through their faith on a deeper level. Company members are expected to be positive role models and lead by example in how they live their lives and treat others, both inside and outside the studio.</p><p class="mb-6">Whether interested in ministry opportunities, professional training, or both, company dancers are highly dedicated and serious about pursuing their passion for dance. Company members perform at events outside of recitals and have the opportunity to choreograph and perform a solo/senior piece their graduating year of high school in our May recital.</p><h4 class="text-2xl font-bold mb-4 uppercase">Company Requirements</h4><div class="space-y-4"><div class="bg-gray-50 p-4 rounded-lg"><h5 class="font-bold text-lg mb-2">Senior Company - Level 4 & 5 (Ages 16+)</h5><p>Must take at least four hours of ballet weekly (with at least two hours being technique class involving barre, center, and across the floor) plus at least three other genres (contemporary, modern, musical theater, hip-hop, etc.). Company class does not count as ballet. Optional one-hour technique class available Mondays at 4:30pm.</p></div><div class="bg-white p-4 rounded-lg border border-gray-200"><h5 class="font-bold text-lg mb-2">1st Company - Level 4 & 5 (Ages 14+)</h5><p>Must take at least four hours of ballet weekly (with at least two hours being technique class involving barre, center, and across the floor) plus at least three other genres (contemporary, modern, musical theater, hip-hop, etc.). Company class does not count as ballet. Optional one-hour technique class available Mondays at 4:30pm.</p></div><div class="bg-gray-50 p-4 rounded-lg"><h5 class="font-bold text-lg mb-2">2nd Company - Level 3 (Ages 12+)</h5><p>Must take at least three hours of ballet weekly (with at least two hours being technique class involving barre, center, and across the floor) plus at least two other genres (contemporary, modern, musical theater, hip-hop, etc.). Company class does not count as ballet.</p></div><div class="bg-white p-4 rounded-lg border border-gray-200"><h5 class="font-bold text-lg mb-2">3rd Company - Level 3 (Ages 11-13)</h5><p>Must take at least one ballet class weekly plus at least two other genres (contemporary, modern, musical theater, hip-hop, etc.). Company class does not count as ballet.</p></div><div class="bg-gray-50 p-4 rounded-lg"><h5 class="font-bold text-lg mb-2">4th Company - Level 2 (Ages 10-12)</h5><p>Must take at least one ballet class weekly plus at least two other genres (contemporary, modern, musical theater, hip-hop, etc.). Company class does not count as ballet.</p></div></div><p class="text-sm text-gray-600 mt-6 italic">* Please note that even though we\'re generally distinguishing company classes by levels, a dancer\'s overall experience and age at the beginning of the semester can play a role in which company they\'re placed in as well.</p>'
  },
  'competition': {
    name: 'Competition Teams',
    description: 'High-level competitive dance training',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762908625/Competition_lvgdnb.jpg',
    bannerImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80',
    position: 'center center',
    longDescription: 'We\'re expanding our competition teams for the 2025-2026 season! Teams include Gold (Level 5), Silver (Level 3B-4B), Diamond (Level 2B-3A), and Light Crew (Hip-Hop). Our purpose goes beyond awards—we provide intensive training that benefits dancers professionally and spiritually. Through great technique and artistry, we show Christ to audiences and plant seeds for life-changing relationships with Jesus. This team impacts dancers through additional training, mentoring, travel, team bonding, and performance experience while relying on Jesus and showing God\'s love to all.'
  }
};

const FeaturedDetail: React.FC = () => {
  const { featuredId } = useParams<{ featuredId: string }>();
  
  const featured = featuredId ? featuredData[featuredId] : null;

  if (!featured) {
    return <div>Featured program not found</div>;
  }

  useEffect(() => {
    // Animation on scroll
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

    // Testimonials carousel
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
      const maxIndex = Math.max(0, testimonials.length - 1);

      const updateCarousel = () => {
        const translateX = -currentIndex * cardWidth;
        testimonialsTrack.style.transform = `translateX(${translateX}px)`;
      };

      const prevBtn = document.getElementById('testimonial-prev-featured-detail');
      const nextBtn = document.getElementById('testimonial-next-featured-detail');

      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentIndex <= 0) {
            currentIndex = maxIndex;
          } else {
            currentIndex = currentIndex - 1;
          }
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
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] sm:h-[45vh] sm:min-h-[400px] md:h-[50vh] md:min-h-[450px] flex items-start lg:items-center justify-center overflow-hidden section-divider-mobile pt-12 sm:pt-20 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${featured.bannerImage})`,
            backgroundPosition: 'center center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 md:pt-8 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            {featured.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            {featured.description}
          </p>
        </div>
      </section>


      {/* Content Section */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative" 
        style={{ 
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
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-12 lg:px-20">
          {featured.useOriginalLayout ? (
            /* Original Layout - Image on Top, Text Below */
            <div className="group rounded-3xl overflow-visible">
              {/* Featured Image */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: featured.position }}
                />
              </div>
              
              {/* Description Card */}
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-3xl shadow-lg -mt-8 mx-2 sm:mx-4 relative z-10">
                <div className="p-4 sm:p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                      {featured.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                    </div>
                  </div>
                  <div 
                    className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8"
                    dangerouslySetInnerHTML={{ __html: featured.longDescription }}
                  />
                  
                  {/* Pricing Table */}
                  {featured.pricingTable && (
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 uppercase">Class Packs</h4>
                      <div className="overflow-x-auto -mx-2 sm:mx-0">
                        <table className="w-full border-collapse min-w-[300px]">
                          <thead>
                            <tr className="bg-gradient-to-r from-histown-primary to-histown-accent text-white">
                              <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Package</th>
                              <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Cost</th>
                              <th className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Savings</th>
                            </tr>
                          </thead>
                          <tbody>
                            {featured.pricingTable.map((row, index) => (
                              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">{row.package}</td>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-sm sm:text-base">{row.cost}</td>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2 sm:py-3 text-green-600 font-bold text-sm sm:text-base">{row.savings}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center px-2">
                        Venmo @histown or fees processed through HisTown account. Call us or purchase at front desk when you come for class!
                      </p>
                    </div>
                  )}
                  
                  {/* Button */}
                  <div className="text-center">
                    <Link 
                      to="/classes/featured"
                      className="inline-block w-full sm:w-auto bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
                    >
                      View All Featured Programs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Side-by-Side Layout - Image Left, Text Right - Stacks on Mobile */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Featured Image(s) */}
              {featured.images ? (
                <div className="flex flex-col gap-0">
                  {featured.images.map((img, index) => (
                    <div key={index} className={`relative rounded-3xl overflow-hidden shadow-2xl ${index === 0 ? 'h-[250px] sm:h-[300px] lg:h-[330px] rounded-b-none' : 'h-[250px] sm:h-[300px] lg:h-[330px] rounded-t-none'}`}>
                      <img 
                        src={img}
                        alt={`${featured.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: featured.position }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: featured.position }}
                  />
                </div>
              )}
              
              {/* Description Card */}
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-3xl shadow-lg">
                <div className="p-4 sm:p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="mb-3 sm:mb-4 text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2 sm:mb-3" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                      {featured.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-histown-accent rounded-full"></div>
                      <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                    </div>
                  </div>
                  <div 
                    className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6"
                    dangerouslySetInnerHTML={{ __html: featured.longDescription }}
                  />
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to="/classes/featured"
                      className="flex-1 text-center bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
                    >
                      All Featured
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 text-center bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Why Us Section */}
      <section 
        className="relative py-12 sm:py-16 md:py-24 overflow-hidden section-divider-mobile" 
        style={{ 
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="text-center mb-6 sm:mb-8 flex flex-col items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-2 text-white blue-section-text" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              WHY US?
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
              <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
            <p className="text-base sm:text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text px-4">
              We provide specialized programs in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-6 sm:p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4 text-histown-text">HIS HEART</h3>
                  <p className="text-sm sm:text-base text-histown-text-muted leading-relaxed">
                    At the heart of our mission is God's love—a love that nurtures, uplifts, and calls us to use our gifts for His praise.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '600ms' }}>
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-6 sm:p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4 text-histown-text">HIS GLORY</h3>
                  <p className="text-sm sm:text-base text-histown-text-muted leading-relaxed">
                    We train not for the applause of people, but to reflect God's glory, honoring Him with excellence and joy.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '800ms' }}>
              <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-6 sm:p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4 text-histown-text">HISTOWN</h3>
                  <p className="text-sm sm:text-base text-histown-text-muted leading-relaxed">
                    HisTown is more than a studio—it's God's town, where creativity, community, and worship come together in His name.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24" style={{ marginTop: '-4rem', paddingTop: '6rem', marginBottom: '-4rem', paddingBottom: '6rem' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="text-center mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-2 relative inline-block" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              TESTIMONIALS
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <img 
              src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762302377/2yG3qAq_nzcotl.png" 
              alt="Williamson's Best 2025 Winner" 
              className="h-32 sm:h-40 md:h-48 w-auto object-contain rounded-2xl"
            />
            <img 
              src="https://res.cloudinary.com/dxqzby6fc/image/upload/v1762304027/ChatGPT_Image_Nov_4_2025_at_06_53_22_PM_w3why3.png" 
              alt="Best of Parenting 2025 Winner" 
              className="h-32 sm:h-40 md:h-48 w-auto object-contain rounded-2xl"
            />
          </div>

          <div className="relative px-8 sm:px-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
            <button 
              id="testimonial-prev-featured-detail"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-8 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              id="testimonial-next-featured-detail"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-8 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        className="py-12 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile"
        style={{
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center justify-items-center">
            
            <div className="text-white blue-section-text text-center w-full max-w-md animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-2 relative inline-block text-white blue-section-text" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                NEXT STEPS
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
                <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white blue-section-text leading-relaxed px-4">
                Take your first step with a free trial class!
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <button className="w-full bg-white text-histown-primary hover:bg-white/95 hover:text-histown-accent font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                  REQUEST A TRIAL CLASS
                </button>
                <Link to="/contact" className="block">
                  <button className="w-full bg-transparent border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-histown-primary transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 w-full max-w-md animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 uppercase blue-section-text">
                SIGN UP FOR EMAIL UPDATES
              </h3>
              <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 leading-relaxed blue-section-text">
                If you're not ready to start yet, simply fill out this form to sign up for our email list.
              </p>
              
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2 blue-section-text">First name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2 blue-section-text">Email*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-4 sm:mt-6 text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeaturedDetail;
