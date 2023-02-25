import styled from '@emotion/styled';
import { ChevronBack, ChevronForward } from '@emotion-icons/ionicons-sharp';

export const CarouselWrapper = styled.div`
  position: relative;

  h2 {
    margin-left: 20px;
  }
`;

export const CollectionsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding: 12px 12px 12px 12px;
`;

export const InnerWrapper = styled.div`
  width: 9000%;
  position: relative;
  transition: left 0.3s ease-in-out;
  left: ${({ offset }) => `-${offset}px`};
`;

export const Slide = styled.div`
  display: inline-block;
  width: ${({ itemWidth }) => `${itemWidth}px`};
  margin: 8px;
`;

export const NavWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  display: ${({ active }) => active && 'none'};
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: 0;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 12px;
  color: ${({ active }) => (active ? 'white' : 'gray')};

  &:hover {
    background: ${({ active }) => (active ? '#333' : '')};
  }
`;

export const PrevIcon = styled(ChevronBack)`
  width: 30px;
  height: 30px;
  display: block;
`;

export const NextIcon = styled(ChevronForward)`
  width: 30px;
  height: 30px;
  display: block;
`;
