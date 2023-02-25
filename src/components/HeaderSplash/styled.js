import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(26, 26, 26, 0.5), rgba(26, 26, 26, 0.5)),
    ${({ color, theme }) => (color === 'red' ? theme.colors.accent : theme.colors.base2)};
  border-radius: 0px 0px 24px 24px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding || '60px 24px 24px 24px'};
  height: ${({ height }) => height || 'auto'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-end'};

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-transform: none;
    margin: 0;
    color: rgba(255, 255, 255, 0.15);

    @media (min-width: 375px) {
      font-size: 36px;
      line-height: 40px;
    }
    @media (min-width: 768px) {
      font-weight: bold;
      font-size: 48px;
      line-height: 48px;
      letter-spacing: -0.04em;
    }
    @media (min-width: 1441px) {
      font-weight: bold;
      font-size: 72px;
      line-height: 72px;
      letter-spacing: -0.04em;
    }
  }

  @media (min-width: 768px) {
    padding: ${({ paddingLarge }) => paddingLarge || '60px 48px 48px 48px'};
  }
`;
