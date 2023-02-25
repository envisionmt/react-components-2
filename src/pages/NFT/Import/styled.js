import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 252px;
  height: 252px;
  border-radius: 20px;
  margin-right: 48px;
  background: ${({ theme }) => theme.colors.base2};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);

  @media (max-width: 665px) {
    margin: 0;
    display: none;
  }
`;

export const NFTIcon = styled.img`
  width: 84px;
  height: 64px;
  cursor: pointer;
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
`;

export const LowerWrapper = styled.div`
  padding: 20px 40px;

  h2 {
    font-size: 28px;
    margin: 0;
  }

  p {
    margin-bottom: 20px;
  }

  video {
    border-radius: 24px;
    margin-bottom: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  padding: 20px 40px;
  width: 100%;
  justify-content: space-between;

  button {
    width: 25%;
    height: 50px;
    align-self: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 40px 0;
`;
