import styled from '@emotion/styled';
import { lighten } from 'polished';

export const RootWrapper = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
`;

export const LoadWrapper = styled.div`
  padding: 200px 0px;
`;

export const ImageWrapper = styled.div`
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
`;

export const ImageButton = styled.button`
  display: block;
  width: 100%;
  background: none;
  padding: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #ffffff;
  margin: 0 0 5px 0;
  text-transform: none;
`;

export const CreatorWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

export const CreatorImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 50%;
`;

export const CreatorName = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Description = styled.p`
  margin: 0 0 30px 0;
`;

export const MetadataCounts = styled.span`
  margin-bottom: 5px;

  span {
    display: inline-block;
    margin-right: 15px;
    vertical-align: top;
    font-size: 16px;
  }

  svg {
    margin: 2px 8px 0;
    color: ${lighten(0.1, '#910048')};
    vertical-align: top;
  }
`;

export const ControlsWrapper = styled.div``;

export const ControlButton = styled.button`
  width: ${({ width }) => `${width}px`};
  background: ${({ color }) => (color === 'red' ? '#910048' : '#444444')};
  border: 1px solid ${({ color }) => (color === 'red' ? '#910048' : '#444444')};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 3px;
  color: #fff;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background: ${({ color }) => (color === 'red' ? lighten(0.1, '#910048') : lighten(0.1, '#444444'))};
    border: 1px solid ${({ color }) => (color === 'red' ? lighten(0.1, '#910048') : lighten(0.1, '#444444'))};
  }

  &:focus {
    outline: none;
  }
`;

export const LowerWrapper = styled.div`
  padding: 20px 0 0 0;

  @media (min-width: 800px) {
    padding: 20px 0 0 0;
  }
`;
