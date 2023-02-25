import styled from '@emotion/styled';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: #222222;
  width: 100%;
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

export const UpperWrapper = styled.div`
  position: relative;
`;

export const ThumbnailContainer = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  filter: drop-shadow(0px 8px 7px rgba(0, 0, 0, 0.25)) drop-shadow(0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714))
    drop-shadow(0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027))
    drop-shadow(0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125))
    drop-shadow(0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973))
    drop-shadow(0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864));
  margin-bottom: 20px;
`;

export const ThumbnailAspectRatioBox = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  border-radius: 12px;

  img,
  video,
  div {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 12px;
  }
`;

export const ArtTitleWrapper = styled.div`
  max-width: 100%;
  padding: 24px;
`;

export const ArtworkTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  margin: 0px 0px 18px 0px;
`;

export const ArtistWrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: end;

  img {
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    vertical-align: top;
    margin-right: 10px;
  }

  span {
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
`;

export const LowerWrapper = styled.div`
  width: 100%;
  background: #333333;
`;

export const PlayableWrapper = styled.div`
  display: flex;
  height: 80px;

  button {
    display: block;
    flex: 1;
    border: 0;
    cursor: pointer;
    transition: all 0.1s ease-in;
  }
`;

export const FavoriteButton = styled.button`
  background: #333333;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: white;
  }
`;

export const PlayButton = styled.button`
  height: 100%;
  border-radius: 24px 0px;
  padding: 0;
  color: white;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: ${lighten(0.05, '#910048')};
  }
`;

export const AddButton = styled.button`
  height: 100%;
  border-radius: 24px 0px;
  padding: 0;
  color: white;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    background: ${lighten(0.05, '#910048')};
  }
`;

export const PurchaseWrapper = styled(Link)`
  padding: 24px;
  display: flex;
  text-decoration: none;

  .left {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .right {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
`;

export const CTA = styled.div`
  flex-basis: 50%;
  max-width: 50%;

  .header {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #a5a5a5;
    margin-bottom: 8px;
  }
  .sub {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.025em;
  }
`;

export const ActionButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 12px 20px;
  background: #910048;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${lighten(0.05, '#910048')};
  }
`;

export const Pricing = styled.div`
  text-align: right;
`;

export const Stock = styled.span``;

export const Price = styled.span``;

export const SubscribeWrapper = styled.div`
  padding: 20px;
`;

export const NavMenu = styled.nav`
  z-index: 9999;
  position: absolute;
  margin-left: 30%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  display: ${({ visible }) => !visible && 'none'};

  ul {
    -webkit-app-region: no-drag;
    background-color: #333333;
    border-radius: 4px;
    -webkit-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    max-height: calc(100vh - 24px);
    max-width: 180px;
    min-width: 160px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: pointer;
    display: block;
  }
  div {
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 0;
    vertical-align: baseline;
    width: 180px;
    max-width: 180px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 0.025em;
    color: #ffffff;
    padding: 12px;

    &:hover {
      background: #3d3d3d;
    }
  }
`;

export const SubNavMenu = styled.nav`
  z-index: 9999;
  position: absolute;
  margin: -36px 0 0 -190px;
  pointer-events: ${({ visible }) => (visible ? 'default' : 'none')};

  opacity: ${({ visible }) => (visible ? 1 : 0)};

  display: ${({ visible }) => !visible && 'none'};
  ul {
    -webkit-app-region: no-drag;
    background-color: #333333;
    border-radius: 4px;
    -webkit-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    max-height: calc(100vh - 24px);
    max-width: 180px;
    min-width: 160px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: pointer;
  }
  div {
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 0;
    vertical-align: baseline;
    width: 180px;
    min-width: 100%;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 0.025em;
    color: #ffffff;
    padding: 12px;
    &:hover {
      background: #3d3d3d;
    }
  }
  @media (min-width: 320px) {
    margin: 10px 0 0 -45px;
  }
  @media (max-width: 499px) and (min-width: 665px) {
    margin: 5px 0 0 -45px;
  }

  @media (min-width: 845px) {
    margin: 5px 0 0 -45px;
  }
`;

export const AddMenu = styled.nav`
  z-index: 9999;
  position: absolute;
  margin-left: 9%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  display: ${({ visible }) => !visible && 'none'};
  ul {
    -webkit-app-region: no-drag;
    background-color: #333333;
    border-radius: 4px;
    -webkit-box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
    max-height: calc(100vh - 24px);
    max-width: 180px;
    min-width: 160px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: pointer;
  }
  div {
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 0;
    vertical-align: baseline;
    width: 180px;
    max-width: 180px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    letter-spacing: 0.025em;
    color: #ffffff;
    padding: 12px;
    &:hover {
      background: #3d3d3d;
    }
  }
`;

export const Icon = styled.img`
  margin: 0 12px 0 0;
  height: 12px;
  width: 12px;
`;

export const StatusBadge = styled.span`
  background: ${({ theme }) => theme.colors.base3};
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 13px;
  border-radius: 0px 0px 25px 0px;
`;

export const RemoveButton = styled.button`
  background: ${({ theme }) => theme.colors.base3};
  border: 0px;
  color: white;
  padding: 10px 20px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 0px 0px 0px 25px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accentAlt};
  }
`;
