import doctor from "./assets/About.jpeg"
import image from "./assets/blog.png"
import author from "./assets/author1.png"
import suitcase from "./assets/suitcase1.png"
import stheto from "./assets/stheto1.png"


export const navLinks = [
    {
      id: 1,
      href: "home",
      link: "Home",
    },
    {
      id: 2,
      href: "about",
      link: "About",
    },
    {
      id: 3,
      href: "/books",
      link: "Books",
    },
    {
      id: 4,
      href: "blog",
      link: "Blog",
    },
    {
      id: 5,
      href: "contact",
      link: "Contact",
    },
  ];


export const Xervices = [
  {
    id: 1,
    image: stheto,
    title: "Medical Doctor",
    text: "I provide exceptional medical care and have extensive experience in treating diverse medical conditions.",
  },
  {
    id: 2,
    image: author,
    title: "Author",
    text: "I have authored numerous bestselling books on entrepreneurship that have transformed many lives.",
  },
  {
    id: 3,
    image: suitcase,
    title: "Entrepreneur",
    text: "I have founded and managed multiple successful businesses, creating wealth and job opportunities.",
  }
]

export const data = [
  {
    id: 1,
    avatar: doctor,
    review: "Dr. Oluwole's webinar on hypertension provided practical tips for managing the condition. Highly recommend!",
    name: "Favour Ori",
    school: "Business Man"
  },
  {
    id: 2,
    avatar: doctor,
    review: "Dr. Oluwole's book on managing hypertension is an insightful guide for patients to live a healthy life",
    name: "Wewimo Timi",
    school: "Banker"
  },
  {
    id: 3,
    avatar: doctor,
    review: "As a hypertensive patient, Dr. Oluwole's care has been instrumental in my journey to better health.",
    name: "Raji Opeyemi",
    school: "University Professor"
  },
  {
    id: 4,
    avatar: doctor,
    review: "Dr. Oluwole's hypertension clinic provides exceptional care and support for patients. Highly recommended!",
    name: "Aliu Funmilayo",
    school: "Politician"
  },
  {
    id: 5,
    avatar: doctor,
    review: "Dr. Oluwole's webinar on hypertension provided practical tips for managing the condition. Highly recommend!",
    name: "Ganiyu Dasola.",
    school: "House Wife"
  },
]

export const blogging = [
  {
    id: 1,
    image:image,
    title:"Do this to prevent hypertension",
    text: 'Hypertension has been called the silent killer at the darkest of times',
    button: "CONTINUE READING..."
  },
  {
    id: 2,
    image:image,
    title:"How to raise money for your business",
    text: 'Raising money is one of the most difficult part of entrepreneurship, but I have the key',
    button: "CONTINUE READING..."
  }
]