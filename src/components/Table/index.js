import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Table = styled.table`
  width: 100%;
  border-radius: 2px;
  margin-bottom: 1em;
  border-spacing: 0;
`;

export const TableHead = styled.thead`
  background: ${({ background }) => background};
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  width: 100%;
`;

export const HeaderCell = styled.th`
  background: ${({ theme }) => theme.colors.baseDarker};
  padding: 1em;
  text-align: left;
`;

export const BodyCell = styled.td`
  background: #333333;
  padding: 0.8em;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base};
`;

export const TableLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
