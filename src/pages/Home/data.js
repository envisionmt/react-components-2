import artists from '../../assets/images/coverflow-artists.jpg';
import collections from '../../assets/images/coverflow-collections.jpg';
import limited from '../../assets/images/home/Limited Editions.jpg';
import testimonialOne from '../../assets/images/partners/testimonial.jpg';
import digitalCanvas from '../../assets/images/home/Digital Canvas.jpg';
import market from '../../assets/images/home/NFT Marketplaces.png';
import tv from '../../assets/images/home/TV.png';
import control from '../../assets/images/home/Lineup.png';
import hilton from '../../assets/images/home/Logos/Hilton.png';
import cisneros from '../../assets/images/home/Logos/Cisernos.png';
import christies from '../../assets/images/home/Logos/Christies.png';
import marriott from '../../assets/images/home/Logos/Marriott.png';
import pamm from '../../assets/images/home/Logos/PAMM.png';
import sheraton from '../../assets/images/home/Logos/Sheraton.png';
import architecture from '../../assets/images/home/Architectural-Install.jpg';

export const dataOne = {
  header: 'Collect',
  top: 'Limited Edition NFTs',
  bot: 'Collectors, artists, and art enthusiasts can choose from limited-edition works secured as an  NFT by the blockchain.',
  button: 'Collect now',
  click: '/marketplace',
  image: `${limited}`,
};

export const testimonial = {
  title: '“envision consistently delivers the high quality of service required by my clients.”',
  text: 'Ken Johnson',
  textTwo: 'Premiere Systems',
  image: `${testimonialOne}`,
};

export const seamless = [
  {
    image: `${market}`,
    title: 'Exhibit your NFTs',
    text: 'Simply connect your Metamask wallet and let envision do the rest. Our secure storage platform only imports the art asset itself not the token. NFTS from all leading marketplaces supported.',
  },
  {
    image: `${tv}`,
    title: 'Smart TV Apps',
    text: 'envision offers apps for all major smart television brands. So you can transform the diplay already in your home into a Digital Canvas',
  },
  {
    image: `${control}`,
    title: 'Seamless Control',
    text: 'Easily manage your Digital Canvas with the envision suite of apps for mobile and web.',
    button: 'Download the app',
    click: '/download',
    className: 'last',
  },
];

export const dataTwo = [
  {
    image: `${artists}`,
    top: 'Renowned Artists',
    bot: 'Explore over 5000 artworks from 200 leading artists. No matter your taste, you will find the perfect piece for your collection—all in high fidelity 4K resolution and 60 frames per second.',
    button: 'Explore Artists',
    background: '#444444',
    click: '/artists',
  },
  {
    image: `${collections}`,
    top: 'Subscribe to envision',
    bot: 'Access meticulously curated collections of digital artworks. As your taste changes, rotate and switch art on an unlimited number of displays with a single subscription.',
    button: 'Subscribe now',
    background: '#910048',
    click: '/subscribe',
  },
];

export const dataThree = {
  header: 'Display',
  top: 'Digital Canvas',
  bot: 'Enjoy the most pleasing digital art experience on the envision high-resolution 4K Digital Canvas available from 55” to 98”',
  button: 'Shop now',
  click: '/canvas/p/digital-canvas-65',
  image: `${digitalCanvas}`,
};

export const dataFour = {
  top: 'Architectural Installs',
  bot: 'Enjoy the most pleasing digital art experience on the envision high-resolution 4K Digital Canvas available from 55” to 98”',
  button: 'Learn more',
  click: '/partners',
  image: `${architecture}`,
};

export const icons = [`${marriott}`, `${sheraton}`, `${hilton}`, `${christies}`, `${cisneros}`, `${pamm}`];
