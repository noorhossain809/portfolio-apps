import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import doctors from '../images/doctors.png';
import freshValley from '../images/fresh-valley.png';
import urbanRides from '../images/urban-riders.png';
import fvalley from '../images/fValley.png';
import travels from '../images/travel.png';

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
    name: 'Fresh Valley',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: freshValley,
    link: 'https://github.com/noorhossain809/fresh-valley',
  },
  {
    id: uuidv4(),
    name: 'Urban Riders',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: urbanRides,
    link: 'https://github.com/noorhossain809/urban-riders',
    preview: 'https://urban-riders-336311.web.app/',
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
    name: 'fvalley',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: fvalley,
    link: 'https://github.com/noorhossain809',
  },
];

export default projects;
