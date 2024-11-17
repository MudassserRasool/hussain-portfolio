import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Clutch, FreedomPros, GoodFirm, InaraTrade } from '../assets';

const data = {
  heading: 'ZT + You',
  description:
    ' At ZT, we develop cutting-edge digital solutions tailored to solve complex business challenges. Partner with us to turn your vision into scalable, innovative products.',
  icons: [
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/company/zairtech/',
    },
    {
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/share/1EnfGakofw/?mibextid=LQQJ4d',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/zairtech_global_it_solutions/profilecard/?igsh=bTFhZTVzeXV5eXZr',
    },
  ],
  locations: ['Mountain House CA 95391 ', 'Business Bay Dubai 500001'],
  images: [
    { image: Clutch, name: 'Clutch icon' },
    { image: GoodFirm, name: 'Good Firm icon' },
    { image: FreedomPros, name: 'FreedomPros' },
    { image: InaraTrade, name: 'Inra Trade' },
  ],
};
export default data;
