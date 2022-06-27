module.exports = {
  onBrokenLinks: 'ignore',
  title: 'Neogen Space Monkey Metaverse',
  tagline: 'Chaotic P2E Adventure',
  url: 'https://spacemonkey.games',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Doodlelabs', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Neogen Space Monkey',
      logo: {
        alt: 'Neogen Space Monkey',
        src: 'img/icon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Whitepaper',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://opensea.io/collection/neogen-space-monkeys-by-dalek-x-generative-artwork',
          label: 'Opensea',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Play Solo',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Solo',
              to: 'docs/starting-the-game',
            },
            {
              label: 'Multiplayer',
              to: 'docs/',
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
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
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
