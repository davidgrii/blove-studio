import { IconBrandFiverr, IconBrandUpwork } from '@tabler/icons-react'
import { LayoutList, ThumbsUp } from 'lucide-react'

import { AboutUsIcon, HomeIcon, ProjectsIcon } from '@/shared/icons/icons'
import { INavItems, IProjects, IReviews } from '@/types'

export const PROJECTS: IProjects[] = [
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
    id: 1,
    category: 'Web App',
    image: '/images/CoinsApp.webp',
    title: 'Coins App',
    tagline: 'Web App for tracking your cryptocurrency portfolio',
    link: 'https://t.me/coinshouse_bot',
    description: ''
  },
  {
    id: 2,
    category: 'Websites',
    image: '/images/ForeignPay.webp',
    title: 'Foreign Pay',
    tagline: 'Pay for any foreign subscriptions and games in 20 minutes!',
    link: 'https://foreignpay.ru',
    description: ''
  },
  {
    id: 3,
    category: 'Tilda',
    image: '/images/FROSTFIT.webp',
    title: 'Frostfit',
    tagline: 'Boost your gym performance with innovative palm cooling device',
    link: '',
    description: ''
  },
  {
    id: 4,
    category: 'Tilda',
    image: '/images/CosmoDom.webp',
    title: 'CosmoDom',
    tagline: 'Capsule houses for glamping and recreation centers',
    link: 'https://cosmo-dom.com',
    description: ''
  },
  {
    id: 5,
    category: 'Tilda',
    image: '/images/GreenHouse.webp',
    title: 'Green House',
    tagline: '3D - Landscape Design Visualization',
    link: 'https://3dlandscapevisualization.com/en',
    description: ''
  },
  {
    id: 6,
    category: 'Tilda',
    image: '/images/UgcStudio.webp',
    title: 'UGC Studio',
    tagline: 'High-Quality UGC Ads Designed for the Nordics',
    link: 'https://ugctoimisto.fi/en',
    description: ''
  },
  {
    id: 7,
    category: 'Tilda',
    image: '/images/KateKrasnova.webp',
    title: 'Kate Krasnova',
    tagline: 'Creative Marketing and Branding',
    link: 'https://krasnovakate.com',
    description: ''
  },
  {
    id: 8,
    category: 'Web App',
    image: '/images/MebelShara.webp',
    title: 'Mebel Shara',
    tagline: 'furniture store',
    link: 'https://www.mebelshara.ru',
    description: ''
  },
  {
    id: 9,
    category: 'Web App',
    image: '/images/Kalimera.webp',
    title: 'Kalimera',
    tagline: 'Cyprus Airports VIP Fast Track Arrivals',
    link: 'https://kalimera.vip',
    description: 'Cyprus Airports VIP Fast Track Arrivals'
  },
  {
    id: 10,
    category: 'Websites',
    image: '/images/TopEducation.webp',
    title: 'Top Education',
    tagline: 'Apply for a University in England and change your life',
    link: 'https://topeducation.uk',
    description: ''
  },
  {
    id: 11,
    category: 'Tilda',
    image: '/images/MajorContractor.webp',
    title: 'Major Construction',
    tagline: 'Glendale home and kitchen remodeling contractor',
    link: 'https://major.construction',
    description: 'Glendale home and kitchen remodeling contractor'
  },
  {
    id: 12,
    category: 'Tilda',
    image: '/images/NeuroUp.webp',
    title: 'Anna Voznaya | Neuro Up',
    tagline: 'Go from to find quiet freedom and a courageous life',
    link: 'https://neuroup.io',
    description: ''
  },
  {
    id: 13,
    category: 'Web App',
    image: '/images/IAiming.webp',
    title: 'Intelligent Aiming',
    tagline: 'Improve your game experience',
    link: 'https://intelligent-aiming.xyz',
    description: ''
  },
  {
    id: 14,
    category: 'Tilda',
    image: '/images/YogaRetrit.webp',
    title: 'Yoga Retrit',
    tagline: 'Learn to draw inspiration and strength from within',
    link: 'https://ms.meditationsteps-germany.de/yoga-retrit',
    description: ''
  },
  {
    id: 16,
    category: 'Tilda',
    image: '/images/EpoxyCoating.webp',
    title: 'Epoxy Coating',
    tagline: 'Services for Homes & Businesses in Los Angeles',
    link: 'https://major.construction/epoxy-coating',
    description: ''
  },
  {
    id: 17,
    category: 'Websites',
    image: '/images/AMGElevator.webp',
    title: 'Amg Elevator',
    tagline: 'Manufacturing and supplying reliable and safe elevators',
    link: 'https://amgelevator.com',
    description: ''
  },
  {
    id: 18,
    category: 'Websites',
    image: '/images/WeWorkTogether.webp',
    title: 'We Work Together',
    tagline: 'Bridges of Unity: USA and Israel',
    link: '',
    description: ''
  },
  {
    id: 19,
    category: 'Tilda',
    image: '/images/capsulux.webp',
    title: 'CapsuLux',
    tagline: 'Invest in of a new dimension of modern recreation',
    link: 'https://capsulux.com',
    description: ''
  },
  {
    id: 20,
    category: 'Tilda',
    image: '/images/Photolab.webp',
    title: 'Photolab',
    tagline: 'Become a Catalyst for Change in the World',
    link: 'http://project12143711.tilda.ws',
    description: ''
  }
]

export const REVIEWS: IReviews[] = [
  {
    id: 1,
    name: 'Shukhrat T.',
    location: 'USA, Washington',
    rating: '5.0',
    review:
      'David Grikurov was simply EXCEPTIONAL in developing our website. His professionalism in work, proactive communication, deep understanding, and high level of cooperation made the process smooth and enjoyable! Highly recommend 👏',
    platform: 'Fiverr'
  },
  {
    id: 2,
    name: 'Palata M.',
    location: 'Germany, Berlin',
    rating: '5.0',
    review:
      'David absolutely nailed our website development project! 🙌 His code expertise ensured a bug-free delivery that exceeded all expectations. Working with him was a breeze, thanks to his swift responsiveness and great cooperation. Highly recommended!',
    platform: 'Fiverr'
  },
  {
    id: 3,
    name: 'Aleko S.',
    location: 'Ukraine, Odessa',
    rating: '5.0',
    review:
      "David did an excellent job developing my cryptocurrency app. He was professional, communicated well, and delivered everything on time. The app runs smoothly, and I'm very happy with the result. Highly recommend and would work with him again.",
    platform: 'Upwork'
  },
  {
    id: 4,
    name: 'Maetreya N.',
    location: 'Sweden, Stockholm',
    rating: '5.0',
    review:
      'David Grikurov did an OUTSTANDING job on my website development project. His attention to detail and professionalism are top-notch, while his quick responsiveness and cooperative nature made the whole process a breeze. Highly recommend working with him! 🙌',
    platform: 'Fiverr'
  },
  {
    id: 5,
    name: 'Moses L.',
    location: 'Germany, Dublin',
    rating: '5.0',
    review: 'Perfect, always a pleasure, will continue working together.',
    platform: 'Fiverr'
  },
  {
    id: 6,
    name: 'Kirill S.',
    location: 'Finland, Helsinki',
    rating: '5.0',
    review: 'Nice job! Recommend.',
    platform: 'Fiverr'
  },
  {
    id: 7,
    name: 'Anastasia G.',
    location: 'United Kingdom, Manchester',
    rating: '5.0',
    review: 'All good, working not first time.',
    platform: 'Fiverr'
  },
  {
    id: 8,
    name: 'Mozgmb H.',
    location: 'Slovakia, Poprad',
    rating: '5.0',
    review: 'Good work done by David.',
    platform: 'Fiverr'
  },
  {
    id: 9,
    name: 'Anna C.',
    location: 'Canada, Toronto',
    rating: '5.0',
    review:
      "I was very pleased with David's work. It was efficient and high quality. I will certainly use him again in the future.",
    platform: 'Fiverr'
  },
  {
    id: 10,
    name: 'Anna V.',
    location: 'Portugal, Lisbon',
    rating: '5.0',
    review:
      'Excellent experience - expertise, speed, quality and communication! Highly recommend! Happy to work together more!',
    platform: 'Fiverr'
  }
]

export const NAV_ITEMS: INavItems[] = [
  {
    id: 'home',
    href: '/main',
    label: 'Home',
    Icon: HomeIcon
  },
  {
    id: 'projects',
    href: '/projects',
    label: 'Projects',
    Icon: ProjectsIcon
  },
  // {
  //   id: 'about',
  //   href: '/about',
  //   label: 'About us',
  //   Icon: AboutUsIcon
  // },
  {
    id: 'reviews',
    href: '/reviews',
    label: 'Reviews',
    Icon: AboutUsIcon
  }
  // {
  //   id: 'contact',
  //   href: '/contact',
  //   label: 'Contact us',
  //   Icon: ContactIcon
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
    description: '23+ successful projects'
  },
  {
    title: 'Rating from Upwork',
    Icon: IconBrandUpwork,
    value: '100% JSS',
    description: '10+ successful projects'
  }
]

export const FAVORITE_PROJECTS: IProjects[] = [
  {
    id: 0,
    category: 'Tilda',
    image: '/images/Tinsele.webp',
    title: 'Tinsele',
    tagline: 'Tinsele is the ultimate Web3 hub for movie studios and fans',
    link: 'https://tinsele.io',
    description: ''
  },
  {
    id: 1,
    category: 'Web App',
    image: '/images/CoinsApp.webp',
    title: 'Coins App',
    tagline: 'Web App for tracking your cryptocurrency portfolio',
    link: 'https://t.me/coinshouse_bot',
    description: ''
  }
]

export const FAVORITE_REVIEWS: IReviews[] = [
  {
    id: 1,
    name: 'Shukhrat T.',
    location: 'USA, Washington',
    rating: '5.0',
    review:
      'David Grikurov was simply EXCEPTIONAL in developing our website. His professionalism in work, proactive communication, deep understanding, and high level of cooperation made the process smooth and enjoyable! Highly recommend 👏',
    platform: 'Fiverr'
  },
  {
    id: 2,
    name: 'Palata M.',
    location: 'Germany, Berlin',
    rating: '5.0',
    review:
      'David absolutely nailed our website development project! 🙌 His code expertise ensured a bug-free delivery that exceeded all expectations. Working with him was a breeze, thanks to his swift responsiveness and great cooperation. Highly recommended!',
    platform: 'Fiverr'
  },
  {
    id: 3,
    name: 'Aleko S.',
    location: 'Ukraine, Odessa',
    rating: '5.0',
    review:
      "David did an excellent job developing my cryptocurrency app. He was professional, communicated well, and delivered everything on time. The app runs smoothly, and I'm very happy with the result. Highly recommend and would work with him again.",
    platform: 'Upwork'
  }
]
