import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Clutch, GoodFirm } from '../assets';

const data = {
  heading: 'QUHDOCK + You',
  description:
    ' At QUHDOCK, we develop cutting-edge digital solutions tailored to solve complex business challenges. Partner with us to turn your vision into scalable, innovative products.',
  icons: [
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/company/quhdock/',
    },
    {
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/quhdock',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/quhdock/',
    },
  ],
  locations: ['Wyoming, United States ', 'Lahore, Pakistan'],
  images: [
    { image: Clutch, name: 'Clutch icon' },
    { image: GoodFirm, name: 'Good Firm icon' },
  ],
};
export default data;
