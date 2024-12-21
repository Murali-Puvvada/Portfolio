import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Murali Puvvada",
  initials: "MP",
  url: "https://muralipuvvada.com",
  location: "Stockholm, Sweden",
  locationLink: "https://www.google.com/maps/place/stockholm",
  description:
    "I build cool things, break them, fix them... and then forget to finish them. It always works on my machine! 😅",
  summary:
    "A skilled software engineer proficient in React.js, TypeScript, and design, I focus on creating responsive features, improving user engagement, and refining analytics. Currently at Kindred Group, I’ve delivered impactful solutions like reusable components, A/B testing improvements, and event-based tracking. With a Master’s experience in cloud and backend services, along with hands-on projects in web applications, I’m dedicated to crafting innovative and user-friendly digital experiences.",
  avatarUrl: "/me.png",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Postgres"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "saipuvvada81299@gmail.com",
    tel: "+46 767519626",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Murali-Puvvada",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/murali-puvvada",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:saipuvvada81299@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Kindred Group",
      href: "https://www.kindredgroup.com/",
      badges: [],
      location: "Sweden",
      title: "Software Engineer",
      logoUrl: "/kindred.svg",
      start: "Sep 2022",
      end: "Present",
      description:
        "Developed responsive features for 9 distinct brands by leveraging micro frontend architecture andcreating reusable emotion-styled components.Implemented strategic A/B experiments to refine user interface designs and functionalities, driving a notable 15% surge in user engagement and a commendable 10% enhancement in conversion rates.Improved the analytics system through the implementation of an event based tracking approach",
    },
    {
      company: "Inspire Chits",
      badges: [],
      href: "https://www.inspirechits.in/",
      location: "India",
      title: "Web Developer Intern",
      logoUrl: "/inspirechits.png",
      start: "January 2022",
      end: "April 2022",
      description:
        " Developed user-friendly interfaces for web applications, including interactive features and animations. Implemented a streamlined process for handling contact requests which reduced response times.",
    },
    {
      company: "Exposys",
      href: "http://www.exposysdata.org/",
      badges: [],
      location: "India",
      title: "Web Developer Intern",
      logoUrl: "/exposys.png",
      start: "January 2021",
      end: "March 2021",
      description:
        "Developed and executed responsive user interfaces for web applications utilizing HTML, CSS, and JavaScript. Implemented a dashboard feature that fetches data from backend REST APIs and renders data on the frontend",
    },
  ],
  education: [
    {
      school: "Blekinge Tekniska Högskola",
      href: "https://www.bth.se/",
      degree: "Master's Degree in Telecommunication Systems",
      logoUrl: "/bth.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Jawaharlal Nehru Technological University Hyderabad",
      href: "https://jntuh.ac.in/",
      degree: "Bachelors in Electronics and Communication Engineering(ECE)",
      logoUrl: "/jntuhlogo.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Cloud Central",
      href: "https://cloudcentral.vercel.app/",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "CloudCentral is your all-in-one solution to manage, organize, and optimize your cloud storage accounts. Whether you use Google Drive, Dropbox, OneDrive, or all of them, our intuitive dashboard brings everything together in one place for effortless control.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://cloudcentral.vercel.app/",
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: "/cloudcentraldashboard.png",
      video: "",
    },
    {
      title: "AI Icon Generator",
      href: "https://github.com/Murali-Puvvada/icon-generator-dalle",
      dates: "July 2024 - August 2024",
      active: true,
      description:
        "Developed a full-stack Next.js AI Icon Generator with DALL·E API integration for icon generation, implemented secure payments via Stripe, and ensured efficient storage and retrieval of generated assets with AWS services",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "AWS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Murali-Puvvada/icon-generator-dalle",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/blank.png",
      video: "",
    },
    {
      title: "Mini Clone of Youtube",
      href: "https://youtube-api-with-react.vercel.app/",
      dates: "May 2022",
      active: true,
      description:
        "Developed a React-based YouTube mini-player integrated with the YouTube API. Implemented a search feature allowing direct search and video playback. It also has a sidebar showcasing trending videos.",
      technologies: ["React.js", "JavaScript", "Semantic UI", "Youtube API"],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/Murali-Puvvada/YoutubeAPI-with-React",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/youtube.png",
      video: "",
    },
  ],
} as const;
