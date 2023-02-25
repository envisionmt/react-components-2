import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
`;

export const ListHeader = styled.li`
  position: relative;
  background: ${({ theme }) => theme.colors.base3};
  height: 56px;
  padding: 5px 20px;
  border-radius: 10px 10px 0px 0px;

  span {
    line-height: 46px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 200px;
`;

export const ListItem = styled.li`
  background: ${({ theme }) => theme.colors.base3};
  height: 48px;
  padding: 5px 20px;
  display: flex;

  span {
    display: inline-block;
    line-height: 38px;
    flex: 1;
  }

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.base4};
  }

  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }
`;

export const RightContainer = styled.div`
  text-align: right;
  flex: 1;

  span {
    display: inline-block;
    margin-right: 20px;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: 0;
  color: white;
  vertical-align: top;
  line-height: 34px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accentAlt};
  }
`;
