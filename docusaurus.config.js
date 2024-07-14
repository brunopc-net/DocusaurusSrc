// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

const resume = require('./static/data/resume.json');
const xpTotal = require('./src/components/experience/xp.functions').getXpTotal(resume.work);

function getSocialLink(socialNetwork){
  const profileItem = resume.basics.profiles.find(profile =>
    profile.network === socialNetwork
  );
  // @ts-ignore
  return profileItem.url
}

const links = {
  github: getSocialLink('github'),
  linkedin: getSocialLink('linkedin'),
  twitter: getSocialLink('twitter')
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bruno PC, Bruno Pettersen-Coulombe, B. Eng. Full-Stack Developer, Tech Lead, DevOps Expert, SDET, Freelancer, Entrepreneur - '+xpTotal+' years of experience',
  tagline: 'Full stack Developer, B. Eng, Racing geek',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: "https://brunopc.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  //Resolving Google Seo problem https://stackoverflow.com/questions/70002202/docusaurus-links-on-google-app-engine-give-seo-problems
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "brunopc-net", // Usually your GitHub org/user name.
  projectName: "Blog", // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en","fr"]
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogDescription: "Software Industry reflections from a critical Full Stack who value coding efficiency as paramount. Coding is about business scalability, not marketing buzz",
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarTitle: 'Last 10 posts',
          blogSidebarCount: 10
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({ /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    metadata: [
      {name: 'google-site-verification', content: '9okJ-HC3L1uzSPnJkHgcbyRAx60HFLkR5T4j1VxB2_A'}
    ],
    navbar: {
      title: 'Bruno PC',
      logo: {
        alt: 'My avatar',
        src: 'img/avatar-65x87.webp',
        width: 43,
        height: 58
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About me'
        },
        {
          to: '/blog/',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'https://brunopc-net.github.io/Horus/',
          label: 'Montreal Weather',
          position: 'left'
        },
        {
          href: links.github,
          html: `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" aria-hidden="true" viewBox="0 0 16 16">
            <title>GitHub logo icon</title>
            <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>`,
          position: 'right'
        },
        {
          href: links.linkedin,
          html: `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24">
            <title>LinkedIn logo icon</title>
            <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>`,
          position: 'right'
        },
        {
          href: links.twitter,
          html: `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24">
            <title>Twitter logo icon</title>
            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>`,
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Read about me',
          items: [
            {
              label: 'Education',
              to: '/docs/category/education'
            },
            {
              label: 'Experiences',
              to: '/docs/category/experiences'
            },
            {
              label: 'Projects',
              to: '/docs/category/projects'
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: links.github,
            },
            {
              label: 'LinkedIn',
              href: links.linkedin,
            },
            {
              label: 'Twitter',
              href: links.twitter,
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact me',
              href: '/contact',
            },
            {
              label: 'Disclaimer',
              to: '/disclaimer',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bruno Pettersen-Coulombe. Built with React-based <a href="https://docusaurus.io">Docusaurus</a>`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true
    }
  }),
  
  scripts: [
    {
      'data-host': "https://app.microanalytics.io",
      'data-dnt': "false",
      src: "https://app.microanalytics.io/js/script.js",
      id: "ZwSg9rf6GA",
      async: true
    }
  ],

  plugins: [],
};

module.exports = config
