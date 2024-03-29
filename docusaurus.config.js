﻿module.exports = {
  onBrokenLinks: 'ignore',
  title: 'Neogen Space Monkey Metaverse',
  tagline: 'Chaotic P2E Adventure',
  url: 'https://spacemonkey.games',

  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Doodlelabs', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'leaderboard',
     content:
          'Leaderboard Contest! Join the <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/doodlelabs">Discord</a> for all details',
      backgroundColor: '#18191A',
      textColor: '#1F75FF',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: ' ',
      logo: {
        alt: ' ',
        src: 'main/logo.png',
      },
      items: [
        {
          href: 'https://play.spacemonkey.games',
          label: 'Single Player',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Whitepaper',
          position: 'right',
        },
        {
          to: 'docs/starting-the-game',
          activeBasePath: 'docs',
          label: 'How to play',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://opensea.io/collection/neogen-space-monkeys-by-dalek-x-generative-artwork',
          label: 'Get a Space Monkey',
          position: 'right',
        },
        {
          href: 'https://doodlelabs.io/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'Doodle Labs',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Single Player',
              to: 'docs/starting-the-game',
            },
            {
              label: 'Multiplayer',
              to: 'docs/',
            },
            {
              label: 'Discord Bot',
              to: 'docs/ngsm-discord-bot',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Doodle Labs',
              href: 'https://doodlelabs.io/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/doodlelabs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/doodlelabs_io',
            },
          ],
        },
        {
          title: 'Artist',
          items: [
            {
              label: 'DALEK',
              href: 'https://shopdalek.com/',
            },
            {
              label: 'Generative Artworks',
              href: 'https://generativeart.works/',
            },
          ],
        },
      ],
      //copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
         // editUrl:
           // 'https://github.com/AnthonE/docusaurus-forestry-starter/edit/master/',
        },
        blog: {
          showReadingTime: true,
        //  blogSidebarCount: '5',


          // Please change this to your repo.
         // editUrl:
         //   'https://github.com/AnthonE/docusaurus-forestry-starter/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
