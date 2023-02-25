import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { data, logo, icons } from './data';

const RootWrapper = styled.div`
  margin: 24px auto;
  z-index: 2000;
  max-width: 1440px;
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 12px;
  background: #222222;
  border-radius: 12px;
  padding: 12px;
  margin: 0 24px;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

const SocialMediaContainer = styled.div`
  display: flex;
  padding: 0px;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 699px) {
    display: none;
  }

  @media (min-width: 700px) {
    flex-basis: 50%;
  }
`;

const LogoContainer = styled.div`
  @media (min-width: 700px) {
    flex-basis: 50%;
  }

  @media (max-width: 699px) {
    flex-basis: 100%;
    justify-content: center;
  }

  padding: 10px;
  display: flex;
`;

const FlexContainerTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 24px;
  flex-direction: ${({ flexDirection }) => flexDirection};

  @media (min-width: 700px) {
    display: none;
  }
`;

const FlexContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 24px;
  padding: 12px;

  @media (max-width: 699px) {
    flex-wrap: wrap;
  }
`;

const IconButton = styled.a`
  width: 16px;
  height: 16px;
  margin: 0px 12px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  height: 24px;
  width: 180px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  flex-basis: 25%;
  margin: 24px 12px;
  @media (max-width: 699px) {
    flex-basis: calc(50% - 24px);
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 6px;
`;

const Item = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #777777;
  margin-bottom: 6px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LegalContainer = styled.div`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #444444;
  padding: 0 0 24px 0;
`;

const LegalLink = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #444444;
  text-decoration: none;
  margin: 0 5px 0 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div``;

const Footer = () => {
  const history = useHistory();
  return (
    <RootWrapper>
      <FlexContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <SocialMediaContainer>
          {icons.map((icon) => (
            <IconButton href={icon.link} key={`footerIcon-${icon.link}`}>
              <Icon src={icon.icon} />
            </IconButton>
          ))}
        </SocialMediaContainer>
      </FlexContainer>
      <FlexContainerTwo>
        {icons.map((icon) => (
          <IconButton href={icon.link}>
            <Icon src={icon.icon} />
          </IconButton>
        ))}
      </FlexContainerTwo>
      <FlexContainerCards>
        {data.map((card) => (
          <Card key={card.title}>
            <Title>{card.title}</Title>
            {card?.items.map((item) => (
              <Item
                key={item.name}
                onClick={item?.onClick ? () => history.push(item?.onClick) : null}
                href={item?.href ? item.href : '#'}
                target={item?.href ? '_blank' : ''}
              >
                {item.name}
              </Item>
            ))}
          </Card>
        ))}
      </FlexContainerCards>
      <LegalContainer>
        <Copyright>©2021 envision</Copyright> |{' '}
        <LegalLink href="https://envision.atlassian.net/servicedesk/customer/portal/21/topic/dfd33581-b280-4c5d-9148-7df6e733a241/article/174260340">
          Privacy Policy
        </LegalLink>{' '}
        |
        <LegalLink href="https://envision.atlassian.net/servicedesk/customer/portal/21/topic/dfd33581-b280-4c5d-9148-7df6e733a241">
          Legal
        </LegalLink>{' '}
        |{' '}
        <LegalLink href="https://envision.atlassian.net/servicedesk/customer/portal/21/topic/dfd33581-b280-4c5d-9148-7df6e733a241/article/174227585">
          Terms and Conditions
        </LegalLink>{' '}
        |
      </LegalContainer>
    </RootWrapper>
  );
};

export default Footer;
