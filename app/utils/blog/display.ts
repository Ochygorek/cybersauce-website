export interface blogType {
  title?: string
  date?: string
  description?: string
  tag?: string
  thumbnail?: string
  color?: string
  link?: string
  slug: string
}

export interface blogTypeModal {
  title: string
  date: string
  description: string
  tag: string
  thumbnail: string
  color: string
  link: string
}

/*
  thumbnail: 400px x 225
  color will be the background of a thumbnail
*/

export const blogDisplay = [
  {
    title: "Everything about Cyber Security in less than 10 minutes",
    date: "August 22nd 2024",
    description: "With technology evolving at an exponential rate, it’s never been more important for organisations and individuals to bolster their cyber security practices...",
    tag: "Cyber Security",
    thumbnail: "1.png",
    color: "#C2C4C7",
    link: "",
  },
  {
    title: "Hide information in a plain sight",
    date: "August 4th 2024",
    description: "Steganography is the practice of concealing information within another message or physical object to avoid detection. Steganography can be used to...",
    tag: "Steganography",
    thumbnail: "2.png",
    color: "#191C1E",
    link: "",
  },
  {
    title: "Symmetrical vs Asymmetrical encryption go head to head",
    date: "July 28th 2024",
    description: "Encryption is used to protect data from being stolen, changed, or compromised and works by scrambling data into a secret code that can only be unlocked wi...",
    tag: "Encryption",
    thumbnail: "3.png",
    color: "#5BD1E9",
    link: "",
  },
  {
    title: "Top 10 biggest cyber attacks in the world",
    date: "July 20th 2024",
    description: "This timeline records significant cyber incidents since 2006. We focus on cyber attacks on government agencies, defense and high tech companies, or...",
    tag: "Cyber Security",
    thumbnail: "4.png",
    color: "#D4AD8A",
    link: "",
  },
]

export const reversedBlogDisplay = blogDisplay.reverse()

export const reversedBlogDisplayLimitFour = reversedBlogDisplay.slice(0, 4)