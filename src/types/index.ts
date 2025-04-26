export interface IProjects {
  id: number
  category: string
  image: string
  title: string
  tagline: string
  link: string
  description: string
}

export interface IProject {
  id: number
  title: string
  image: string
  description: string
  link: string
  tagline: string
}

export interface INavItems {
  id: string
  href: string
  label: string
  Icon: () => React.JSX.Element
}

export interface IReviews {
  id: number
  name: string
  location: string
  rating: string
  review: string
  platform: string
}