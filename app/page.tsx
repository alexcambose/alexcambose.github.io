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
    subtitle: 'Senior Software Engineer',
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
    companyImageUrl:
      'https://media.licdn.com/dms/image/C4D0BAQEwZiXuhnVbSw/company-logo_200_200/0/1545419737837?e=1696464000&v=beta&t=9j7SquPyRAtFhWAE2Vam9DQzDOSyZfZHsgDGCiyYoLw',
  },
  {
    title: 'Senior Full-Stack Developer',
    companyName: 'MixDice',
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
      'SCSS',
      'Typescript',
      'Nodejs',
      'GraphQL',
      'WS',
      'MongoDB',
      'Web3js',
      'Geth',
      'Bcoin',
    ],
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
  },

  {
    title: 'Senior Full-Stack Engineer',
    companyName: 'Rolla',
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
  },
];

const Home = () => {
  return (
    <>
      <SectionContainer id="about" title="About Me">
        Hi, I'm [Your Name], a passionate and experienced software engineer specializing in building
        innovative solutions for complex problems. With a strong foundation in software development
        and a knack for problem-solving, I strive to create efficient and user-friendly applications
        that make a positive impact.
      </SectionContainer>
      <SectionContainer id="skills" title="Skills">
        With over 6 years of hands-on experience in software engineering, I've taken on diverse
        roles ranging from frontend developer, backend developer, mentor, and architect. I have a
        relentless drive to address intricate challenges in sectors like finance, web3, and
        blockchain. Think of me as a Swiss Army Knife in the digital realm. ⭐ What I've Achieved: -
        Successfully developed, launched, and maintained, numerous projects from scratch, overseeing
        both back-end and front-end areas. - Expertise in front-end development including
        TypeScript/JavaScript, React, Next.js, Redux, and more. My eye for UI/UX design ensures
        optimal user experiences. - Backend-wise, I’ve delved deep from Node.js to advanced
        frameworks like Nest.js, enhancing application speed, performance, and reliability. ⭐ More
        Than Just Code: Beyond coding, I've been responsible for crucial project areas such as
        planning, deployment, and even team recruitment interviews and mentorship. I’ve often
        stepped into roles wherever needed, ensuring projects don't just launch but thrive. ⭐ Tech
        Stack: - Frontend: HTML, CSS, JavaScript, React, Next.js, Redux, Webpack, SCSS, Styled
        Components, Tailwind CSS, and more. - Backend: Node.js, NestJS, Express, PostgreSQL, AWS,
        Redis, Kafka, GraphQL, and more. - Blockchain: Web3, Ethers, Solidity, Truffle, Web3.js,
        Geth. - Mobile: React Native, Redux, React Navigation, Expo. ⭐ Personal Touch I am
        perpetually pushing boundaries and stepping out of my comfort zone. A fervent believer that
        success is a collective effort, I cherish being part of a team. I’m always eager to learn,
        adapt, and stay updated with the latest in tech and finance.
      </SectionContainer>
      <SectionContainer id="work" title="Work">
        <WorkTimeline data={workTimelineData} />
      </SectionContainer>

      <SectionContainer id="projects" title="Projects">
        <Projects />
      </SectionContainer>
      <SectionContainer id="writing" title="Writing">
        <Blog />
      </SectionContainer>
      <SectionContainer id="contact" title="Contact">
        <Contact />
      </SectionContainer>
    </>
  );
};

export default Home;
