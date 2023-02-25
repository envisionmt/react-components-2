import home from '../assets/images/home.svg';
import homeWhiteIcon from '../assets/images/icons/icon-home-white.svg';
import lockIcon from '../assets/images/icons/icon-lock.svg';
import lockWhiteIcon from '../assets/images/icons/icon-lock-white.svg';

const navigationConfig = [
  {
    type: 'item',
    id: 'account-overview',
    title: 'Account Overview',
    greyIcon: home,
    whiteIcon: homeWhiteIcon,
    isClick: true,
    navLink: '/account/overview',
  },
  {
    type: 'item',
    id: 'change-password',
    title: 'Change Password',
    greyIcon: lockIcon,
    whiteIcon: lockWhiteIcon,
    isClick: false,
    navLink: '/forgot-password',
  },
];

export default navigationConfig;
