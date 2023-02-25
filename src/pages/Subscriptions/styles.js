import styled from '@emotion/styled';
import { Checkmark, Card } from '@emotion-icons/ionicons-sharp';

export const Wrapper = styled.div``;

export const PanelTitle = styled.h3`
  font-size: 2em;
  margin: 0;
  text-transform: none;
  margin-bottom: ${({ marginBottom }) => marginBottom || 1}em;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 1em;
  display: inline-block;
`;

export const PerkList = styled.ul`
  list-style: none;
  margin: 0 0 2em;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  margin-bottom: 0.2em;
`;

export const CardList = styled.ul`
  list-style: none;
  margin: 0 0 1em;
  padding: 0;
`;

export const CardRow = styled.li`
  margin: 0;
  padding: 0;
`;

export const CCSegment = styled.span`
  margin-right: 1em;
`;

export const StyledCheck = styled(Checkmark)`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  fill: #61cf92;
`;

export const StyledCC = styled(Card)`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  fill: #61cf92;
`;
