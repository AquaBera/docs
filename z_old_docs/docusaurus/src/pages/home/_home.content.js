import React from 'react';

export default {
  page: {
    title: 'AquaBera’s documentation',
    description: "Automate and optimize participation in Berachain's Proof-of-Liquidity.",
  },
  carousel: [
      {
        backgroundImgSrc: require('@site/static/img/assets/home/Validators.jpg').default,
        variant: 'validators',
        title: 'Validators',
        description: (
          <>
            {'Maximize Delegation with Focused Strategies.'}
          </>
        ),
        button: {
          label: 'Learn More',
          decorative: '📊',
          to: '/user-docs/pol-validators',
        },
      },
      {
        backgroundImgSrc: require('@site/static/img/assets/home/Asset_owners.jpg').default,
        variant: 'cloud',
        title: '$GBT & LP Token Holders',
        description: (
          <>
            {'Asset Preservation & Growth.'}
          </>
        ),
        button: {
          label: 'Learn More',
          decorative: '💰',
          to: '/user-docs/pol-bgt-holders-farmers',
        },
      },
  ],
  categories: [
    {
      cardLink: '/user-docs/intro',
      cardTitle: '📘 User Guide',
      cardDescription: 'Get the most out of AquaBera with our user guide',
      cardImgSrc: require('@site/static/img/assets/home/preview--user-guides.jpg').default,
      linksIconColor: 'blue',
      links: [
        {
          label: 'ℹ️ Introduction to AquaBera',
          to: 'user-docs/intro',
        },
        {
          label: '🔗 Understanding BeraChain’s Proof-of-Liquidity (PoL)',
          to: '/user-docs/intro-pol',
        },
        {
          label: '🌊 Liquidity Management on Kodiak via AquaBera',
          to: '/user-docs/intro-kodiak',
        },
        {
          label: '🗳️ Gauges and Voting Mechanisms',
          to: '/user-docs/gauges-overview',
        },
        {
          label: '🎁 Incentives and Rewards',
          to: '/user-docs/incentives-overview',
        },
      ],
    },
    {
      cardLink: '/community/intro',
      cardTitle: '👥 Community',
      cardDescription: 'Join and engage with the AquaBera community.',
      cardImgSrc: require('@site/static/img/assets/home/preview--community.jpg').default,
      linksIconColor: 'purple',
      links: [
        {
          label: '💰 Tokenomics',
          to: '/community/tokenomics',
        },
        {
          label: '📱 Socials',
          to: '/community/socials',
        },
        {
          label: '💬 Forum',
          to: '/community/forum',
        },
      ],
    },
    {
      cardLink: '/dev-docs/intro',
      cardTitle: '💻 Developer Documentation',
      cardDescription: 'All you need to get your project up-and-running, and become an AquaBera expert',
      cardImgSrc: require('@site/static/img/assets/home/preview--dev-docs.jpg').default,
      linksIconColor: 'green',
      links: [
        {
          label: '📜 Deployed Contracts',
          to: '/dev-docs/deployed-contracts',
        },
        {
          label: '🔍 Audits',
          to: '/dev-docs/audits',
        },
        {
          label: '🔧 GitHub',
          to: 'https://github.com/labs-solo/aberabook',
        },
      ],
    },
  ],

  /** Help us to improve the documentation */
  huitd: {
    label: 'Help us improve the documentation',
    href: 'https://github.com/labs-solo/aberabook',
  },
};
