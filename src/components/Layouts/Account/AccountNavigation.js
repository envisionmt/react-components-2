import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import IconEditRed from '../../../assets/images/icons/icon-edit-red.svg';
import navigationConfig from '../../../configs/AccountNavigationConfig';

const Wrapper = styled.div`
  ${space}
  background: ${({ theme }) => theme.colors.primary2};
  background-size: cover;
  position: fixed;
  width: 240px;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const UserAvatarWrapper = styled.div`
  position: relative;
  margin-top: 72px;
  padding: 24px 48px;
  text-align: center;
`;

// const UserAvatar = styled.img`
//   width: 144px;
//   height: 144px;
//   position: relative;
//   border-radius: 50%;
// `;

const UserAvatar = styled.div`
  width: 144px;
  height: 144px;
  position: relative;
  border-radius: 50%;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 144px auto;
`;

const ChangeUserAvatarWrapper = styled.div`
  position: absolute;
  left: calc(50% - 24px / 2);
  top: 155px;
  cursor: pointer;
  height: 36px;

  &:hover {
    top: 149px;
    left: calc(50% - 36px / 2);
    border: 6px solid rgba(145, 0, 72, 0.3);
    border-radius: 50%;
  }
`;

const AvatarIconLabel = styled.label`
  cursor: pointer;
`;

const EditRedIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const InputFile = styled.input`
  display: none;
`;

const MainMenuWrapper = styled.div`
  padding: 24px 0 30px;
`;

const MainMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  margin: 0px 24px 24px 0;
  cursor: pinter;
  padding-left: 24px;
  color: #999999;
  cursor: pointer;
`;

const MainMenuSelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  margin: 0px 24px 24px 0;
  cursor: pinter;
  padding-left: 19px;
  border-left: 6px solid #910048;
  cursor: pointer;
`;

const MainMenuIcon = styled.img`
  position: static;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 12px;
`;

const MainMenuItemText = styled.span`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  padding: 5px 0;
  cursor: pinter;
`;

const MainMenuWrapperItem = styled.div``;

const AccountNavigation = () => {
  const history = useHistory();

  const [useAvatar, setUserAvatar] = useState('');
  const [mainMenuItems, setMainMenuItems] = useState([]);

  useEffect(() => {
    setMainMenuItems(navigationConfig);
  }, [navigationConfig]);

  const handleUploadImage = (e) => {
    try {
      const imagePure = e.target.files[0];
      const src = URL.createObjectURL(imagePure);

      setUserAvatar(src);
    } catch (err) {
      // TODO: Show real error here
    }
  };

  const onUpdateMainMenuItems = (updatedMenuItem) => {
    const tempMenuItems = [];
    mainMenuItems.forEach((item) => {
      if (item.id !== updatedMenuItem.id && item.type !== 'groupHeader') {
        item.isClick = false;
        tempMenuItems.push(item);
      } else {
        item.isClick = true;
        tempMenuItems.push(item);
      }
    });

    setMainMenuItems(tempMenuItems);
    localStorage.setItem('accountMenuItems', JSON.stringify(tempMenuItems));

    history.push(updatedMenuItem.navLink);
  };

  const handleClickMenu = (item, index) => () => {
    const updatedMenuItem = {
      id: item.id,
      title: item.title,
      type: item.type,
      greyIcon: item.greyIcon,
      whiteIcon: item.whiteIcon,
      isClick: true,
      navLink: item.navLink,
    };

    onUpdateMainMenuItems(updatedMenuItem, index);
  };

  return (
    <Wrapper>
      <UserAvatarWrapper>
        <UserAvatar bgImage={useAvatar || '//ssl.gstatic.com/accounts/ui/avatar_2x.png'} />
        {/* <UserAvatar src={useAvatar || '//ssl.gstatic.com/accounts/ui/avatar_2x.png'} /> */}
        <ChangeUserAvatarWrapper>
          <AvatarIconLabel htmlFor="file-avatar">
            <EditRedIcon src={IconEditRed} />
          </AvatarIconLabel>
          <InputFile type="file" id="file-avatar" accept="image/*" onChange={handleUploadImage} />
        </ChangeUserAvatarWrapper>
      </UserAvatarWrapper>
      <MainMenuWrapper>
        {mainMenuItems.map((item) => (
          <MainMenuWrapperItem key={item.id}>
            {item.type === 'item' ? (
              <>
                {item.isClick ? (
                  <MainMenuSelectedItem onClick={handleClickMenu(item)}>
                    <MainMenuIcon src={item.whiteIcon} />
                    <MainMenuItemText> {item.title} </MainMenuItemText>
                  </MainMenuSelectedItem>
                ) : (
                  <MainMenuItem onClick={handleClickMenu(item)}>
                    <MainMenuIcon src={item.greyIcon} />
                    <MainMenuItemText> {item.title} </MainMenuItemText>
                  </MainMenuItem>
                )}
              </>
            ) : null}
          </MainMenuWrapperItem>
        ))}
      </MainMenuWrapper>
    </Wrapper>
  );
};

export default AccountNavigation;
