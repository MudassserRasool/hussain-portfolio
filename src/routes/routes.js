import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Careers from '../pages/Career/Career';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import Portfolio from '../pages/Portfolio/Portfolio';
import Services from '../pages/Services/Services';
import Team from '../pages/Team/Team';
const routes = {
  home: '/',
  services: '/services',
  portfolio: '/portfolio',
  about: '/about',
  team: '/team',
  careers: '/careers',
  careersDetails: '/career-details',
  contactUs: '/contact-us',
  blog: '/blog',
  faqs: '/faqs',
};
const routesArray = [
  { name: '', path: routes.home, component: Home },
  { name: 'Services', path: routes.services, component: Services },
  { name: 'Portfolio', path: routes.portfolio, component: Portfolio },
  { name: 'About', path: routes.about, component: About },
  { name: 'Team', path: routes.team, component: Team },
  { name: 'Careers', path: routes.careers, component: Careers },
  { name: 'Contact Us', path: routes.contactUs, component: Contact },
  { name: 'Blog', path: routes.blog, component: Blog },
];

export { routes, routesArray };
