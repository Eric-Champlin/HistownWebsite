import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import { homeContent } from '../content/home';
import { Footer } from '../components/layout/Footer';

const danceData: Record<string, { name: string; description: string; image: string; bannerImage: string; position: string; bannerPosition?: string; longDescription: string }> = {
  'acro': {
    name: 'Acro',
    description: 'Combining dance technique with acrobatic elements',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825371/Acro_vmmyyu.png',
    bannerImage: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1600&q=80',
    position: 'center 85%',
    longDescription: 'Acro dance is a unique style that seamlessly blends classical dance technique with acrobatic elements. Students develop strength, flexibility, balance, and control while learning to execute impressive tricks and tumbling passes. Our acro classes emphasize proper technique and safety, building a strong foundation in both dance and gymnastics. Dancers learn to transition smoothly between dance movements and acrobatic skills, creating dynamic and visually stunning performances. This style is perfect for students who love the athleticism of gymnastics combined with the artistry of dance.'
  },
  'ballet': {
    name: 'Ballet',
    description: 'Classical ballet technique and artistry',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825370/Ballet_zgvpjm.jpg',
    bannerImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1600&q=80',
    position: 'center 30%',
    longDescription: 'Ballet is the foundation of all dance forms, emphasizing grace, poise, and technical precision. Our ballet program follows a structured curriculum that develops proper alignment, turnout, and classical technique. Students learn traditional ballet vocabulary, positions, and combinations while building strength, flexibility, and musicality. From barre work to center combinations, each class focuses on developing the discipline and artistry that ballet demands. Whether pursuing ballet as a primary focus or as a foundation for other dance styles, our program provides comprehensive training in this timeless art form.'
  },

  'contemporary': {
    name: 'Contemporary',
    description: 'Expressive modern dance movement',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825366/Contemporary_doscju.png',
    bannerImage: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=1600&q=80',
    position: 'center 25%',
    longDescription: 'Contemporary dance is an expressive and versatile style that blends elements of ballet, modern, and jazz. This genre emphasizes emotional expression, creative movement, and personal interpretation. Students explore floor work, improvisation, and dynamic movement quality while developing technical skills in balance, flexibility, and control. Contemporary dance encourages dancers to connect movement with emotion, telling stories through their bodies. Our classes focus on developing both technical proficiency and artistic expression, allowing dancers to find their unique voice through movement.'
  },
  'creative-movement': {
    name: 'Creative Movement',
    description: 'Introduction to dance for young children',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825368/Creative_Movement_impfds.png',
    bannerImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80',
    position: 'center 15%',
    longDescription: 'Creative Movement introduces our youngest dancers to the joy of dance through playful exploration and imaginative activities. This class focuses on developing basic motor skills, coordination, rhythm, and spatial awareness in a fun, nurturing environment. Children learn to express themselves through movement, follow directions, and interact positively with peers. Using props, music, and storytelling, we make dance accessible and enjoyable for preschool-aged children. This class builds confidence, creativity, and a love for movement that will serve as a foundation for future dance training.'
  },
  'foundations': {
    name: 'Foundations',
    description: 'Building strong dance fundamentals',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825367/Foundations_kh2o17.jpg',
    bannerImage: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1600&q=80',
    position: 'center center',
    longDescription: 'Foundations class is designed to build a strong technical base for dancers of all levels. This class focuses on proper body alignment, core strength, flexibility, and fundamental dance techniques that apply across all styles. Students work on developing clean lines, proper posture, and efficient movement patterns. The curriculum includes elements of ballet, modern, and conditioning exercises to create well-rounded dancers. Whether you are beginning your dance journey or looking to strengthen your technical foundation, this class provides essential skills that will enhance your performance in all dance styles.'
  },
  'hip-hop': {
    name: 'Hip-Hop',
    description: 'Urban dance styles and choreography',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825372/HipHop_yzzsxu.png',
    bannerImage: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1600&q=80',
    position: 'center 30%',
    bannerPosition: 'center 70%',
    longDescription: 'Hip-Hop dance brings high energy, urban style, and contemporary street dance culture to our studio. Students learn various hip-hop styles including popping, locking, breaking, and freestyle. Classes focus on musicality, rhythm, and developing your own unique style while learning current choreography. Hip-hop emphasizes confidence, self-expression, and having fun while dancing. Our instructors teach age-appropriate movements and music, ensuring a positive environment where students can explore this dynamic dance form. Perfect for dancers who love energetic movement and contemporary music.'
  },
  'jazz': {
    name: 'Jazz',
    description: 'Energetic and dynamic jazz technique',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825363/Jazz_hwekyw.png',
    bannerImage: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1600&q=80',
    position: 'center center',
    longDescription: 'Jazz dance is an energetic and dynamic style characterized by sharp movements, leaps, turns, and expressive performance quality. Our jazz classes combine technical training with fun, upbeat choreography set to contemporary music. Students develop strength, flexibility, and coordination while learning classic jazz techniques including isolations, kicks, and turns. Jazz dance emphasizes performance quality, facial expressions, and connecting with the audience. This versatile style prepares dancers for musical theater, commercial dance, and performance opportunities while building confidence and stage presence.'
  },
  'modern': {
    name: 'Modern',
    description: 'Contemporary modern dance technique',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825358/Modern_gnrpmd.png',
    bannerImage: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1600&q=80',
    position: 'center center',
    longDescription: 'Modern dance emphasizes natural movement, floor work, and expressive quality. This style breaks from classical ballet traditions, exploring new ways of moving and using the body as an instrument of expression. Students learn to use breath, weight, and momentum to create fluid, organic movement. Modern dance develops strength, flexibility, and body awareness while encouraging personal interpretation and creativity. Our classes incorporate various modern techniques and philosophies, giving students a comprehensive understanding of this influential dance form. Perfect for dancers seeking artistic expression and technical challenge.'
  },
  'mommy-and-me': {
    name: 'Mommy & Me',
    description: 'Parent and child bonding through dance',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825968/Mommy_ncdf6m.webp',
    bannerImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80',
    position: 'center center',
    longDescription: 'Mommy & Me classes provide a special opportunity for parents and young children to bond through movement and music. These classes introduce toddlers to basic dance concepts, rhythm, and coordination in a supportive, playful environment. Parents actively participate, helping their children explore movement while creating lasting memories together. Activities include singing, dancing, using props, and creative play that develops motor skills and social interaction. This class is perfect for introducing very young children to dance while strengthening the parent-child connection through shared creative experiences.'
  },
  'musical-theater': {
    name: 'Musical Theater',
    description: 'Broadway-style dance and performance',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825360/Musical_Theater_om16de.png',
    bannerImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1600&q=80',
    position: 'center center',
    longDescription: 'Musical Theater dance combines jazz technique with theatrical performance, acting, and storytelling. Students learn Broadway-style choreography while developing character work, facial expressions, and stage presence. This class prepares dancers for musical theater productions, teaching them how to embody characters through movement and expression. We work on classic and contemporary musical theater styles, learning choreography from famous shows while developing the performance skills needed for the stage. Perfect for students who love to perform and want to combine their passion for dance with theatrical storytelling.'
  },
  'tap': {
    name: 'Tap',
    description: 'Rhythmic tap dance technique',
    image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1762825362/Tap_dnxfal.jpg',
    bannerImage: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1768172252/photo-1601556655238-3e490ffcee28_jyl7ug.avif',
    position: 'center center',
    bannerPosition: 'center 90%',
    longDescription: 'Tap dance is a unique percussive dance form where dancers create rhythm and music with their feet. Students learn fundamental tap techniques including shuffles, flaps, cramp rolls, and time steps while developing musicality and rhythm. Tap dance improves coordination, timing, and listening skills as dancers become musicians with their feet. Our classes progress from basic steps to complex rhythmic patterns and combinations. Tap is perfect for students who love rhythm and music, offering a fun and challenging way to develop both dance skills and musical understanding.'
  }
};

const DanceDetail: React.FC = () => {
  const { danceId } = useParams<{ danceId: string }>();
  
  // Redirect barre-fitness to adult featured page
  React.useEffect(() => {
    if (danceId === 'barre-fitness') {
      window.location.href = '/classes/featured/adult';
    }
  }, [danceId]);
  
  const dance = danceId ? danceData[danceId] : null;

  if (!dance) {
    return <div>Dance not found</div>;
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

    const testimonialsTrack = document.getElementById('testimonials-track-dance-detail');
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

      const prevBtn = document.getElementById('testimonial-prev-dance-detail');
      const nextBtn = document.getElementById('testimonial-next-dance-detail');

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
            backgroundImage: `url(${dance.bannerImage})`,
            backgroundPosition: (dance as any).bannerPosition || 'center center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 md:pt-8 lg:pt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            {dance.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            {dance.description}
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
          {/* Side-by-Side Layout - Image Left, Text Right on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            {/* Dance Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={dance.image}
                alt={dance.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: dance.position }}
              />
            </div>
            
            {/* Description Card */}
            <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-3xl shadow-lg">
              <div className="p-4 sm:p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <div className="mb-4 text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3" style={{ fontFamily: '"Rock Salt", cursive', fontWeight: 400 }}>
                    {dance.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
                    <div className="w-2 h-2 bg-histown-accent rounded-full"></div>
                    <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-histown-primary to-transparent rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {dance.longDescription}
                </p>
                
                {/* Buttons - Full width on mobile, side by side on desktop */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/classes/dance"
                    className="flex-1 text-center bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                  >
                    Dance Classes
                  </Link>
                  <Link 
                    to="/contact"
                    className="flex-1 text-center bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wide hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
            <div className="flex items-center justify-center space-x-2 mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
              <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '200ms' }}>
            <p className="text-base sm:text-lg text-white max-w-4xl mx-auto leading-relaxed blue-section-text px-4">
              We provide dance instruction in a Christ-centered environment that nurtures each dancer's God-given gifts for ministry, outreach, and entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-2 rounded-2xl shadow-lg">
                <div className="text-center p-6 sm:p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 60%, #dbeafe 85%, #e0f2fe 100%)' }}>
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
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-2 rounded-2xl shadow-lg">
                <div className="text-center p-6 sm:p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 60%, #dbeafe 85%, #e0f2fe 100%)' }}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase mb-3 sm:mb-4 text-histown-text">HIS GLORY</h3>
                  <p className="text-sm sm:text-base text-histown-text-muted leading-relaxed">
                    We dance not for the applause of people, but to reflect God's glory, honoring Him with excellence and joy.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '800ms' }}>
              <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-2 rounded-2xl shadow-lg">
                <div className="text-center p-6 sm:p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 60%, #dbeafe 85%, #e0f2fe 100%)' }}>
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
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-histown-primary rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-histown-accent rounded-full"></div>
              <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-histown-accent rounded-full"></div>
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
              id="testimonial-prev-dance-detail"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-8 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              id="testimonial-next-dance-detail"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-8 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden py-4">
              <div id="testimonials-track-dance-detail" className="flex transition-transform duration-300 ease-in-out">
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
              <div className="flex items-center justify-center space-x-2 mb-4" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' }}>
                <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
                <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white blue-section-text leading-relaxed px-4">
                Take your first step with a free trial class!
              </p>
              
              <div className="space-y-4">
                <Link to="/free-trial" className="block">
                  <button className="w-full bg-white text-histown-primary hover:bg-white/95 hover:text-histown-accent font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] text-sm sm:text-base">
                    REQUEST A TRIAL CLASS
                  </button>
                </Link>
                <Link to="/contact" className="block">
                  <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-histown-primary transition-all duration-300 transform hover:scale-105 min-h-[44px] text-sm sm:text-base">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 w-full animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 uppercase blue-section-text">
                SIGN UP FOR EMAIL UPDATES
              </h3>
              <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 leading-relaxed blue-section-text">
                If you're not ready to start yet, simply fill out this form to sign up for our email list.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2 blue-section-text">First name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2 blue-section-text">Email*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 min-h-[44px]"
                    placeholder="your@email.com"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-6 min-h-[44px]"
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

export default DanceDetail;
