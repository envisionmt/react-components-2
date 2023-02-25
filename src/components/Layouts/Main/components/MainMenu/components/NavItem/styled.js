import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Triangle } from '@emotion-icons/ionicons-sharp';

export const NavItemWrapper = styled.li`
  margin-bottom: 5px;

  svg {
    margin-right: 15px;
  }

  span {
    display: inline-block;
    vertical-align: top;
    margin-top: 2px;
  }
`;

export const NavMenuLink = styled(Link)`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  border-radius: 12px;
  background: ${({ active }) => (active ? '#333' : '#222')};
  color: ${({ active }) => (active ? 'white' : 'rgb(179, 179, 179)')};

  &:hover {
    color: white;
  }
`;

export const NavOuterLink = styled.a`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  height: 45.22px;
  display: block;
  padding: 10px 15px;
  border-radius: 12px;
  background: ${({ active }) => (active ? '#333' : '#222')};
  color: ${({ active }) => (active ? 'white' : 'rgb(179, 179, 179)')};

  img {
    width: 25px;
    height: 25px;
    margin-right: 15px;
    color: ${({ active }) => (active ? 'white' : 'rgb(179, 179, 179)')};
  }

  &:hover {
    color: white;
  }
`;
export const NavMenuToggle = styled.button`
  background: ${({ expanded }) => (expanded ? '#333' : 'none')};
  position: relative;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  border-radius: 12px;
  width: 100%;
  border: none;
  color: rgb(179, 179, 179);
  text-align: left;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const SubmenuWrapper = styled.ul`
  position: relative;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  overflow: hidden;
  padding-top: 10px !important;

  &::after {
    content: '';
    position: absolute;
    border-left: 2px solid #2d2d2d;
    height: calc(100% - 22px);
    top: 5px;
    left: 25px;
  }
`;

export const ExpandIcon = styled(Triangle)`
  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(90deg)')};
  transition: transform 0.1s ease-in-out;
  position: absolute;
  top: 20px;
  right: 0px;
`;
