import React from 'react'

export interface IProject {
  id: string
  category: string
  image: string
  title: string
  tagline: string
  link: string
  description: string
}

export interface INavItem {
  id: string
  href: string
  label: string
  Icon: () => React.JSX.Element
}

export interface IReview {
  id: string
  name: string
  location: string
  rating: string
  review: string
  platform: string
}
