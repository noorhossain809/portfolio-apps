import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/doctorsPortal.png';
import GreenCtgImg from '../images/project2.png';
import CoinTrackerImg from '../images/travel.png';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'doctors portal',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: UTrackerImg,
    link: 'GitHub',
    preview: 'https://doctors-portal-c5857.web.app/',
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
    link: 'GitHub',
  },
  {
    id: uuidv4(),
    name: 'Travelling Gallery',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
    link: 'GitHub',
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
    link: 'GitHub',
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
    link: 'GitHub',
  },
];

export default projects;
