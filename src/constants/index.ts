import { IconBrandFiverr, IconBrandUpwork } from '@tabler/icons-react'
import { LayoutList, ThumbsUp } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid'

import { Icons } from '@/assets/icons/icons'

import { APP_NAVIGATION } from '@/config/pages-url.config'

import { INavItem, IProject, IReview } from '@/types'

export const PROJECTS: IProject[] = [
  {
    id: 0,
    category: 'Websites',
    image: '/images/Cargobolt.webp',
    title: 'Cargobolt',
    tagline: 'Express delivery in Europe within 24 hours',
    link: 'https://www.cargobolt.eu',
    description: ''
  },
  {
    category: 'Web App',
    image: '/images/CoinsApp.webp',
    title: 'Coins App',
    tagline: 'Web App for tracking your cryptocurrency portfolio',
    link: 'https://t.me/coinshouse_bot',
    description: ''
  },
  {
    category: 'Websites',
    image: '/images/ForeignPay.webp',
    title: 'Foreign Pay',
    tagline: 'Pay for any foreign subscriptions and games in 20 minutes!',
    link: 'https://foreignpay.ru',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/FROSTFIT.webp',
    title: 'Frostfit',
    tagline: 'Boost your gym performance with innovative palm cooling device',
    link: '',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/CosmoDom.webp',
    title: 'CosmoDom',
    tagline: 'Capsule houses for glamping and recreation centers',
    link: 'https://cosmo-dom.com',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/GreenHouse.webp',
    title: 'Green House',
    tagline: '3D - Landscape Design Visualization',
    link: 'https://3dlandscapevisualization.com/en',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/UgcStudio.webp',
    title: 'UGC Studio',
    tagline: 'High-Quality UGC Ads Designed for the Nordics',
    link: 'https://ugctoimisto.fi/en',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/KateKrasnova.webp',
    title: 'Kate Krasnova',
    tagline: 'Creative Marketing and Branding',
    link: 'https://krasnovakate.com',
    description: ''
  },
  {
    category: 'Web App',
    image: '/images/MebelShara.webp',
    title: 'Mebel Shara',
    tagline: 'furniture store',
    link: 'https://www.mebelshara.ru',
    description: ''
  },
  {
    category: 'Web App',
    image: '/images/Kalimera.webp',
    title: 'Kalimera',
    tagline: 'Cyprus Airports VIP Fast Track Arrivals',
    link: 'https://kalimera.vip',
    description: 'Cyprus Airports VIP Fast Track Arrivals'
  },
  {
    category: 'Websites',
    image: '/images/TopEducation.webp',
    title: 'Top Education',
    tagline: 'Apply for a University in England and change your life',
    link: 'https://topeducation.uk',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/MajorContractor.webp',
    title: 'Major Construction',
    tagline: 'Glendale home and kitchen remodeling contractor',
    link: 'https://major.construction',
    description: 'Glendale home and kitchen remodeling contractor'
  },
  {
    category: 'Tilda',
    image: '/images/NeuroUp.webp',
    title: 'Anna Voznaya | Neuro Up',
    tagline: 'Go from to find quiet freedom and a courageous life',
    link: 'https://neuroup.io',
    description: ''
  },
  {
    category: 'Web App',
    image: '/images/IAiming.webp',
    title: 'Intelligent Aiming',
    tagline: 'Improve your game experience',
    link: 'https://intelligent-aiming.xyz',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/YogaRetrit.webp',
    title: 'Yoga Retrit',
    tagline: 'Learn to draw inspiration and strength from within',
    link: 'https://ms.meditationsteps-germany.de/yoga-retrit',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/EpoxyCoating.webp',
    title: 'Epoxy Coating',
    tagline: 'Services for Homes & Businesses in Los Angeles',
    link: 'https://major.construction/epoxy-coating',
    description: ''
  },
  {
    category: 'Websites',
    image: '/images/AMGElevator.webp',
    title: 'Amg Elevator',
    tagline: 'Manufacturing and supplying reliable and safe elevators',
    link: 'https://amgelevator.com',
    description: ''
  },
  {
    category: 'Websites',
    image: '/images/WeWorkTogether.webp',
    title: 'We Work Together',
    tagline: 'Bridges of Unity: USA and Israel',
    link: '',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/capsulux.webp',
    title: 'CapsuLux',
    tagline: 'Invest in of a new dimension of modern recreation',
    link: 'https://capsulux.com',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/Photolab.webp',
    title: 'Photolab',
    tagline: 'Become a Catalyst for Change in the World',
    link: 'https://becomeamonk.org',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/anneconelly.webp',
    title: 'ANNE CONNELLY',
    tagline: 'Technologist & Speaker (Portfolio website)',
    link: 'https://project12744971.tilda.ws',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/gnolidze.webp',
    title: 'Iurii Gnolidze',
    tagline: 'Entrepreneur in the UK (Portfolio website)',
    link: 'https://gnolidze.com',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/ivgproperty.webp',
    title: 'IVG Property',
    tagline: 'Social Housing investments',
    link: 'https://ivgproperty.co.uk',
    description: ''
  },
  {
    category: 'Tilda',
    image: '/images/codingShucrat.webp',
    title: 'DarStop Coding',
    tagline: 'Unlock Your Child’s Creativity with Coding',
    link: 'https://landing.darstop.com/coding-for-kids',
    description: ''
  },
  {
    category: 'Web App',
    image: '/images/SaidaConsulting.webp',
    title: 'Saida Consulting',
    tagline: 'A Student-run Pro Bono Consultancy at WHU',
    link: 'https://saidia-consulting.de/home',
    description: ''
  }
].map((item) => ({ ...item, id: uuidv4() }))

export const REVIEWS: IReview[] = [
  {
    name: 'Shukhrat T.',
    location: 'USA, Washington',
    rating: '5.0',
    review:
      'David Grikurov was simply EXCEPTIONAL in developing our website. His professionalism in work, proactive communication, deep understanding, and high level of cooperation made the process smooth and enjoyable! Highly recommend 👏',
    platform: 'Fiverr'
  },
  {
    name: 'Palata M.',
    location: 'Germany, Berlin',
    rating: '5.0',
    review:
      'David absolutely nailed our website development project! 🙌 His code expertise ensured a bug-free delivery that exceeded all expectations. Working with him was a breeze, thanks to his swift responsiveness and great cooperation. Highly recommended!',
    platform: 'Fiverr'
  },
  {
    name: 'Aleko S.',
    location: 'Ukraine, Odessa',
    rating: '5.0',
    review:
      "David did an excellent job developing my cryptocurrency app. He was professional, communicated well, and delivered everything on time. The app runs smoothly, and I'm very happy with the result. Highly recommend and would work with him again.",
    platform: 'Upwork'
  },
  {
    name: 'Maetreya N.',
    location: 'Sweden, Stockholm',
    rating: '5.0',
    review:
      'David Grikurov did an OUTSTANDING job on my website development project. His attention to detail and professionalism are top-notch, while his quick responsiveness and cooperative nature made the whole process a breeze. Highly recommend working with him! 🙌',
    platform: 'Fiverr'
  },
  {
    name: 'Anna C.',
    location: 'Canada, Toronto',
    rating: '5.0',
    review:
      'This is the second time I worked with David and I was very pleased with the website he built for me on Tilda. He was responsive, made all the edits I requested after and was quick to communicate. I would certainly use his services again.',
    platform: 'Fiverr'
  },
  {
    name: 'Moses L.',
    location: 'Germany, Dublin',
    rating: '5.0',
    review: 'Perfect, always a pleasure, will continue working together.',
    platform: 'Fiverr'
  },
  {
    name: 'Kirill S.',
    location: 'Finland, Helsinki',
    rating: '5.0',
    review: 'Nice job! Recommend.',
    platform: 'Fiverr'
  },
  {
    name: 'Anastasia G.',
    location: 'United Kingdom, Manchester',
    rating: '5.0',
    review: 'All good, working not first time.',
    platform: 'Fiverr'
  },
  {
    name: 'Mozgmb H.',
    location: 'Slovakia, Poprad',
    rating: '5.0',
    review: 'Good work done by David.',
    platform: 'Fiverr'
  },
  {
    name: 'Anna C.',
    location: 'Canada, Toronto',
    rating: '5.0',
    review:
      "I was very pleased with David's work. It was efficient and high quality. I will certainly use him again in the future.",
    platform: 'Fiverr'
  },
  {
    name: 'Anna V.',
    location: 'Portugal, Lisbon',
    rating: '5.0',
    review:
      'Excellent experience - expertise, speed, quality and communication! Highly recommend! Happy to work together more!',
    platform: 'Fiverr'
  },
  {
    name: 'Ferdinand D.',
    location: 'Germany, Dublin',
    rating: '4.5',
    review:
      'David is an excellent developer. I would definitely recommend him for all kind of frontend development work :)',
    platform: 'Upwork'
  }
].map((item) => ({ ...item, id: uuidv4() }))

export const NAV_ITEMS: INavItem[] = [
  {
    id: 'main',
    href: APP_NAVIGATION.MAIN,
    label: 'Home',
    // @ts-ignore
    Icon: Icons.Home
  },
  {
    id: 'projects',
    href: APP_NAVIGATION.PROJECTS,
    label: 'Projects',
    // @ts-ignore
    Icon: Icons.Projects
  },
  // {
  //   id: 'about',
  //   href: APP_NAVIGATION.ABOUT,
  //   label: 'About us',
  //   Icon: Icons.AboutUs
  // },
  {
    id: 'reviews',
    href: APP_NAVIGATION.REVIEWS,
    label: 'Reviews',
    // @ts-ignore
    Icon: Icons.Reviews
  }
  // {
  //   id: 'contact',
  //   href: APP_NAVIGATION.CONTACT,
  //   label: 'Contact us',
  //   Icon: Icons.Contact
  // }
]

export const ACHIEVEMENTS_DATA = [
  {
    title: 'Total Projects',
    Icon: LayoutList,
    value: '71+',
    description: 'Ready to hire: 2'
  },
  {
    title: 'Satisfaction clients',
    Icon: ThumbsUp,
    value: '100%',
    description: 'More than 60 clients'
  },
  {
    title: 'Rating from Fiverr',
    Icon: IconBrandFiverr,
    value: '5.0',
    description: '30+ successful projects'
  },
  {
    title: 'Rating from Upwork',
    Icon: IconBrandUpwork,
    value: '100% JSS',
    description: '10+ successful projects'
  }
]
