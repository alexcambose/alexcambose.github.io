import Layout from '@/components/layout';
import CloseButton from '@/components/page/project/closeButton/CloseButton';
import ProjectFooter from '@/components/page/project/footer/Footer';
import ProjectHeader from '@/components/page/project/header/ProjectHeader';
import SectionTitleLined from '@/components/page/project/sectionTitleLined/SectionTitleLined';
import StatementSection from '@/components/page/project/statementSection/StatementSection';
import { StatementSectionType } from '@/components/page/project/statementSection/StatementSection.styled';
import Card from '@/components/ui/card/Card';
import Container from '@/components/ui/layout/Container';
import { Col, Row } from '@/components/ui/layout/Grid';
import SectionTitle from '@/components/ui/sectionTitle/SectionTitle';
import { H1, H2 } from '@/components/ui/typography/Header';
import Link from '@/components/ui/typography/Link';
import { P } from '@/components/ui/typography/Paragraph';
import ImageFromProp from '@/components/utils/ImageFromProp';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import ProofchainLightSVG from '../images/projects/proofchain/proofchain-logo-full-light.svg';
import ProofchainDarkSVG from '../images/projects/proofchain/proofchain-logo-full-dark.svg';
import AdobeXDSVG from '../images/svg/adobexd.svg';
import NextJsSVG from '../images/svg/next.svg';
import ReduxSVG from '../images/svg/redux.svg';
import TypescriptSVG from '../images/svg/typescript.svg';
import Web3SVG from '../images/svg/web3.svg';
import RSVG from '../images/svg/r.svg';
import EthereumSVG from '../images/svg/ethereum.svg';
import SoliditySVG from '../images/svg/solidity.svg';
import TruffleSVG from '../images/svg/truffle.svg';
import VercelSVG from '../images/svg/vercel.svg';
import TravisSVG from '../images/svg/travis.svg';
import TorusSVG from '../images/svg/torus.svg';
import SkillsSlide from '@/components/page/index/About/components/skils/SkillsSlide';
import BackgroundImageFromProp from '@/components/utils/BackgroundImageFromProp';
import ImageGalery from '@/components/page/project/imageGallery/ImageGallery';
import { IWorkItem } from '@/interfaces';
import ProjectGeneric from './projectGeneric.tsx';

const PresentationImageContainer = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`;

const ProofchainLogoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  z-index: 0;
  transform: translateY(-50%);
  height: 50vh;
  & > svg {
    width: 100%;
    height: 50vh;
    opacity: 0.2;
  }
`;
const ProofchainComponentsFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProofchainComponentsFooterLabel = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
`;
const ProofchainComponentsFooterLink = styled(Link)`
  font-size: 2.2rem;
  color: black;
  margin: 1rem 0 2rem;
`;
const ApplicationDesignImage = styled(ImageFromProp)`
  position: absolute;
  right: -30px;
  top: 10rem;
  width: 30vw;
`;
const DevelopmentBackground = styled(BackgroundImageFromProp)`
  height: 150vh;
  margin-bottom: 3rem;
  &:after {
    opacity: 0.25 !important;
    margin-top: 3rem;
  }
  &:before {
    margin-top: 3rem;
  }
`;
const Section: React.FunctionComponent<{
  title?: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <section style={{ position: 'relative', marginTop: '1rem' }}>
    {title && <SectionTitleLined>{title}</SectionTitleLined>}
    {children}
  </section>
);
const Proofchain: React.FunctionComponent<{
  pageContext: { data: IWorkItem };
}> = ({ pageContext, ...props }) => {
  return (
    <ProjectGeneric pageContext={pageContext} {...props}>
      <StatementSection type={StatementSectionType.LIGHT} title="The Challenge">
        The traceability of the global supply chain has become an increasingly
        important issue in recent years. The government, the media, companies,
        suppliers and customers are all interested in greater transparency over
        the entire manufacturing and distribution process.
      </StatementSection>
      <StatementSection title="The Solution">
        A blockchain based project that leverages blockchain technology to
        facilitate efficient communication and data exchange between global
        supply chains, providing customers with proof of product provenance and
        ownership.
      </StatementSection>
      <PresentationImageContainer>
        <StaticImage
          imgStyle={{ objectFit: `contain` }}
          src={`../../../../../../images/projects/proofchain/proofchain-macbook.png`}
          alt="Logo"
        />
      </PresentationImageContainer>
      <Container>
        <Section title={'How it works'}>
          <H1>01. Client Side</H1>
          <Row>
            {[
              {
                image: 'projects/proofchain/hiw_1.png',
                title: 'Shopping',
                children: 'The user goes shopping.',
              },
              {
                image: 'projects/proofchain/hiw_2.png',
                title: 'Product Scanning',
                children:
                  "Before or after a product is bought, the user can scan it's code.",
              },
              {
                image: 'projects/proofchain/hiw_3.png',
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
                image: 'projects/proofchain/hiw_4.png',
                title: 'Product Registering',
                children:
                  'The manufacturer registers each created product, in a digital form.',
              },
              {
                image: 'projects/proofchain/hiw_5.png',
                title: 'Product Actions',
                children:
                  'The manufacturer registers each product modification.',
              },
              {
                image: 'projects/proofchain/hiw_3.png',
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
        </Section>
        <Section title="Application Components">
          {[
            [
              {
                image: 'projects/proofchain/dashboard.png',
                title: 'Proofchain Dashboard',
              },
              {
                image: 'projects/proofchain/clientapp.png',
                title: 'Proofchain Client App',
              },
              {
                image: 'projects/proofchain/library.png',
                title: 'Proofchain Library',
              },
            ],
            [
              {
                image: 'projects/proofchain/apidocumentation.png',
                title: 'Proofchain API Documentation',
              },
              {
                image: 'projects/proofchain/documentation.png',
                title: 'Proofchain Documentation',
              },
              {
                image: 'projects/proofchain/presentation.png',
                title: 'Proofchain Presentation',
              },
            ],
          ].map((rowItems, i) => (
            <Row
              key={i}
              style={{
                position: 'relative',
                zIndex: 2,
                margin: '10rem 4rem',
              }}
            >
              {rowItems.map((e, i) => (
                <Col key={i}>
                  <Card image={e.image} title={e.title} />
                </Col>
              ))}
            </Row>
          ))}
          <ProofchainLogoContainer>
            <ProofchainDarkSVG />
          </ProofchainLogoContainer>
          <ProofchainComponentsFooter>
            <ProofchainComponentsFooterLabel>
              For more information please visit the GitHub repository:
            </ProofchainComponentsFooterLabel>
            <ProofchainComponentsFooterLink
              to={'https://github.com/alexcambose/proofchain'}
            >
              github.com/alexcambose/proofchain
            </ProofchainComponentsFooterLink>
          </ProofchainComponentsFooter>
        </Section>{' '}
      </Container>
      <Section title="Application Design">
        <Container style={{ marginBottom: '26rem' }}>
          <Row>
            <Col flex={2}>
              <P>
                The presentational application has the role of promoting the
                traceability system both for final consumers and for companies
                that would be interested in a product that would solve the
                problem of transparency in the supply chain. Because the
                application could be viewed by a large number of users,
                including people with no knowledge of computer science, it
                adopts a modern design to easily convey the message and purpose
                of the system.
              </P>
              <P>
                The design was created in AdobeXD. This helped me a lot
                achieving the final structure I wanted for the app.
              </P>
              <AdobeXDSVG style={{ fontSize: '6rem' }} />
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <ApplicationDesignImage image={'projects/proofchain/side.png'} />
        <ImageFromProp
          image="projects/proofchain/dual.png"
          style={{ marginRight: '4vw' }}
        />
      </Section>
      <DevelopmentBackground image="projects/proofchain/uml.png">
        <Container>
          <Section title="Development">
            <P>
              The application is based on smart contracts, written in Solidity,
              which is on the Ethereum platform. They make up a system that
              anyone can interact with.
            </P>
            <P>
              The frontend part is developed using React & Next.js as the
              backbone tools and Web3 for interacting with the smart contracts.
              The users can login in via their Google account, Metamask wallet
              or mnemonic phrase, therefore authentication uses multiple
              services such as Torus for the social login (Google), Metamask and
              bip39 & ethereumjs-wallet for generating key pairs.
            </P>
            <H2>Some of the technologies used</H2>
            <Container>
              <SkillsSlide
                skills={[
                  {
                    icon: RSVG,
                    name: 'React',
                    description: 'Main UI library',
                  },
                  {
                    icon: ReduxSVG,
                    name: 'Redux',
                    description: 'State management library',
                  },
                  {
                    icon: NextJsSVG,
                    name: 'NEXT.JS',
                    description: 'React library',
                    url: 'https://nextjs.org/',
                  },
                  {
                    icon: TypescriptSVG,
                    name: 'Typescript',
                    description: 'Typed JavaScript and React components',
                    url: 'https://www.typescriptlang.org/',
                  },
                  {
                    icon: Web3SVG,
                    name: 'Web3.js',
                    description: 'Library that interacts with a ethereum node',
                  },
                  {
                    icon: EthereumSVG,
                    name: 'Ethereum',
                    description: 'EVM handles the smart contract execution',
                    url: 'https://ethereum.org/en/',
                  },
                  {
                    icon: SoliditySVG,
                    name: 'Solidity',
                    description: 'Smart contract programming language',
                    url: 'https://docs.soliditylang.org/',
                  },
                  {
                    icon: TruffleSVG,
                    name: 'Truffle',
                    description: 'A smart contract development environment',
                    url: 'https://www.trufflesuite.com/',
                  },
                  {
                    icon: VercelSVG,
                    name: 'Vercel',
                    description: 'Powerful CD service',
                    url: 'https://vercel.com/',
                  },
                  {
                    icon: TravisSVG,
                    name: 'Travis',
                    description: 'Continuous testing service',
                    url: 'https://travis-ci.org/',
                  },
                  {
                    icon: TorusSVG,
                    name: 'Torus',
                    description: 'Blockchain based social auth',
                    url: 'https://tor.us/',
                  },
                ]}
              />
            </Container>
          </Section>
        </Container>
      </DevelopmentBackground>
      <Container>
        <Section title="Gallery"></Section>
      </Container>
      <ImageGalery
        images={[
          'projects/proofchain/screenshots/all-batches.png',
          'projects/proofchain/screenshots/all-certificates.png',
          'projects/proofchain/screenshots/all-transports.png',
          'projects/proofchain/screenshots/assign-certificate.png',
          'projects/proofchain/screenshots/batch-info.png',
          'projects/proofchain/screenshots/client-material-certificates.png',
          'projects/proofchain/screenshots/client-material-company-overview.png',
          'projects/proofchain/screenshots/client-material-graph.png',
          'projects/proofchain/screenshots/client-material-history.png',
          'projects/proofchain/screenshots/client-material-info.png',
          'projects/proofchain/screenshots/client-material-overview.png',
          'projects/proofchain/screenshots/create-batch.png',
          'projects/proofchain/screenshots/create-certificate.png',
          'projects/proofchain/screenshots/create-material.png',
          'projects/proofchain/screenshots/create-new-raw-material.png',
          'projects/proofchain/screenshots/create-transport.png',
          'projects/proofchain/screenshots/home.png',
          'projects/proofchain/screenshots/library-api-docs.png',
          'projects/proofchain/screenshots/material-certificate-info-certificate.png',
          'projects/proofchain/screenshots/material-certificate-info-history.png',
          'projects/proofchain/screenshots/material-info.png',
          'projects/proofchain/screenshots/material-qr-code.png',
          'projects/proofchain/screenshots/materials-list.png',
          'projects/proofchain/screenshots/overall-documentation-architecture.png',
          'projects/proofchain/screenshots/overall-documentation-home.png',
          'projects/proofchain/screenshots/presentation1.png',
          'projects/proofchain/screenshots/presentation2.png',
          'projects/proofchain/screenshots/proofchain3.png',
          'projects/proofchain/screenshots/raw-material.png',
          'projects/proofchain/screenshots/transport-info2.png',
          'projects/proofchain/screenshots/transport-info.png',
        ]}
      />
    </ProjectGeneric>
  );
};

export default Proofchain;
