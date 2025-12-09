import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
import { NextSteps } from '../components/sections/NextSteps';
import { Footer } from '../components/layout/Footer';
import { testimonials } from '../data/testimonials';
import { whyUsValues } from '../data/whyUsValues';

const OurTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = React.useState<{ id: string; name: string; role: string; biography: string } | null>(null);

  const teamMembers = [
    { id: 'ken-teresa', name: 'Ken & Teresa', role: 'Founders & Directors', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166099/K_T.ps.jpg_ah6zzv.webp', position: 'center center', biography: 'Ken and Teresa both share a love for the arts. Helping start Histown Dance was something they felt strongly about because they have both seen firsthand how dance can be a powerful way of communicating God\'s love, healing and grace. Ken\'s background in marketing includes over thirty-five years in the Christian music industry with much of that spent in radio programming and promotions. He was also Director of National Promotions at ForeFront Records where he worked closely with their artists, artist management and radio stations across the country. Ken left the label and started other business ventures that include producing two nationally syndicated countdown shows, The Weekend 22 and The Weekend Top 20 Countdown, running an online music research company, and doing voice-over work. He\'s also a Realtor. Ken will be the first to admit he can\'t dance but that doesn\'t stop him from helping oversee a lot what goes on behind the scenes at the studio. Teresa has a background in Communication Ed/Theatre. With over twenty years involved in various aspects of dance, theatre and education, Teresa helps oversee the day to day operations of the studio, interacting with parents, students and teachers. As a mother of dancers herself, she knows the importance of making sure that the studio provides a safe, positive environment where students can thrive and grow. Teresa helps keep things at the studio running smoothly and she\'s the one you\'ll hear laughing in the reception area as she chats with parents and students. When possible, they enjoy being involved with projects outside the studio, including the opportunity to help screen and audition dancers for the Spring 2012 cast of VeggieTales Live "God Made You Special", as well as having Histown dancers perform with Point of Grace at the 2008 GMA Dove Awards, 1 Girl Nation at the 2014 GMA Dove Awards, MercyMe at the 2014 and 2015 KLOVE Fan Awards, and with Mandisa at the 2017 KLOVE Fan Awards. Ken and Teresa have three children, Eric, Elisha and Kayla.' },
    { id: 'kaitlin', name: 'Kaitlin Champlin', role: 'Dance Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166098/Kaitlin_jjjlmf.png', position: 'center center', biography: 'Kaitlin is a native of Nashville and spent her early training at Histown, where she began dancing at five years old. Kaitlin has been trained in ballet, modern, jazz, and contemporary, and she currently teaches modern, ballet, and contemporary at Histown. In 2013, Kaitlin performed the roles of Snow Queen and Sugar Plum in Children\'s Ballet Theatre\'s Nutcracker. That following year, Kaitlin attended the International Ballet Academy\'s summer intensive in Cary, NC and took workshops with Ballet Magnificat!. After high school, Kaitlin accepted a dance scholarship to Belhaven University in Jackson, MS, where she had the privilege of studying under faculty members Laura Morton of Houston Ballet and Ravenna Tucker of Birmingham Royal Ballet, as well as perform choreography by Vincent Hardy and other artists. During her time at Belhaven, Kaitlin attended the adjudicated 2016 ACDA festival and also performed for two semesters with Belhaven\'s traveling dance ministry ensemble. In recent years, Kaitlin has performed with MercyMe at the KLove Awards and in Daniella Mason\'s "Cruel Summer" music video. Although she loves the entertainment side of dance, Kaitlin is passionate about the critical role of movement in ministry. In the summer of 2017, Kaitlin traveled to Portugal with Operation Mobilization to perform on the streets, teach dance, and bring the love of Jesus to the Mediterranean. Kaitlin has performed for the inmates in the TN Women\'s Maximum Security Prison, and in 2018, Kaitlin will have the opportunity with a local ESL organization to teach a movement class to Muslim refugees in the Nashville area. Using dance as a tool to share the love of Jesus with students from every walk of life brings Kaitlin so much joy.' },
    { id: 'mattie', name: 'Mattie Foster', role: 'Dance Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166102/Mattie_woqvsj.png', position: 'center center', biography: 'Mattie has loved performing for as long as she can remember, and when she started dancing at just four years old she never looked back. At the age of six, she started training at Histown and remained at HTD until graduation from high school. She was able to learn from many incredible teachers during her 12 years at the studio both in technique and in faith which is why she feels so fortunate to have grown up at Histown. During those years, Mattie attended summer intensives at Cincinatti Ballet and Company E in Washington DC, and the EXCEL in Motion convention featuring faculty from So You Think You Can Dance where in her second year attending she made the Honor Roll. During her time at Histown, Mattie had the honor of dancing at the KLOVE Fan Awards on the Grand Ole Opry stage twice, performing with artists Mercy Me and Mandisa. She also danced with 1 Girl Nation on a nationally televised performance of the GMA Dove Awards. After graduating in 2018, Mattie started her collegiate career at Lipscomb University where she both pursued a dance minor and participated in the program\'s company, Foundation Dance Theatre. During this time, she also had the honor to dance in music videos for Josie Dunn and Ele Ivory. She pivoted the next year when she made the Vanderbilt University Dance Team. She was able to continue her education in business management at Lipscomb while training at Vanderbilt in Hip Hop, Jazz, and Pom and performing regularly at football and basketball games in front of thousands of fans. Her last performance with the team was at the SEC tournament at Bridgestone Arena in 2020. In the summer of 2020 Mattie returned to her high school "alma mater" to create a dance program for the purpose of discipleship and teaching about dance that honors God. Above all, Mattie is passionate about using dance as worship and ministry. After graduating from Lipscomb in May of 2022, Mattie was thrilled at the opportunity to return to Histown. Histown feels like home to her, and she loves getting to teach in an environment that is all about Jesus. Her desire is to be a vessel for God to show both His love and truth to students. She loves kids and finds so much joy getting to pour into them! She also believes dance is a powerful avenue to share God\'s truth with the world. She is excited to see how He continues to lead her in the mission to point to Him through every style of dance.' },
    { id: 'allison', name: 'Allison Terry', role: 'Dance Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166100/Allison_ia2xpv.png', position: 'center center', biography: 'Allison was born and raised in Nashville, TN and began her dance training at 3 years old with the Metro Parks Dance Division. While she has trained most extensively in ballet, pointe, and contemporary, she has also received training in styles including modern, jazz, tap, hip hop, and african dance. Through highschool Allison trained and performed with the Centennial Youth Ballet (CYB) under the leadership of Jennifer McNamara and Matthew Christensen. During her time there, she performed various soloist and principal roles, including Lead Marzipan, Spanish Soloist, Snow Queen, and The Sugar Plum Fairy in The Nutcracker, Shades Soloist in La Bayadere, and She in The Heart is an Organ of Fire. In addition to the classical works she performed, she had the opportunity to be cast in various original neoclassical and contemporary works. In addition to the wonderful training she received through CYB, she was privileged to train under many additional guest instructors through intensives and master classes, including training closely with members of the contemporary collective New Dialect. Alongside her formal training, Allison was surrounded by mentors that helped to foster the idea of movement as worship. After graduating from High school, Allison continued pursuing her dancing career in both performing and teaching. One of her favorite seasons was when she toured various regions of South Africa and the U.S. with Khanyisa - a multi-cultural dance and worship ministry team based in South Africa. Through her work there she was given the opportunity to combine her passions for dancing, working with kids, and sharing the love and hope found in Jesus. Allison has always had a deep love and passion for dance as a whole, but more importantly the impact dance and movement has on a spiritual level when surrendered to Jesus. Additionally, she has seen firsthand how dance is a universal language that the Lord can and does use to serve as a bridge between cultural and language barriers. Allison loves getting to teach and mentor students, hoping to inspire them to grow not only in their technique and artistry as a dancer, but also in their relationship with Jesus. It causes her great joy to see the beauty of when those elements intertwine.' },
    { id: 'tara', name: 'Tara Howse', role: 'Dance Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166102/Tara_vixjam.png', position: 'center center', biography: 'Tara is a passionate dancer, choreographer, and mentor dedicated to shaping hearts and bodies through movement rooted in faith. She earned a B.F.A. in Dance Performance and Choreography from the University of Southern Mississippi, where she trained extensively in ballet and contemporary dance, followed by an M.F.A. in Dance and Creative Practice from Saint Mary\'s College of California. After completing her undergraduate education, Tara entered the professional ballroom scene, training with world-renowned champions and even performing alongside Dancing With the Stars professionals. As she pursued her graduate studies and thereafter, she became a sought-after choreographer and teacher throughout the Bay Area, known for her ability to create impactful competition pieces and solo performances. Her students have flourished under her guidance, achieving notable success, including title awards, placements in the Top 12 at Youth America Grand Prix, and first-place finishes at California Dance Classics. Tara\'s choreography is celebrated for its technical precision and artistic depth. Additionally, her graduate thesis explored the relationship between architecture and movement, focusing on how physical spaces influence our expression, worship, and connection with God. She believes that dance is more than an art form; it is a response to the environments God places us in, fostering healing, freedom, presence, and purpose. Following a season of sabbatical, travel, and prayer, Tara and her husband felt called to Tennessee. She now serves as the Dance Director at Lipscomb Academy\'s Upper School Dance Program, where she passionately teaches, choreographs, and mentors the next generation of dancers, instilling in them both artistic excellence and a Christ-centered purpose.' },
    { id: 'kelsey', name: 'Kelsey Jackson', role: 'Dance Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166103/Kelsey_xgqjoj.png', position: 'center center', biography: 'With 14 years of experience teaching dance, Kelsey has worked with a wide range of students (toddler to adult, novice to advanced). As a professional dancer and choreographer, she brings industry expertise and understanding of performance and technique. Kelsey creates an engaging environment where dancers can grow and refine their skills in confidence. Beyond technique, she is deeply committed to mentorship, using dance to teach faith, discipline, and character to her students. With a heart to be a positive light in the lives of young people, she strives to be a guide that fosters not only strong performers but also strong individuals.' },
    { id: 'lauren', name: 'Lauren Fiedler', role: 'Piano Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166101/Lauren_pcbmbe.png', position: 'center center', biography: 'Lauren grew up in St. Louis, MO and started dancing at 3 years old. She quickly began dancing competitively, both at the studio level (local and national competitions) and on her high school dance team (UDA finals). She was trained in jazz, contemporary, musical theatre, ballet, lyrical, tap, and hip hop. Lauren also taught classes at her studio throughout high school as an assistant. She went on to attend the University of Mississippi and was a part of the Ole Miss Student dance company, an entirely student run group that put together a fall and spring show each year. Through this company, she continued weekly dance rehearsals during all four years of college, both as a dancer and as a choreographer. She loved teaching community classes and choreographing/running rehearsals for her own pieces. Lauren was actually drawn to Histown specifically because it is a Christian, faith-based studio. She has been a believer most of her life and considers her relationship with Jesus the most important thing to her. To be able to combine the love of dance, which helped grow her confidence and provide transformation relationships, along with the love of Christ, is a unique opportunity and she feels extremely blessed to be able to encourage younger dancers to grow in both areas.' },
    { id: 'elara', name: 'Elara Ford', role: 'Dance Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166098/Elara_xa2nhf.png', position: 'center center', biography: 'Elara, who is affectionately called "Miss E" discovered her passion for dance at the age of 6. At age 14, she began her formal ballet training with the Arts Immersion Academy in the beautiful state of Colorado, where she was born and raised. She continued to be sought after by her ballet teachers to further her training at the Sangre de Cristo Arts Center School of Dance, where she then joined the performing dance company. Although Miss E loves ballet, she also has a passion for hip-hop, jazz, and other forms of modern dance. She loves teaching, along with singing and making music with her family.' },
    { id: 'caitlin', name: 'Caitlin Haight', role: 'Dance Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166098/Caitlin_grjhyo.png', position: 'center center', biography: 'Caitlin Burrell is from Spring Hill, TN and has been training in dance for 17 years. Her passion for hip hop and choreography began at the young age of 8 and she has been pursuing it ever since. She trained in hip hop, ballet, contemporary, and jazz. Hip hop has always had a special place in her heart. In her teen years, Caitlin was a part of her high school dance team, in show choir, and was also a student choreographer for her musical theater production of Pippin. After graduating from high school in 2016, she began interning and teaching at a local dance studio to kickstart her career. While also teaching hip hop classes, she worked with a competitive hip hop company at that studio. During that internship, she also choreographed a musical production of Rogers and Hammersteins Cinderella at her local high school. After pursuing that path for 3 years, God led Caitlin on a different path and she began studying psychology. She will graduate in May 2023 with her undergraduate degree in psychology with the hopes of pursuing a masters in Counseling. However, she is not planning on leaving her dancing days behind her once she has her degrees! She is excited to be teaching hip hop at Histown and blessed to be able to worship God through dance alongside all of her fellow teachers and students.' },
    { id: 'ben-francisco', name: 'Ben Francisco', role: 'Acting Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763511939/Screenshot_2025-11-18_at_6.25.26_PM_pxliij.png', position: 'center center', biography: 'Ben Francisco is a Nashville-based actor and singer with experience in both live performance and on-camera work. A main cast member of Oddity Improv, he has performed at the Historic Franklin Theatre and throughout Middle Tennessee, specializing in family-friendly comedic performance. His professional credits include commercials for Lifeway, Libby\'s, and the Tennessee Department of Health, along with media projects for Sunny Side TV. Deeply rooted in his faith, Ben is passionate about using the arts to encourage confidence, teamwork, and joy while pointing students toward Christ. Through his Christian improv classes, he creates a safe and engaging environment where students can discover their creativity, build communication skills, and grow spiritually.' },
    { id: 'heather', name: 'Heather Wise', role: 'Acting Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763166100/Heather_ng7kpl.png', position: 'center 30%', biography: 'Heather Wise is a seasoned dancer, actor and singer in the professional Musical Theatre and Film industry. She has studied and performed her craft for more than 35 years, and is also a teacher and choreographer in the arts. She has studied Ballet, Pointe, Jazz, Modern, Contemporary, Tap and Hip Hop, and sings with a Soprano voice. She has trained many years under the influence of master teachers such as Gus Giordano, Gregory Hines, Deb DeRado, Melissa Swartz, Jon Rodriguez, Suzanne Walker, Mic Thompson, and Pamela Bolling…as well as concert training with various dance companies in Ohio. Her college education included two years as a Dance Major/Musical Theatre Minor at Wright State University, before landing her first professional gig. She then chose to kickstart her career as a performance artist professionally, and moved from her small town in Ohio at the age of 20. Her Dance and Musical Theatre career have consisted of many years as a performer under the Actor\'s Equity Association and S.A.G., with companies such as Walt Disney World, Mattel, and also Disney Cruise Line-where she served as Dance Captain for their first ship, The "Disney Magic". She has also been contracted to perform and travel with Hardrive Productions (Orlando, FL), Jean Ann Ryan Productions (FL), PGT Productions (FL), Universal Studios, Sea World, Paramount and others. She feels blessed to have traveled the world as a dancer/singer and model. Heather\'s heart was stolen by fellow performer and musician, David Wise, and they married and began a family at age 26. Her greatest claim to fame is the pride she holds in her beautiful family of four amazing children: Hannah (21), Taylor Grace (19), Dawson (17), and Autumn Hope (11), all who are also well-versed and passionate about music and theatre. Heather enjoys sharing her gifts with children and teens, and has a passion for using her talents for the Glory of God. She has led many dance ministries over the years, and serves in her local church. She can most recently be found as a supporting actress in the feature film, "Don\'t Say My Name", as Ballet Mistress "Professor Isabella" (IMDb), and as a Tap instructor at HisTown Dance Studio in Nashville, TN. Heather feels honored to be a part of the Histown Family, and is so grateful and humbled to be a teacher here! ALL FOR HIS GLORY! "You have turned for me my mourning into dancing…" ~Ps. 30:11' },
    { id: 'leroy', name: 'Leroy Hyter', role: 'Piano Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763082285/piano_discjk.png', position: 'center center', biography: 'Leroy Hyter, an Award-Winning songwriter, producer, musician and instructor, has traveled the world sharing his gift of music for over 40 years in the United States and overseas. At an early age and with a natural gift in the arts, he developed his skill as a pianist, saxophonist, writer and painter. Through his continual performances and teachings, he continues to evolve with the times. As a professional musician, Leroy has performed with great performers such as Phyllis Hyman, Melba Moore, Kirk Whalum, Regina Carter and served as a musical director for Freddie Jackson and Melba Moore. He had the pleasure of working on a number of television and film productions with television and film icons including Barbara Streisand and others. Leroy has received the prestigious honor of a "Gold Record" and the "Nashville Songwriters Award" for "When You Cry", recorded by The Winans. He also collaborated on songs recorded by artist such as Peabo Bryson, Al Hudson and One Way, & jazz violinist Regina Carter. In 1988 while living in New York, Leroy was reintroduced to his faith as a believer in Christ, and the call to the ministry created an immense yearning to serve in the company of other believers. After leaving New York in 1992, enrolling and graduating from the Word of Faith Bible Training Center in Detroit, he accepted a position as Minister of Music at the Faith Christian Center Church in Orlando, Florida where he served for 8 years. In 2013 "Minister Leroy Hyter" was led to move to Nashville where he served as the Minister Of Music at Faith Life Church in Bellevue, TN. It was there where he met and married the love of his life.... Diane Saez. Leroy and Diane currently serve on the worship team at Southview Church. They are founders of "Leroy And Diane Hyter Ministries", teaching "a life of worship through kingdom principals" and leading worship for conferences, church services and community events. Last year they launched "Mt. Moriah" a place of refuge. A ministry that will focus on aiding women and children surviving domestic abuse and educating communities through mentorship and training. Leroy and Diane are also gifted writers and charismatic speakers bringing an awareness of the Kingdom of God through the Love of Christ!' },
    { id: 'sophia-violin', name: 'Sophia Winter', role: 'Violin Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763082270/violin_n0i0ta.png', position: 'center 20%', biography: 'Sophia Winter is a violinist, teacher, composer, and life-long learner. She graduated from Lipscomb University with a Bachelor\'s of Music in Violin Performance and currently teaches violin and viola at Lipscomb Academy, Ezell Harding, Bach to Rock, and now Histown Dance Studio. As a violinist, Winter has varied experience in both classical and commercial contexts in orchestras, wedding trios, theatre productions, short films, and for indie/pop/folk bands in Nashville. Artists played for include Colton Dixon, Cody Fry, Kathy Triccoli, Hello Darling, and Ele Ivory. She also enjoys arranging and composing, most recently as the composer for Wishing Chair\'s 2023 puppet adaptation of "La La La" by Kate DiCamillo at the Nashville Public Library. As a teacher, Sophia loves to see the "light-bulb" moments in students and seeing students express themselves through music.' },
    { id: 'nathan-guitar', name: 'Nathan Herrera', role: 'Guitar Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763510607/Screenshot_2025-11-18_at_6.03.12_PM_wdio2a.png', position: 'center center', biography: 'Having been exposed to the arts his entire life, Nathan Herrera picked up a guitar at a young age and has been playing ever since. With a love for music theory, technique, composition and the exploration of all instrumental genres, he has studied under leading musicians, song writers and producers. He has played electric and acoustic guitar in church worship band, recorded a number of original works and accompanied various artists. Nathan enjoys cultivating a passion for the guitar by identifying the student\'s favorite artist, teaching musical foundations based on that styling and expanding from there. When not collaborating with local musicians, he most enjoys challenging himself by learning complicated techniques from artists like Ichika Nito, John Mayer, Charlie Robins, and folk artists like Noah Kahan. He is looking forward to getting to know and working with students at Histown!' },
    { id: 'ele', name: 'Ele Ivory', role: 'Vocal Instructor', image: 'https://res.cloudinary.com/dxqzby6fc/image/upload/v1763082271/voice_zperxb.png', position: 'center center', biography: 'Ele Ivory is a Nashville based poetic-pop artist who received BMI\'s John Lennon Award for her song "LaZboys". Her debut album, "Drama Club Days", released to the enthusiasm of fellow theater kids and eccentrics alike. The Nashville Scene praised"...often what makes piano-driven pop music [work] is having the skill and the willingness to lean into the dramatic aspects…Ele Ivory brings both to the table..." (Stephen Trageser). Ele\'s history as a vocalist is extensive and varied, from voice acting to live bgvs to session singing. Ele graduated from Lipscomb University in 2021 with a degree in Commercial Music under the direction of Brown Bannister, a world renown, Grammy Award winning producer. She has been teaching privately since 2021 & loves encouraging students to hone their craft & skillfully use their unique voices.' }
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
      <section className="relative h-[40vh] min-h-[350px] sm:h-[45vh] sm:min-h-[400px] flex items-start lg:items-center justify-center overflow-hidden section-divider-mobile pt-12 sm:pt-20 lg:pt-28">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-0 sm:pt-4 lg:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            OUR TEAM
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Meet the passionate instructors who inspire and guide our students
          </p>
        </div>
      </section>

      {/* Team Members Grid Section */}
      <section 
        className="py-12 sm:py-20 md:py-32 relative overflow-hidden section-divider-mobile"
        style={{
          marginTop: '-8rem',
          paddingTop: '12rem',
          marginBottom: '-8rem',
          paddingBottom: '10rem',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 20%, #dbeafe 40%, #bae6fd 60%, #7dd3fc 80%, #38bdf8 100%)'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 15% 25%, rgba(14, 116, 144, 0.25) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 55%)' }}></div>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230891b2\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-12 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col" 
                style={{ transitionDelay: `${(index % 3) * 200 + 200}ms` }}
              >
                <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: member.position }}
                  />
                </div>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-4 relative z-10 flex flex-col flex-1">
                  <div className="p-4 sm:p-6 rounded-2xl flex flex-col flex-1" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-800 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', lineHeight: '1.2', fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>
                      {member.name}
                    </h3>
                    <div className="h-1 w-full max-w-[14rem] bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3 sm:mb-4"></div>
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-6 py-3 sm:py-2 rounded-lg font-bold uppercase text-sm hover:scale-105 transform transition-all duration-300 w-full min-h-[44px]"
                    >
                      BIOGRAPHY →
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs values={whyUsValues} noSlant={true} />

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Next Steps Section */}
      <NextSteps noSlant={true} />

      {/* Footer */}
      <Footer />

      {/* Biography Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div className="bg-gradient-to-br from-histown-primary/80 to-histown-accent/80 p-1.5 rounded-3xl shadow-2xl max-w-2xl w-full">
            <div 
              className="rounded-3xl max-h-[80vh] overflow-y-auto"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 p-4 sm:p-8 rounded-t-3xl relative" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-center pr-8">
                  <h2 
                    className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4" 
                    style={{ fontWeight: 500, fontSize: 'clamp(1.5rem, 4.5vw, 3rem)', fontFamily: '"Rock Salt", cursive' }}
                  >
                    {selectedMember.name}
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
              <div className="px-4 sm:px-8 pb-4 sm:pb-6 pt-2">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {selectedMember.biography}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
