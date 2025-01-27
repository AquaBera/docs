// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AquaBera Documentation',
  tagline: 'Automate and optimize your crypto liquidity provision with AquaBera.',
  url: 'https://labs-solo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn', // replace with 'throw' to stop building if broken links
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://aquabera.com/assets/favicon-32x32.png',
  customFields: {
    prefabApiKey: process.env.REACT_APP_PREFAB_FRONTEND_PRODUCTION_API_KEY || "398-Development-P435-E907-FRONTEND-b3f733ec-b1b7-464f-8b6f-9cf91d23a434",
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

  scripts: [
    {
      src: '/js/hotjar.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/particle.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/firework.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/ball.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/bar.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/game.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/particleProfiles.js',
      type: 'module',
      async: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/labs-solo/aberabook/edit/main/docusaurus',
          admonitions: {
            tag: ':::',
            keywords: [
              // Admonitions defaults
              'note',
              'tip',
              'info',
              'caution',
              'danger',

              // Admonitions custom
              'callout',
              'prerequisites',
              'aquabera',
              'warning',
            ],
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/__index.scss'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'docs/dev-docs/api/openapi.yaml',
            route: '/openapi/'
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#4945FF',
        },
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    announcementBar: {
      id: 'aquabera-launch',
      content:
        "🚀 AquaBera is launching on Bartio Testnet Soon! Be ready to automate your liquidity.",
      backgroundColor: '#e0f7fa',  // A soft blue background for better visibility
      textColor: '#005662',  // Darker text for contrast
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: true,  // Allow users to hide the sidebar
        autoCollapseCategories: true,  // Auto-collapse categories for a cleaner look
      },
    },
    algolia: {
      appId: '392RJ63O14',
      apiKey: 'ed62374a794e8da5accb298e13618614',
      indexName: 'aquaberaDocsNext',
      contextualSearch: true,  // Enable contextual search to improve relevance
    },
    navbar: {
      hideOnScroll: true,  // Hides the navbar when scrolling down
      logo: {
        alt: 'AquaBera Documentation',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'user-docs/intro',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'doc',
          docId: 'dev-docs/intro',
          position: 'left',
          label: 'Developer Docs',
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Tokenomics',
              to: '/community/tokenomics',
            },
            {
              label: 'Socials',
              to: '/community/socials',
            },
            {
              label: 'Forum',
              to: '/community/forum',
            },
            {
              label: 'Discord',
              href: 'https://discord.aquabera.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/aquabera',
            },
          ],
        },
        {
          href: 'https://aquabera.com',
          label: 'AquaBera.com',
          position: 'right',
        },
        {
          href: 'https://github.com/labs-solo/aberabook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'AquaBera Documentation',
          items: [
            {
              label: 'User Guide',
              to: '/user-docs/intro',
            },
            {
              label: 'Developer Documentation',
              to: '/dev-docs/intro',
            },
            {
              label: 'FAQ',
              to: '/user-docs/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Tokenomics',
              to: '/community/tokenomics',
            },
            {
              label: 'Socials',
              to: '/community/socials',
            },
            {
              label: 'Forum',
              to: '/community/forum',
            },
            {
              label: 'Discord',
              href: 'https://discord.aquabera.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/aquabera',
            },
          ],
        },
        {
          title: 'Developer Resources',
          items: [
            {
              label: 'Deployed Contracts',
              to: '/dev-docs/deployed-contracts',
            },
            {
              label: 'Audits',
              to: '/dev-docs/audits',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/labs-solo/aberabook',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://aquabera.com/blog',
            },
            {
              label: 'About Us',
              to: '/about-us',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AquaBera. Built with ❤️ by the AquaBera community.`,
    },
    prism: {
      theme: lightCodeTheme,  // Use a light theme for better readability
      darkTheme: darkCodeTheme,  // Keep the dark theme option for dark mode
    },
    zoom: {
      selector: '.markdown img',  // Enables image zoom on all images within markdown
      background: {
        light: 'rgba(255, 255, 255, 0.8)',  // Light background for image zoom
        dark: 'rgba(0, 0, 0, 0.8)',  // Dark background for image zoom in dark mode
      },
      config: {
        // Any additional configuration options for image zoom
      },
    },
    hubspot: {
      accountId: 6893032,
      async: true,  // Set to true to load the HubSpot script asynchronously
      defer: true,  // Set to true to defer the HubSpot script loading
    },
  }),

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WT49VGT',
      },
    ],
    'docusaurus-plugin-hubspot',
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_DETCfjmHIm184mceL8duwutdQgOnVTZSC59xontNRWN",
        appUrl: "https://eu.i.posthog.com", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional
      },
    ],
  ],
};

module.exports = config;
