import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import doctors from '../images/prety-smile.png';
import parlur from '../images/parler-gallery-landing-page.png';
import freshValley from '../images/fresh-valley.png';
import bloodDonate from '../images/boold-donate.png';
import fvalley from '../images/fValley.png';
import travels from '../images/travel.png';
import chronicle from '../images/chronicle.png';

const projects = [
  {
    id: uuidv4(),
    name: 'doctors portal',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: doctors,
    link: 'https://github.com/noorhossain809/doctors-portal',
    preview: `https://doctors-portal-c5857.web.app/`,
  },
  {
    id: uuidv4(),
    name: 'Jarins-parlur',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: parlur,
    link: 'https://github.com/noorhossain809/jerins-purler',
    preview: `https://jerins-purler.vercel.app/`,
  },
  {
    id: uuidv4(),
    name: 'Travels',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: travels,
    link: 'https://github.com/noorhossain809',
  },

  {
    id: uuidv4(),
    name: 'My-Chronicle',
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: chronicle,
    link: 'https://github.com/noorhossain809',
    preview: 'https://my-chronicle-498b6.web.app/',
  },
  {
    id: uuidv4(),
    name: 'blood-donation',
    desc:
      'Blood donation saves lives by providing vital transfusions for surgeries, emergencies, ensuring community health and safety.',
    img: bloodDonate,
    link: 'https://github.com/noorhossain809/blood-donate-client',
    preview: 'https://blood-donation-xi.vercel.app/',
  },
  {
    id: uuidv4(),
    name: 'fvalley',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: fvalley,
    link: 'https://github.com/noorhossain809',
  },
  {
    id: uuidv4(),
    name: 'Fresh Valley',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: freshValley,
    link: 'https://github.com/noorhossain809/fresh-valley',
  },
];

export default projects;
