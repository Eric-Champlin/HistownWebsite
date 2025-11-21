import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import { homeContent } from '../content/home';

const OurTeam: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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

    const testimonialsTrack = document.getElementById('testimonials-track-team');
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

      const prevBtn = document.getElementById('testimonial-prev-team');
      const nextBtn = document.getElementById('testimonial-next-team');

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
            backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80)',
            filter: 'brightness(0.7)'
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-2 text-white" style={{ fontWeight: 900, textShadow: '0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
            OUR TEAM
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-40 bg-gradient-to-r from-white via-white/80 to-white rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Meet the passionate instructors who inspire and guide our students
          </p>
        </div>
      </section>

      {/* Team Members Grid Section */}
      <section 
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)',
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
        <div className="relative max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className="group rounded-3xl overflow-visible animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out flex flex-col" 
                style={{ transitionDelay: `${(index % 3) * 200 + 200}ms` }}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: member.position }}
                  />
                </div>
                <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-3xl shadow-lg -mt-8 mx-4 relative z-10 flex flex-col flex-1">
                  <div className="p-6 rounded-2xl flex flex-col flex-1" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                    <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', lineHeight: '1.2', fontFamily: '"Rock Salt", cursive', fontWeight: 500 }}>
                      {member.name}
                    </h3>
                    <div className="h-1 w-56 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-4"></div>
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-6 py-2 rounded-lg font-bold uppercase text-sm hover:scale-105 transform transition-all duration-300 w-full"
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
      <section 
        className="relative py-16 md:py-24 overflow-hidden" 
        style={{ 
          clipPath: 'polygon(0 0%, 100% 4%, 100% 100%, 0% 96%)', 
          marginTop: '-8rem', 
          paddingTop: '10rem', 
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
              We provide arts education in a Christ-centered environment that nurtures each student's God-given gifts for ministry, outreach, and entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '400ms' }}>
              <div className="bg-gradient-to-br from-histown-primary/40 to-histown-accent/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 60%, #dbeafe 85%, #e0f2fe 100%)' }}>
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
              <div className="bg-gradient-to-br from-histown-accent/40 to-histown-secondary/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 60%, #dbeafe 85%, #e0f2fe 100%)' }}>
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
              <div className="bg-gradient-to-br from-histown-secondary/40 to-histown-primary/40 p-1.5 rounded-2xl shadow-lg">
                <div className="text-center p-8 rounded-xl h-full" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #e0f2fe 60%, #dbeafe 85%, #e0f2fe 100%)' }}>
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
              id="testimonial-prev-team"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              id="testimonial-next-team"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-histown-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden py-4">
              <div id="testimonials-track-team" className="flex transition-transform duration-300 ease-in-out">
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
                Join the HisTown family today!
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

            <div className="bg-white/10 blue-section-card backdrop-blur-sm rounded-3xl p-8 border border-white/20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-3xl font-bold text-white mb-4 uppercase blue-section-text">
                SIGN UP FOR EMAIL UPDATES
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed blue-section-text">
                Stay connected with HisTown news, events, and updates.
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
        </div>
      </footer>

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
              <div className="sticky top-0 p-8 rounded-t-3xl relative" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fafcfe 30%, #f5fafd 60%, #f0f9ff 85%, #fafcfe 100%)' }}>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-center">
                  <h2 
                    className="text-4xl md:text-5xl font-black text-gray-900 mb-4" 
                    style={{ fontWeight: 500, fontSize: 'clamp(2.25rem, 4.5vw, 3rem)', fontFamily: '"Rock Salt", cursive' }}
                  >
                    {selectedMember.name}
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent to-cyan-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-48 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full"></div>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-6 pt-2">
                <p className="text-lg text-gray-700 leading-relaxed">
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
