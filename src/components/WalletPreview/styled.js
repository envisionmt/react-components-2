import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
  width: calc(100% - 24px);
  flex-wrap: ${({ flexWrap }) => flexWrap};

  button {
    width: 10%;
    height: 50px;
    align-self: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 10%;
    height: 50px;
    align-self: center;
  }
`;

export const Description = styled.h2`
  font-size: 16px;
  color: white;
  line-height: 24px;
  align-self: center;
`;

export const ItemWrapper = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 24px;
  position: relative;
  flex-basis: calc(25% - 24px);
  margin: 12px;

  @media (max-width: 767px) {
    flex-basis: 100%;
  }
`;

export const PreviewWrapper = styled.div`
  margin-bottom: 20px;

  video {
    cursor: pointer;
  }
`;

export const DownloadButton = styled.a`
  z-index: 100;
  background: ${({ theme }) => theme.colors.base3};
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 20px;
  border-radius: 0px 24px;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 24px;
`;
