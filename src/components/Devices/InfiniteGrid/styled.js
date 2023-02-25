import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  flex-direction: ${({ flexDirection }) => flexDirection};

  @media (max-width: 499px) {
    flex-direction: column;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const GridItem = styled.div`
  margin: 12px;

  @media (max-width: 499px) {
    flex-basis: calc(${(1 / 1) * 100}% - 24px);
  }

  @media (min-width: 500px) {
    flex-basis: calc(${(1 / 2) * 100}% - 24px);
  }

  @media (min-width: 850px) {
    flex-basis: calc(${(1 / 3) * 100}% - 24px);
  }

  @media (min-width: 1350px) {
    flex-basis: calc(${(1 / 4) * 100}% - 24px);
  }
`;

export const Test = styled.div`
  background: #222222;
  border-radius: 24px;
`;

export const LoadingMore = styled.div`
  text-align: center;
  padding: 40px;
`;
