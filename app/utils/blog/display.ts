export interface blogType {
  title?: string
  date?: string
  description?: string
  tag?: string
  thumbnail?: string
  slug: string
}

export interface blogTypeModal {
  title: string
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
    thumbnail: "1.png",
    color: "#C2C4C7",
    link: "everything-about-cyber-security-in-less-than-10-minutes",
  },
  {
    title: "Hide information in a plain sight",
    thumbnail: "2.png",
    color: "#191C1E",
    link: "hide-information-in-a-plain-sight",
  },
  {
    title: "Symmetrical vs Asymmetrical encryption go head to head",
    thumbnail: "3.png",
    color: "#5BD1E9",
    link: "symmetrical-vs-asymmetrical-encryption-go-head-to-head",
  },
  {
    title: "Top 10 biggest cyber attacks in the world",
    thumbnail: "4.png",
    color: "#D4AD8A",
    link: "top-10-biggest-cyber-attacks-in-the-world",
  },
]

export const reversedBlogDisplay = blogDisplay.reverse()

export const reversedBlogDisplayLimitFour = reversedBlogDisplay.slice(0, 4)