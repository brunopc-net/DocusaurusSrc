// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const author = require('./src/data/resume.json').basics;

const github_logo = require('./static/img/github_icon.svg');

function getSocialLink(socialNetwork){
  const profileItem = author.profiles.find(
    profile => profile.network === socialNetwork
  );
  // @ts-ignore
  return profileItem.url
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: author.name,
  tagline: author.label,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: "https://brunopc.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

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
    locales: ["en","fr"],
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
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: author.shortname,
        logo: {
          alt: 'My avatar',
          src: 'img/avatar.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About me'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: getSocialLink('github'),
            html: `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" aria-hidden="true" viewBox="0 0 16 16">
              <title>GitHub logo icon</title>
              <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>`,
            position: 'right'
          },
          {
            href: getSocialLink('linkedin'),
            html: `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24">
              <title>LinkedIn logo icon</title>
              <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>`,
            position: 'right'
          },
          {
            href: getSocialLink('twitter'),
            html: `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24">
              <title>Twitter logo icon</title>
              <path fill="currentColor" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
                href: getSocialLink('github'),
              },
              {
                label: 'LinkedIn',
                href: getSocialLink('linkedin'),
              },
              {
                label: 'Twitter',
                href: getSocialLink('twitter'),
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Disclaimer',
                to: '/disclaimer',
              },
              {
                label: 'Send me an encrypted message',
                href: '/message',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${author.name}. Built with React-based <a href="https://docusaurus.io/">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    })
};

module.exports = config
