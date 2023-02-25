import React from 'react';
import { dataOne } from './data';
import {
  Wrapper,
  HeaderWrapper,
  Header,
  SubHeader,
  Section,
  SectionHeader,
  TopHeader,
  HeaderDescription,
  Top,
  Bot,
  BotList,
  SectionBodyHeader,
  SectionCards,
  SectionCard,
  Link,
  Divider,
} from './styled';

const Brand = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Brand Assets</Header>
        <SubHeader>
          We want to make it easy for you to have the correct version of our logo, colors, and images for your needs.
        </SubHeader>
      </HeaderWrapper>
      <Section>
        <SectionHeader>
          <TopHeader>{dataOne.title}</TopHeader>
          <HeaderDescription>
            <Top>{dataOne.descriptionOne}</Top>
            <Bot>{dataOne.descriptionTwo}</Bot>
          </HeaderDescription>
        </SectionHeader>
        <Divider />
        <div>
          <SectionBodyHeader>{dataOne.bodyHeader}</SectionBodyHeader>
          <SectionCards>
            {dataOne.variation.map((item) => (
              <SectionCard>
                <img src={item.image} alt="variations" />
                <div>
                  {item.variationLinks.map((links) => (
                    <Link href={links.link}>{links.name}</Link>
                  ))}
                </div>
              </SectionCard>
            ))}
          </SectionCards>
        </div>
        <Divider />
        <div>
          <SectionBodyHeader>{dataOne.bodyHeaderTwo}</SectionBodyHeader>
          <HeaderDescription>
            <Top>{dataOne.bodyOne}</Top>
            <Top>{dataOne.bodyTwo}</Top>
          </HeaderDescription>
          <SectionCards>
            {dataOne.seal.map((item) => (
              <SectionCard>
                <img src={item.image} alt="seal" />
                <div>
                  {item.sealLinks.map((links) => (
                    <Link href={links.link}>{links.name}</Link>
                  ))}
                </div>
              </SectionCard>
            ))}
          </SectionCards>
        </div>
        <Divider />
        <div>
          <SectionBodyHeader>{dataOne.bodyHeaderThree}</SectionBodyHeader>
          <SectionCards>
            {dataOne.app.map((item) => (
              <SectionCard>
                <img src={item.image} alt="app-logo" />
                <div>
                  {item.appLinks.map((links) => (
                    <Link href={links.link}>{links.name}</Link>
                  ))}
                </div>
              </SectionCard>
            ))}
          </SectionCards>
        </div>
        <Divider />
        <div>
          <SectionBodyHeader>{dataOne.bodyHeaderFour}</SectionBodyHeader>
          <HeaderDescription>
            <Top>
              {dataOne.bodyFour[0]} <Top>{dataOne.bodyFour[1]}</Top>
            </Top>
            <Bot>
              <BotList>
                <li>{dataOne.bodyFive[0]}</li>
                <li>{dataOne.bodyFive[1]}</li>
                <li>{dataOne.bodyFive[2]}</li>
                <li>{dataOne.bodyFive[3]}</li>
              </BotList>
            </Bot>
          </HeaderDescription>
          <SectionCards>
            {dataOne.incorrect.map((image) => (
              <SectionCard>
                <img src={image} alt="incorrect" />
              </SectionCard>
            ))}
          </SectionCards>
        </div>
        <div>
          <TopHeader>{dataOne.bodyHeaderFive}</TopHeader>
          <HeaderDescription>
            <Top>{dataOne.bodySix[0]}</Top>
            <Top>{dataOne.bodySix[1]}</Top>
          </HeaderDescription>
        </div>
      </Section>
    </Wrapper>
  );
};

export default Brand;
