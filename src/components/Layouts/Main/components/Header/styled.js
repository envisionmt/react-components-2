import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: ${({ theme }) => theme.colors.base3};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 24px 24px;
  z-index: 300;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const NavStartWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .fill {
    width: 60px;
    height: 60px;
  }
`;

export const Logo = styled.img`
  width: 212px;
  height: 26px;
  display: none;
  cursor: pointer;

  @media ${({ device }) => device.laptop} {
    display: block;
  }
`;

export const LogoMobile = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;

  @media ${({ device }) => device.laptop} {
    display: none;
  }
`;

export const NavEndWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavStartMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
`;

export const NavEndCartIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavEndCartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const LoginLink = styled.div`
  text-decoration: none;
`;

export const NavEndUserIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 24px 0px 24px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavEndUserIcon = styled.img`
  width: 24px;
  height: 24px;
`;
