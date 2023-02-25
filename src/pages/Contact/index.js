import React from 'react';
import styled from '@emotion/styled';

// Components
import { HeaderSplash } from '../../components/HeaderSplash';

// Styled
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text {
    padding: 24px;
  }
  .contact {
    width: 100%;
    padding: 24px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Contact = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '5104433',
          formId: '3dd202a8-cc43-41e0-8e53-3ab33d28fd0b',
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return (
    <>
      <HeaderSplash padding="84px 24px 24px 24px;" paddingLarge="96px 36px 36px 36px;">
        <h1>Contact Us</h1>
      </HeaderSplash>
      <Wrapper>
        <div className="text">
          Need some help? Send us a message through our form and one of our associates will get in touch with you
          shortly. info@envision.com
        </div>
        <div className="contact" id="hubspotForm" />
      </Wrapper>
    </>
  );
};
export default Contact;
