import type { HomeContent } from '../types/content';

// TODO: Future CMS Integration
// This content structure is designed to be easily migrated to a headless CMS
// Consider Strapi, Contentful, or Sanity for dynamic content management

export const homeContent: HomeContent = {
  navigation: {
    logo: { 
      src: 'https://res.cloudinary.com/dxqzby6fc/image/upload/w_600,c_scale,f_auto,q_auto/v1761696441/XZQYSS5_b2vxfr.png', 
      alt: 'HisTown Dance Studio' 
    },
    menuItems: [
      { label: 'Home', href: '/' },
      { 
        label: 'Classes', 
        href: '/programs',
        hasDropdown: true,
        megaMenu: {
          columns: [
            {
              title: 'DANCE',
              items: [
                { label: 'Acro', href: '/classes/dance/acro' },
                { label: 'Ballet', href: '/classes/dance/ballet' },
                { label: 'Barre Fitness', href: '/classes/dance/barre-fitness' },
                { label: 'Contemporary', href: '/classes/dance/contemporary' },
                { label: 'Creative Movement', href: '/classes/dance/creative-movement' },
                { label: 'Foundations', href: '/classes/dance/foundations' },
                { label: 'Hip-Hop', href: '/classes/dance/hip-hop' },
                { label: 'Jazz', href: '/classes/dance/jazz' },
                { label: 'Modern', href: '/classes/dance/modern' },
                { label: 'Mommy & Me', href: '/classes/dance/mommy-and-me' },
                { label: 'Musical Theater', href: '/classes/dance/musical-theater' },
                { label: 'Tap', href: '/classes/dance/tap' },
                { label: 'View All', href: '/classes/dance' }
              ]
            },
            {
              title: 'MUSIC & FEATURED',
              sections: [
                {
                  subtitle: 'MUSIC',
                  items: [
                    { label: 'Piano Lessons', href: '/classes/music/piano' },
                    { label: 'Guitar Lessons', href: '/classes/music/guitar' },
                    { label: 'Violin Lessons', href: '/classes/music/violin' },
                    { label: 'Vocal Lessons', href: '/classes/music/vocal' }
                  ]
                },
                {
                  subtitle: 'FEATURED',
                  items: [
                    { label: 'Acting Classes', href: '/classes/featured/acting' },
                    { label: 'Adult Classes', href: '/classes/featured/adult' },
                    { label: 'Company Classes', href: '/classes/featured/company' },
                    { label: 'Competition Teams', href: '/classes/featured/competition' }
                  ]
                }
              ]
            }
          ]
        }
      },
      { 
        label: 'About', 
        href: '/about',
        hasDropdown: true,
        dropdownItems: [
          { label: 'Our Team', href: '/about/team' },
          { label: 'Our Story', href: '/about/story' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'K-LOVE Awards', href: '/past-events' }
        ]
      },
      { 
        label: 'More', 
        href: '/more',
        hasDropdown: true,
        dropdownItems: [
          { label: 'Dress Code', href: '/dress-code' },
          { label: 'Studio Rental', href: '/studio-rental' },
          { label: 'Tuition & Fees', href: '/tuition-fees' },
          { label: 'Class Schedule', href: 'https://app.thestudiodirector.com/histown/portal.sd?page=Enroll&meth=search&SEASON=Fall+2017+-+Spring+2018' }
        ]
      },
      { label: 'Store', href: '/store' }
    ],
    externalLogin: { 
      label: 'LOGIN', 
      url: 'https://app.thestudiodirector.com/histown/portal.sd?page=Login' 
    },
    freeTrialHref: '/free-trial',
    socialLinks: [
      { platform: 'instagram', url: 'https://www.instagram.com/histowndancestudio/' },
      { platform: 'facebook', url: 'https://www.facebook.com/HistownDanceStudio/' }
    ]
  },

  hero: {
    headline: '<span class="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">WHERE</span> <span class="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-histown-primary via-histown-accent to-histown-primary bg-clip-text tracking-wider drop-shadow-lg">FAITH</span><br/><span class="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">MEETS</span> <span class="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-histown-accent via-histown-primary to-histown-accent bg-clip-text tracking-wider drop-shadow-lg">MOVEMENT</span>',
    subheadline: 'Inspiring <span class="text-histown-primary font-semibold">creativity</span> and building <span class="text-histown-accent font-semibold">community</span> through <span class="text-histown-primary font-semibold">Christian-centered</span> dance and music programs for all ages.',
    backgroundImage: '/assets/hero-dance-class.jpg',
    primaryCta: { 
      label: 'Start Free Trial', 
      href: '/free-trial' 
    },
    secondaryCta: { 
      label: 'View Programs', 
      href: '/programs' 
    }
  },

  programQuickLinks: [
    { 
      id: 'dance', 
      title: 'Dance Lessons', 
      href: '/programs/dance',
      icon: 'dance'
    },
    { 
      id: 'music', 
      title: 'Music Lessons', 
      href: '/programs/music',
      icon: 'music'
    },
    { 
      id: 'adult', 
      title: 'Adult Dance Classes', 
      href: '/programs/adult',
      icon: 'adult-dance'
    },
    { 
      id: 'acting', 
      title: 'Acting Classes', 
      href: '/programs/acting',
      icon: 'acting'
    },
    { 
      id: 'competition', 
      title: 'Competition Program', 
      href: '/programs/competition',
      icon: 'competition'
    }
  ],

  reviews: [
    {
      quote: 'HisTown has been such a blessing to our family. The instructors truly care about each child and create an environment where faith and creativity flourish together.',
      author: 'Sarah Johnson',
      role: 'Parent, Brentwood'
    },
    {
      quote: 'I love how we get to worship God through dance here. The teachers help us grow not just as dancers, but as people of faith.',
      author: 'Emma Martinez',
      role: 'Student, Age 14'
    },
    {
      quote: 'The community at HisTown is incredible. Our daughter has made lifelong friendships while developing her passion for dance in a Christ-centered environment.',
      author: 'Michael Chen',
      role: 'Parent, Franklin'
    }
  ],

  whyUs: [
    {
      title: 'Faith-Centered',
      description: 'Every class begins with prayer and incorporates Christian values, creating a Christ-honoring environment where students can grow spiritually.',
      icon: 'cross'
    },
    {
      title: 'Community',
      description: 'Families grow together through the arts, building lasting friendships and supporting one another in faith and creativity.',
      icon: 'community'
    },
    {
      title: 'Expert Instructors',
      description: 'Our experienced, caring teachers are not just skilled artists but also mentors who invest in each student\'s personal and spiritual growth.',
      icon: 'instructor'
    },
    {
      title: 'Excellence',
      description: 'We pursue excellence in technique, creativity, and character development, helping students reach their full potential in all areas.',
      icon: 'excellence'
    },
    {
      title: 'Safe Environment',
      description: 'Age-appropriate music, choreography, and attire ensure a safe, wholesome environment where families can trust their children are in good hands.',
      icon: 'safety'
    }
  ],

  team: [
    {
      name: 'Sarah Williams',
      role: 'Artistic Director & Founder',
      photo: '/assets/team/sarah-williams.jpg',
      bio: 'Sarah founded HisTown with a vision to combine her love for dance with her faith. With over 15 years of teaching experience, she leads our studio with passion and purpose.'
    },
    {
      name: 'David Thompson',
      role: 'Music Director',
      photo: '/assets/team/david-thompson.jpg',
      bio: 'David brings 20 years of musical experience to HisTown, specializing in piano, voice, and worship leading. He loves helping students discover their musical gifts.'
    },
    {
      name: 'Rachel Martinez',
      role: 'Dance Instructor',
      photo: '/assets/team/rachel-martinez.jpg',
      bio: 'Rachel teaches contemporary and ballet with a heart for mentoring young dancers. She believes dance is a beautiful way to express worship and creativity.'
    },
    {
      name: 'Joshua Kim',
      role: 'Hip Hop & Competition Coach',
      photo: '/assets/team/joshua-kim.jpg',
      bio: 'Joshua leads our competition teams and hip hop classes, bringing high energy and technical excellence while maintaining our faith-centered approach.'
    }
  ],

  freeTrial: {
    heading: 'Experience HisTown',
    subheading: 'Come see what makes our studio special. Try any class free and discover where faith meets movement.',
    cta: { 
      label: 'Start Your Free Trial', 
      href: '/free-trial' 
    }
  },

  social: [
    { 
      platform: 'instagram', 
      url: 'https://instagram.com/histowndance' 
    },
    { 
      platform: 'facebook', 
      url: 'https://facebook.com/histowndance' 
    },
    { 
      platform: 'youtube', 
      url: 'https://youtube.com/@histowndance' 
    }
  ],

  contact: {
    address: '123 Studio Way, Brentwood, TN 37027',
    phone: '(615) 555-0123',
    email: 'hello@histown.com',
    mapEmbedUrl: 'https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3221.1234567890!2d-86.7816!3d36.0331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYwMScwMC4wIk4gODYwNDYnNTcuNiJX!5e0!3m2!1sen!2sus!4v1234567890123'
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} HisTown Dance Studio. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Class Policies', href: '/policies' }
    ]
  }
} as const;

export default homeContent;