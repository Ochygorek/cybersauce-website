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
  Title: match the title with the metadata in the .mdx post in the /content/post folder
  Images: /public/images/thumbnails
  Color: custom
  Link: match the link with the name of the post in the /content/post folder
*/

export const blogDisplay = [
  {
    title: "Biggest hacker organizations",
    thumbnail: "t1.png",
    color: "#5de65c",
    link: "biggest-hacker-organizations",
  },
  {
    title: "What is cyber security?",
    thumbnail: "t2.png",
    color: "#8bbd9b",
    link: "what-is-cyber-security",
  },
  {
    title: "How they break in?!",
    thumbnail: "t3.png",
    color: "#c2a184",
    link: "how-they-break-in",
  },
  {
    title: "Exploring digital fingerprints",
    thumbnail: "t4.png",
    color: "#71cfef",
    link: "exploring-digital-fingerprints",
  },
  {
    title: "Write more secure code",
    thumbnail: "t5.png",
    color: "#a0bfa7",
    link: "write-more-secure-code",
  },
  {
    title: "World's biggest network vulnerabilities",
    thumbnail: "t6.png",
    color: "#3ea8bc",
    link: "world's-biggest-network-vulnerabilities",
  },
  {
    title: "What to do when they want a randsom?",
    thumbnail: "t7.png",
    color: "#600c0e",
    link: "what-to-do-when-they-want-a-randsom",
  },
  {
    title: "Is VPN a security service?",
    thumbnail: "t8.png",
    color: "#f3f4f6",
    link: "is-vpn-a-security-service",
  },
  {
    title: "Search yourself online!",
    thumbnail: "t9.png",
    color: "#92d5f7",
    link: "search-yourself-online",
  },
]

export const reversedBlogDisplay = blogDisplay.reverse()

export const reversedBlogDisplayLimitFour = reversedBlogDisplay.slice(0, 4)