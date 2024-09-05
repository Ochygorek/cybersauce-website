export interface blogType {
  title: string
  date: string
  description: string
  tag: string
  thumbnail: string
  color: string
  link: string
}

export const blogDisplay = [
  {
    title: 'q',
    date: '',
    description: '',
    tag: '',
    thumbnail: '1.png',
    color: '#C2C4C7',
    link: '',
  },
  {
    title: 'w',
    date: '',
    description: '',
    tag: '',
    thumbnail: '2.png',
    color: '#191C1E',
    link: '',
  },
  {
    title: 'e',
    date: '',
    description: '',
    tag: '',
    thumbnail: '3.png',
    color: '#5BD1E9',
    link: '',
  },
  {
    title: 'r',
    date: '',
    description: '',
    tag: '',
    thumbnail: '4.png',
    color: '#D4AD8A',
    link: '',
  },
]

export const reversedBlogDisplay = blogDisplay.reverse()

export const reversedBlogDisplayLimitFour = reversedBlogDisplay.slice(0, 5)