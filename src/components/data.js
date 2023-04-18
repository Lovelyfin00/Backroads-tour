import tourImg1 from '../images/tour-1.jpeg'
import tourImg2 from '../images/tour-2.jpeg'
import tourImg3 from '../images/tour-3.jpeg'
import tourImg4 from '../images/tour-4.jpeg'

export const pageLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
]

export const socialLinks = [
    { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
    { id: 2, href: "https://www.facebook.com", icon: "fab fa-twitter" },
    { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
]

export const servicesLists = [
    { 
        id: 1, 
        title: "saving money", 
        icon: "fas fa-wallet fa-fw", 
        serviceText: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia"
    },
    { 
        id: 2, 
        title: "endless hiking", 
        icon: "fas fa-tree fa-fw", 
        serviceText: "A aliquam ex optio eligendi nemo provident sequi eos! Nobis suscipit saepe soluta repellat."
    },
    { 
        id: 3, 
        title: "amazing comfort", 
        icon: "fas fa-socks fa-fw", 
        serviceText: "Lorem ipsum dolor sit amet consectetur. a aliquam ex optio eligendi nemo provident sequi eos! Nobis suscipit saepe soluta repellat."
    },
]

export const toursCard = [
    { 
        id: 1, 
        image: tourImg1, 
        tourDate: "august 26th, 2020", 
        tourTitle: "Tibet Adventure",
        tourText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "china",
        tourDays: "6 days",
        tourAmount: "from $2100"
    },
    { 
        id: 2, 
        image: tourImg2, 
        tourDate: "october 1th, 2020", 
        tourTitle: "best of java",
        tourText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "indonesia",
        tourDays: "11 days",
        tourAmount: "from $5200"
    },
    { 
        id: 3, 
        image: tourImg3, 
        tourDate: "october 46, 2011", 
        tourTitle: "explore hong kong",
        tourText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "indonesia",
        tourDays: "15",
        tourAmount: "$1000"
    },
    { 
        id: 4, 
        image: tourImg4, 
        tourDate: "october 6, 2011", 
        tourTitle: "explore hong kong",
        tourText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        country: "London",
        tourDays: "15",
        tourAmount: "$1000"
    },
]