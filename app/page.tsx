import { Tabs } from '@/components/baseComponents/tabs/Tabs';
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
    title: 'Fullstack developer',
    companyName: 'Freelance',
    subtitle: 'Software Engineer',
    startDate: new Date('01.10.2019'),
    description: 'aaa',
    techStack: ['bbb'],
    companyImageUrl:
      'https://media.licdn.com/dms/image/C4D0BAQHMiG1_pHlEzg/company-logo_200_200/0/1519882430739?e=1696464000&v=beta&t=tPnBsbem2Zrdv2ATWTHsRrD-6zk7zGBJq_q8KJBcCB8',
    subItems: [
      {
        companyName: 'MixDice',
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
        companyName: 'Instantoption',
        description: '',
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
        companyName: 'Rolla',
        startDate: new Date('01.09.2021'),
        description: `
My work includes helping to define feature specifications, development, code reviews and releasing
- lead react native developer
- conducted code reviews and offered feedback
-
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
        aa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi libero eum suscipit cum
        non minus itaque sapiente, sequi consequuntur et quasi temporibus enim obcaecati illo
        recusandae. Numquam libero dolorem fugit? aa Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Animi libero eum suscipit cum non minus itaque sapiente, sequi
        consequuntur et quasi temporibus enim obcaecati illo recusandae. Numquam libero dolorem aa
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi libero eum suscipit cum non
        minus itaque sapiente, sequi consequuntur et quasi temporibus enim obcaecati illo aa Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Animi libero eum suscipit cum non minus
        itaque sapiente, sequi consequuntur et quasi temporibus enim obcaecati illo recusandae. aa
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi libero eum suscipit cum non
        minus itaque sapiente, sequi consequuntur et quasi temporibus enim obcaecati illo
        recusandae. Numquam libero dolorem fugit? Numquam libero dolorem fugit? recusandae. Numquam
        aa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi libero eum suscipit cum
        non minus itaque sapiente, sequi consequuntur et quasi temporibus enim obcaecati illo
        recusandae. Numquam libero dolorem fugit? libero dolorem fugit? fugit?
      </SectionContainer>
      <SectionContainer id="work" title="Work">
        <WorkTimeline data={workTimelineData} />
      </SectionContainer>
      {/* <SectionContainer id="services" title="Services I am providing">
        <Tabs
          data={[
            {
              title: 'Frontend development',
              content:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae! Eum sit aliquid labore aut.',
            },
            {
              title: 'Backend development',
              content:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae! Eum sit aliquid labore aut.',
            },
            {
              title: 'Frontend development',
              content:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae! Eum sit aliquid labore aut.',
            },
          ]}
        />
        <h2 className="m-8 text-2xl">Frontend development</h2>
        <h2 className="m-8 text-2xl">Backend development</h2>
        <h2 className="m-8 text-2xl">Web3 development</h2>
      </SectionContainer> */}
      <SectionContainer id="projects" title="Projects">
        <Projects />
      </SectionContainer>
    </>
  );
};

export default Home;
