import { Tabs } from '@/components/baseComponents/tabs/Tabs';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { WorkTimeline } from '@/components/workTimeline/WorkTimeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Alexandru Cambose',
};

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
        <WorkTimeline
          data={[
            {
              title: 'Fullstack developer',
              companyName: 'Company 1',
              subtitle: 'Senior Software Engineer',
              startDate: new Date('2018'),
              endDate: new Date('2018'),
              description:
                'lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum',
              techStack: ['bbb'],
              companyImageUrl:
                'https://media.licdn.com/dms/image/C4D0BAQEwZiXuhnVbSw/company-logo_200_200/0/1545419737837?e=1696464000&v=beta&t=9j7SquPyRAtFhWAE2Vam9DQzDOSyZfZHsgDGCiyYoLw',
            },
            {
              title: 'Fullstack developer',
              companyName: 'Company 1',
              subtitle: 'Software Engineer',
              startDate: new Date('2018'),
              endDate: new Date('2018'),
              description: 'aaa',
              techStack: ['bbb'],
              companyImageUrl:
                'https://media.licdn.com/dms/image/C4D0BAQHMiG1_pHlEzg/company-logo_200_200/0/1519882430739?e=1696464000&v=beta&t=tPnBsbem2Zrdv2ATWTHsRrD-6zk7zGBJq_q8KJBcCB8',
            },
          ]}
        />
      </SectionContainer>
      <SectionContainer id="services" title="Services I am providing">
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
        <h2 className="text-2xl m-8">Frontend development</h2>
        <h2 className="text-2xl m-8">Backend development</h2>
        <h2 className="text-2xl m-8">Web3 development</h2>
      </SectionContainer>
      <SectionContainer id="experience" title="Experience">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore
        aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae!
        Eum sit aliquid labore aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore
        aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore
        aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae!
        Eum sit aliquid labore aut. Eum sit aliquid labore aut. quis accusamus nihil tempore aliquid
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore
        aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis accusamus nihil tempore
        aliquid vero maxime similique! Voluptas itaque earum iste deleniti quis quae repudiandae!
        Eum sit aliquid labore aut. Eum sit aliquid labore aut. vero maxime similique! Voluptas
        itaque earum iste deleniti quis quae repudiandae! Eum sit aliquid labore aut.
      </SectionContainer>
    </>
  );
};

export default Home;
