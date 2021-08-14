import Layout from '@/components/layout';
import CloseButton from '@/components/page/project/closeButton/CloseButton';
import ProjectHeader from '@/components/page/project/header/ProjectHeader';
import SectionTitleLined from '@/components/page/project/sectionTitleLined/SectionTitleLined';
import StatementSection from '@/components/page/project/statementSection/StatementSection';
import { StatementSectionType } from '@/components/page/project/statementSection/StatementSection.styled';
import Card from '@/components/ui/card/Card';
import Container from '@/components/ui/layout/Container';
import { Col, Row } from '@/components/ui/layout/Grid';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import { H1 } from '@/components/ui/typography/Header';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

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
const PresentationImageContainer = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`;
const ProofchainWrapper = styled.div`
  background: white;
  color: black;
`;
const Proofchain: React.FunctionComponent = (props) => {
  return (
    <Layout title={workItem.title} description={workItem.summary} {...props}>
      <ProofchainWrapper>
        <CloseButton />
        <ProjectHeader workItem={workItem}></ProjectHeader>
        <StatementSection
          type={StatementSectionType.LIGHT}
          title="The Challenge"
        >
          The traceability of the global supply chain has become an increasingly
          important issue in recent years. The government, the media, companies,
          suppliers and customers are all interested in greater transparency
          over the entire manufacturing and distribution process.
        </StatementSection>
        <StatementSection title="The Solution">
          A blockchain based project that leverages blockchain technology to
          facilitate efficient communication and data exchange between global
          supply chains, providing customers with proof of product provenance
          and ownership.
        </StatementSection>
        <PresentationImageContainer>
          <StaticImage
            imgStyle={{ objectFit: `contain` }}
            src={`../../../../../../images/work/proofchain/proofchain-macbook.png`}
            alt="Logo"
          />
        </PresentationImageContainer>
        <Container>
          <SectionTitleLined>How it works</SectionTitleLined>
          <H1>01. Client Side</H1>
          <Row>
            {[
              {
                image: 'work/proofchain/hiw_1.png',
                title: 'Shopping',
                children: 'The user goes shopping.',
              },
              {
                image: 'work/proofchain/hiw_2.png',
                title: 'Product Scanning',
                children:
                  "Before or after a product is bought, the user can scan it's code.",
              },
              {
                image: 'work/proofchain/hiw_3.png',
                title: 'Product Information',
                children:
                  'The web application displays information about the scanned product.',
              },
            ].map((e, i) => (
              <Col key={i}>
                <Card image={e.image} title={e.title}>
                  {e.children}
                </Card>
              </Col>
            ))}
          </Row>
          <H1>02. Manufacturer side</H1>
          <Row>
            {[
              {
                image: 'work/proofchain/hiw_4.png',
                title: 'Product Registering',
                children:
                  'The manufacturer registers each created product, in a digital form.',
              },
              {
                image: 'work/proofchain/hiw_5.png',
                title: 'Product Actions',
                children:
                  'The manufacturer registers each product modification.',
              },
              {
                image: 'work/proofchain/hiw_3.png',
                title: 'Product Information',
                children:
                  'The web application displays information about the scanned product.',
              },
            ].map((e, i) => (
              <Col key={i}>
                <Card image={e.image} title={e.title}>
                  {e.children}
                </Card>
              </Col>
            ))}
          </Row>
          <SectionTitleLined>Application Components</SectionTitleLined>

          {[
            [
              {
                image: 'work/proofchain/hiw_4.png',
                title: 'Product Registering',
              },
              {
                image: 'work/proofchain/hiw_5.png',
                title: 'Product Actions',
              },
              {
                image: 'work/proofchain/hiw_3.png',
                title: 'Product Information',
              },
            ],
            [
              {
                image: 'work/proofchain/hiw_4.png',
                title: 'Product Registering',
              },
              {
                image: 'work/proofchain/hiw_5.png',
                title: 'Product Actions',
              },
              {
                image: 'work/proofchain/hiw_3.png',
                title: 'Product Information',
              },
            ],
          ].map((rowItems, i) => (
            <Row key={i} style={{ margin: '10rem 4rem' }}>
              {rowItems.map((e, i) => (
                <Col key={i}>
                  <Card image={e.image} title={e.title} />
                </Col>
              ))}
            </Row>
          ))}

          <SectionTitleLined>Application Design</SectionTitleLined>
          <SectionTitleLined>Development</SectionTitleLined>
        </Container>
      </ProofchainWrapper>
    </Layout>
  );
};

export default Proofchain;
