import {
  Getbee,
  L2Air,
  MyScienceLand,
  Niobi,
  Wellavi,
  carouselVideo1,
  carouselVideo2,
  carouselVideo3,
} from '../assets';

const data = {
  companies: [
    {
      name: 'Wellavi',
      logo: Wellavi,
      link: 'https://wellavi.com/',
    },
    {
      name: 'Getbee',
      logo: Getbee,
      link: 'https://www.getbee.com/',
    },
    {
      name: 'MyScienceLand',
      logo: MyScienceLand,
      link: 'https://app.myscienceland.com/',
    },
    {
      name: 'Niobi',
      logo: Niobi,
      link: 'http://app.niobi.co/',
    },
    {
      name: 'L2Air',
      logo: L2Air,
      link: 'https://www.lovetoair.com/',
    },
  ],

  testimonial: {
    videos: [carouselVideo1, carouselVideo2, carouselVideo3],
  },
};

export default data;
