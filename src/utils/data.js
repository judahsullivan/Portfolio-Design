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
    'my most recent projects'
  ],
  hero: {
    heading: 'Judah Sullivan',
    roles: 'Full-Stack Enthusiast: Crafting Digital Experiences through Creativity',
    phrase:
      'Enhancing brand presence through front-end expertise and leadership. Collaboratively shaping innovative digital experiences, setting a fresh standard.',
    callToAction: [
      'The combination of my passion for pixel ',
      { text: 'perfect design', key: 'perfect' },
      ', ',
      { text: 'clean code', key: 'clean' },
      ' & ',
      { text: 'user interaction', key: 'interaction' },
      ' gives me the skillset to set a new height in the ',
      { text: 'web design world', key: 'web' },
      '.'
    ]
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
        { key: 'blog', name: 'Blog', url: '/blog' },
        { key: 'projects', name: 'Projects', url: '/projects' },
        { key: 'contact', name: 'Contact', url: '/contact' }
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
export const skills = [
  {
    number: '01',
    title: 'Frontend Mastery',
    description:
      'Expertise in crafting captivating handcrafted designs using various frontend frameworks (Astro, Next.js, React, Svelte, Vue) tailored to diverse client needs.'
  },
  {
    number: '02',
    title: 'Backend Proficiency',
    description:
      'Adept in Node.js, Prisma, and Firebase, capable of creating robust backend solutions to complement frontend development.'
  },
  {
    number: '03',
    title: 'CMS Expertise',
    description:
      'Proficient in utilizing headless CMS platforms (Sanity, Strapi, TinaCMS) and deploying on Netlify for seamless content management.'
  },
  {
    number: '04',
    title: 'Animation Enthusiast',
    description:
      'Passionate about implementing engaging micro animations and interactions, enhancing user experience and retention.'
  },
  {
    number: '05',
    title: 'Dedicated Work Ethic',
    description:
      'Committed to maintaining high standards, investing 100% effort into every project, irrespective of its scope.'
  },
  {
    number: '06',
    title: 'Adaptability  ',
    description:
      'Skilled at adapting to new technologies and innovating solutions to meet evolving customer demands.'
  }
];

export const skillsArray = [
  {
    name: 'React',
    description: 'Web development',
    link: 'https://reactjs.org/',
    type: 'development',
    image: '/assets/images/skills/react.png'
  },
  {
    name: 'Javascript',
    description: 'Web development',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    type: 'development',
    image: '/assets/images/skills/javascript.png'
  },
  {
    name: 'Typescript',
    description: 'Web development',
    link: 'https://www.typescriptlang.org/',
    type: 'development',
    image: '/assets/images/skills/typescript.png'
  },
  {
    name: 'Html5',
    description: 'Web layouts',
    link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    type: 'development',
    image: '/assets/images/skills/html-5.png'
  },
  {
    name: 'Css3',
    description: 'Web design',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    type: 'design',
    image: '/assets/images/skills/css3.png'
  },
  {
    name: 'Tailwindcss',
    description: 'Web design',
    link: 'https://tailwindcss.com/',
    type: 'design',
    image: '/assets/images/skills/bootstrap.png'
  },
  {
    name: 'Postgres',
    description: 'Database',
    link: 'https://www.postgresql.org/',
    type: 'database',
    image: '/assets/images/skills/postgresql.png'
  },
  {
    name: 'Mysql',
    description: 'Database',
    link: 'https://www.mysql.com/',
    type: 'database',
    image: '/assets/images/skills/mysql.png'
  },
  {
    name: 'Redis',
    description: 'Database',
    link: 'https://redis.io/',
    type: 'database',
    image: '/assets/images/skills/redis.png'
  },
  {
    name: 'Vercel',
    description: 'Devops',
    link: 'https://',
    type: 'devops',
    image: '/assets/images/skills/heroku.png'
  },
  {
    name: 'AWS',
    description: 'Devops',
    link: 'https://aws.amazon.com/',
    type: 'devops',
    image: 'assets/images/skills/aws.png'
  },
  {
    name: 'Neovim',
    description: 'Code editor of choice',
    link: 'https://neovim.com',
    type: 'development',
    image: '/assets/images/skills/vscode.png'
  },
  {
    name: 'Visual Studio Code',
    description: 'Code editor',
    link: 'https://code.visualstudio.com/',
    type: 'development',
    image: '/assets/images/skills/vscode.png'
  },
  {
    name: 'Sanity',
    description: 'Headless CMS Platform',
    link: 'https://sanity.io',
    type: 'database',
    image: '/assets/images/skills/figma.png'
  },
  {
    name: 'Figma',
    description: 'Collaborative Design',
    link: 'https://www.figma.com/',
    type: 'design',
    image: '/assets/images/skills/figma.png'
  }
];
