export const workTimelineData = [
  {
    title: 'Fullstack developer',
    companyName: 'Cult of Coders',
    companyUrl: 'https://www.cultofcoders.com/',
    startDate: new Date('01.09.2018'),
    endDate: new Date('01.10.2019'),
    description: `
I've worked on different outsourcing projects and companies, including a US startup.
- responsible for front-end and back-end web development
- closely worked with clients in an agile environment to establish objectives and deliver incremental software updates
- collaborate with the rest of the engineering team to design and launch new features
- setup and manage development and production servers to ensure a good workflow and stability`,
    techStack: ['React', 'SCSS', 'NodeJs', 'Typescript', 'Meteor', 'GraphQL', 'AWS'],
    companyImageUrls: {
      smallSizeParams: {
        width: 50,
        height: 48,
      },
      largeSizeParams: {
        width: 40,
        height: 38,
      },
      light: {
        small:
          'https://media.licdn.com/dms/image/C4D0BAQEwZiXuhnVbSw/company-logo_200_200/0/1545419737837?e=1696464000&v=beta&t=9j7SquPyRAtFhWAE2Vam9DQzDOSyZfZHsgDGCiyYoLw',
        large:
          'https://media.licdn.com/dms/image/C4D0BAQEwZiXuhnVbSw/company-logo_200_200/0/1545419737837?e=1696464000&v=beta&t=9j7SquPyRAtFhWAE2Vam9DQzDOSyZfZHsgDGCiyYoLw',
      },
      dark: {
        small:
          'https://media.licdn.com/dms/image/C4D0BAQEwZiXuhnVbSw/company-logo_200_200/0/1545419737837?e=1696464000&v=beta&t=9j7SquPyRAtFhWAE2Vam9DQzDOSyZfZHsgDGCiyYoLw',
        large:
          'https://media.licdn.com/dms/image/C4D0BAQEwZiXuhnVbSw/company-logo_200_200/0/1545419737837?e=1696464000&v=beta&t=9j7SquPyRAtFhWAE2Vam9DQzDOSyZfZHsgDGCiyYoLw',
      },
    },
  },
  {
    title: 'Senior Full-Stack Developer',
    companyName: 'MixDice',
    companyUrl: 'https://twitter.com/MixDiceCasino',
    description: `I've worked on a cryptocurrency-based gaming platform.
Key Responsibilities:
- led the development of the project
- responsible for front-end and back-end web development
- conducted code reviews for team members to ensure high code quality
- setup the infrastructure and ci/cd pipelines for the app
- implemented Bitcoin and Ethereum deposit/withdrawal/wallet systems for users and administrators by setting up BCoin nodes (https://bcoin.io/) and Geth nodes (https://geth.ethereum.org/)
- implemented a provably fair random generation system (https://medium.com/@alexcambose/provably-fair-system-in-javascript-6457e028d2aa)
- implemented real-time websocket-based communication for different parts of the app`,
    startDate: new Date('01.10.2019'),
    endDate: new Date('01.06.2020'),
    techStack: [
      'React',
      'Typescript',
      'Nodejs',
      'Express',
      'NextJS',
      'GraphQL',
      'WebSockets',
      'MongoDB',
      'Web3js',
      'Geth',
      'Bcoin',
      'Ngnix',
    ],
    companyImageUrls: {
      smallSizeParams: {
        width: 50,
      },
      largeSizeParams: {
        width: 100,
      },
      light: {
        small: `/logo/mixdice-small.png`,
        large: `/logo/mixdice-large.png`,
      },
      dark: {
        small: `/logo/mixdice-small.png`,
        large: `/logo/mixdice-large.png`,
      },
    },
  },
  {
    title: 'Senior Full-Stack Developer',
    companyName: 'Instantoption',
    description: `I've worked on a decentralized binary options protocol.
Key Responsibilities:
- led the frontend and backend development
- integrated the frontend with on-chain smart contracts
- developed custom charting solutions for displaying user trades
- implemented different authentication methods, both injected wallet and social login
- setup the infrastructure and CI/CD pipelines
- conducted code reviews to ensure high code standards`,
    startDate: new Date('01.11.2020'),
    endDate: new Date('01.02.2021'),
    techStack: [
      'React',
      'Typescript',
      'Redux',
      'NextJS',
      'NodeJS',
      'Apollo',
      'GraphQL',
      'MongoDB',
      'Web3js',
      'MagicLink',
    ],
    companyImageUrls: {
      smallSizeParams: {
        width: 50,
      },
      largeSizeParams: {
        width: 100,
      },
      light: {
        small: `/logo/instantoption-small.svg`,
        large: `/logo/instantoption-large.svg`,
      },
      dark: {
        small: `/logo/instantoption-small.svg`,
        large: `/logo/instantoption-large.svg`,
      },
    },
  },
  {
    title: 'Senior Full-Stack Engineer',
    companyName: 'Rolla',
    companyUrl: 'https://rolla.fi',
    startDate: new Date('01.09.2021'),
    endDate: new Date('01.09.2023'),
    description: `I've worked on different projects over time, DeFi crypto options exchange, DeFi option-based yield generation app, ERC 4337 based DeFi price prediction app using spreads and digital options.
Key Responsibilities:
- lead frontend developer
- worked on diverse roles, frontend, backend, and mobile
- developed custom packages to share functionality across apps and platforms, such as state-management, authentication, smart contract interactions and more
- developed custom backend core packages to abstract and reuse functionality across services
- integrated different authentication methods, injected wallet, Walletconnect V2, private key, for both web and mobile platforms
- implemented an option-based RFQ system to connect different entities with our product, achieved performant quoting via Redis, Kafka, and Websockets
- integrated bridge aggregators to be able to bridge assets to our chain
- developed custom charting solutions to display complex data such as option payouts and users trades
- conducted code reviews to ensure high code quality
- worked closely with the CEO to prioritize features and improvements
- conducted interviews for new candidates
- provided mentorship and guidance to developers`,
    techStack: [
      'React',
      'Typescript',
      'NextJS',
      'NodeJS',
      'NestJS',
      'React Native',
      'Redis',
      'Kafka',
      'PostgreSQL',
      'Ethers',
    ],
    companyImageUrls: {
      smallSizeParams: {
        width: 50,
      },
      largeSizeParams: {
        width: 80,
      },
      light: {
        small: `/logo/rolla-small-light.svg`,
        large: `/logo/rolla-large-light.svg`,
      },
      dark: {
        small: `/logo/rolla-small-light.svg`,
        large: `/logo/rolla-large-dark.svg`,
      },
    },
  },
];
