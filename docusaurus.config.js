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
      id: 'support_us',
      content:
          'Multiplayer coming soon! Join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/doodlelabs">Discord</a> to stay up to date',
      backgroundColor: '#000000',
      textColor: '#005CF3',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
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
          href: 'https://opensea.io/collection/neogen-space-monkeys-by-dalek-x-generative-artwork',
          label: 'Get a Space Monkey',
          position: 'right',
        },

      ],
      logo: {
        alt: ' ',
        src: 'main/logo.png',
      },
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
          editUrl:
            'https://github.com/AnthonE/docusaurus-forestry-starter/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AnthonE/docusaurus-forestry-starter/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
