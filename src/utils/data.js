import { SiGithub, SiGmail, SiLinkedin, SiIndeed, SiYoutube } from 'react-icons/si';

export const homeData = {
  title: 'Home',
  description:
    'Welcome to my Portfolio where i share my projects, write blogs aboout my opinons spanning over different technologies and ideas.',
  keywords: [
    'Homepage',
    'frontend-developer',
    'judah sullivan',
    'my featured blogs',
    'my most recent projects',
    'hero'
  ],
  hero: {
    heading: 'Judah Sullivan',
    roles: 'FullStack Engineer',
    description:
      'Passionate an Innovative developer with a design focus, pushing boundaries, solving complex challenges and  crafting beautiful an captivating user interfaces that leave a lasting impression. ',
    calltoAction:
      "Connect with me and stay updated by following my blog. Let's collaborate on creating exceptional user experiences and shaping the future of development. ✨🚀 Together, we can turn ideas into reality and make a lasting impact in the digital world! "
  },
  overview: {
    heading: 'What Makes me Different',
    description:
      'Enhancing brand presence through front-end expertise and leadership. Collaboratively shaping innovative digital experiences, setting a fresh standard.'
  }
};

export const meta = {
  siteTitle: 'Judah Sullivan',
  siteDescription:
    'Welcome to my Portfolio and Blog. Where I share my progress and knowledge as a Front-End Engineer.',
  defaultKeywords: [
    'Next.js, Tailwindcss, Portfolio, Web development, front-end development, back-end development, full-stack development,  React, JavaScript, HTML, CSS, Git, Agile, Scrum, responsive design'
  ]
};

export const settings = [
  {
    homelink: {
      title: 'coded by Judah Sullivan',
      link: '/'
    },
    pageLinks: {
      sectionName: 'Site',
      links: [
        { key: 'about', name: 'About', url: '/about' },
        // { key: "blog", name: "Blog", url: "/blog" },
        // { key: "projects", name: "Projects", url: "/projects" },
        { key: 'contact', name: 'Contact Me', url: '/contact' }
      ]
    },
    externalLinks: {
      sectionName: 'Social',
      links: [
        {
          key: 'github',
          name: 'GitHub',
          url: 'https://github.com/judahsullivan',
          icon: SiGithub
        },
        {
          key: 'indeed',
          name: 'Indeed',
          url: 'https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.149244277.296854731.1699557307-493382719.1695926166',
          icon: SiIndeed
        },
        {
          key: 'gmail',
          name: 'Gmail',
          url: 'mailto:judahsullivan.dev@gmail.com',
          icon: SiGmail
        },
        {
          key: 'linkedin',
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/judahsullivan',
          icon: SiLinkedin
        },
        {
          key: 'youtube',
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCG0Jz5Ibm4kaX_TKQ2DtxfA',
          icon: SiYoutube
        }
      ]
    }
  }
];
