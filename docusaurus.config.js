module.exports = {
  title: 'Build A Train',
  tagline: 'The easiest way to move people... on a budget!',
  url: 'https://buildatrain.now.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SISBEST',
  projectName: 'buildatrain',
  themeConfig: {
    navbar: {
      title: 'Build A Train',
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Instructions',
          position: 'left',
        },
        {
          href: 'https://github.com/SISBEST/buildatrain',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Report an issue',
              href: 'https://github.com/SISBEST/buildatrain/issues',
            },
            {
              label: 'Contact us',
              href: 'mailto:samuel@samuelsharp.com'
            },
          ],
        },
      ],
      copyright: `All instructions © ${new Date().getFullYear()} Samuel Sharp`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'start',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
