import Layout from '@/components/layout';
import CloseButton from '@/components/page/project/closeButton/CloseButton';
import ProjectHeader from '@/components/page/project/header/ProjectHeader';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const workItem: IWorkItem = {
  images: [
    (props: { style?: React.CSSProperties }) => (
      <StaticImage
        style={props.style}
        imgStyle={{ objectFit: `contain` }}
        src={`../../../../../../images/work/proofchain/main.png`}
        alt="Logo"
      />
    ),
    (props: { style?: React.CSSProperties }) => (
      <StaticImage
        style={props.style}
        src={`../../../../../../images/work/proofchain/proofchain-macbook.png`}
        alt="Logo"
        imgStyle={{ objectFit: `contain` }}
      />
    ),
    (props: { style?: React.CSSProperties }) => (
      <StaticImage
        style={props.style}
        src={`../../../../../../images/work/proofchain/dual.png`}
        alt="Logo"
        imgStyle={{ objectFit: `contain` }}
      />
    ),
  ],
  title: 'Proofchain',
  type: 'a',
  summary: 'Blockchain based supply chain tracking',
  tags: ['FULLSTACK', 'BLOCKCHAIN', 'DESIGN'],
  platform: 'Web - Dapp',
  date: '2021',
  repoUrl: 'https://github.com/alexcambose/proofchain',
  url: 'http://proofchain.alexcambose.ro/',
};
const Proofchain: React.FunctionComponent = (props) => {
  return (
    <Layout title={workItem.title} description={workItem.summary} {...props}>
      <CloseButton />
      <ProjectHeader workItem={workItem}></ProjectHeader>
    </Layout>
  );
};

export default Proofchain;
