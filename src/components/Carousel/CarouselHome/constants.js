import small_canvas from '../../Images/small_canvas.jpg';
import med_canvas from '../../Images/med_canvas.jpg';
import large_canvas from '../../Images/large_canvas.jpg';
import small_Ali_Hero from '../../Images/small_Ali_Hero.jpg';
import med_Ali_Hero from '../../Images/med_Ali_Hero.jpg';
import large_Ali_Hero from '../../Images/large_Ali_Hero.jpg';

export const SLIDE_INFO = [
  {
    backgroundColor: '#222222',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundImageSmall: `url(${small_Ali_Hero})`,
    backgroundImageMed: `url(${med_Ali_Hero})`,
    backgroundImageLarge: `url(${large_Ali_Hero})`,
    titleText: 'Featured Artist',
    headerText: 'Ali Hadian',
    subHeaderText:
      'Drawing from personal experiences, dreams and everyday observations, Ali transforms his own world into an inspiring dreamscape',
    buttonText: 'View The Drop',
    buttonRoute: '/artist/a2f95714-94a7-49ba-b28d-f854be70c294',
    vimeoId: '617432345',
  },
  {
    backgroundColor: '#ffe084',
    backgroundImageSmall: `url(${small_canvas})`,
    backgroundImageMed: `url(${med_canvas})`,
    backgroundImageLarge: `url(${large_canvas})`,
    backgroundSize: 'cover',
    titleText: 'Featured Product',
    headerText: 'Digital Canvas',
    subHeaderText:
      'Installing in 200 U.S. cities - View your entire collection of NFTs on our signature art display the Digital Canvas',
    buttonText: 'Buy a Digital Canvas',
    buttonRoute: 'canvas/p/digital-canvas-65',
    vimeoId: '617432479',
  },
];
