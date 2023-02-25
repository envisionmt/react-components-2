import instagram from '../../assets/images/icons/icon-instagram.svg';
import facebook from '../../assets/images/icons/icon-facebook.svg';
import vimeo from '../../assets/images/icons/icon-vimeo.svg';
import twitter from '../../assets/images/icons/icon-twitter.svg';
import envision from '../../assets/images/icons/logo-envision.svg';

export const data = [
  {
    title: 'Company',
    items: [
      { name: 'About', onClick: '/about' },
      { name: 'Contact Us', onClick: '/contact' },
      { name: 'Affiliates', href: 'https://envision.leaddyno.com' },
    ],
  },
  {
    title: 'Support',
    items: [
      { name: 'Customer Care', href: 'https://envision.atlassian.net/servicedesk/customer/portals' },
      {
        name: 'Billing',
        href: 'https://envision.atlassian.net/servicedesk/customer/portal/18/group/22/create/150',
      },
    ],
  },
  {
    title: 'Mobile App',
    items: [
      { name: 'Android', href: 'https://play.google.com/store/apps/details?hl=en&id=com.envision.envision' },
      { name: 'iOS', href: 'https://apps.apple.com/us/app/envision-video-art/id943637063' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Partner', onClick: '/partners' },
      { name: 'Galleries', onClick: '/forindustry/galleries' },
      { name: 'Brand Assets', onClick: '/brand' },
      {
        name: 'Partner Knowledge Base',
        href: 'https://envision.atlassian.net/servicedesk/customer/portal/21/topic/b7e55536-84d9-4855-9556-32984f32518d',
      },
    ],
  },
];

export const logo = `${envision}`;
export const icons = [
  {
    icon: `${instagram}`,
    link: 'https://www.instagram.com/envisionart/',
  },
  {
    icon: `${twitter}`,
    link: 'https://twitter.com/envisionart',
  },
  {
    icon: `${facebook}`,
    link: 'https://www.facebook.com/envisionart/',
  },
  {
    icon: `${vimeo}`,
    link: 'https://vimeo.com/envisionart',
  },
];
