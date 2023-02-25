import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: 800px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  gap: 24px;
  max-width: 1440p;
  margin: auto;

  & > * {
    flex-grow: 1;
    flex-basis: 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    gap: 48px;
    padding: 48px;
    & > * {
      flex-basis: ${({ flexBasis }) => `calc(${flexBasis * 100}% - 24px)`};
      max-width: ${({ flexBasis }) => `calc(${flexBasis * 100}% - 24px)`};
    }
  }
`;

export const LoadingMore = styled.div`
  text-align: center;
  padding: 40px;
`;
