import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ItemWrapper = styled.li`
  border: ${({ draggingOver }) => (draggingOver ? '1px solid #333' : '1px solid transparent')};
  background: ${({ draggingOver }) => (draggingOver ? '#333' : '#222')};
  border-radius: 10px;
  ${({ canDrop }) => {
    if (canDrop) return 'a { color: white; }';
    return null;
  }};
`;

export const ItemLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: block;
  padding: 5px 18px;
  border-radius: 12px;
  background: ${({ active }) => (active ? '#333' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : 'rgb(179, 179, 179)')};

  &:hover {
    color: white;
  }
`;
