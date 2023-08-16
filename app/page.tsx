import { About } from '@/components/about/About';
import { Blog } from '@/components/blog/Blog';
import { Contact } from '@/components/contact/Contact';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Projects } from '@/components/projects/Projects';
import { WorkTimeline } from '@/components/workTimeline/WorkTimeline';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Home - Alexandru Cambose',
};

const workTimelineData = [
  {
    title: 'Fullstack developer',
    companyName: 'Cult of Coders',
    companyUrl: 'https://www.cultofcoders.com/',
    startDate: new Date('01.09.2018'),
    endDate: new Date('01.10.2019'),
    description: `- responsible for front-end and back-end web development
- closely worked with clients in a scrum environment to establish objectives and deliver incremental software updates
- collaborate with the rest of the engineering team to design and launch new features
- setup and manage development and production servers to ensure a good workflow and stability
Technologies:
- Javascript, React, SASS
- AWS, NodeJs, GraphQL, PostgreSQL`,
    techStack: ['React', 'SCSS', 'NodeJs', 'Typescript', 'GraphQL', 'AWS'],
    companyImageUrls: {
      smallSizeParams: {
        width: 50,
      },
      largeSizeParams: {
        width: 40,
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
    description: `Lead Developer for a cryptocurrency-based gaming platform.
Key Responsibilities:
- led the development of the project
- responsible for front-end and back-end web development
- conducted code reviews for team members to ensure high code quality
- setup the infrastructure and ci/cd pipelines for the app
- implemented Bitcoin and Ethereum deposit/withdrawal/wallet systems for users and administrators by setting up BCoin nodes (https://bcoin.io/) and Geth nodes (https://geth.ethereum.org/)
- implemented a provably fair random generation system (https://medium.com/@alexcambose/provably-fair-system-in-javascript-6457e028d2aa)
- implemented real-time websocket based communication for different parts of the app`,
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
    description: `Decentralized binary options protocol.
Key Responsibilities:
- led the frontend and backend development
- conducted code reviews to ensure high code standards
- setup the infrastructure and ci/cd pipelines
- implemented different authentication methods, both injected wallet and social login
- achieved seamless integration between frontend and on-chain smart contracts`,
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
    description: `Worked on different projects over time, DeFi crypto options exchange, DeFi option-based yield generation app, DeFi price prediction app based on spreads and digital options.
Key Responsibilities:
- worked on diverse roles, frontend, backend, and mobile
- lead backend developer
- developed custom packages to share functionality across apps and platforms
- implemented an option-based RFQ system to connect different entities with our product
- conducted code reviews to ensure high code quality
- worked closely with the CEO to prioritize features and improvements
- provided mentorship and guidance to junior developers
- conducted interviews for new candidates
`,
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

const Home = () => {
  return (
    <>
      <SectionContainer id="about" title="About Me">
        <About />
      </SectionContainer>
      <SectionContainer id="experience" title="Experience">
        <WorkTimeline data={workTimelineData} />
      </SectionContainer>
      <SectionContainer id="projects" title="Projects">
        <Projects />
      </SectionContainer>
      <SectionContainer id="writings" title="Writings">
        <Blog />
      </SectionContainer>
      <SectionContainer id="contact" title="Contact">
        <Contact />
      </SectionContainer>
    </>
  );
};

export default Home;
